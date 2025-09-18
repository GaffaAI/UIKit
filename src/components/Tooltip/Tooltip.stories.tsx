import React from "react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button/Button";

export default {
  title: "Components/Tooltip",
  component: Tooltip,
};

export const Default = () => (
  <Tooltip content="This is a tooltip">
    <Button>Hover me</Button>
  </Tooltip>
);
