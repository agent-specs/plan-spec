## IANA Media-Type registration drafts

* `application/plan+json`
* `application/envelope+json`

Both are UTF-8 encoded, 8-bit clean.  
File extension: `.plan.json` and `.envelope.json`

Security considerations:  
SignedEnvelope **MUST** be verified against the sender's DID key before
any downstream processing.  Mutation invalidates the signature.
