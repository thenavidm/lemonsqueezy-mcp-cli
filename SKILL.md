---
name: lemonsqueezy-mcp-cli
description: Use Lemon Squeezy shared CLI/local MCP for reviewed commerce, subscriptions, licenses, explicit approvals and private bounded exports.
install:
  package: "@thenavidm/lemonsqueezy-mcp-cli@latest"
  command: "npm install -g @thenavidm/lemonsqueezy-mcp-cli@latest"
  check: "lemonsqueezy-cli --version"
---

Verify --version first. Use tools, schema and --help before native work. Keep both credential types private. Discovery/login do not mutate.

~~~bash
lemonsqueezy-cli tools
lemonsqueezy-cli schema refund-order
lemonsqueezy-cli list-accounts --agent
~~~

All 19 native effects plus batch execution and private export require explicit local confirm. LEMONSQUEEZY_READ_ONLY=1 hides all 21 effects and refuses direct hidden confirmed calls through the actual handler. LEMONSQUEEZY_ALLOW_DESTRUCTIVE=0 refuses them even when confirmed. --agent and --yes change output/input formatting only, never approval. The same guard covers CLI and MCP, including POST license activation/deactivation and signed-output generation.

READ_ONLY controls this process, not other clients or provider automations. Native access rights, financial correctness, license entitlement and customer authorization stay separate. Main-key mode checks are native reads, not store ownership checks. A local review hash is not a provider-issued approval token or state lock. No automatic retries or guessed continuations are performed after an uncertain effect.


### Choose main API and License API credentials separately

1. Sign into [Lemon Squeezy](https://app.lemonsqueezy.com) and use its account API-key settings. Read the current [request and authentication guide](https://docs.lemonsqueezy.com/api/getting-started/requests). Main API keys use Bearer authorization and expire after one year. Create/select a test key for testing, or deliberately select a live key for production. Do not assume a key is restricted to one store merely because a request has store_id.
2. Configure exactly one of LEMONSQUEEZY_API_KEY or LEMONSQUEEZY_TOKEN_FILE privately. Set LEMONSQUEEZY_MODE to test or live; the default is test. Before the first main API task in a process, the client reads GET /users/me and checks native meta.test_mode against this setting. A mismatch stops the intended task. A successful check proves key mode, not every permission or store ownership.
3. The independent [License API](https://docs.lemonsqueezy.com/api/license-api) uses the purchased license key itself. Configure exactly one of LEMONSQUEEZY_LICENSE_KEY or LEMONSQUEEZY_LICENSE_FILE privately. License operations use form encoding, no Bearer header, and do not require a main API key. Never pass license_key in a tool/CLI argument. A profile's test/live label and main-key check do not establish the license key's mode or product ownership; inspect native result metadata for the intended product/store without publishing it.
4. Credential files are absolute, token-only, regular non-symlink files outside repositories, at most 64 KiB. On macOS/Linux use runtime-user ownership and mode 0600, with a private parent directory. Restrict Windows file/directory ACLs separately. GUI, Docker and remote runtimes need credentials in their own environment.
5. Run lemonsqueezy-cli doctor for a local configuration check. Deliberate doctor --network checks the main API key with GET /users/me and reports mode metadata without printing native email/user ID. A license-only profile needs validate-license for a deliberate native license verdict; doctor --network cannot validate it without a main key.

login prints instructions only. No OAuth, browser cookies, sign-in, .env loading, key generation or automatic rotation is performed. Keep credentials and customer/billing data out of public issues, command transcripts and repositories. Revoke/replace the intended credential through provider controls and restart all dependent processes; private file credentials cache for the process lifetime.

### Private profiles and boundaries

LEMONSQUEEZY_ACCOUNTS is a private JSON array of unique profiles with name, api_key OR token_file, license_key OR license_file, and mode. Both credential types are optional until the relevant operation is requested. Named profiles never inherit global or another profile's credentials. LEMONSQUEEZY_DEFAULT_ACCOUNT selects the default; --account selects an exact configured label. list_accounts prints labels, declared main-key mode and credential-type availability, never secrets, file paths or provider identity. licenseModeVerified remains false.

A store_id filter narrows a list query. An exact resource ID may target a resource outside that filtered store if the key can access it. This package does not claim a store authorization boundary, automatic parent ownership checks, key-fingerprint binding or license-mode proof. Use provider-side least privilege where actually available and review exact IDs before effects.

### Native limits and effect outcomes

The main JSON:API and License API publish different rate limits, 300 and 60 requests per minute respectively. Local requests are spaced 1,000 ms by default; other processes share native limits. This local pacing is not a distributed quota guarantee. The initial main-key mode check is an additional native request. Requests have a 30-second default timeout, 1 MiB body and 5 MiB response caps. Redirects and automatic retries are disabled, including 429 and ambiguous transport failures.

Use actual [test mode](https://docs.lemonsqueezy.com/help/getting-started/test-mode) for deliberate commerce tests. Test actions can still generate receipts to account owners/team members; test downloads are restricted. Read-only mode is the local no-effect policy. Do not test refunds, cancellation, billing changes, checkout creation or license activation merely to verify installation. Failed effects may have unknown outcomes: inspect provider state before any deliberate repeat.


### Exact locally reviewed commerce work

preview_commerce_batch accepts 1–20 ordered native effects, excluding signed-output operations. Each task contains tool and arguments. Nested arguments cannot override account/confirm or use mutable payload_file/output_file. All tasks are validated before any credential load or network call. The local reviewSha256 binds exact tasks/request order, profile label/mode and reviewed native schema. The digest does not contain loaded credentials or establish provider ownership, amount correctness, state stability, expiry or single use.

~~~bash
lemonsqueezy-cli preview-commerce-batch --tasks '{"tool":"cancel_subscription","arguments":{"id":"REVIEWED_ID"}}' --agent
lemonsqueezy-cli submit-commerce-batch --help
~~~

Each repeated --tasks flag contains one task object. Execution requires outer confirm and the identical review_sha256 with unchanged tasks/profile/mode/schema. Credential rotation or upstream changes require renewed human review. A batch is not a transaction: execution stops at the first failure, returns knownResults, failedIndex and unattemptedIndices, and never retries, rolls back or silently continues. A failed request can have an unknown outcome; inspect native state before any deliberate follow-up.

### Bounded private JSON:API export

export_resources accepts an actual list operation and its schema-valid filters/page/per_page/include. It saves data and deduplicated included resources to a NEW owner-private file, redacting credentials and signed URLs. File creation is exclusive, mode 0600 on POSIX, with no overwrite or target-symlink following. Restrict Windows ACLs and the parent directory separately.

Budgets default to 10 pages/1,000 items, with local maxima 100 pages/10,000 items and a 5 MiB file cap. Native page counters determine completeness within requested filters. The client never follows links.next. Cap receipts preserve the exact list filters, page/per_page and start_offset for a deliberate resume into another NEW file. A partial-page offset does not freeze provider state; records can change between reads. Included resources can describe the fetched page beyond the selected item cap. Export is not an atomic backup, snapshot, financial reconciliation or file download.

~~~bash
lemonsqueezy-cli export-resources --help
lemonsqueezy-cli schema export-resources
~~~

An invalid pagination receipt or failure removes only this operation's newly created partial file, never unrelated data. A native financial effect already sent cannot be undone by deleting an output file or uninstalling the package.


~~~bash
lemonsqueezy-cli tools --agent
lemonsqueezy-cli list-orders --per-page 5 --agent --select data.id,meta.page
lemonsqueezy-cli schema refund-order
~~~

--json returns parsed native objects, --compact emits one line, --agent requests JSON/compact/no-input/no-color/yes formatting, and --select limits model-readable fields. None provides effect approval. Repeated array flags such as --tasks each take one JSON object. Native bodies use payload or an absolute regular non-symlink payload_file capped at 1 MiB. CLI commands use hyphens; MCP names use underscores.

| Exit | Meaning |
| --- | --- |
| 0 | Success; a license valid:false remains a native data verdict |
| 2 | Usage/invalid input/refused effect |
| 3 | Not found |
| 4 | Authentication/permission |
| 5 | Native API/unknown transport error |
| 7 | Rate limited |
| 10 | Missing/invalid private configuration |

| Variable | Purpose |
| --- | --- |
| LEMONSQUEEZY_API_KEY | Private main Bearer key; choose this OR TOKEN_FILE |
| LEMONSQUEEZY_TOKEN_FILE | Absolute owner-private main-key file; choose this OR API_KEY |
| LEMONSQUEEZY_LICENSE_KEY | Independent purchased license key; choose this OR LICENSE_FILE |
| LEMONSQUEEZY_LICENSE_FILE | Absolute owner-private license-only file; no main key required for License API |
| LEMONSQUEEZY_MODE | test (default) or live for global main-key profile; not proof of license mode |
| LEMONSQUEEZY_ACCOUNTS | Private array: name, api_key/token_file, license_key/license_file, mode; no fallback |
| LEMONSQUEEZY_DEFAULT_ACCOUNT | Exact configured default profile label |
| LEMONSQUEEZY_READ_ONLY | 1/true hides and directly refuses all 21 effects |
| LEMONSQUEEZY_ALLOW_DESTRUCTIVE | 0/false refuses confirmed effects |
| LEMONSQUEEZY_AUDIT_LOG | Optional private best-effort static guard-decision log |
| LEMONSQUEEZY_REQUEST_TIMEOUT_MS | Default 30000; local accepted range 100–300000 ms |
| LEMONSQUEEZY_MIN_REQUEST_INTERVAL_MS | Default 1000; local accepted range 0–10000 ms; not distributed quota enforcement |
