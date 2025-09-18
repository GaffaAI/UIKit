import React from "react";
import { BlogCard } from "./BlogCard";

export default {
  title: "Components/BlogCard",
  component: BlogCard,
};

export const Default = () => (
  <BlogCard
    title="How to Build a UI Library"
    description="A step-by-step guide to building a scalable UI library with React and TypeScript."
    image="https://static.wixstatic.com/media/02f1ab_6eb432b9782946308b0f2129a10f9d77~mv2.jpeg/v1/fill/w_980,h_980,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Txt2img%20-%2099033-18-20-23-0002.jpeg"
    link={{ label: "Read More", href: "#" }}
    className="max-w-[600px]"
  />
);
