import { ButtonHTMLAttributes, FC } from "react";
import { cva, VariantProps } from "class-variance-authority";
const button = cva(
  "rounded-lg min-w-fit font-code font-medium flex gap-2 justify-center items-center transition-all hover:scale-[1.02] hover:transition-all",
  {
    variants: {
      variant: {
        primary:
          "bg-accent-800 hover:bg-accent-700 disabled:bg-black-300 text-white",
        secondary:
          "bg-accent-400 hover:bg-accent-600 disabled:bg-black-300 text-white",
        primaryOutline:
          "bg-transparent border border-accent-800 text-accent-800 hover:border-accent-700 hover:text-accent-700 disabled:border-black-300 disabled:text-black-300",
        secondaryOutline:
          "bg-transparent border border-accent-400 text-accent-400 hover:border-accent-600 hover:text-accent-600 disabled:border-black-300 disabled:text-black-300",
        text: "bg-transparent text-accent-800 hover:text-accent-700 disabled:text-black-300 underline",
        textSecondary:
          "bg-transparent text-accent-400 hover:text-accent-600 disabled:text-black-300 underline",
      },
      size: {
        s: "px-3 py-2 text-sm font-medium text-sm ",
        m: "px-5 py-[10px] text-base",
        l: "px-5 py-3 text-base",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "m",
    },
  },
);

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof button> & {
    startIcon?: React.ReactNode;
    endIcon?: React.ReactNode;
    isDisabled?: boolean;
    size?: "s" | "m" | "l";
    variant?:
      | "primary"
      | "secondary"
      | "primaryOutline"
      | "secondaryOutline"
      | "text"
      | "textSecondary";
  };

export const Button: FC<ButtonProps> = ({
  variant,
  className,
  startIcon,
  endIcon,
  size = "m",
  children,
  ...props
}) => {
  return (
    <button
      {...props}
      className={button({ variant, size, className })}
      disabled={props.isDisabled}
    >
      {startIcon && <span>{startIcon}</span>}
      {children}
      {endIcon && <span>{endIcon}</span>}
    </button>
  );
};
