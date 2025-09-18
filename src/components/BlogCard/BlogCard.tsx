import { CATLink } from "../CATLink/CATLink";
import clsx from "clsx";

export interface BlogCardProps {
  title: string;
  description: string;
  image: string;
  className?: string;
  link: { label: string; href: string };
}
export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  className,
  link,
}) => {
  return (
    <div
      className={clsx(
        "group flex flex-col rounded-2xl shadow-lg overflow-hidden p-3 md:py-4 md:px-6 gap-3 bg-gradient-secondary md:flex-row-reverse",
        className,
      )}
    >
      <img
        src={image}
        alt={title}
        className="w-full h-[198px] object-cover rounded-2xl md:w-[212px] md:h-[132px]"
      />

      <div className="flex flex-col gap-4  flex-1">
        <div className="flex flex-col gap-2">
          <h3 className="text-lg font-code font-semibold group-hover:text-accent-400 transition-colors">
            {title}
          </h3>
          <p className="text-black-400 text-sm">{description}</p>
        </div>
        <CATLink
          variant="primary"
          href={link.href}
          className="w-full md:max-w-fit"
          size="m"
        >
          {link.label}
        </CATLink>
      </div>
    </div>
  );
};
