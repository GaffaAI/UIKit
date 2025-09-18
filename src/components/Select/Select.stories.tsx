import { useState } from "react";
import { Select } from "./Select";
import { Armchair } from "lucide-react";

export default {
  title: "Components/Select",
  component: Select,
};

const options = [
  { label: "Option 1", value: "1", startIcon: <Armchair /> },
  { label: "Option 2", value: "2", startIcon: <Armchair /> },
  { label: "Option 3", value: "3", startIcon: <Armchair /> },
];

export const Default = () => {
  const [selectedValue, setSelectedValue] = useState<string | undefined>(
    undefined,
  );
  return (
    <Select
      label="Choose option"
      options={options}
      value={selectedValue}
      onValueChange={setSelectedValue}
    />
  );
};
