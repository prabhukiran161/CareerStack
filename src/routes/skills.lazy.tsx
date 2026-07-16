import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/skills")({
  component: Skills,
});

import { SkillsSection } from "../components/skills/SkillsSection";

// eslint-disable-next-line react-refresh/only-export-components
function Skills() {
  return <SkillsSection />;
}
