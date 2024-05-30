import Wrapper from "@/components/shared/wrapper";
import React from "react";

export default function ProfilePage() {
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
      </Wrapper>
    </div>
  );
}
