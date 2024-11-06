import Image from "next/image";

export function BreadSVG({ size = "regular" }: { size?: "small" | "regular" }) {
  return <Image src="/obd-logo.png" alt="Logo" width={200} height={100} />;
}
