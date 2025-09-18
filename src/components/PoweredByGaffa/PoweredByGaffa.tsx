import { FC } from "react";
import { Gaffa } from "../icons/Gaffa";
import { clsx } from "clsx";
export interface PoweredByGaffaProps {
  className?: string;
}
export const PoweredByGaffa: React.FC<PoweredByGaffaProps> = ({
  className,
}) => {
  return (
    <div className={clsx("flex flex-row items-end gap-2", className)}>
      <p className="text-black-400 text-xs uppercase mb-1">Powered by</p>
      <Gaffa className="h-8" />
    </div>
  );
};
