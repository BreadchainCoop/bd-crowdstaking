// "use client";
import React from "react";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { type Metadata } from "next";
import projects from "../../projects.json";

export const metadata: Metadata = {
  title: "Optimism Builder Projects",
  description: "Support these Optimism Builder Projects",
};

export default function Projects() {
  const projectsData = projects.data.schema.attestations;

  return (
    <>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4 ">
        <Suspense>
          <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 p-4">
            {projectsData.map((attestation, index) => {
              // Parse the decodedDataJson string
              const decodedData = JSON.parse(attestation.decodedDataJson);

              // Extract specific fields
              const name = decodedData.find((entry) => entry.name === "Name")
                ?.value?.value;
              const organization = decodedData.find(
                (entry) => entry.name === "Organization"
              )?.value?.value;
              const description = decodedData.find(
                (entry) => entry.name === "Description"
              )?.value?.value;
              const url = decodedData.find((entry) => entry.name === "URL")
                ?.value?.value;
              const event = decodedData.find((entry) => entry.name === "Event")
                ?.value?.value;

              return (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300"
                >
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">
                      {name}
                    </h3>
                    {url && (
                      <a
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:text-blue-700 ml-2 flex items-center"
                      >
                        <span className="sr-only">External Link</span>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 6.75L6.75 17.25M17.25 6.75h-7.5m7.5 0v7.5"
                          />
                        </svg>
                      </a>
                    )}
                  </div>

                  <p className="text-sm text-gray-500 mb-2">{organization}</p>
                  <p className="text-sm text-gray-700 mb-2">{description}</p>
                  <p className="text-sm text-gray-500 mb-2">{event}</p>
                  {url && (
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700 text-sm"
                    >
                      Endorse
                    </a>
                  )}
                </div>
              );
            })}
          </div>
        </Suspense>
      </div>
    </>
  );
}
