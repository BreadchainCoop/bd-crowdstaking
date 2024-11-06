import Link from "next/link";
import Image from "next/image";

export function Logo() {
  return (
    <div className="flex items-center">
      <Link href="/" className="w-8 h-8">
        <Image src="/obd-logo.png" alt="Logo" width={200} height={100} />
      </Link>
    </div>
  );
}

export default Logo;
