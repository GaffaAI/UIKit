import { LinkHTMLAttributes, ElementType, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { ArrowUpRight } from "lucide-react";
import { GitHubIcon } from "../icons/GitHub";

const link = cva(
  "flex font-code items-center  rounded-full gap-2 py-2 pr-2 pl-4 font-medium justify-between transition-all hover:scale-[1.02] hover:transition-all",
  {
    variants: {
      variant: {
        primary: "bg-accent-800 hover:bg-accent-700 text-white ",
        secondary: "bg-accent-400 hover:bg-green-600 text-white ",
        tertiary: "bg-white text-black ",
      },
      size: {
        s: "text-sm",
        m: "text-base",
      },

      defaultVariants: { variant: "primary", size: "s" },
    },
  },
);

type CATLinkProps = LinkHTMLAttributes<HTMLAnchorElement> &
  VariantProps<typeof link> & {
    variant?: "primary" | "secondary" | "tertiary";
    iconVariant?: "arrow" | "github";
    size?: "s" | "m";
  };

const getIcon = (
  variant: CATLinkProps["variant"],
  size: CATLinkProps["size"],
  iconVariant: CATLinkProps["iconVariant"],
) => {
  switch (variant) {
    case "primary":
      return iconVariant === "arrow" ? (
        <ArrowUpRight
          className={
            "bg-accent-400 rounded-full stroke-[1.5] " +
            (size === "m" ? "w-7 h-7  p-1" : "w-5 h-5 ")
          }
        />
      ) : (
        <GitHubIcon className={" " + (size === "m" ? "w-7 h-7" : "w-5 h-5 ")} />
      );
    case "secondary":
    case "tertiary":
      return (
        <GitHubIcon className={"" + (size === "m" ? "w-7 h-7" : "w-5 h-5 ")} />
      );
  }
};

export const CATLink: FC<CATLinkProps> = ({
  variant = "primary",
  className,
  children,
  size = "s",
  iconVariant = "arrow",
  ...props
}) => {
  return (
    <a className={link({ variant, className, size })} {...props}>
      {children}
      {getIcon(variant, size, iconVariant)}
    </a>
  );
};
