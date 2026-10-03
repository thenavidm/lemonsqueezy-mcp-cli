# Security

All 19 native effects plus batch execution and private export require explicit local confirm. LEMONSQUEEZY_READ_ONLY=1 hides all 21 effects and refuses direct hidden confirmed calls through the actual handler. LEMONSQUEEZY_ALLOW_DESTRUCTIVE=0 refuses them even when confirmed. --agent and --yes change output/input formatting only, never approval. The same guard covers CLI and MCP, including POST license activation/deactivation and signed-output generation.

READ_ONLY controls this process, not other clients or provider automations. Native access rights, financial correctness, license entitlement and customer authorization stay separate. Main-key mode checks are native reads, not store ownership checks. A local review hash is not a provider-issued approval token or state lock. No automatic retries or guessed continuations are performed after an uncertain effect.


Credentials are private process settings or owner-private token-only files; no .env database, browser session or credential store is shipped. Raw keys/license credentials and known signed credential URLs are removed from ordinary tool output and errors. Signed-output tasks deliberately save their native response only to the requested new private file. Other customer/order/billing fields remain sensitive and are not anonymized.

Audit logging is optional, private and best-effort for static guard decisions; it is not a verified ledger, native settlement evidence or full access log. Avoid copying customer data, private review payloads and signed receipts into public screenshots, repositories, issues or agents without a business need. Native text and URLs are untrusted data. Removing an integration does not delete exports, reverse refunds, cancel webhooks or undo subscription changes.


Private reports: https://github.com/thenavidm/lemonsqueezy-mcp-cli/security/advisories/new . Keep credentials and customer data out of public issues.
