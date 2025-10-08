import React from "react";
import { BlogCard } from "./BlogCard";

export default {
  title: "Components/BlogCard",
  component: BlogCard,
};

export const Default = () => (
  <div className="flex flex-col gap-6">
    <BlogCard
      title="How to Build a UI Library auto"
      description="this variant adjusts automatically based on screen size."
      image="https://static.wixstatic.com/media/02f1ab_6eb432b9782946308b0f2129a10f9d77~mv2.jpeg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Txt2img%20-%2099033-18-20-23-0002.jpeg"
      link={{ label: "Read More", href: "#" }}
      className="max-w-[600px]"
    />
    <BlogCard
      title="How to Build a UI Library column"
      description="this variant stacks content vertically."
      image="https://static.wixstatic.com/media/02f1ab_6eb432b9782946308b0f2129a10f9d77~mv2.jpeg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Txt2img%20-%2099033-18-20-23-0002.jpeg"
      link={{ label: "Read More", href: "#" }}
      className="max-w-[600px]"
      variant="column"
    />
    <BlogCard
      title="How to Build a UI Library row"
      description="this variant places content side by side."
      image="https://static.wixstatic.com/media/02f1ab_6eb432b9782946308b0f2129a10f9d77~mv2.jpeg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Txt2img%20-%2099033-18-20-23-0002.jpeg"
      link={{ label: "Read More", href: "#", className: "bg-accent-200" }}
      className="max-w-[600px]"
      variant="row"
    />
  </div>
);
