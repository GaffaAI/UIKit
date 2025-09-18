import * as React from "react";
import * as RadixTooltip from "@radix-ui/react-tooltip";
import clsx from "clsx";

export interface TooltipProps {
  content: React.ReactNode;
  children: React.ReactNode;
  className?: string;
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}

export const Tooltip: React.FC<TooltipProps> = ({
  content,
  children,
  className,
  side = "top",
  align = "center",
}) => {
  return (
    <RadixTooltip.Provider>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            side={side}
            align={align}
            className={clsx(
              "bg-black-100 text-black p-3 rounded-2xl shadow-lg border-black-200 border-2 z-50 text-xs select-none",
              className,
            )}
          >
            {content}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};
