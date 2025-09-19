import * as React from "react";
import * as RadixPopover from "@radix-ui/react-popover";
import clsx from "clsx";

export interface PopoverProps {
  isOpen?: boolean;
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

export const Popover: React.FC<PopoverProps> = ({
  isOpen,
  content,
  children,
  className,
  side = "bottom",
  align = "center",
}) => {
  return (
    <RadixPopover.Root open={isOpen}>
      <RadixPopover.Trigger asChild>{children}</RadixPopover.Trigger>
      <RadixPopover.Portal>
        <RadixPopover.Content
          side={side}
          align={align}
          className={clsx(
            "bg-white overflow-hidden rounded-lg shadow-lg border-accent-200 border-2 mt-2 z-50",
            className,
          )}
        >
          {content}
        </RadixPopover.Content>
      </RadixPopover.Portal>
    </RadixPopover.Root>
  );
};
