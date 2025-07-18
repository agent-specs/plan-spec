# 2 – Security

* Each SignedEnvelope `sig` is Ed25519 over the canonical JSON bytes.
* Replay protection: envelope IDs should be stored and rejected on repeat.
* All BEACON / OFFER prices **MUST** be recomputed server-side before escrow.

## Cryptographic Requirements

### Digital Signatures
- **Algorithm**: Ed25519 (RFC 8032) is the RECOMMENDED signing algorithm
- **Canonicalization**: JSON payload MUST be canonicalized before signing
- **Key Management**: Private keys MUST be securely stored and never transmitted
- **Verification**: Signatures MUST be verified using the public key from the sender's DID document

### Decentralized Identifiers (DIDs)
- **Format**: All agent identifiers MUST follow W3C DID specification
- **Resolution**: DID documents MUST be resolvable to obtain public keys
- **Key Rotation**: Implementations SHOULD support key rotation mechanisms
- **Verification Methods**: Only authorized verification methods from DID documents MUST be accepted

## Threat Mitigation

### Replay Attacks
- **Timestamp Validation**: Envelope timestamps MUST be within acceptable time windows
- **Nonce Tracking**: Unique message identifiers SHOULD be tracked to prevent replay
- **Sequence Numbers**: Optional sequence numbers can provide additional replay protection

### Message Integrity
- **Tamper Detection**: Any modification to signed content MUST invalidate the signature
- **Hash Verification**: Payload hashes can provide additional integrity verification
- **Chain of Custody**: Audit trails SHOULD track message handling and transformations

### Authorization and Access Control
- **Trust Levels**: Beacon `minTrust` requirements MUST be enforced
- **Capability Verification**: Agent capabilities MUST be verified before task assignment
- **Resource Protection**: Access to sensitive resources MUST be properly controlled

## Best Practices

### Key Management
- Use hardware security modules (HSMs) for production deployments
- Implement key backup and recovery procedures
- Regular key rotation schedules are RECOMMENDED
- Multi-signature schemes for high-value transactions

### Network Security
- Use TLS 1.3 or higher for all network communications
- Implement rate limiting to prevent denial-of-service attacks
- Monitor for suspicious activity patterns
- Validate all input data before processing

### Operational Security
- Log all security-relevant events for audit purposes
- Implement incident response procedures
- Regular security assessments are RECOMMENDED
- Keep all dependencies updated to latest secure versions

## Known Limitations

- Ed25519 signatures are not quantum-resistant
- DID resolution depends on external infrastructure availability
- Trust metrics are implementation-specific and may vary across systems
