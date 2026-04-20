<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->
## Visual audit tasks
- When asked to identify missing images, inspect actual routes, components and local content files.
- Prefer generating a structured audit file in src/data/ instead of freeform markdown.
- Do not implement replacement images unless explicitly requested.
- Flag broken paths, empty image fields, placeholder assets and visually weak sections separately.
- Prioritize issues that affect credibility, polish and content completeness.