export const DEFAULT_TAG_COLOR = "#a79e98"

export const LANGUAGE_COLORS = {
  JavaScript: "#f7df1e",
  TypeScript: "#3178c6",
  Python: "#3572A5",
  Java: "#b07219",
  "C#": "#178600",
  "C++": "#f34b7d",
  C: "#555555",
  Go: "#00ADD8",
  Rust: "#dea584",
  Ruby: "#701516",
  PHP: "#4F5D95",
  Swift: "#F05138",
  Kotlin: "#A97BFF",
  Dart: "#00B4AB",
  "Node.js": "#339933",
  "Express.js": "#eeeeee",
  MySQL: "#4479A1",
  PostgreSQL: "#4169E1",
  React: "#61DAFB",
  Firebase: "#cd8733",
  "Tailwind CSS": "#38BDF8",
  Zustand: "#F4A460",
  Recharts: "#22B5BF",
  Vite: "#646CFF",
  Supabase: "#7d58e4",
  Leaflet: "#199900",
  MapLibre: "#396CB2",
  Axios: "#5A29E4",
  "React Router": "#CA4245",
  "React Router DOM": "#CA4245",
  HTML: "#e34c26",
  HTML5: "#e34c26",
  CSS: "#563d7c",
  CSS3: "#af553c",
  SCSS: "#c6538c",
  Shell: "#89e051",
  Bash: "#4EAA25",
  Vue: "#41b883",
  Svelte: "#ff3e00",
  Astro: "#ff5d01",
  Lua: "#000080",
  R: "#198CE7",
  Scala: "#c22d40",
  Elixir: "#6e4a7e",
  Clojure: "#db5855",
  Haskell: "#5e5086",
  Zig: "#ec915c",
  Nix: "#7e7eff",
  Dockerfile: "#384d54",
  Makefile: "#427819",
}

const normalizeTagName = (name) => name.toLowerCase().replace(/[\s._-]/g, "")

const normalizedColors = Object.fromEntries(
  Object.entries(LANGUAGE_COLORS).map(([name, color]) => [
    normalizeTagName(name),
    color,
  ])
)

export function getTagColor(name) {
  return normalizedColors[normalizeTagName(name)] ?? DEFAULT_TAG_COLOR
}
