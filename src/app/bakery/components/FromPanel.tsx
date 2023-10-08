import type { ChangeEventHandler } from "react";
import Icon from "./Icon";
import Input from "./Input";
import {
  FromPanelContainer,
  PanelBalanceButton,
  PanelContent,
  PanelHeader,
} from "./TokenDisplay";
import type { UseTokenBalanceResult } from "../hooks/useTokenBalance";
import TokenBalance from "./TokenBalance";

interface IProps {
  inputValue: string;
  balanceReadings: UseTokenBalanceResult;
  tokenType: "DAI" | "BREAD";
  handleInputChange: ChangeEventHandler<HTMLInputElement>;
  /* eslint-disable-next-line */
  handleBalanceClick: (balance: string) => void;
}
function FromPanel({
  inputValue,
  balanceReadings,
  tokenType,
  handleBalanceClick,
  handleInputChange,
}: IProps) {
  return (
    <FromPanelContainer>
      <PanelHeader>
        <PanelBalanceButton
          onClick={() => handleBalanceClick(balanceReadings.value || "")}
        >
          <TokenBalance readings={balanceReadings} />
        </PanelBalanceButton>
      </PanelHeader>
      <PanelContent>
        <Input
          name="from"
          value={inputValue}
          handleInputChange={handleInputChange}
        />
        <Icon type={tokenType} />
        <span className="ml-4 w-20 pt-0.5 sm:text-xl font-medium">
          {tokenType}
        </span>
      </PanelContent>
    </FromPanelContainer>
  );
}

export default FromPanel;
