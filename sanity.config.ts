import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";

const config = defineConfig({
  projectId: "a28sqd7o",
  dataset: "production",
  title: "test site",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project] },
});

export default config;
