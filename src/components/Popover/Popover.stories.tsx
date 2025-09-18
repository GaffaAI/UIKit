import React from "react";
import { Popover } from "./Popover";
import { Button } from "../Button/Button";

export default {
  title: "Components/Popover",
  component: Popover,
};

export const Default = () => (
  <Popover
    content={<div className="p-4 text-black-400">This is popover content.</div>}
  >
    <Button>Open Popover</Button>
  </Popover>
);

export const CustomContent = () => (
  <Popover
    content={
      <div className="p-4">
        <h4 className="font-bold mb-2">Popover Title</h4>
        <p className="text-black-400">
          You can put any content here, including forms, lists, or actions.
        </p>
      </div>
    }
    side="right"
    align="start"
  >
    <Button>Show Info</Button>
  </Popover>
);
