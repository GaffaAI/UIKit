import * as React from "react";
import { Switch as RadixSwitch, SwitchThumb } from "@radix-ui/react-switch";
import { Check, X } from "lucide-react";

export interface SwitchProps {
  checked: boolean;
  onCheckedChange: (checked: boolean) => void;
  disabled?: boolean;
  label?: string;
  className?: string;
}

export const Switch: React.FC<SwitchProps> = ({
  checked,
  onCheckedChange,
  disabled = false,
  label,
  className,
}) => {
  return (
    <label
      className={`inline-flex items-center cursor-pointer ${className ?? ""}`}
    >
      <RadixSwitch
        checked={checked}
        onCheckedChange={onCheckedChange}
        disabled={disabled}
        className="w-12 h-6 bg-black-200 rounded-full relative  data-[disabled]:bg-gray-200 data-[state=checked]:bg-accent-200 transition-colors duration-200 outline-none"
      >
        <SwitchThumb className="flex items-center justify-center w-[18px] h-[18px] bg-black-300 data-[state=checked]:bg-white rounded-full  absolute top-[3px]  left-1 transition-transform duration-200 data-[state=checked]:translate-x-[22px]">
          {checked ? (
            <Check className=" h-3 text-accent-400 m-auto" strokeWidth={3} />
          ) : (
            <X className="text-black-200 " size={10} />
          )}
        </SwitchThumb>
      </RadixSwitch>
      {label && <span className="ml-2 text-sm">{label}</span>}
    </label>
  );
};
