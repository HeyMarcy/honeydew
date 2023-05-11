import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";
import project from "./sanity/schemas/project-schema";
import page from "./sanity/schemas/page-schema";

const config = defineConfig({
  projectId: "a28sqd7o",
  dataset: "production",
  title: "test site",
  apiVersion: "2023-03-04",
  basePath: "/admin",
  plugins: [deskTool()],
  schema: { types: [project, page] },
});

export default config;
