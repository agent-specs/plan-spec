[![CI](https://github.com/agent-specs/plan-spec/actions/workflows/ci.yml/badge.svg)](https://github.com/agent-specs/plan-spec/actions)

# PlanObject & SignedEnvelope — Open Specification (v0.1.0)

A lightweight, composable JSON-based protocol for:

* **Beacon** – publish a need  
* **Offer**  – propose fulfillment  
* **Plan**   – multi-agent task graph  
* **Capability** – advertise skills  
* **SignedEnvelope** – tamper-evident wrapper

This repo contains the canonical JSON Schemas, an RDF/OWL mapping, examples,
and a CLI validator.  
Released under the Apache-2.0 license with a grant of patent rights.

Quick start:

```bash
pnpm dlx @plan-spec/validate samples/beacon-example.json
```

## Repository Structure

- `spec/` - JSON Schema definitions and ontology mappings
- `docs/` - Specification documentation
- `samples/` - Example JSON files demonstrating the schemas
- `tools/` - CLI validation tools
- `.github/` - CI/CD workflows and repository configuration

## Getting Started

1. Clone this repository
2. Install dependencies: `pnpm install`
3. Validate examples: `pnpm dlx ts-node tools/validate.ts samples/beacon-example.json`

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines on how to contribute to this specification.

## License

Apache-2.0 - see [LICENSE](LICENSE) for details.
