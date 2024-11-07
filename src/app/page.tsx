// "use client";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import { type Metadata } from "next";
import { attestationsList } from './projectsMeta';
import { AppTitle } from "./bakery/components/AppTitle";
import Image from 'next/image';

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
      <div className="min-h-[38rem] min-h-sm:h-[44rem] flex gap-4">
        <div className="h-full w-full overflow-y-auto">
          <div className="grid grid-cols-3 gap-4 auto-rows-max">
            {attestationsList.map((attestation, index) => (
              <div 
                key={index} 
                className="flex flex-col items-center p-4 rounded-lg bg-gray-800 h-32 w-full justify-center"
              >
                <p className="text-sm font-medium text-center text-white">
                </p>
                <div className="flex items-center w-full gap-3">
                  <Image 
                    src={attestation.ProjectName.profileImageUrl}
                    alt={`${attestation.name} profile`}
                    width={48}
                    height={48}
                    className="rounded-full"
                  />
                  <div className="flex flex-col">
                    <span className="text-sm text-white">{attestation.name}</span>
                    <span className="text-xs text-gray-400">{attestation.ProjectName.bio}</span>
                    <button className="mt-2 px-3 py-1 text-xs font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                      Vouch
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
