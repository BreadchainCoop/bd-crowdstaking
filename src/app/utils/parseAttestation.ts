const https = require('https');

type AttestationField = {
  name: string;
  type: string;
  signature: string;
  value: {
    name: string;
    type: string;
    value: string;
  };
};
function httpGetcharm(url: string): Promise<string> {
    return new Promise((resolve, reject) => {
      https.get(url, (resp: any) => {
        let data = '';
        resp.on('data', (chunk: string) => { data += chunk; });
        resp.on('end', () => { resolve(data); });
      }).on("error", (err: Error) => {
        reject(err);
      });
    });
  }
  
  async function getProjectContentcharm(initialUrl: string): Promise<string[]> {
    try {
      // First curl to get the redirect URL
      const firstResponse = await httpGetcharm(initialUrl);
      console.log(firstResponse);
      
      // Extract the relative path
      
      // Construct full URL and make second request
      const fullUrl = `https://app.charmverse.io${firstResponse}`;
      const secondResponse = await httpGetcharm(fullUrl);
      
      // Extract all content matches after content=
      const contentMatch = secondResponse.match(/og:title\" content="([^"]+)"/g)!;
      const contents = contentMatch.map(match => match[1]);
      if (!contents.length) throw new Error('Could not find any content matches');
      
      return contents;
    } catch (error) {
      console.error('Error fetching project content:', error);
      return [''];
    }
  }
  
function parseAttestationData(decodedDataJson: string): Record<string, string> {
  try {
    // Parse the JSON string into an array of fields
    const fields = JSON.parse(decodedDataJson) as AttestationField[];
    
    // Convert the array into a dictionary of name: value pairs
    return fields.reduce((acc, field) => ({
      ...acc,
      [field.name]: field.value.value
    }), {});
  } catch (e) {
    console.error('Error parsing attestation data:', e);
    return {};
  }
}
async function main() { 
// Add a test case
const testJson = '[{"name":"Name","type":"string","signature":"string Name","value":{"name":"Name","type":"string","value":"Grantee"}},{"name":"Organization","type":"string","signature":"string Organization","value":{"name":"Organization","type":"string","value":"Greenpill Network"}},{"name":"Description","type":"string","signature":"string Description","value":{"name":"Description","type":"string","value":"Accepted to a Greenpill Community Grant Round."}},{"name":"URL","type":"string","signature":"string URL","value":{"name":"URL","type":"string","value":"https://app.charmverse.io/permalink/3f2b4477-fa2d-42e8-a186-837612df15d9"}},{"name":"Event","type":"string","signature":"string Event","value":{"name":"Event","type":"string","value":"Application Approved"}}]';

const result = parseAttestationData(testJson);
console.log(result);

const response = await getProjectContentcharm("https://app.charmverse.io/permalink/ae3e3a30-bc04-48de-9e9e-d7c8fe606350");
console.log(response);
}
main();
module.exports = { parseAttestationData };