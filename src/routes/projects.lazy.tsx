import { createLazyFileRoute } from "@tanstack/react-router";
import { ProjectsSection } from "../components/projects/ProjectsSection";

export const Route = createLazyFileRoute("/projects")({
  component: Projects,
});

// eslint-disable-next-line react-refresh/only-export-components
function Projects() {
  return <ProjectsSection />;
}

