import { CATLink } from "../CATLink/CATLink";
import clsx from "clsx";

export interface BlogCardProps {
  title?: string;
  description?: string;
  image?: string;
  className?: string;
  link?: { label: string; href: string; className?: string };
  variant?: "default" | "column" | "row";
}
export const BlogCard: React.FC<BlogCardProps> = ({
  title,
  description,
  image,
  className,
  link,
  variant = "default",
}) => {
  return (
    <div
      className={clsx(
        "group flex rounded-2xl shadow-lg overflow-hidden p-3 md:py-4 md:px-6 gap-3 bg-gradient-secondary ",
        variant === "default" && "flex-col md:flex-row-reverse",
        variant === "row" && "flex-row-reverse ",
        variant === "column" && "flex-col",
        className,
      )}
    >
      {image && (
        <img
          src={image}
          alt={title || "Card-image"}
          className={clsx("object-cover rounded-2xl ", {
            "w-full h-[198px] md:w-[212px] md:h-[132px]": variant === "default",
            "w-[212px] h-[132px]": variant === "row",
            "w-full h-[240px]": variant === "column",
          })}
        />
      )}

      <div className="flex flex-col gap-4  flex-1">
        <div className="flex flex-col gap-2">
          {title && (
            <h3 className="text-lg font-code font-semibold group-hover:text-accent-400 transition-colors">
              {title}
            </h3>
          )}
          {description && (
            <p className="text-black-400 text-sm">{description}</p>
          )}
        </div>
        {link && (
          <CATLink
            variant="primary"
            href={link.href}
            className={clsx(
              "w-full",
              {
                "md:max-w-fit": variant === "default",
                "max-w-fit": variant === "row",
              },
              link.className,
            )}
            size="m"
          >
            {link.label}
          </CATLink>
        )}
      </div>
    </div>
  );
};
