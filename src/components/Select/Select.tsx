import * as React from "react";
import * as RadixSelect from "@radix-ui/react-select";
import clsx from "clsx";
import { ChevronDown, ChevronUp } from "lucide-react";

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
  startIcon?: React.ReactNode;
}

export interface SelectProps {
  label?: string;
  icon?: React.ReactNode;
  options: SelectOption[];
  value?: string;
  onValueChange?: (value: string) => void;
  className?: string;
  placeholder?: string;
}

const SelectItem = React.forwardRef<
  HTMLDivElement,
  {
    value: string;
    children: React.ReactNode;
    disabled?: boolean;
    selectedValue?: string;
  }
>(({ children, value, disabled, selectedValue }, ref) => (
  <RadixSelect.Item
    value={value}
    disabled={disabled}
    ref={ref}
    className={clsx(
      "grid grid-cols-2 px-4 py-3 text-base cursor-pointer transition-colors text-black-400 ",
      "hover:bg-gray-100 border-0 stroke-none outline-none focus:outline-none",
      disabled ? "opacity-50 cursor-not-allowed" : "",
      value === selectedValue ? "bg-accent-100" : "font-normal",
    )}
  >
    {/* {startIcon && <RadixSelect.SelectIcon>{startIcon}</RadixSelect.SelectIcon>} */}
    <RadixSelect.ItemText className="flex flex-row items-center w-full">
      {children}
    </RadixSelect.ItemText>
  </RadixSelect.Item>
));

export const Select: React.FC<SelectProps> = ({
  label,
  icon,
  options,
  value,
  onValueChange,
  className,
  placeholder = "Select an option...",
}) => {
  return (
    <div className={clsx("flex flex-col gap-1 w-full", className)}>
      {label && (
        <label className="text-xs font-medium text-black-400">{label}</label>
      )}
      <RadixSelect.Root value={value} onValueChange={onValueChange}>
        <RadixSelect.Trigger
          className={clsx(
            "flex items-center w-full py-2 px-3 rounded-lg bg-white border-2 transition-colors text-black-400",
            "border-gray-300 focus-within:border-accent-200",
            icon ? "pl-10" : "pl-4",
          )}
          aria-label={label || placeholder}
        >
          {icon && (
            <span className="absolute left-3 text-gray-400">{icon}</span>
          )}
          <RadixSelect.Value placeholder={placeholder} />
          <RadixSelect.Icon className="ml-auto text-gray-400">
            <ChevronDown size={20} />
          </RadixSelect.Icon>
        </RadixSelect.Trigger>
        <RadixSelect.Portal>
          <RadixSelect.Content className="bg-white overflow-hidden rounded-lg shadow-lg  border-accent-200 border-2 mt-14  z-50">
            <RadixSelect.ScrollUpButton className="flex items-center justify-center h-8 text-gray-400">
              <ChevronUp size={20} />
            </RadixSelect.ScrollUpButton>
            <RadixSelect.Viewport className="">
              {options.map((opt) => (
                <SelectItem
                  key={opt.value}
                  value={opt.value}
                  disabled={opt.disabled}
                  selectedValue={value}
                >
                  {opt.label}
                </SelectItem>
              ))}
            </RadixSelect.Viewport>
            <RadixSelect.ScrollDownButton className="flex items-center justify-center h-8 text-gray-400">
              <ChevronDown size={20} />
            </RadixSelect.ScrollDownButton>
          </RadixSelect.Content>
        </RadixSelect.Portal>
      </RadixSelect.Root>
    </div>
  );
};
