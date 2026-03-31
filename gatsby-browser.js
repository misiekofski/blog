// Import custom CSS for compact styling
import "./src/styles/custom.css"

import React, { useEffect } from "react"

const newsletterHTML = `
<div class="newsletter-post-cta">
  <h3>Enjoyed this post?</h3>
  <p>Get new posts delivered to your inbox - no ads, no spam, just quality content about testing, DevOps, and software engineering.</p>
  <form action="https://buttondown.com/api/emails/embed-subscribe/dobrzycki" method="post">
    <label for="bd-post-email">Enter your email</label>
    <input type="email" name="email" id="bd-post-email" placeholder="your@email.com" required />
    <input type="submit" value="Subscribe" />
  </form>
</div>
`

const newsletterCSS = `
  .newsletter-post-cta {
    margin-top: 2rem;
    padding-top: 2rem;
    border-top: 1px solid var(--theme-ui-colors-divide, rgba(255,255,255,0.15));
  }
  .newsletter-post-cta h3 {
    font-size: 1.25rem;
    font-weight: 600;
    color: var(--theme-ui-colors-heading, #f4f4f5);
    margin: 0 0 0.5rem 0;
    padding-left: 0;
  }
  .newsletter-post-cta h3::before {
    display: none;
  }
  .newsletter-post-cta p {
    font-size: 0.875rem;
    margin-bottom: 0.75rem;
    color: var(--theme-ui-colors-text, #e4e4e7);
  }
  .newsletter-post-cta form {
    display: flex;
    flex-wrap: wrap;
    gap: 0.75rem;
    align-items: center;
  }
  .newsletter-post-cta label {
    position: absolute;
    width: 1px;
    height: 1px;
    overflow: hidden;
    clip: rect(0,0,0,0);
  }
  .newsletter-post-cta input[type="email"] {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.6rem 1rem;
    border: 2px solid var(--theme-ui-colors-divide, rgba(255,255,255,0.2));
    border-radius: 6px;
    background: var(--theme-ui-colors-muted, rgba(255,255,255,0.08));
    color: var(--theme-ui-colors-text, inherit);
    flex-grow: 1;
    min-width: 220px;
    outline: none;
    transition: border-color 0.2s;
  }
  .newsletter-post-cta input[type="email"]:focus {
    border-color: var(--theme-ui-colors-primary, #3b82f6);
  }
  .newsletter-post-cta input[type="email"]::placeholder {
    color: var(--theme-ui-colors-secondary, rgba(255,255,255,0.4));
  }
  .newsletter-post-cta input[type="submit"] {
    font-family: inherit;
    font-size: 1rem;
    font-weight: 700;
    padding: 0.6rem 1.5rem;
    background: var(--theme-ui-colors-primary, #3b82f6);
    color: var(--theme-ui-colors-background, #09090b);
    border: none;
    border-radius: 6px;
    cursor: pointer;
    transition: opacity 0.2s;
  }
  .newsletter-post-cta input[type="submit"]:hover {
    opacity: 0.85;
  }
`

const excludedPaths = ["/", "/blog", "/tags", "/trainings", "/consulting", "/about", "/free-workshops"]

const PostNewsletterInjector = ({ pathname }) => {
  useEffect(() => {
    const path = pathname || ""
    const isExcluded = excludedPaths.some(p => path === p || path === p + "/") || path.startsWith("/tags/")
    if (isExcluded || path.length <= 1) return

    const main = document.querySelector("main")
    if (!main || main.querySelector(".newsletter-post-cta")) return

    // Inject CSS if not already present
    if (!document.querySelector("#newsletter-post-css")) {
      const style = document.createElement("style")
      style.id = "newsletter-post-css"
      style.textContent = newsletterCSS
      document.head.appendChild(style)
    }

    // Inject newsletter form at end of main
    const container = document.createElement("div")
    container.innerHTML = newsletterHTML
    main.appendChild(container.firstElementChild)

    return () => {
      const existing = main.querySelector(".newsletter-post-cta")
      if (existing) existing.remove()
    }
  }, [pathname])

  return null
}

export const wrapPageElement = ({ element, props }) => (
  <>
    <PostNewsletterInjector pathname={props.path} />
    {element}
  </>
)
