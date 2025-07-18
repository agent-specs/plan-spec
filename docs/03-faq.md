# 3 – FAQ

**Q: Why JSON-Schema and not Protobuf?**  
A: Human readability lowers adoption friction; wire size is secondary.

**Q: Is signature mandatory for local testing?**  
A: No – set policy `skipSigCheck=true` in dev nets.

**Q: How are trust scores calculated?**  
A: Trust calculation is implementation-specific. This spec only defines the `minTrust` threshold mechanism.

**Q: Can tasks have multiple dependencies?**  
A: Yes, the `dependsOn` array can contain multiple task IDs, creating complex dependency graphs.

**Q: What happens if a task fails?**  
A: Task status becomes "FAILED". Dependent tasks typically cannot execute until the failure is resolved.

**Q: Are there size limits on objects?**  
A: The specification doesn't impose hard limits, but implementations may set practical boundaries.

**Q: How do agents discover each other?**  
A: Agent discovery is outside this spec's scope. Common approaches include DHT, registry services, or broadcast mechanisms.

**Q: Can Plans be modified after creation?**  
A: Modifications require re-signing the envelope. The specification doesn't define versioning semantics.

**Q: What about payment and escrow?**  
A: Payment mechanisms are implementation-specific. This spec provides hooks (like `escrowId`) but doesn't define protocols.

**Q: How are capabilities matched to tasks?**  
A: Matching is typically done by comparing capability tags with task requirements. Algorithms are implementation-specific.

**Q: Can beacons be cancelled?**  
A: Yes, but cancellation mechanisms are not defined in this specification. Implementations may use expiration or explicit cancellation messages.

**Q: What's the difference between offers and capabilities?**  
A: Offers are specific responses to beacons with pricing. Capabilities are general skill advertisements for discovery.

**Q: How do I extend the schema for my use case?**  
A: Add custom fields to objects. Conforming implementations should ignore unknown fields for forward compatibility.

**Q: Is this compatible with existing workflow engines?**  
A: The task DAG structure is designed to be compatible with common workflow patterns, though integration requires adaptation.
