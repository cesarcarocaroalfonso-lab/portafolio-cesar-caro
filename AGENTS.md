# AGENTS.md

## Repository Shape
- This repo currently has no app manifest, package manager lockfile, CI workflow, or test/build/lint scripts; do not invent commands such as `npm test` or `npm run build` unless those files are added later.
- Use only plain HTML, CSS, and JavaScript. Do not use React, Vue, Angular, Astro, Vite, Bootstrap, Tailwind, or any build tooling.
- Use relative paths compatible with GitHub Pages.
- Do not build the page yet unless the user explicitly asks.
- `opencode.json` only configures OpenCode permissions and is not an app/toolchain config.

## Content Handling
- `CONTENT.md` is the only official source for professional information; do not modify it without explicit authorization.
- Do not invent clients, roles, dates, awards, results, tools, studies, skills, programs, equipment, or competencies.
- Preserve the Spanish wording from `CONTENT.md` unless the user asks for copy edits.
- Do not show data marked `PENDIENTE` or `PENDIENTE DE DECIDIR` publicly; hide missing-link buttons instead.
- Present La MateCaro as a collective initiative, not as an exclusively personal project.

## Assets
- Do not download or use external images.
- Referenced image paths use `assets/img/*.webp`; if an image is missing, use a local placeholder.

## Verification
- With the current repo state, verification is limited to reviewing Markdown/content diffs and `git status`; there are no executable checks to run.
- Do not run `git commit` or `git push`.
