import IconCloud from "@/components/ui/icon-cloud";

const slugs = [
  "html5",
  "css3",
  "javascript",
  "python",
  "git",
  "typescript",
  "react",
  "nodedotjs",
  "nextdotjs",
  "docker",
  "kubernetes",
  "awscloud",
  "awslambda",
  "amazonaws",
  "redhatopenshift",
  "tensorflow",
  "keras",
  "numpy",
  "pandas",
  "scipy",
  "sqlite",
  "postgresql",
  "json",
  "selenium",
  "vuedotjs",
  "shadcnui",
  "tailwindcss",
  "vercel",
  "github",
  "visualstudiocode",
  "pycharm",
  "jupyter",
  "langchain",
  "streamlit",
  "sonarqube",
  "trello",
  "jira",
  "cplusplus",
  "r",
  "confluence",
  "overleaf",
  "plotly",
  "posthog",
  "eclipseide",
  "ieee",
  "render",
  "dotnet",
  "django",
  "flask",
  "c",
  "springboot",
  "gnubash",
  "linux",
  "mysql",
  "gemini",
  "openai",
  "helm",
  "googlecloudstorage",
  "apachegroovy",
  "postman",
  "blazor",
  "syncfusion",
  "azure"
];



// https://simpleicons.org/

export function SkillsCloud() {
  return (
    <div className="relative flex items-center justify-center overflow-hidden mb-10">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
