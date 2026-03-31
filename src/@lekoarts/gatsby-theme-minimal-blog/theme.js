// Custom theme overrides with modern blue color scheme
import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  colors: {
    text: "#e4e4e7",
    background: "#09090b",
    primary: "#3b82f6",
    secondary: "#60a5fa",
    accent: "#2563eb",
    muted: "#18181b",
    highlight: "#1e3a8a",
    heading: "#f4f4f5",
    divide: "#27272a",
    modes: {
      light: {
        text: "#18181b",
        background: "#ffffff",
        primary: "#2563eb",
        secondary: "#3b82f6",
        accent: "#1d4ed8",
        muted: "#f4f4f5",
        highlight: "#dbeafe",
        heading: "#09090b",
        divide: "#e4e4e7",
      },
    },
  },
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96],
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64],
  fonts: {
    body: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    heading: 'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", sans-serif',
    monospace: '"JetBrains Mono", "Fira Code", Menlo, Monaco, "Courier New", monospace',
  },
  lineHeights: {
    body: 1.6,
    heading: 1.2,
  },
  styles: {
    root: {
      fontSize: 1,
      lineHeight: "body",
      fontFamily: "body",
    },
    h1: {
      fontSize: [4, 5, 6],
      lineHeight: "heading",
      fontWeight: 700,
      color: "heading",
      mb: 2,
      mt: 3,
    },
    h2: {
      fontSize: [3, 4, 5],
      lineHeight: "heading",
      fontWeight: 600,
      color: "heading",
      mb: 2,
      mt: 3,
    },
    h3: {
      fontSize: [2, 3, 4],
      lineHeight: "heading",
      fontWeight: 600,
      color: "heading",
      mb: 1,
      mt: 2,
    },
    p: {
      mb: 2,
      lineHeight: "body",
    },
    a: {
      color: "primary",
      textDecoration: "none",
      transition: "color 0.2s ease",
      "&:hover": {
        color: "secondary",
      },
    },
    ul: {
      mb: 2,
    },
    ol: {
      mb: 2,
    },
    li: {
      mb: 1,
    },
    strong: {
      color: "heading",
      fontWeight: 600,
    },
    hr: {
      borderColor: "divide",
      my: 3,
    },
  },
})

export default theme
