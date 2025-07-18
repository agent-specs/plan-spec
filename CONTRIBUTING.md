
# Contributing to Plan-Spec

We welcome contributions to the Plan-Spec open specification!
This document explains the process, community rules, and provides a
checkbox workflow so your pull request can be reviewed and merged smoothly.

--------------------------------------------------------------------------

## Quick-Start Checklist

Copy the list below into your pull-request description and tick items off
as you complete them.

- [ ] Issue linked or created that describes the change
- [ ] Fork and clone `agent-specs/plan-spec`
- [ ] Create a branch off `main` (`git checkout -b feat/<topic>`)
- [ ] Install dev dependencies (`npm ci` or `pnpm install`)
- [ ] Run the validator locally (`npm run validate`) and it passes
- [ ] Update docs and samples if the schema changes
- [ ] Commit message follows Conventional Commits (`feat: ...`, `fix: ...`)
- [ ] Sign the commit (`git commit -s`) to add the DCO line
- [ ] CI is green on the pull request
- [ ] Assign at least one reviewer (`@caleb` or `@agent-specs/spec-maintainers`)
- [ ] Resolve all review comments

--------------------------------------------------------------------------

## Developer Certificate of Origin (DCO)

All commits must be signed off:

git commit -s

This adds a `Signed-off-by:` line indicating compliance with the
Developer Certificate of Origin (https://developercertificate.org/).

--------------------------------------------------------------------------

## Contribution Process

### Before Large Changes

- Open an issue to discuss significant or breaking changes first.
- Gather community feedback for new object types or major schema work.
- Search existing issues and discussions to avoid duplicate effort.

### Pull-Request Requirements

- CI validator must pass.
- Add or update at least one sample in `samples/` for new features.
- Update docs in `docs/` when schemas change.
- Include tests for any new validation logic.
- Follow the existing coding style.

### Documentation Standards

- Use clear, concise language.
- Provide examples for new concepts.
- Update the FAQ when needed.
- Keep terminology consistent.

--------------------------------------------------------------------------

## Code of Conduct

This project follows the Contributor Covenant v2.1
(https://www.contributor-covenant.org/version/2/1/code_of_conduct/).
By participating, you agree to help keep a welcoming environment.

--------------------------------------------------------------------------

## Review Process

1. Changes to `spec/*` require at least two maintainer reviews.
2. Breaking changes need broader community discussion.
3. Documentation-only changes may be reviewed by a single maintainer.
4. Sample additions must validate against current schemas.

--------------------------------------------------------------------------

## Types of Contributions

| Category | Examples |
| -------- | -------- |
| Schema   | New object types, property additions, validation tweaks |
| Docs     | Clarifications, new examples, FAQ updates               |
| Tooling  | Validator improvements, CLI utilities, CI scripts       |
| Samples  | Extra JSON examples, complex multi-agent scenarios      |

--------------------------------------------------------------------------

## Release Process

- Major versions (X.y.z) for breaking schema changes.
- Minor versions (x.Y.z) for additive schema or doc changes.
- Patch versions (x.y.Z) for documentation or non-schema fixes.

--------------------------------------------------------------------------

## Getting Help

- Open an issue for spec questions or bug reports.
- Use Discussions for broader architecture topics.
- Check the FAQ before opening new issues.
- Search existing issues to avoid duplicates.

--------------------------------------------------------------------------

## License

By contributing, you agree your work is licensed under Apache-2.0.

