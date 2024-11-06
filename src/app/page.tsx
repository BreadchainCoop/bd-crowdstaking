// "use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { type Metadata } from "next";

import { AppTitle } from "./bakery/components/AppTitle";

const Swap = dynamic(() => import("./bakery/components/Swap/Swap"), {
  ssr: false,
});

const FAQ = dynamic(() => import("./bakery/components/FAQ/FAQ"), {
  ssr: false,
});

export const metadata: Metadata = {
  title: "Optimism Builder Dollar",
  description: "Mint OBD. Support Builders on Optimism.",
};

export default function Home() {
  return (
    <>
      <AppTitle />
      <div className="min-h-[38rem] min-h-sm:h-[44rem]">
        <Suspense>
          <Swap />
        </Suspense>
      </div>
      <Suspense>
        <FAQ />
      </Suspense>
    </>
  );
}
