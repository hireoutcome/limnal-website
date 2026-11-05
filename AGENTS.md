# limnal-website

Independent static project. Preserve existing HTML, scripts, styles, images, URLs and hosting configuration. No application package/build step exists unless package.json defines one. Serve the project locally for visual checks; do not change form endpoints, CNAME records or live hosting as part of documentation cleanup.

## Repository ownership

- GitHub owner: `hireoutcome/limnal-website`. Integration branch: `main`. Verify the actual branch and remote before work; retain all stronger project release rules.
- Commit only task-owned paths in this repository. Use its origin, reviewed branch/PR and required checks. Never publish through master or a subtree publisher, force-push old histories, or overwrite remote-only work.
- Preserve local changes and ignored configuration. Never commit .env files, local-config.json, credentials, personal/participant records or machine-local settings.
- Plans, designs, reports and WIP checkpoints belong in docs/. Application checks run here; shared Brain tools and knowledge are optional context, not application source dependencies.
- Read [the repository workflow](docs/repository-workflow.md). CLAUDE.md imports this instruction owner.
