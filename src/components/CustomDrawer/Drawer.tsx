import React from "react";
import clsx from "clsx";

export interface CustomDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
}

export const CustomDrawer: React.FC<CustomDrawerProps> = ({
  isOpen,
  onClose,
  children,
  className,
}) => {
  return (
    <div
      className={clsx(
        "fixed inset-0 z-50 flex justify-end",
        isOpen ? "pointer-events-auto" : "pointer-events-none",
      )}
    >
      <div
        className={clsx(
          "absolute inset-0 bg-black bg-opacity-40 transition-opacity duration-300",
          isOpen ? "opacity-100" : "opacity-0",
        )}
        onClick={onClose}
      />
      <div
        className={clsx(
          "relative w-80 max-w-full h-full bg-white shadow-xl transition-transform duration-300 ease-in-out rounded-l-[16px]",
          isOpen ? "translate-x-0" : "translate-x-full",
          className,
        )}
      >
        {children}
      </div>
    </div>
  );
};
