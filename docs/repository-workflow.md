# Independent repository workflow

This repository owns limnal-website. Its GitHub origin is https://github.com/hireoutcome/limnal-website; its integration branch is main. Existing production/testing separation and app-specific release gates remain binding. Master/subtree publication is retired. Brain owns shared tools and knowledge, not a copy of this application.

Start with AGENTS.md and the source's current package, environment examples and deployment configuration. Preserve unrelated edits and remote-only work; stage specific paths. Follow registered developer/private Git tools and exact-revision PR/check rules where required. Do not infer deployment authorization from a documentation or repository cleanup. Never weaken reviews, auth, secrets, tenancy or production-write guards.

This is a static project. Serve locally, preserve assets/relative links and existing external/form URLs, and use its current hosting path. There is no invented application build step.

Credentials and environment files stay ignored and private. Within the Brain workspace, existing optional service helpers can use the ignored shared local-config.json in the parent projects directory; that path is a compatibility alias to Brain's canonical private configuration, not a master Git repository. Outside that workspace, provide the helper's documented private configuration securely. Core app source, tests and deployment contracts stay here.

Save task evidence in docs/. Record local validation, Git publication, deployment/served-revision checks and authenticated acceptance as separate facts. Never print credentials or use browser automation/computer use for Git/AWS publication.
