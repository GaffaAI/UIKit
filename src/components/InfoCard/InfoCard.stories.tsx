import React from "react";
import { InfoCard } from "./index";

export default {
  title: "Components/InfoCard",
  component: InfoCard,
};

export const Default = () => (
  <InfoCard
    title="Info Card Title"
    description="This is a description for the Info Card component."
  />
);

export const CustomClass = () => (
  <InfoCard
    title="Custom Class Example"
    description="Info Card with a custom className."
    className="border border-green-700 shadow-lg"
  />
);
