import React from "react";
import { FintaHeading } from "./heading";
import { Container } from "../shared/container";
import StarIcon from "./starSvg";
import { TestimonialBento } from "./TestimonialBento";

export const Testimonial = () => {
  return (
    <div className="width-full border-neutral-20 h-[70vw] overflow-hidden bg-neutral-100 mask-b-from-0.5 pt-5">
      <Container>
        <FintaHeading
          headingBlack="Built for"
          headingBlue=" ambitious founders"
          subheading="Finta is for founders and operators. It's powerful accounting software with simplified expert tax services we wish we'd had ourselves.4.8"
        />
        <UButton />
        <TestimonialBento />
      </Container>
    </div>
  );
};

const UButton = () => {
  return (
    <div className="mt-5 flex items-center justify-center">
      <button className="flex cursor-pointer items-center gap-1 rounded-full border border-gray-200 bg-gray-100 px-4 py-1 text-gray-600 shadow-sm transition duration-200 hover:bg-gray-200">
        <span className="">
          <StarIcon />
        </span>
        <p> 4.8 from 1,000+ founders</p>
      </button>
    </div>
  );
};
