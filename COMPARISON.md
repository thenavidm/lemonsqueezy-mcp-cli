# Lemon Squeezy comparison

Checked 2026-10-03.

### Official API and SDK

The current [native API](https://docs.lemonsqueezy.com/api) and official [lemonsqueezy.js SDK](https://github.com/lmsqueezy/lemonsqueezy.js/tree/b1f66e905ee0614be87c3711d6529f2582e5729f) already cover JSON:API commerce and independent license operations. SDK 4.0.0 is pinned at b1f66e905ee0614be87c3711d6529f2582e5729f for source cross-checking; it is not a runtime dependency. This package exposes 60 distinct reviewed native operations and five local workflow helpers. Coverage is a reviewed field subset, not every SDK option, nested relationship URL or dashboard feature.

No official provider MCP or dedicated task CLI was identified in the reviewed primary documentation and searches on October 3, 2026. This is a search finding, not proof of absence. Recheck before future releases. Generic terminal MCP clients are also valid alternatives to building a dedicated task CLI.

### Existing community implementations

[YawLabs/lemonsqueezy-mcp](https://github.com/YawLabs/lemonsqueezy-mcp/tree/7dfff25e0117470c6fa2335b1067cd111eb01e6b) is pinned at 7dfff25e0117470c6fa2335b1067cd111eb01e6b, package 1.0.1. Its source already provides pagination, correct License API transport, class permission gates, refund caps, a bounded audit ring, rate-limit retries, optional private secret-vault fetching and an optional webhook sink. Its 64 declared tools include 61 native tool names and three webhook helpers; archive_customer aliases the customer update route, so the native route count is 60. Credit those existing capabilities. The published source describes limitations of store filtering for ID-targeted operations.

The reviewed refund/license handlers and wrapper use class preflight and policy controls, without this package's mandatory per-call confirm field. This package's actual shared handlers add explicit effect approval and direct read-only refusal, isolated private test/live profiles, a dedicated task CLI, exact ordered commerce review hashes and bounded private JSON:API exports. The comparison is pinned source review plus this candidate's local behavior fixtures. No matched live provider or competitor runtime benchmark is claimed.

[atharvagupta2003/mcp-lemonsqueezy](https://github.com/atharvagupta2003/mcp-lemonsqueezy/tree/6be9743b1a14c3d9ac64e1a2ed1fa1fa3eabe933) declares 17 tools in its README at the pinned commit. Its full runtime was not verified, so that statement is a README finding only.

### When this companion is useful

Choose it for the owned shared task CLI/local MCP, private profiles, explicit per-effect approval, exact locally reviewed batches and bounded file exports. Choose another implementation for its useful native or webhook/vault features where they better match your workflow. This package does not host a webhook listener, implement payment settlement, run OAuth, create products, promise store-scoped authorization or offer every dashboard action. No blanket superiority, unique CLI availability, greater total tool coverage or measured token saving is claimed.
| Capability | This implementation | Existing tooling |
| --- | --- | --- |
| Native operations | 60 distinct reviewed routes, 65 shared tasks | Official SDK and YawLabs already cover the native routes |
| Task CLI | Same schemas, handlers and approval as local MCP | SDK integration and generic MCP terminal clients remain alternatives |
| Profiles | Two private credential types; main-key mode checked; no fallback | Provider-side permission still governs accessible stores/resources |
| Approval | All 21 local/native effects require explicit confirm | YawLabs already has class gates and refund caps |
| Reviewed batches | Exact local inputs/order/profile label/mode/schema hash; stop on failure | No provider state lock, transaction, rollback or single-use guarantee |
| Private export | Native counters, budgets, resume offsets, exclusive file, redacted signed URLs | Metadata export, not atomic backup or digital-file download |
| Webhooks | Create/read/update/delete native configuration | YawLabs additionally offers an optional local sink |
| Cost evidence | Matched completed Codex tasks remain unmeasured | Schema counts or another provider benchmark are not task-token savings |

MCP can load all schemas, defer discovery or select individual tools; the client's loading mode changes overhead. CLI tasks still need help/schema discovery, command execution and model-readable output. --agent uses compact JSON formatting and --select can narrow results, without changing the requested native operation or proving cheaper successful completion.

README section 7 has this package's measured Claude Code and Codex costs against 2.0.1. No other offering was measured, so no comparison with one is claimed.

