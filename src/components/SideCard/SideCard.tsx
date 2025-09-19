import { ReactNode } from "react";
import { CATLink } from "../CATLink/CATLink";
import clsx from "clsx";
import { useBreakpoints } from "../../hooks/useBreakpoints";
import { PoweredByGaffa } from "../PoweredByGaffa/PoweredByGaffa";

export interface SideCardProps {
  title: string;
  description: string;
  className?: string;
  icon: ReactNode;
  primaryLink: { label: string; href: string };
  secondaryLink: { label: string; href: string };
}
export const SideCard: React.FC<SideCardProps> = ({
  title,
  description,
  className,
  icon,
  primaryLink,
  secondaryLink,
}) => {
  const { isUpXL, isUpMD } = useBreakpoints();
  return (
    <div className={clsx("flex flex-col rounded-2xl shadow-lg p-4", className)}>
      <div className="flex items-center gap-2 mb-4 md:mb-6">
        {icon} <p className="text-2xl font-courier leading-[18px]">{title}</p>
      </div>
      <p className="text-black-400">{description}</p>
      <div className="flex gap-2  flex-wrap mt-4 w-full md:grid md:grid-cols-[190px_190px]">
        <CATLink
          variant="primary"
          href={primaryLink.href}
          className="w-full"
          size={!isUpMD ? "m" : "s"}
        >
          {primaryLink.label}
        </CATLink>
        <CATLink
          size={!isUpMD ? "m" : "s"}
          variant="secondary"
          href={secondaryLink.href}
          className="w-full"
        >
          {secondaryLink.label}
        </CATLink>
      </div>
      {!isUpXL && <PoweredByGaffa className="md:ml-auto mt-4" />}
    </div>
  );
};
