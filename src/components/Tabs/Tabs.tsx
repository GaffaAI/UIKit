import { FC, useState } from "react";
import * as BaseTabs from "@radix-ui/react-tabs";
import { cva } from "class-variance-authority";

const triggerStyles = cva(
  "relative z-10 flex w-1/2 items-center justify-center  cursor-pointer select-none transition-colors",
  {
    variants: {
      variant: {
        primary:
          "py-[3px] px-[14px] text-sm text-black data-[state=active]:text-white",
        secondary: "py-1 px-2 text-black text-base font-medium",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const listStyles = cva("relative flex w-full  bg-gray-200 gap-2", {
  variants: {
    variant: {
      primary: "rounded-full",
      secondary: "p-1 rounded-lg",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const indicatorStyles = cva(
  "absolute top-0 h-full  transition-all duration-300",
  {
    variants: {
      variant: {
        primary: "bg-accent-700 rounded-full",
        secondary: "bg-white rounded-md top-[4px]",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

export interface TabsProps {
  tabList: string[];
  variant?: "primary" | "secondary";
  onTabChange?: (tab: string) => void;
}

export const Tabs: FC<TabsProps> = ({ tabList, variant, onTabChange }) => {
  const [active, setActive] = useState(tabList[0]);

  return (
    <BaseTabs.Root
      defaultValue={tabList[0]}
      onValueChange={(val) => {
        setActive(val);
        onTabChange?.(val);
      }}
      className="w-full"
    >
      <BaseTabs.List className={listStyles({ variant })}>
        {/* floating indicator */}
        <span
          className={indicatorStyles({ variant })}
          style={{
            left:
              variant === "secondary"
                ? `calc(${tabList.indexOf(active) * (100 / tabList.length)}% + 4px)`
                : `${tabList.indexOf(active) * (100 / tabList.length)}%`,
            width:
              variant === "secondary"
                ? `calc(${100 / tabList.length}% - 8px)`
                : `${100 / tabList.length}%`,
            height: variant === "secondary" ? "calc(100% - 8px)" : "100%",
          }}
        />
        {tabList.map((tab) => (
          <BaseTabs.Trigger
            key={tab}
            value={tab}
            className={triggerStyles({ variant })}
          >
            {tab}
          </BaseTabs.Trigger>
        ))}
      </BaseTabs.List>
    </BaseTabs.Root>
  );
};
