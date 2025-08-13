// Custom theme overrides for more compact layout
import { merge } from "theme-ui"
import { tailwind } from "@theme-ui/presets"

const theme = merge(tailwind, {
  space: [0, 4, 8, 16, 24, 32, 48, 64, 96], // Reduced from default spacing
  fontSizes: [12, 14, 16, 18, 20, 24, 32, 48, 64], // Slightly smaller font sizes
  lineHeights: {
    body: 1.4, // More compact line height
    heading: 1.2,
  },
  styles: {
    root: {
      fontSize: 1, // Use smaller base font size
      lineHeight: "body",
    },
    h1: {
      fontSize: [3, 4, 4], // Smaller than default
      lineHeight: "heading",
      mb: 2,
      mt: 3,
    },
    h2: {
      fontSize: [2, 3, 3],
      lineHeight: "heading", 
      mb: 2,
      mt: 3,
    },
    h3: {
      fontSize: [1, 2, 2],
      lineHeight: "heading",
      mb: 1,
      mt: 2,
    },
    p: {
      mb: 2, // Reduced from default
      lineHeight: "body",
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
  },
})

export default theme
