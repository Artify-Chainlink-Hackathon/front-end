"use client";

import Wrapper from "@/components/shared/wrapper";
import { shortenAddress } from "@/lib/utils";
import { useWeb3ModalAccount } from "@web3modal/ethers/react";
import React from "react";

export default function ProfilePage() {
  const { address } = useWeb3ModalAccount();

  return (
    <div className="flex flex-1">
      <Wrapper className="flex flex-col items-center text-center py-16 md:py-20 relative">
        <div className="relative w-full items-center justify-center flex flex-col mt-10 mb-20">
          <span className="font-black text-primary absolute -top-[160px] text-[200px] opacity-[0.25] select-none">
            PROFILE
          </span>
          <h1 className="w-full text-5xl font-black leading-[49px] relative">
            Explore your collection of minted NFTs, showcasing your creativity
            and digital artistry.
          </h1>
        </div>

        <div className="my-10 flex flex-col items-start gap-4 w-full">
          <h1 className="text-xl md:text-2xl font-extrabold">All NFTs</h1>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {Array.from({ length: 4 }).map((_, _key) => (
              <div
                key={_key}
                className="bg-primary/30 p-4 rounded-2xl h-[459px] flex justify-end flex-col">
                <div className="flex flex-col items-start text-left gap-2">
                  <p className="text-sm md:text-base font-medium line-clamp-4">
                    A developer named Ekarika holding a cup filled with Solidity
                    bugs while being bullied by a lady named Kemi
                  </p>
                  <h2 className="text-base md:text-lg font-bold">
                    {shortenAddress(`${address}`)}
                  </h2>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
