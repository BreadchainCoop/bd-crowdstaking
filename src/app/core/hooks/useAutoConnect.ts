import { Connector, useConnect, useDisconnect } from "wagmi";
import { useEffect, useState } from "react";

const AUTOCONNECTED_CONNECTOR_IDS = ["safe"];

export function useAutoConnect(activeConnector: Connector | undefined) {
  const { connect, connectors } = useConnect();
  const { disconnect } = useDisconnect();
  const [safeConnectorPresent, setSafeConnectorPresent] = useState(false);
  const [safeConnectorConnected, setSafeConnectorConnected] = useState(false);

  useEffect(() => {
    AUTOCONNECTED_CONNECTOR_IDS.forEach((connector) => {
      const connectorInstance = connectors.find(
        (c) => c.id === connector && c.ready
      );

      if (connectorInstance) setSafeConnectorPresent(true);

      if (connectorInstance && !activeConnector) {
        connect({ connector: connectorInstance });
        setSafeConnectorConnected(true);
      }
    });
  }, [connect, connectors, disconnect, activeConnector]);

  useEffect(() => {
    if (safeConnectorPresent && !safeConnectorConnected && activeConnector)
      disconnect();
  }, [
    safeConnectorPresent,
    safeConnectorConnected,
    activeConnector,
    disconnect,
  ]);
}
