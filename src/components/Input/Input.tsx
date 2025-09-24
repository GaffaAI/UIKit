import React from "react";
import clsx from "clsx";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: string;
}

export const Input: React.FC<InputProps> = ({
  label,
  startIcon,
  endIcon,
  error,
  className,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-1">
      {label && (
        <label className="text-xs font-medium text-black-400">{label}</label>
      )}
      <div
        className={clsx(
          "flex items-center border-2 rounded-lg px-3 py-2 bg-white focus-within:border-accent-200",
          error ? "border-red focus-within:border-red" : "border-gray-300",
          className,
        )}
      >
        {startIcon && (
          <span
            className={clsx("mr-2 ", error ? "text-red" : "text-black-400")}
          >
            {startIcon}
          </span>
        )}
        <input
          className={clsx(
            "flex-1 outline-none bg-transparent text-black-400",
            error ? "placeholder-red" : "placeholder-black-400",
          )}
          {...props}
        />
        {endIcon && (
          <span
            className={clsx("ml-2 ", error ? "text-red" : "text-black-400")}
          >
            {endIcon}
          </span>
        )}
      </div>
      {error && <span className="text-xs text-red mt-1">{error}</span>}
    </div>
  );
};
