import Elipsis from "@/app/core/components/Elipsis";

import {
  PanelContent,
  PanelLabel,
  PanelContainer,
  PanelTokenRow,
  TokenBalanceContainer,
  TokenBalanceText,
  TokenLabelContainer,
  TokenLabelText,
  PanelBalanceRow,
} from "./SwapUI";
import { formatBalance } from "@/app/core/util/formatter";
import { TSwapMode } from "./Swap";
import { TTokenBalanceState } from "@/app/core/context/TokenBalanceContext/TokenBalanceContext";
import { BreadIcon, XDAIIcon } from "@/app/core/components/Icons/TokenIcons";

interface IProps {
  inputValue: string;
  swapMode: TSwapMode;
  tokenBalance: null | TTokenBalanceState;
}
function ToPanel({ inputValue, swapMode, tokenBalance }: IProps) {
  return (
    <PanelContainer>
      <PanelLabel>You receive</PanelLabel>
      <PanelContent>
        <PanelTokenRow>
          <span className="flex-auto px-3 truncate text-[2.3rem] sm:text-[2.5rem] text-breadgray-grey100 dark:text-neutral-200">
            {inputValue || "00.00"}
          </span>
          <TokenLabelContainer>
            {swapMode === "BURN" ? <XDAIIcon /> : <BreadIcon />}
            <TokenLabelText>
              {swapMode === "BURN" ? "xDAI" : "OBD"}
            </TokenLabelText>
          </TokenLabelContainer>
        </PanelTokenRow>
        <PanelBalanceRow>
          {tokenBalance ? (
            <TokenBalance tokenBalance={tokenBalance} />
          ) : (
            <TokenBalanceContainer> </TokenBalanceContainer>
          )}
        </PanelBalanceRow>
      </PanelContent>
    </PanelContainer>
  );
}

function TokenBalance({ tokenBalance }: { tokenBalance: TTokenBalanceState }) {
  return (
    <TokenBalanceContainer>
      <TokenBalanceText>
        Balance:{" "}
        {tokenBalance.status === "LOADING" ? (
          <Elipsis />
        ) : tokenBalance.status === "SUCCESS" ? (
          <span
            title={`${parseFloat(tokenBalance.value).toString()} ${
              tokenBalance.tokenName
            }`}
          >
            {tokenBalance.value &&
              formatBalance(parseFloat(tokenBalance.value), 2)}
          </span>
        ) : (
          ""
        )}
      </TokenBalanceText>
    </TokenBalanceContainer>
  );
}

export default ToPanel;
