"use client";
import React from "react";
import { PinContainer } from "@/components/ui/3d-pin";

export default function AnimatedPinDemo({
  title = "Explore Our Product",
  description = "Discover features, benefits, and more about our platform.",
}: {
  title?: React.ReactNode;
  description?: React.ReactNode;
}) {
  return (
    <div className="flex items-center justify-center w-full">
      <PinContainer
        title="Product"
        href="/product"
        className="border-0" // Remove border from the PinContainer card
      >
        <div className="flex basis-full flex-col p-4 tracking-tight sm:basis-1/2 w-[20rem] h-[20rem] bg-[#7C6A4E] rounded-2xl items-center justify-center text-center">
          <h3
            className="max-w-xs !pb-2 !m-0 font-bold text-2xl md:text-3xl"
            style={{ color: "#F4F4F2" }}
          >
            {title}
          </h3>
          <div className="text-lg md:text-xl !m-0 !p-0 font-semibold mt-2" style={{ color: "#F4F4F2" }}>
            {description}
          </div>
          <div className="flex flex-1 w-full rounded-lg mt-4 bg-gradient-to-br from-[#C2A66C] via-[#FFD700] to-[#7C6A4E]" />
        </div>
      </PinContainer>
    </div>
  );
}
