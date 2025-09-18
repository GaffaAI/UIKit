import React, { useState } from "react";
import { Switch } from "./Switch";

export default {
  title: "Components/Switch",
  component: Switch,
};

export const Default = () => {
  const [checked, setChecked] = useState(false);
  return (
    <Switch
      checked={checked}
      onCheckedChange={(checked: boolean) => setChecked(checked)}
      label="Enable feature"
    />
  );
};

export const Disabled = () => {
  const [checked, setChecked] = useState(true);
  return (
    <Switch
      checked={checked}
      onCheckedChange={(checked: boolean) => setChecked(checked)}
      disabled
      label="Disabled switch"
    />
  );
};
