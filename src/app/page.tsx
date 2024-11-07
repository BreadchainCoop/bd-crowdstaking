// "use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { type Metadata } from "next";
import { attestationsList } from './projectsMeta';
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
      <div className="min-h-[38rem] min-h-sm:h-[44rem] flex gap-4">
        <div className="flex-1">
          <Suspense>
            <Swap />
          </Suspense>
        </div>
        
        <div className="w-48 space-y-4">
        {attestationsList.map((attestation, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-2 rounded-lg bg-gray-800"
            >
              <p className="text-xs text-center text-gray-300">
                {attestation.URL}
              </p>
            </div>
          ))}
        </div>
      </div>
      <Suspense>
        <FAQ />
      </Suspense>
    </>
  );
}
