import Elipsis from "@modules/core/components/Elipsis";
import type { UseTokenBalanceResult } from "../hooks/useTokenBalance";
import { balanceFormatter } from "@modules/core/util";

function Balance({ balance }: { balance: string }) {
  return <span className="font-medium text-base">Balance: {balance}</span>;
}

const UNKNOWN_BALANCE = <>Balance: unknown</>;
const LOADING_BALANCE = (
  <>
    Balance: <Elipsis />
  </>
);

interface IProps {
  readings: UseTokenBalanceResult;
}

function formatBalance(value: string) {
  if (!value.includes(".")) return value;
  const [intVal, decVal] = value.split(".");
  if (decVal && decVal.length <= 2) return value;
  return `${intVal}.${decVal[0]}${decVal[1]}`;
}

export function TokenBalance({ readings }: IProps) {
  const { value, status, error } = readings;

  const displayedValue = value
    ? balanceFormatter.format(parseFloat(formatBalance(value)))
    : "unknown";

  switch (status) {
    case "success":
      return <Balance balance={displayedValue} />;
    case "loading":
      return LOADING_BALANCE;
    case "error":
      return <>Balance: {error}</>;
    case "idle":
    default:
      return UNKNOWN_BALANCE;
  }
}

export default TokenBalance;
