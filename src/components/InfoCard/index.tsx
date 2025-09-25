import { FC } from "react";
export interface InfoCardProps {
  title: string;
  description: string;
  className?: string;
}
export const InfoCard: FC<InfoCardProps> = ({
  title,
  description,
  className,
}) => {
  return (
    <div
      className={`flex flex-col gap-2 items-center py-6 px-4 rounded-2xl bg-black-100 w-fit ${className}`}
    >
      <h3 className="text-lg font-bold mb-2 text-accent-700 font-code">
        {title}
      </h3>
      <p className="text-black-400">{description}</p>
    </div>
  );
};
