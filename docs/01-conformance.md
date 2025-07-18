# 1 – Conformance

An implementation **MUST**:

1. Validate incoming objects against the JSON Schema (draft-2020-12).  
2. Treat unknown additional properties as non-fatal (forward compatibility).  
3. Re-serialize objects *without* altering field order before signing.

A conforming envelope verifier **MUST** disallow `sig` older than 24 h
unless local policy extends the window.

## Validation Requirements

### Schema Compliance
- All objects MUST validate against their respective JSON Schema definitions
- Required fields MUST be present and conform to specified types
- String formats (UUID, date-time, URI) MUST be properly formatted
- Numeric constraints (minimum, maximum) MUST be enforced

### Forward Compatibility
- Implementations SHOULD ignore unknown fields to support future extensions
- Additional properties not defined in the schema MUST NOT cause validation failure
- Version negotiation mechanisms are recommended for breaking changes

### Signature Verification
- SignedEnvelope signatures MUST be verified before processing payload
- Signature verification MUST use the cryptographic key associated with `senderDid`
- Invalid signatures MUST result in message rejection
- Replay protection mechanisms are RECOMMENDED

### Error Handling
- Validation failures SHOULD provide descriptive error messages
- Implementations MUST gracefully handle malformed input
- Error responses SHOULD follow consistent format across implementations

## Test Cases

Conforming implementations SHOULD pass all test cases in the `samples/` directory.
Additional test suites may be provided for comprehensive validation.
