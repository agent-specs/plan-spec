[![CI](https://github.com/agent-specs/plan-spec/actions/workflows/ci.yml/badge.svg)](https://github.com/agent-specs/plan-spec/actions)

## Tools

* **validate.ts** – CLI validator for any Plan-Spec JSON file  
  ```bash
  pnpm dlx ts-node tools/validate.ts samples/plan-multi-agent.json
  ```

Add generators, converters, or VS Code snippets here.

## Usage Examples

### Validating a Beacon
```bash
pnpm dlx ts-node tools/validate.ts samples/beacon-example.json
```

### Validating an Offer
```bash
pnpm dlx ts-node tools/validate.ts samples/offer-example.json
```

### Validating a Plan
```bash
pnpm dlx ts-node tools/validate.ts samples/plan-multi-agent.json
```

### Validating a Capability
```bash
pnpm dlx ts-node tools/validate.ts samples/capability-example.json
```

## Future Tools

Planned additions to this directory:
- Schema generators for different programming languages
- JSON-LD context converters
- Sample data generators
- VS Code snippets and extensions
- OpenAPI spec generators
