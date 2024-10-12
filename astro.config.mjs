// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  integrations: [
    starlight({
      title: "React Crash Course",
      social: {
        github: "https://github.com/akoskm/react-crash-course",
      },
      sidebar: [
        {
          label: "Lessons",
          items: [
            // Each item here is one entry in the navigation menu.
            { label: "Intro to React", slug: "lessons/about-react" },
            { label: "Events", slug: "lessons/events" },
            { label: "Composition", slug: "lessons/composition" },
            { label: "Props", slug: "lessons/props" },
            { label: "State", slug: "lessons/state" },
            { label: "Dynamic UI", slug: "lessons/dynamic_ui" },
            { label: "UI Manipulation", slug: "lessons/ui_manipulation" },
            { label: "Complete Todo App", slug: "lessons/complete_todo_app" },
          ],
        },
        {
          label: "Resources",
          autogenerate: { directory: "resources" },
        },
      ],
      customCss: ["./src/tailwind.css"],
    }),
    tailwind({ applyBaseStyles: false }),
  ],
});
