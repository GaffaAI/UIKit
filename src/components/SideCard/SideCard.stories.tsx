import { Inbox } from "lucide-react";
import { SideCard } from "./SideCard";

export default {
  title: "Components/SideCard",
  component: SideCard,
};

export const Default = () => (
  <SideCard
    title="SideCard Title"
    description="Convert Any Webpage to Clean Markdown.
Transform websites into LLM-ready markdown instantly. Perfect for AI processing, documentation, and content analysis."
    icon={<Inbox />}
    primaryLink={{ label: "View Blog", href: "#" }}
    secondaryLink={{ label: "View on Github", href: "#" }}
  />
);
