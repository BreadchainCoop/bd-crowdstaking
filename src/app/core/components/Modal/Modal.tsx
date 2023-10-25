import {
  type TModalStatus,
  type TModalType,
  useModal,
} from "@/app/core/hooks/useModal";
import { useTransactionDisplay } from "@/app/core/hooks/useTransactionDisplay";

import Prose from "@/app/core/components/Prose";
import AddTokens from "./AddTokens";
import { CloseModalButton, Container, Heading, Message } from "./ui";

// import { html as disclaimerHtml } from "@/markdown/disclaimer.md";
import ConnectorsModal from "./ConnectorsModal";
import Elipsis from "@/app/core/components/Elipsis";

type TProps = {
  type: TModalType;
  title: string;
  status: TModalStatus;
};

function Modal({ type, title, status }: TProps) {
  const { dispatch: modalDispatch, state: modalState } = useModal();
  const { state: txState } = useTransactionDisplay();

  const txStatus = txState?.status;
  const handleCloseModal = () => {
    if (modalState && status === "UNLOCKED")
      modalDispatch({ type: "CLEAR_MODAL" });
  };
  switch (type) {
    case "CONNECTORS":
      return <ConnectorsModal handleCloseModal={handleCloseModal} />;
    case "DISCLAIMER":
      return (
        <Container handleClick={handleCloseModal}>
          <CloseModalButton handleClick={handleCloseModal} />
          <Prose html="<h2>Disclaimer</h2>" />
          <div className="overflow-y-auto">
            {/* <Prose html={disclaimerHtml} /> */}
          </div>
        </Container>
      );
    case "BAKING":
      return (
        <Container handleClick={handleCloseModal}>
          {status === "UNLOCKED" && (
            <CloseModalButton handleClick={handleCloseModal} />
          )}
          <Heading>{title}</Heading>
          {status === "LOCKED" && (
            <Message>
              Awaiting user response
              <Elipsis />
            </Message>
          )}

          {status === "UNLOCKED" && (
            <>
              {txStatus === "PENDING" && (
                <Message>
                  Transaction in progress <Elipsis />
                </Message>
              )}
              {txStatus === "COMPLETE" && (
                <Message>Transaction complete!</Message>
              )}
              <AddTokens />
            </>
          )}
        </Container>
      );
    case "BURNING":
      return (
        <Container handleClick={handleCloseModal}>
          {status === "UNLOCKED" && (
            <CloseModalButton handleClick={handleCloseModal} />
          )}
          <Heading>{title}</Heading>
          {status === "LOCKED" && (
            <Message>
              Awaiting user response
              <Elipsis />
            </Message>
          )}

          {status === "UNLOCKED" && (
            <>
              {txStatus === "PENDING" && (
                <Message>
                  Transaction in progress <Elipsis />
                </Message>
              )}
              {txStatus === "COMPLETE" && (
                <Message>Transaction complete!</Message>
              )}
              <AddTokens />
            </>
          )}
        </Container>
      );
    case "CLAIMING":
      return (
        <Container handleClick={handleCloseModal}>
          {status === "UNLOCKED" && (
            <CloseModalButton handleClick={handleCloseModal} />
          )}
          <Heading>{title}</Heading>
          {status === "LOCKED" && (
            <Message>
              Awaiting user response
              <Elipsis />
            </Message>
          )}

          {status === "UNLOCKED" && (
            <>
              {txStatus === "PENDING" && (
                <Message>
                  Transaction in progress <Elipsis />
                </Message>
              )}
              {txStatus === "COMPLETE" && (
                <Message>Transaction complete!</Message>
              )}
            </>
          )}
        </Container>
      );
    case "CONNECT_WALLET":
      return (
        <Container handleClick={handleCloseModal}>
          <Heading>Connecting Wallet</Heading>
          <Message>
            Awaiting user response
            <Elipsis />
          </Message>
        </Container>
      );
    case "APPROVAL":
      return (
        <Container handleClick={handleCloseModal}>
          <Heading>Approving Contract</Heading>
          <Message>
            Awaiting user response
            <Elipsis />
          </Message>
        </Container>
      );
    case "CHANGE_NETWORK":
      return (
        <Container handleClick={handleCloseModal}>
          <Heading>Changing Network</Heading>
          <Message>
            Awaiting user response
            <Elipsis />
          </Message>
        </Container>
      );
    case "CHANGING_NETWORK":
      return (
        <Container handleClick={handleCloseModal}>
          <Heading>Changing Network</Heading>
          <Message>please wait a moment!</Message>
        </Container>
      );
    case "SAFE_TRANSACTION":
      return (
        <Container handleClick={handleCloseModal}>
          <Heading>Transaction Submitted</Heading>
        </Container>
      );
    default:
      throw new Error("modal type invalid");
  }
}

export default Modal;
