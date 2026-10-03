<img src="https://cdn.navid.me/platforms/lemonsqueezy.png" alt="Lemon Squeezy" width="88">

# Lemon Squeezy MCP Server & CLI

[![npm](https://img.shields.io/npm/v/@thenavidm/lemonsqueezy-mcp-cli?color=orange&label=npm)](https://www.npmjs.com/package/@thenavidm/lemonsqueezy-mcp-cli)
[![CI](https://github.com/thenavidm/lemonsqueezy-mcp-cli/actions/workflows/ci.yml/badge.svg)](https://github.com/thenavidm/lemonsqueezy-mcp-cli/actions/workflows/ci.yml)
[![License](https://img.shields.io/badge/License-AGPL--3.0-green)](./LICENSE)
[![YouTube](https://img.shields.io/badge/YouTube-@thenavidm-red?logo=youtube&logoColor=white)](https://youtube.com/@thenavidm?sub_confirmation=1)
[![X](https://img.shields.io/badge/X-@thenavidm-black?logo=x)](https://x.com/thenavidm)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-thenavidm-0A66C2?logo=linkedin&logoColor=white)](https://linkedin.com/in/thenavidm)

Lemon Squeezy MCP server and CLI for Codex and AI agents. 65 shared tasks for current commerce, subscriptions and licenses, private profiles, reviewed batches and bounded exports.

Built and maintained by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=lemonsqueezy-mcp-cli&utm_content=readme). Full setup is on [navid.me](https://navid.me/mcp-servers/lemonsqueezy).

<img src="https://cdn.navid.me/repos/lemonsqueezy-mcp-cli-retina.gif" alt="Illustrated Lemon Squeezy workflow in the actual house terminal component" width="520">

The animation illustrates the shipped workflow in the actual house terminal component, not an authenticated financial session. Node 22+ and the intended private credential type are required for native work. Compare the official SDK and current community alternatives below.

## Two ways to use it

### Command line

~~~bash
lemonsqueezy-cli tools
lemonsqueezy-cli list-orders --per-page 5 --agent
lemonsqueezy-cli refund-order --help
lemonsqueezy-cli schema refund-order
~~~

A dedicated task CLI for agents, scripts and deliberate shell work. Use private process settings; --confirm is explicit local effect approval.

### MCP server, for your AI app

~~~bash
codex mcp add lemonsqueezy -- npx -y @thenavidm/lemonsqueezy-mcp-cli@latest
~~~

Launches local stdio MCP with the same tasks and guards. Forward private runtime variables as shown in INSTALL.md. All other clients, desktop extension and operating-system details follow.

### Which one

Use MCP for conversational tool discovery and CLI for deliberate shell tasks, scripts or supported agent skills. Both invoke the same contracts and approvals; choose the interface that fits the task. Token savings require equivalent measured outcomes.

## Features

| Feature | Behavior |
| --- | --- |
| Current commerce | 60 reviewed native operations across catalog, customers, orders, subscriptions, discounts, checkouts, webhooks and licenses |
| Shared interfaces | 65 tasks, with both named CLI and local MCP binaries |
| Private profiles | Independent credential types, verified main-key mode and no fallback |
| Approved effects | 21 confirmed effects with direct read-only refusal |
| Reviewed work | Exact ordered local commerce hash and stop on failure |
| Private outputs | Exclusive signed receipts and bounded metadata exports with explicit continuation |
| Client setup | Full client/OS/desktop/runtime instructions and version history |

## Contents

| Number | Section | Coverage |
| --- | --- | --- |
| 1 | [What you can ask it](#1-what-you-can-ask-it) | What you can ask it |
| 2 | [Quick install](#2-quick-install) | Quick install |
| 3 | [Set up Lemon Squeezy access](#3-set-up-lemon-squeezy-access) | Set up Lemon Squeezy access |
| 4 | [Connect your client](#4-connect-your-client) | Connect your client |
| 5 | [Check it works](#5-check-it-works) | Check it works |
| 6 | [Output, flags and exit codes](#6-output-flags-and-exit-codes) | Output, flags and exit codes |
| 7 | [MCP or CLI and token cost](#7-mcp-or-cli-and-token-cost) | MCP or CLI and token cost |
| 8 | [Every tool and argument](#8-every-tool-and-argument) | Every tool and argument |
| 9 | [Commerce and license workflows](#9-commerce-and-license-workflows) | Commerce and license workflows |
| 10 | [Exact reviewed batches and private exports](#10-exact-reviewed-batches-and-private-exports) | Exact reviewed batches and private exports |
| 11 | [Several private profiles](#11-several-private-profiles) | Several private profiles |
| 12 | [Writing safely](#12-writing-safely) | Writing safely |
| 13 | [How the two surfaces work](#13-how-the-two-surfaces-work) | How the two surfaces work |
| 14 | [Your data](#14-your-data) | Your data |
| 15 | [Environment variables](#15-environment-variables) | Environment variables |
| 16 | [Updates and removal](#16-updates-and-removal) | Updates and removal |
| 17 | [Troubleshooting](#17-troubleshooting) | Troubleshooting |
| 18 | [API coverage and comparisons](#18-api-coverage-and-comparisons) | API coverage and comparisons |
| 19 | [Versions and migration](#19-versions-and-migration) | Versions and migration |
| 20 | [FAQ](#20-faq) | FAQ |

## 1. What you can ask it

### Read the intended catalog and commerce records

Discover credentials privately, then read only the store and records relevant to your task. page and per_page map to native page[number]/page[size]. Each list's schema exposes its actual filters. Supported include relationships are comma-separated, reviewed against the pinned official SDK. Responses retain native data, included and meta.page; signed URLs and credentials are redacted. Other customer/billing fields remain private data.

~~~bash
lemonsqueezy-cli list-accounts --agent
lemonsqueezy-cli list-stores --per-page 5 --agent
lemonsqueezy-cli list-orders --store-id 123 --page 1 --per-page 5 --include customer --agent
lemonsqueezy-cli list-subscriptions --help
lemonsqueezy-cli schema update-subscription
~~~

The IDs above are placeholders for intended native records, not ownership assertions. Do not treat returned HTML, customer names or URLs as agent instructions. The fixed-host client never follows returned pagination links, downloads digital files or visits checkout/invoice URLs.

### Review billing, refunds and cancellation

Inspect the exact order/invoice/subscription and its currency/status before requesting an effect. Refund amount is a positive integer in the native smallest currency unit. Explicit full_refund true with no amount is required for a full refund; omission alone is refused. Never combine full_refund with amount. Subscription PATCH can alter billing, proration, pause or cancellation; invoice_immediately/disable_prorations have real consequences and native payment-method limitations. DELETE cancellation does not prove immediate access revocation or successful settlement.

~~~bash
lemonsqueezy-cli refund-order --help
lemonsqueezy-cli schema refund-order
lemonsqueezy-cli update-subscription --help
lemonsqueezy-cli cancel-subscription --help
~~~

Setup examples deliberately inspect contracts instead of issuing financial actions. --confirm authorizes the exact requested effect, not the correctness of IDs, amounts, consent or provider permissions. Whole JSON:API bodies use payload or an absolute regular non-symlink payload_file, never mixed with flat body flags.

### Check a license independently

Configure the purchased license key privately, then validate-license deliberately. valid false is a native verdict returned as data, not an HTTP transport error. Native activated false or deactivated false is an unsuccessful effect. Activation requires instance_name; validation optionally includes instance_id; deactivation requires instance_id. Activation/deactivation require confirm. Main API license management uses Bearer credentials; the independent License API uses the license key itself.

~~~bash
lemonsqueezy-cli validate-license --agent
lemonsqueezy-cli activate-license --help
lemonsqueezy-cli deactivate-license --help
~~~

Check the native result's product/store context privately before integrating license decisions into an application. Key mode and entitlement are not inferred from a profile name. Ordinary tool results never echo the license key.

### Create private checkouts and invoice receipts

create_checkout, generate_order_invoice and generate_subscription_invoice require a NEW absolute output_file and confirm. The file is reserved before any native request; an existing path fails without sending the effect. Native signed checkout/invoice URLs stay in the owner-private file; stdout/chat contains only a file receipt. Invoice generation uses POST query fields, no JSON body, and requires native customer address fields including state for US/CA. Checkout bodies use native JSON:API store/variant relationships and reviewed attributes. No URL is followed or media downloaded.

~~~bash
lemonsqueezy-cli create-checkout --help
lemonsqueezy-cli generate-order-invoice --help
lemonsqueezy-cli get-operation-schema --operation create_checkout --agent
~~~

Webhook configuration sends the reviewed HTTPS callback/event/secret settings to the provider. This package does not start a public listener, verify event delivery or replace your application's signature validation. Keep webhook secrets in private payload files/configuration and out of command transcripts.


## 2. Quick install

~~~bash
npm install -g @thenavidm/lemonsqueezy-mcp-cli@latest
lemonsqueezy-cli --version
lemonsqueezy-cli tools
lemonsqueezy-cli login
~~~

## 3. Set up Lemon Squeezy access

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


## 4. Connect your client

Full client/OS/desktop details are also in [INSTALL.md](INSTALL.md).

## Codex

Codex is the current validation priority. Private token paths must exist in the process or remote environment where the server runs.

~~~bash
codex mcp add lemonsqueezy -- npx -y @thenavidm/lemonsqueezy-mcp-cli@latest
codex mcp list
~~~

Account credentials must reach the server through private environment settings. `codex mcp add --env NAME=value` stores values in your local config, so never commit that config or put secrets in a shared command. In TOML, the equivalent server is:

~~~toml
[mcp_servers.lemonsqueezy]
command = "npx"
args = ["-y", "@thenavidm/lemonsqueezy-mcp-cli@latest"]
env_vars = ["LEMONSQUEEZY_API_KEY", "LEMONSQUEEZY_TOKEN_FILE", "LEMONSQUEEZY_LICENSE_KEY", "LEMONSQUEEZY_LICENSE_FILE", "LEMONSQUEEZY_MODE", "LEMONSQUEEZY_ACCOUNTS", "LEMONSQUEEZY_DEFAULT_ACCOUNT", "LEMONSQUEEZY_READ_ONLY", "LEMONSQUEEZY_ALLOW_DESTRUCTIVE", "LEMONSQUEEZY_AUDIT_LOG", "LEMONSQUEEZY_REQUEST_TIMEOUT_MS", "LEMONSQUEEZY_MIN_REQUEST_INTERVAL_MS"]
~~~

`env_vars` forwards those names from the environment available to Codex. If that environment does not contain them, configure private env settings locally. Codex can also call the CLI directly with SKILL.md and `--agent` output.

## Claude Code

For a user-scoped connection, after privately configuring credentials:

~~~bash
claude mcp add --scope user lemonsqueezy -- npx -y @thenavidm/lemonsqueezy-mcp-cli@latest
claude mcp list
~~~

Use the client's private local environment settings for the account variable if they are not inherited. Claude's `-e NAME=value` registration option writes values into its config; only use it locally through your secret manager, with no shared command transcript. Never place credentials in a project .mcp.json. Reconnect and ask Claude to verify credentials.

Alternatively install the CLI, make SKILL.md available to Claude, and use shell commands. Registering both surfaces is optional.

## Claude Desktop

### Install the .mcpb extension

1. Download `lemonsqueezy-2.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/lemonsqueezy-mcp-cli/releases/latest).
2. In a supported Claude Desktop build, open **Settings > Extensions > Advanced settings > Install Extension…** and select it.
3. Configure the private main API key OR token-only file and its actual test/live mode. Configure the independent license key OR license file only if needed. Leave unused credential sources empty. Named profiles require private manual runtime settings.
4. Enable read-only if you want only the 44 read/helper operations. Reconnect and verify the intended profile with one deliberate read.

The bundle includes production dependencies and no credentials. Use a regular private token-only file if you prefer file-based credentials. The manifest requires Node 22 or newer from a compatible host. Organization policy may restrict custom extensions. Manual bundle updates require installing the new version; no automatic directory updates are promised. GUI installation remains unverified separately from archive/protocol checks.

### Manual config

Open **Settings > Developer > Edit Config**, or use your platform's config file:

| OS | Typical config path |
| --- | --- |
| macOS | `~/Library/Application Support/Claude/claude_desktop_config.json` |
| Windows | `%APPDATA%\Claude\claude_desktop_config.json` |
| Linux | `~/.config/Claude/claude_desktop_config.json`; confirm the location through Edit Config in your installed build |

~~~json
{
  "mcpServers": {
    "lemonsqueezy": {
      "command": "npx",
      "args": ["-y", "@thenavidm/lemonsqueezy-mcp-cli@latest"],
      "env": {
        "LEMONSQUEEZY_API_KEY": "YOUR_PRIVATE_API_KEY",
        "LEMONSQUEEZY_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Replace the placeholders only in your private file. Merge the server entry into an existing mcpServers object instead of replacing other integrations. Fully quit and reopen Claude Desktop. Do not enable an extension and a manual entry with the same name; choose one route.

If a Windows launcher cannot execute npx directly, use `"command": "cmd"` with `"args": ["/c", "npx", "-y", "@thenavidm/lemonsqueezy-mcp-cli@latest"]`. An absolute node executable and installed `dist/index.js` path also avoids launcher/PATH problems.

## Cursor

Use private user settings at `~/.cursor/mcp.json`, or **Settings > Tools & MCP**. [Cursor documents environment interpolation and envFile support](https://cursor.com/docs/mcp).

~~~json
{
  "mcpServers": {
    "lemonsqueezy": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/lemonsqueezy-mcp-cli@latest"],
      "env": {
        "LEMONSQUEEZY_API_KEY": "${env:LEMONSQUEEZY_API_KEY}",
        "LEMONSQUEEZY_TOKEN_FILE": "${env:LEMONSQUEEZY_TOKEN_FILE}"
      }
    }
  }
}
~~~

The environment values must exist for the Cursor process. If you use envFile, keep that file private and outside version control. A project .cursor/mcp.json must not contain actual credentials. Reconnect the server after saving.

## VS Code and Copilot

Use **MCP: Open User Configuration**. [VS Code uses servers and secure inputs](https://code.visualstudio.com/docs/agent-customization/mcp-servers), rather than a mcpServers root:

~~~json
{
  "inputs": [
    {"type": "promptString", "id": "lemonsqueezy-api-token", "description": "Lemon Squeezy API key (leave empty for a private token file)", "password": true},
    {"type": "promptString", "id": "lemonsqueezy-token-file", "description": "Optional private token-file path (leave empty for API key)"}
  ],
  "servers": {
    "lemonsqueezy": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@thenavidm/lemonsqueezy-mcp-cli@latest"],
      "env": {
        "LEMONSQUEEZY_API_KEY": "${input:lemonsqueezy-api-token}",
        "LEMONSQUEEZY_TOKEN_FILE": "${input:lemonsqueezy-token-file}"
      }
    }
  }
}
~~~

Start Lemon Squeezy through the MCP controls, approve trust if prompted, and enter credentials in the private input prompts. Workspace .vscode/mcp.json may contain this placeholder-only structure, but never resolved secret values. Remote development runs the server in the selected remote environment, so local file paths refer to that environment.

## Windsurf

Open Cascade's MCP settings or edit the private user file `~/.codeium/windsurf/mcp_config.json`. Use the Claude Desktop manual mcpServers block above with your locally configured env values. See [Windsurf's current MCP documentation](https://docs.devin.ai/desktop/cascade/mcp). Restart or reconnect Lemon Squeezy in Cascade; project files must not contain secrets.

## Zed

Open **Settings > AI > MCP Servers > Add Server > Add Local Server**, or your user settings file. [Zed uses context_servers](https://zed.dev/docs/ai/mcp):

~~~json
{
  "context_servers": {
    "lemonsqueezy": {
      "command": "npx",
      "args": ["-y", "@thenavidm/lemonsqueezy-mcp-cli@latest"],
      "env": {
        "LEMONSQUEEZY_API_KEY": "YOUR_PRIVATE_API_KEY",
        "LEMONSQUEEZY_TOKEN_FILE": ""
      }
    }
  }
}
~~~

Enter actual values only in private user settings. Check the active-server indicator before prompting. Do not wrap command and args inside a nested command object from older Zed examples.

## Gemini CLI

Merge the Claude Desktop manual mcpServers block into your private `~/.gemini/settings.json`. Configure the private credential values locally, then restart Gemini CLI and inspect `/mcp`. See [Gemini CLI's MCP configuration](https://geminicli.com/docs/tools/mcp-server/). Its project settings must not contain real credentials. You can instead use the CLI from an agent shell.

Other local stdio clients use the same command and arguments, adapted to their config format. A client that only accepts a remote MCP URL cannot connect directly: this package does not ship a public HTTP listener. ChatGPT's remote connector setup is not a substitute for local stdio installation.

## Docker

Build locally from the reviewed source; no prebuilt registry image is claimed:

```bash
git clone https://github.com/thenavidm/lemonsqueezy-mcp-cli.git
cd lemonsqueezy-mcp-cli
docker build -t lemonsqueezy-mcp-cli .
docker run --rm -i -e LEMONSQUEEZY_API_KEY lemonsqueezy-mcp-cli
```


## Cline and other local MCP clients

Use the client's **Add MCP server** flow with command `npx`, arguments `-y` and `@thenavidm/lemonsqueezy-mcp-cli@latest`, stdio transport, and private local LEMONSQUEEZY_API_KEY or LEMONSQUEEZY_TOKEN_FILE settings. UI names depend on the installed client. Reconnect and discover tools before an account call. Browser-only clients need a remote HTTPS connector; choose a separately supported remote connector rather than this local stdio command.







All manual examples above configure the main API with default test mode. For a live main key, add LEMONSQUEEZY_MODE=live privately. For independent license operations, add the private LICENSE_KEY or LICENSE_FILE setting separately; never copy an actual license key into a shared config or transcript. The full variable/profile reference below applies to every runtime. A remote-URL-only client cannot directly launch this local stdio server.


## 5. Check it works

~~~bash
lemonsqueezy-cli --version
lemonsqueezy-cli tools
lemonsqueezy-cli list-accounts --agent
lemonsqueezy-cli doctor
# Deliberate main-key native read only after private configuration
lemonsqueezy-cli doctor --network
~~~

Discovery/help/schema/login are local. doctor --network is one deliberate main-key read; no checkout, refund, billing, license activation or webhook effect is used to test installation. Local protocol checks, provider account outcomes, actual desktop GUI and completed Codex task usage remain separate evidence.

## 6. Output, flags and exit codes

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

## 7. MCP or CLI and token cost

MCP can load all schemas, defer discovery or select individual tools; the client's loading mode changes overhead. CLI tasks still need help/schema discovery, command execution and model-readable output. --agent uses compact JSON formatting and --select can narrow results, without changing the requested native operation or proving cheaper successful completion.

Codex is the current validation priority. No equivalent completed provider task/token benchmark exists for this release. Record model, client/package versions, date, loading settings, equivalent requested outcome, actual input/output/cache token usage and latency before publishing measured comparisons. Character estimates, tool counts, synthetic discovery and borrowed integration numbers are not task benchmarks. Claude Code-specific measurements remain deferred at Navid's instruction.


## 8. Every tool and argument

#### list_affiliates

Retrieves a paginated list of all affiliates.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `user_email` | string | Optional | Exact native filter value. {"minLength": 1} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-affiliates --help
lemonsqueezy-cli schema list-affiliates
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "user_email": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /affiliates**. [Current provider reference](https://docs.lemonsqueezy.com/api/affiliates/list-all-affiliates). No native JSON body.

~~~json
{
  "name": "list_affiliates",
  "method": "GET",
  "path": "/affiliates",
  "title": "List affiliates",
  "description": "Retrieves a paginated list of all affiliates.",
  "group": "affiliates",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[user_email]",
      "key": "user_email",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/affiliates/list-all-affiliates"
}
~~~

#### get_affiliate

Retrieves the affiliate with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-affiliate --help
lemonsqueezy-cli schema get-affiliate
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /affiliates/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/affiliates/retrieve-affiliate). No native JSON body.

~~~json
{
  "name": "get_affiliate",
  "method": "GET",
  "path": "/affiliates/{id}",
  "title": "Get affiliate",
  "description": "Retrieves the affiliate with the given ID.",
  "group": "affiliates",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/affiliates/retrieve-affiliate"
}
~~~

#### create_checkout

Creates a unique checkout for a specific variant with specified attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `custom_price` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `product_options` | object | Optional | Reviewed native/schema value |
| `product_options.name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.description` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.media` | array | Optional | Reviewed native/schema value {"maxItems": 100} |
| `product_options.redirect_url` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.receipt_button_text` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.receipt_link_url` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.receipt_thank_you_note` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.enabled_variants` | array | Optional | Reviewed native/schema value {"maxItems": 100} |
| `product_options.confirmation_title` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.confirmation_message` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `product_options.confirmation_button_text` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `checkout_options` | object | Optional | Reviewed native/schema value |
| `checkout_options.embed` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.media` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.logo` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.desc` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.discount` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.skip_trial` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.subscription_preview` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.dark` | boolean | Optional | Reviewed native/schema value |
| `checkout_options.background_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.headings_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.primary_text_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.secondary_text_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.links_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.borders_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.checkbox_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.active_state_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.button_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.button_text_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.terms_privacy_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `checkout_options.locale` | ['string', 'null'] | Optional | Reviewed native/schema value {"enum": ["bg", "hr", "cs", "da", "nl", "en", "et", "fil", "fi", "fr", "de", "el", "hu", "id", "it", "ja", "ko", "lv", "lt", "ms", "mt", "pl", "pt", "ro", "ru", "zh-CN", "sk", "sl", "es", "sv", "th", "tr", "vi", null]} |
| `checkout_data` | object | Optional | Reviewed native/schema value |
| `checkout_data.email` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "email"} |
| `checkout_data.name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `checkout_data.billing_address` | object | Optional | Reviewed native/schema value |
| `checkout_data.billing_address.country` | string | Optional | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z]{2}$"} |
| `checkout_data.billing_address.zip` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `checkout_data.tax_number` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `checkout_data.discount_code` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `checkout_data.custom` | object | Optional | Native custom checkout data. Private and untrusted; never credentials. |
| `checkout_data.variant_quantities` | array | Optional | Reviewed native/schema value {"maxItems": 100} |
| `checkout_data.variant_quantities[].variant_id` | integer | Required | Reviewed native/schema value {"minimum": 1} |
| `checkout_data.variant_quantities[].quantity` | integer | Required | Reviewed native/schema value {"minimum": 1} |
| `preview` | boolean | Optional | Reviewed native/schema value |
| `test_mode` | boolean | Optional | Reviewed native/schema value |
| `expires_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `store_id` | string | Optional | Reviewed native/schema value {"pattern": "^[A-Za-z0-9_-]+$"} |
| `variant_id` | string | Optional | Reviewed native/schema value {"pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "checkouts"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.custom_price` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.product_options` | object | Optional | Reviewed native/schema value |
| `payload.data.attributes.product_options.name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.description` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.media` | array | Optional | Reviewed native/schema value {"maxItems": 100} |
| `payload.data.attributes.product_options.redirect_url` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.receipt_button_text` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.receipt_link_url` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.receipt_thank_you_note` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.enabled_variants` | array | Optional | Reviewed native/schema value {"maxItems": 100} |
| `payload.data.attributes.product_options.confirmation_title` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.confirmation_message` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.product_options.confirmation_button_text` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.checkout_options` | object | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.embed` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.media` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.logo` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.desc` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.discount` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.skip_trial` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.subscription_preview` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.dark` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_options.background_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.headings_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.primary_text_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.secondary_text_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.links_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.borders_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.checkbox_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.active_state_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.button_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.button_text_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.terms_privacy_color` | string | Optional | Native checkout hex color. {"minLength": 1} |
| `payload.data.attributes.checkout_options.locale` | ['string', 'null'] | Optional | Reviewed native/schema value {"enum": ["bg", "hr", "cs", "da", "nl", "en", "et", "fil", "fi", "fr", "de", "el", "hu", "id", "it", "ja", "ko", "lv", "lt", "ms", "mt", "pl", "pt", "ro", "ru", "zh-CN", "sk", "sl", "es", "sv", "th", "tr", "vi", null]} |
| `payload.data.attributes.checkout_data` | object | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_data.email` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "email"} |
| `payload.data.attributes.checkout_data.name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.checkout_data.billing_address` | object | Optional | Reviewed native/schema value |
| `payload.data.attributes.checkout_data.billing_address.country` | string | Optional | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z]{2}$"} |
| `payload.data.attributes.checkout_data.billing_address.zip` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.checkout_data.tax_number` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.checkout_data.discount_code` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.checkout_data.custom` | object | Optional | Native custom checkout data. Private and untrusted; never credentials. |
| `payload.data.attributes.checkout_data.variant_quantities` | array | Optional | Reviewed native/schema value {"maxItems": 100} |
| `payload.data.attributes.checkout_data.variant_quantities[].variant_id` | integer | Required | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.checkout_data.variant_quantities[].quantity` | integer | Required | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.preview` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.test_mode` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.expires_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `payload.data.relationships` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data.type` | schema | Required | Reviewed native/schema value {"const": "stores"} |
| `payload.data.relationships.store.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload.data.relationships.variant` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.variant.data` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.variant.data.type` | schema | Required | Reviewed native/schema value {"const": "variants"} |
| `payload.data.relationships.variant.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |
| `output_file` | string | Required | Required absolute NEW private file for the signed checkout/invoice URL; exclusive0600, no overwrite. {"minLength": 1} |

~~~bash
lemonsqueezy-cli create-checkout --help
lemonsqueezy-cli schema create-checkout
~~~

~~~json
{
  "type": "object",
  "properties": {
    "custom_price": {
      "type": "integer",
      "minimum": 1
    },
    "product_options": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "description": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "media": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uri"
          },
          "maxItems": 100
        },
        "redirect_url": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "receipt_button_text": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "receipt_link_url": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "receipt_thank_you_note": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "enabled_variants": {
          "type": "array",
          "items": {
            "type": "integer",
            "minimum": 1
          },
          "maxItems": 100
        },
        "confirmation_title": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "confirmation_message": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "confirmation_button_text": {
          "type": "string",
          "minLength": 1,
          "description": ""
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "checkout_options": {
      "type": "object",
      "properties": {
        "embed": {
          "type": "boolean"
        },
        "media": {
          "type": "boolean"
        },
        "logo": {
          "type": "boolean"
        },
        "desc": {
          "type": "boolean"
        },
        "discount": {
          "type": "boolean"
        },
        "skip_trial": {
          "type": "boolean"
        },
        "subscription_preview": {
          "type": "boolean"
        },
        "dark": {
          "type": "boolean"
        },
        "background_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "headings_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "primary_text_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "secondary_text_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "links_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "borders_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "checkbox_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "active_state_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "button_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "button_text_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "terms_privacy_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "locale": {
          "type": [
            "string",
            "null"
          ],
          "enum": [
            "bg",
            "hr",
            "cs",
            "da",
            "nl",
            "en",
            "et",
            "fil",
            "fi",
            "fr",
            "de",
            "el",
            "hu",
            "id",
            "it",
            "ja",
            "ko",
            "lv",
            "lt",
            "ms",
            "mt",
            "pl",
            "pt",
            "ro",
            "ru",
            "zh-CN",
            "sk",
            "sl",
            "es",
            "sv",
            "th",
            "tr",
            "vi",
            null
          ]
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "checkout_data": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "email"
        },
        "name": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "billing_address": {
          "type": "object",
          "properties": {
            "country": {
              "type": "string",
              "minLength": 1,
              "description": "",
              "pattern": "^[A-Z]{2}$"
            },
            "zip": {
              "type": "string",
              "minLength": 1,
              "description": ""
            }
          },
          "required": [],
          "additionalProperties": false
        },
        "tax_number": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "discount_code": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "custom": {
          "type": "object",
          "maxProperties": 100,
          "description": "Native custom checkout data. Private and untrusted; never credentials."
        },
        "variant_quantities": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "variant_id": {
                "type": "integer",
                "minimum": 1
              },
              "quantity": {
                "type": "integer",
                "minimum": 1
              }
            },
            "required": [
              "variant_id",
              "quantity"
            ],
            "additionalProperties": false
          }
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "preview": {
      "type": "boolean"
    },
    "test_mode": {
      "type": "boolean"
    },
    "expires_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "store_id": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_-]+$"
    },
    "variant_id": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_-]+$"
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "checkouts"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "custom_price": {
                  "type": "integer",
                  "minimum": 1
                },
                "product_options": {
                  "type": "object",
                  "properties": {
                    "name": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "description": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "media": {
                      "type": "array",
                      "items": {
                        "type": "string",
                        "format": "uri"
                      },
                      "maxItems": 100
                    },
                    "redirect_url": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "receipt_button_text": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "receipt_link_url": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "receipt_thank_you_note": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "enabled_variants": {
                      "type": "array",
                      "items": {
                        "type": "integer",
                        "minimum": 1
                      },
                      "maxItems": 100
                    },
                    "confirmation_title": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "confirmation_message": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "confirmation_button_text": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    }
                  },
                  "required": [],
                  "additionalProperties": false
                },
                "checkout_options": {
                  "type": "object",
                  "properties": {
                    "embed": {
                      "type": "boolean"
                    },
                    "media": {
                      "type": "boolean"
                    },
                    "logo": {
                      "type": "boolean"
                    },
                    "desc": {
                      "type": "boolean"
                    },
                    "discount": {
                      "type": "boolean"
                    },
                    "skip_trial": {
                      "type": "boolean"
                    },
                    "subscription_preview": {
                      "type": "boolean"
                    },
                    "dark": {
                      "type": "boolean"
                    },
                    "background_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "headings_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "primary_text_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "secondary_text_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "links_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "borders_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "checkbox_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "active_state_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "button_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "button_text_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "terms_privacy_color": {
                      "type": "string",
                      "minLength": 1,
                      "description": "Native checkout hex color."
                    },
                    "locale": {
                      "type": [
                        "string",
                        "null"
                      ],
                      "enum": [
                        "bg",
                        "hr",
                        "cs",
                        "da",
                        "nl",
                        "en",
                        "et",
                        "fil",
                        "fi",
                        "fr",
                        "de",
                        "el",
                        "hu",
                        "id",
                        "it",
                        "ja",
                        "ko",
                        "lv",
                        "lt",
                        "ms",
                        "mt",
                        "pl",
                        "pt",
                        "ro",
                        "ru",
                        "zh-CN",
                        "sk",
                        "sl",
                        "es",
                        "sv",
                        "th",
                        "tr",
                        "vi",
                        null
                      ]
                    }
                  },
                  "required": [],
                  "additionalProperties": false
                },
                "checkout_data": {
                  "type": "object",
                  "properties": {
                    "email": {
                      "type": "string",
                      "minLength": 1,
                      "description": "",
                      "format": "email"
                    },
                    "name": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "billing_address": {
                      "type": "object",
                      "properties": {
                        "country": {
                          "type": "string",
                          "minLength": 1,
                          "description": "",
                          "pattern": "^[A-Z]{2}$"
                        },
                        "zip": {
                          "type": "string",
                          "minLength": 1,
                          "description": ""
                        }
                      },
                      "required": [],
                      "additionalProperties": false
                    },
                    "tax_number": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "discount_code": {
                      "type": "string",
                      "minLength": 1,
                      "description": ""
                    },
                    "custom": {
                      "type": "object",
                      "maxProperties": 100,
                      "description": "Native custom checkout data. Private and untrusted; never credentials."
                    },
                    "variant_quantities": {
                      "type": "array",
                      "maxItems": 100,
                      "items": {
                        "type": "object",
                        "properties": {
                          "variant_id": {
                            "type": "integer",
                            "minimum": 1
                          },
                          "quantity": {
                            "type": "integer",
                            "minimum": 1
                          }
                        },
                        "required": [
                          "variant_id",
                          "quantity"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [],
                  "additionalProperties": false
                },
                "preview": {
                  "type": "boolean"
                },
                "test_mode": {
                  "type": "boolean"
                },
                "expires_at": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "format": "date-time"
                }
              },
              "required": [],
              "additionalProperties": false
            },
            "relationships": {
              "type": "object",
              "properties": {
                "store": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "const": "stores"
                        },
                        "id": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Exact opaque native resource ID; no traversal or URL.",
                          "pattern": "^[A-Za-z0-9_-]+$",
                          "maxLength": 256
                        }
                      },
                      "required": [
                        "type",
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "required": [
                    "data"
                  ],
                  "additionalProperties": false
                },
                "variant": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "const": "variants"
                        },
                        "id": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Exact opaque native resource ID; no traversal or URL.",
                          "pattern": "^[A-Za-z0-9_-]+$",
                          "maxLength": 256
                        }
                      },
                      "required": [
                        "type",
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "required": [
                    "data"
                  ],
                  "additionalProperties": false
                }
              },
              "required": [
                "store",
                "variant"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "type",
            "attributes",
            "relationships"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    },
    "output_file": {
      "type": "string",
      "minLength": 1,
      "description": "Required absolute NEW private file for the signed checkout/invoice URL; exclusive0600, no overwrite."
    }
  },
  "required": [
    "output_file"
  ],
  "additionalProperties": false
}
~~~

Native request: **POST /checkouts**. [Current provider reference](https://docs.lemonsqueezy.com/api/checkouts/create-checkout). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "create_checkout",
  "method": "POST",
  "path": "/checkouts",
  "title": "Create checkout",
  "description": "Creates a unique checkout for a specific variant with specified attributes.",
  "group": "checkouts",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "checkouts"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "custom_price": {
                "type": "integer",
                "minimum": 1
              },
              "product_options": {
                "type": "object",
                "properties": {
                  "name": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "description": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "media": {
                    "type": "array",
                    "items": {
                      "type": "string",
                      "format": "uri"
                    },
                    "maxItems": 100
                  },
                  "redirect_url": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "receipt_button_text": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "receipt_link_url": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "receipt_thank_you_note": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "enabled_variants": {
                    "type": "array",
                    "items": {
                      "type": "integer",
                      "minimum": 1
                    },
                    "maxItems": 100
                  },
                  "confirmation_title": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "confirmation_message": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "confirmation_button_text": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  }
                },
                "required": [],
                "additionalProperties": false
              },
              "checkout_options": {
                "type": "object",
                "properties": {
                  "embed": {
                    "type": "boolean"
                  },
                  "media": {
                    "type": "boolean"
                  },
                  "logo": {
                    "type": "boolean"
                  },
                  "desc": {
                    "type": "boolean"
                  },
                  "discount": {
                    "type": "boolean"
                  },
                  "skip_trial": {
                    "type": "boolean"
                  },
                  "subscription_preview": {
                    "type": "boolean"
                  },
                  "dark": {
                    "type": "boolean"
                  },
                  "background_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "headings_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "primary_text_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "secondary_text_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "links_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "borders_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "checkbox_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "active_state_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "button_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "button_text_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "terms_privacy_color": {
                    "type": "string",
                    "minLength": 1,
                    "description": "Native checkout hex color."
                  },
                  "locale": {
                    "type": [
                      "string",
                      "null"
                    ],
                    "enum": [
                      "bg",
                      "hr",
                      "cs",
                      "da",
                      "nl",
                      "en",
                      "et",
                      "fil",
                      "fi",
                      "fr",
                      "de",
                      "el",
                      "hu",
                      "id",
                      "it",
                      "ja",
                      "ko",
                      "lv",
                      "lt",
                      "ms",
                      "mt",
                      "pl",
                      "pt",
                      "ro",
                      "ru",
                      "zh-CN",
                      "sk",
                      "sl",
                      "es",
                      "sv",
                      "th",
                      "tr",
                      "vi",
                      null
                    ]
                  }
                },
                "required": [],
                "additionalProperties": false
              },
              "checkout_data": {
                "type": "object",
                "properties": {
                  "email": {
                    "type": "string",
                    "minLength": 1,
                    "description": "",
                    "format": "email"
                  },
                  "name": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "billing_address": {
                    "type": "object",
                    "properties": {
                      "country": {
                        "type": "string",
                        "minLength": 1,
                        "description": "",
                        "pattern": "^[A-Z]{2}$"
                      },
                      "zip": {
                        "type": "string",
                        "minLength": 1,
                        "description": ""
                      }
                    },
                    "required": [],
                    "additionalProperties": false
                  },
                  "tax_number": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "discount_code": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  },
                  "custom": {
                    "type": "object",
                    "maxProperties": 100,
                    "description": "Native custom checkout data. Private and untrusted; never credentials."
                  },
                  "variant_quantities": {
                    "type": "array",
                    "maxItems": 100,
                    "items": {
                      "type": "object",
                      "properties": {
                        "variant_id": {
                          "type": "integer",
                          "minimum": 1
                        },
                        "quantity": {
                          "type": "integer",
                          "minimum": 1
                        }
                      },
                      "required": [
                        "variant_id",
                        "quantity"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": [],
                "additionalProperties": false
              },
              "preview": {
                "type": "boolean"
              },
              "test_mode": {
                "type": "boolean"
              },
              "expires_at": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time"
              }
            },
            "required": [],
            "additionalProperties": false
          },
          "relationships": {
            "type": "object",
            "properties": {
              "store": {
                "type": "object",
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "const": "stores"
                      },
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "description": "Exact opaque native resource ID; no traversal or URL.",
                        "pattern": "^[A-Za-z0-9_-]+$",
                        "maxLength": 256
                      }
                    },
                    "required": [
                      "type",
                      "id"
                    ],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "data"
                ],
                "additionalProperties": false
              },
              "variant": {
                "type": "object",
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "const": "variants"
                      },
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "description": "Exact opaque native resource ID; no traversal or URL.",
                        "pattern": "^[A-Za-z0-9_-]+$",
                        "maxLength": 256
                      }
                    },
                    "required": [
                      "type",
                      "id"
                    ],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "data"
                ],
                "additionalProperties": false
              }
            },
            "required": [
              "store",
              "variant"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "type",
          "attributes",
          "relationships"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": true,
  "attributes": {
    "custom_price": {
      "type": "integer",
      "minimum": 1
    },
    "product_options": {
      "type": "object",
      "properties": {
        "name": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "description": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "media": {
          "type": "array",
          "items": {
            "type": "string",
            "format": "uri"
          },
          "maxItems": 100
        },
        "redirect_url": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "receipt_button_text": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "receipt_link_url": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "receipt_thank_you_note": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "enabled_variants": {
          "type": "array",
          "items": {
            "type": "integer",
            "minimum": 1
          },
          "maxItems": 100
        },
        "confirmation_title": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "confirmation_message": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "confirmation_button_text": {
          "type": "string",
          "minLength": 1,
          "description": ""
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "checkout_options": {
      "type": "object",
      "properties": {
        "embed": {
          "type": "boolean"
        },
        "media": {
          "type": "boolean"
        },
        "logo": {
          "type": "boolean"
        },
        "desc": {
          "type": "boolean"
        },
        "discount": {
          "type": "boolean"
        },
        "skip_trial": {
          "type": "boolean"
        },
        "subscription_preview": {
          "type": "boolean"
        },
        "dark": {
          "type": "boolean"
        },
        "background_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "headings_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "primary_text_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "secondary_text_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "links_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "borders_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "checkbox_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "active_state_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "button_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "button_text_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "terms_privacy_color": {
          "type": "string",
          "minLength": 1,
          "description": "Native checkout hex color."
        },
        "locale": {
          "type": [
            "string",
            "null"
          ],
          "enum": [
            "bg",
            "hr",
            "cs",
            "da",
            "nl",
            "en",
            "et",
            "fil",
            "fi",
            "fr",
            "de",
            "el",
            "hu",
            "id",
            "it",
            "ja",
            "ko",
            "lv",
            "lt",
            "ms",
            "mt",
            "pl",
            "pt",
            "ro",
            "ru",
            "zh-CN",
            "sk",
            "sl",
            "es",
            "sv",
            "th",
            "tr",
            "vi",
            null
          ]
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "checkout_data": {
      "type": "object",
      "properties": {
        "email": {
          "type": "string",
          "minLength": 1,
          "description": "",
          "format": "email"
        },
        "name": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "billing_address": {
          "type": "object",
          "properties": {
            "country": {
              "type": "string",
              "minLength": 1,
              "description": "",
              "pattern": "^[A-Z]{2}$"
            },
            "zip": {
              "type": "string",
              "minLength": 1,
              "description": ""
            }
          },
          "required": [],
          "additionalProperties": false
        },
        "tax_number": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "discount_code": {
          "type": "string",
          "minLength": 1,
          "description": ""
        },
        "custom": {
          "type": "object",
          "maxProperties": 100,
          "description": "Native custom checkout data. Private and untrusted; never credentials."
        },
        "variant_quantities": {
          "type": "array",
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "variant_id": {
                "type": "integer",
                "minimum": 1
              },
              "quantity": {
                "type": "integer",
                "minimum": 1
              }
            },
            "required": [
              "variant_id",
              "quantity"
            ],
            "additionalProperties": false
          }
        }
      },
      "required": [],
      "additionalProperties": false
    },
    "preview": {
      "type": "boolean"
    },
    "test_mode": {
      "type": "boolean"
    },
    "expires_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    }
  },
  "attributeRequired": [],
  "relationships": {
    "store": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "stores"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false
    },
    "variant": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "variants"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false
    }
  },
  "relationshipRequired": [
    "store",
    "variant"
  ],
  "includes": [
    "store",
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/checkouts/create-checkout"
}
~~~

#### list_checkouts

Returns a paginated list of checkouts.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `variant_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated supported primary relationship names: store, variant. {"minLength": 1} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-checkouts --help
lemonsqueezy-cli schema list-checkouts
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "variant_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated supported primary relationship names: store, variant."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /checkouts**. [Current provider reference](https://docs.lemonsqueezy.com/api/checkouts/list-all-checkouts). No native JSON body.

~~~json
{
  "name": "list_checkouts",
  "method": "GET",
  "path": "/checkouts",
  "title": "List checkouts",
  "description": "Returns a paginated list of checkouts.",
  "group": "checkouts",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[variant_id]",
      "key": "variant_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated supported primary relationship names: store, variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/checkouts/list-all-checkouts"
}
~~~

#### get_checkout

Retrieves the checkout with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated supported primary relationship names: store, variant. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-checkout --help
lemonsqueezy-cli schema get-checkout
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated supported primary relationship names: store, variant."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /checkouts/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/checkouts/retrieve-checkout). No native JSON body.

~~~json
{
  "name": "get_checkout",
  "method": "GET",
  "path": "/checkouts/{id}",
  "title": "Get checkout",
  "description": "Retrieves the checkout with the given ID.",
  "group": "checkouts",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated supported primary relationship names: store, variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/checkouts/retrieve-checkout"
}
~~~

#### create_customer

Creates a customer with given attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `email` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "email"} |
| `city` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `region` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `country` | string | Optional | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z]{2}$"} |
| `store_id` | string | Optional | Reviewed native/schema value {"pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "customers"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.name` | string | Required | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.email` | string | Required | Reviewed native/schema value {"minLength": 1, "format": "email"} |
| `payload.data.attributes.city` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.region` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.country` | string | Optional | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z]{2}$"} |
| `payload.data.relationships` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data.type` | schema | Required | Reviewed native/schema value {"const": "stores"} |
| `payload.data.relationships.store.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli create-customer --help
lemonsqueezy-cli schema create-customer
~~~

~~~json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "email"
    },
    "city": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "region": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "country": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "pattern": "^[A-Z]{2}$"
    },
    "store_id": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_-]+$"
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "customers"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                },
                "email": {
                  "type": "string",
                  "minLength": 1,
                  "description": "",
                  "format": "email"
                },
                "city": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                },
                "region": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                },
                "country": {
                  "type": "string",
                  "minLength": 1,
                  "description": "",
                  "pattern": "^[A-Z]{2}$"
                }
              },
              "required": [
                "name",
                "email"
              ],
              "additionalProperties": false
            },
            "relationships": {
              "type": "object",
              "properties": {
                "store": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "const": "stores"
                        },
                        "id": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Exact opaque native resource ID; no traversal or URL.",
                          "pattern": "^[A-Za-z0-9_-]+$",
                          "maxLength": 256
                        }
                      },
                      "required": [
                        "type",
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "required": [
                    "data"
                  ],
                  "additionalProperties": false
                }
              },
              "required": [
                "store"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "type",
            "attributes",
            "relationships"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /customers**. [Current provider reference](https://docs.lemonsqueezy.com/api/customers/create-customer). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "create_customer",
  "method": "POST",
  "path": "/customers",
  "title": "Create customer",
  "description": "Creates a customer with given attributes.",
  "group": "customers",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "customers"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "email": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "format": "email"
              },
              "city": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "region": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "country": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "pattern": "^[A-Z]{2}$"
              }
            },
            "required": [
              "name",
              "email"
            ],
            "additionalProperties": false
          },
          "relationships": {
            "type": "object",
            "properties": {
              "store": {
                "type": "object",
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "const": "stores"
                      },
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "description": "Exact opaque native resource ID; no traversal or URL.",
                        "pattern": "^[A-Za-z0-9_-]+$",
                        "maxLength": 256
                      }
                    },
                    "required": [
                      "type",
                      "id"
                    ],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "data"
                ],
                "additionalProperties": false
              }
            },
            "required": [
              "store"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "type",
          "attributes",
          "relationships"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "email"
    },
    "city": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "region": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "country": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "pattern": "^[A-Z]{2}$"
    }
  },
  "attributeRequired": [
    "name",
    "email"
  ],
  "relationships": {
    "store": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "stores"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false
    }
  },
  "relationshipRequired": [
    "store"
  ],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/customers/create-customer"
}
~~~

#### list_customers

Retrieves a paginated list of all customers.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `email` | string | Optional | Exact native filter value. {"minLength": 1} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, orders, subscriptions, license-keys. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-customers --help
lemonsqueezy-cli schema list-customers
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, orders, subscriptions, license-keys."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /customers**. [Current provider reference](https://docs.lemonsqueezy.com/api/customers/list-all-customers). No native JSON body.

~~~json
{
  "name": "list_customers",
  "method": "GET",
  "path": "/customers",
  "title": "List customers",
  "description": "Retrieves a paginated list of all customers.",
  "group": "customers",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[email]",
      "key": "email",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, orders, subscriptions, license-keys."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "orders",
    "subscriptions",
    "license-keys"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/customers/list-all-customers"
}
~~~

#### get_customer

Retrieves the customer with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, orders, subscriptions, license-keys. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-customer --help
lemonsqueezy-cli schema get-customer
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, orders, subscriptions, license-keys."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /customers/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/customers/retrieve-customer). No native JSON body.

~~~json
{
  "name": "get_customer",
  "method": "GET",
  "path": "/customers/{id}",
  "title": "Get customer",
  "description": "Retrieves the customer with the given ID.",
  "group": "customers",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, orders, subscriptions, license-keys."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "orders",
    "subscriptions",
    "license-keys"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/customers/retrieve-customer"
}
~~~

#### update_customer

Updates the customer with the given ID and provided attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `email` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "email"} |
| `city` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `region` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `country` | string | Optional | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z]{2}$"} |
| `status` | string | Optional | Reviewed native/schema value {"enum": ["archived"]} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "customers"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.email` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "email"} |
| `payload.data.attributes.city` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.region` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.country` | string | Optional | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z]{2}$"} |
| `payload.data.attributes.status` | string | Optional | Reviewed native/schema value {"enum": ["archived"]} |
| `payload.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli update-customer --help
lemonsqueezy-cli schema update-customer
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "email"
    },
    "city": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "region": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "country": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "pattern": "^[A-Z]{2}$"
    },
    "status": {
      "type": "string",
      "enum": [
        "archived"
      ]
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "customers"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                },
                "email": {
                  "type": "string",
                  "minLength": 1,
                  "description": "",
                  "format": "email"
                },
                "city": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                },
                "region": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                },
                "country": {
                  "type": "string",
                  "minLength": 1,
                  "description": "",
                  "pattern": "^[A-Z]{2}$"
                },
                "status": {
                  "type": "string",
                  "enum": [
                    "archived"
                  ]
                }
              },
              "required": [],
              "additionalProperties": false
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "attributes",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **PATCH /customers/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/customers/update-customer). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "update_customer",
  "method": "PATCH",
  "path": "/customers/{id}",
  "title": "Update customer",
  "description": "Updates the customer with the given ID and provided attributes.",
  "group": "customers",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "customers"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "email": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "format": "email"
              },
              "city": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "region": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "country": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "pattern": "^[A-Z]{2}$"
              },
              "status": {
                "type": "string",
                "enum": [
                  "archived"
                ]
              }
            },
            "required": [],
            "additionalProperties": false
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "Exact opaque native resource ID; no traversal or URL.",
            "pattern": "^[A-Za-z0-9_-]+$",
            "maxLength": 256
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "email": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "email"
    },
    "city": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "region": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "country": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "pattern": "^[A-Z]{2}$"
    },
    "status": {
      "type": "string",
      "enum": [
        "archived"
      ]
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/customers/update-customer"
}
~~~

#### list_discount_redemptions

Returns a paginated list of discount redemptions.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `order_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `discount_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: discount, order. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-discount-redemptions --help
lemonsqueezy-cli schema list-discount-redemptions
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "order_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "discount_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: discount, order."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /discount-redemptions**. [Current provider reference](https://docs.lemonsqueezy.com/api/discount-redemptions/list-all-discount-redemptions). No native JSON body.

~~~json
{
  "name": "list_discount_redemptions",
  "method": "GET",
  "path": "/discount-redemptions",
  "title": "List discount redemptions",
  "description": "Returns a paginated list of discount redemptions.",
  "group": "discount-redemptions",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[order_id]",
      "key": "order_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[discount_id]",
      "key": "discount_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: discount, order."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "discount",
    "order"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/discount-redemptions/list-all-discount-redemptions"
}
~~~

#### get_discount_redemption

Retrieves the discount redemption with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: discount, order. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-discount-redemption --help
lemonsqueezy-cli schema get-discount-redemption
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: discount, order."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /discount-redemptions/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/discount-redemptions/retrieve-discount-redemption). No native JSON body.

~~~json
{
  "name": "get_discount_redemption",
  "method": "GET",
  "path": "/discount-redemptions/{id}",
  "title": "Get discount redemption",
  "description": "Retrieves the discount redemption with the given ID.",
  "group": "discount-redemptions",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: discount, order."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "discount",
    "order"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/discount-redemptions/retrieve-discount-redemption"
}
~~~

#### create_discount

Create a discount.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `name` | string | Optional | Reviewed native/schema value {"minLength": 1} |
| `code` | string | Optional | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z0-9]{3,256}$"} |
| `amount` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `amount_type` | string | Optional | Reviewed native/schema value {"enum": ["fixed", "percent"]} |
| `is_limited_to_products` | boolean | Optional | Reviewed native/schema value |
| `is_limited_redemptions` | boolean | Optional | Reviewed native/schema value |
| `max_redemptions` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `starts_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `expires_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `duration` | string | Optional | Reviewed native/schema value {"enum": ["once", "repeating", "forever"]} |
| `duration_in_months` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `test_mode` | boolean | Optional | Reviewed native/schema value |
| `store_id` | string | Optional | Reviewed native/schema value {"pattern": "^[A-Za-z0-9_-]+$"} |
| `variants_ids` | array | Optional | Reviewed native/schema value {"minItems": 1, "maxItems": 100} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "discounts"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.name` | string | Required | Reviewed native/schema value {"minLength": 1} |
| `payload.data.attributes.code` | string | Required | Reviewed native/schema value {"minLength": 1, "pattern": "^[A-Z0-9]{3,256}$"} |
| `payload.data.attributes.amount` | integer | Required | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.amount_type` | string | Required | Reviewed native/schema value {"enum": ["fixed", "percent"]} |
| `payload.data.attributes.is_limited_to_products` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.is_limited_redemptions` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.max_redemptions` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.starts_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `payload.data.attributes.expires_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `payload.data.attributes.duration` | string | Optional | Reviewed native/schema value {"enum": ["once", "repeating", "forever"]} |
| `payload.data.attributes.duration_in_months` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.test_mode` | boolean | Optional | Reviewed native/schema value |
| `payload.data.relationships` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data.type` | schema | Required | Reviewed native/schema value {"const": "stores"} |
| `payload.data.relationships.store.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload.data.relationships.variants` | object | Optional | Reviewed native/schema value |
| `payload.data.relationships.variants.data` | array | Required | Reviewed native/schema value {"minItems": 1, "maxItems": 100} |
| `payload.data.relationships.variants.data[].type` | schema | Required | Reviewed native/schema value {"const": "variants"} |
| `payload.data.relationships.variants.data[].id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli create-discount --help
lemonsqueezy-cli schema create-discount
~~~

~~~json
{
  "type": "object",
  "properties": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "code": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "pattern": "^[A-Z0-9]{3,256}$"
    },
    "amount": {
      "type": "integer",
      "minimum": 1
    },
    "amount_type": {
      "type": "string",
      "enum": [
        "fixed",
        "percent"
      ]
    },
    "is_limited_to_products": {
      "type": "boolean"
    },
    "is_limited_redemptions": {
      "type": "boolean"
    },
    "max_redemptions": {
      "type": "integer",
      "minimum": 1
    },
    "starts_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "expires_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "duration": {
      "type": "string",
      "enum": [
        "once",
        "repeating",
        "forever"
      ]
    },
    "duration_in_months": {
      "type": "integer",
      "minimum": 1
    },
    "test_mode": {
      "type": "boolean"
    },
    "store_id": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_-]+$"
    },
    "variants_ids": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "string",
        "pattern": "^[A-Za-z0-9_-]+$"
      }
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "discounts"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "name": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                },
                "code": {
                  "type": "string",
                  "minLength": 1,
                  "description": "",
                  "pattern": "^[A-Z0-9]{3,256}$"
                },
                "amount": {
                  "type": "integer",
                  "minimum": 1
                },
                "amount_type": {
                  "type": "string",
                  "enum": [
                    "fixed",
                    "percent"
                  ]
                },
                "is_limited_to_products": {
                  "type": "boolean"
                },
                "is_limited_redemptions": {
                  "type": "boolean"
                },
                "max_redemptions": {
                  "type": "integer",
                  "minimum": 1
                },
                "starts_at": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "format": "date-time"
                },
                "expires_at": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "format": "date-time"
                },
                "duration": {
                  "type": "string",
                  "enum": [
                    "once",
                    "repeating",
                    "forever"
                  ]
                },
                "duration_in_months": {
                  "type": "integer",
                  "minimum": 1
                },
                "test_mode": {
                  "type": "boolean"
                }
              },
              "required": [
                "name",
                "code",
                "amount",
                "amount_type"
              ],
              "additionalProperties": false
            },
            "relationships": {
              "type": "object",
              "properties": {
                "store": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "const": "stores"
                        },
                        "id": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Exact opaque native resource ID; no traversal or URL.",
                          "pattern": "^[A-Za-z0-9_-]+$",
                          "maxLength": 256
                        }
                      },
                      "required": [
                        "type",
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "required": [
                    "data"
                  ],
                  "additionalProperties": false
                },
                "variants": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "array",
                      "minItems": 1,
                      "maxItems": 100,
                      "items": {
                        "type": "object",
                        "properties": {
                          "type": {
                            "const": "variants"
                          },
                          "id": {
                            "type": "string",
                            "minLength": 1,
                            "description": "Exact opaque native resource ID; no traversal or URL.",
                            "pattern": "^[A-Za-z0-9_-]+$",
                            "maxLength": 256
                          }
                        },
                        "required": [
                          "type",
                          "id"
                        ],
                        "additionalProperties": false
                      }
                    }
                  },
                  "required": [
                    "data"
                  ],
                  "additionalProperties": false
                }
              },
              "required": [
                "store"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "type",
            "attributes",
            "relationships"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /discounts**. [Current provider reference](https://docs.lemonsqueezy.com/api/discounts/create-discount). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "create_discount",
  "method": "POST",
  "path": "/discounts",
  "title": "Create discount",
  "description": "Create a discount.",
  "group": "discounts",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "discounts"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "name": {
                "type": "string",
                "minLength": 1,
                "description": ""
              },
              "code": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "pattern": "^[A-Z0-9]{3,256}$"
              },
              "amount": {
                "type": "integer",
                "minimum": 1
              },
              "amount_type": {
                "type": "string",
                "enum": [
                  "fixed",
                  "percent"
                ]
              },
              "is_limited_to_products": {
                "type": "boolean"
              },
              "is_limited_redemptions": {
                "type": "boolean"
              },
              "max_redemptions": {
                "type": "integer",
                "minimum": 1
              },
              "starts_at": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time"
              },
              "expires_at": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time"
              },
              "duration": {
                "type": "string",
                "enum": [
                  "once",
                  "repeating",
                  "forever"
                ]
              },
              "duration_in_months": {
                "type": "integer",
                "minimum": 1
              },
              "test_mode": {
                "type": "boolean"
              }
            },
            "required": [
              "name",
              "code",
              "amount",
              "amount_type"
            ],
            "additionalProperties": false
          },
          "relationships": {
            "type": "object",
            "properties": {
              "store": {
                "type": "object",
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "const": "stores"
                      },
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "description": "Exact opaque native resource ID; no traversal or URL.",
                        "pattern": "^[A-Za-z0-9_-]+$",
                        "maxLength": 256
                      }
                    },
                    "required": [
                      "type",
                      "id"
                    ],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "data"
                ],
                "additionalProperties": false
              },
              "variants": {
                "type": "object",
                "properties": {
                  "data": {
                    "type": "array",
                    "minItems": 1,
                    "maxItems": 100,
                    "items": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "const": "variants"
                        },
                        "id": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Exact opaque native resource ID; no traversal or URL.",
                          "pattern": "^[A-Za-z0-9_-]+$",
                          "maxLength": 256
                        }
                      },
                      "required": [
                        "type",
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  }
                },
                "required": [
                  "data"
                ],
                "additionalProperties": false
              }
            },
            "required": [
              "store"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "type",
          "attributes",
          "relationships"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "name": {
      "type": "string",
      "minLength": 1,
      "description": ""
    },
    "code": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "pattern": "^[A-Z0-9]{3,256}$"
    },
    "amount": {
      "type": "integer",
      "minimum": 1
    },
    "amount_type": {
      "type": "string",
      "enum": [
        "fixed",
        "percent"
      ]
    },
    "is_limited_to_products": {
      "type": "boolean"
    },
    "is_limited_redemptions": {
      "type": "boolean"
    },
    "max_redemptions": {
      "type": "integer",
      "minimum": 1
    },
    "starts_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "expires_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "duration": {
      "type": "string",
      "enum": [
        "once",
        "repeating",
        "forever"
      ]
    },
    "duration_in_months": {
      "type": "integer",
      "minimum": 1
    },
    "test_mode": {
      "type": "boolean"
    }
  },
  "attributeRequired": [
    "name",
    "code",
    "amount",
    "amount_type"
  ],
  "relationships": {
    "store": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "stores"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false
    },
    "variants": {
      "type": "object",
      "properties": {
        "data": {
          "type": "array",
          "minItems": 1,
          "maxItems": 100,
          "items": {
            "type": "object",
            "properties": {
              "type": {
                "const": "variants"
              },
              "id": {
                "type": "string",
                "minLength": 1,
                "description": "Exact opaque native resource ID; no traversal or URL.",
                "pattern": "^[A-Za-z0-9_-]+$",
                "maxLength": 256
              }
            },
            "required": [
              "type",
              "id"
            ],
            "additionalProperties": false
          }
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false
    }
  },
  "relationshipRequired": [
    "store"
  ],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/discounts/create-discount"
}
~~~

#### delete_discount

Delete a discount with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |

~~~bash
lemonsqueezy-cli delete-discount --help
lemonsqueezy-cli schema delete-discount
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **DELETE /discounts/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/discounts/delete-discount). No native JSON body.

~~~json
{
  "name": "delete_discount",
  "method": "DELETE",
  "path": "/discounts/{id}",
  "title": "Delete discount",
  "description": "Delete a discount with the given ID.",
  "group": "discounts",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/discounts/delete-discount"
}
~~~

#### list_discounts

Returns a paginated list of discounts.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, variants, discount-redemptions. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-discounts --help
lemonsqueezy-cli schema list-discounts
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, variants, discount-redemptions."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /discounts**. [Current provider reference](https://docs.lemonsqueezy.com/api/discounts/list-all-discounts). No native JSON body.

~~~json
{
  "name": "list_discounts",
  "method": "GET",
  "path": "/discounts",
  "title": "List discounts",
  "description": "Returns a paginated list of discounts.",
  "group": "discounts",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, variants, discount-redemptions."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "variants",
    "discount-redemptions"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/discounts/list-all-discounts"
}
~~~

#### get_discount

Retrieves the discount with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, variants, discount-redemptions. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-discount --help
lemonsqueezy-cli schema get-discount
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, variants, discount-redemptions."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /discounts/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/discounts/retrieve-discount). No native JSON body.

~~~json
{
  "name": "get_discount",
  "method": "GET",
  "path": "/discounts/{id}",
  "title": "Get discount",
  "description": "Retrieves the discount with the given ID.",
  "group": "discounts",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, variants, discount-redemptions."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "variants",
    "discount-redemptions"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/discounts/retrieve-discount"
}
~~~

#### list_files

Returns a paginated list of files.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `variant_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: variant. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-files --help
lemonsqueezy-cli schema list-files
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "variant_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: variant."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /files**. [Current provider reference](https://docs.lemonsqueezy.com/api/files/list-all-files). No native JSON body.

~~~json
{
  "name": "list_files",
  "method": "GET",
  "path": "/files",
  "title": "List files",
  "description": "Returns a paginated list of files.",
  "group": "files",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[variant_id]",
      "key": "variant_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/files/list-all-files"
}
~~~

#### get_file

Retrieves the file with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: variant. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-file --help
lemonsqueezy-cli schema get-file
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: variant."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /files/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/files/retrieve-file). No native JSON body.

~~~json
{
  "name": "get_file",
  "method": "GET",
  "path": "/files/{id}",
  "title": "Get file",
  "description": "Retrieves the file with the given ID.",
  "group": "files",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/files/retrieve-file"
}
~~~

#### activate_license

Use the selected private profile license credential for native activate license. No global API-key fallback; customer metadata stays private.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `instance_name` | string | Optional | New native activation instance label. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.instance_name` | string | Required | New native activation instance label. {"minLength": 1} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli activate-license --help
lemonsqueezy-cli schema activate-license
~~~

~~~json
{
  "type": "object",
  "properties": {
    "instance_name": {
      "type": "string",
      "minLength": 1,
      "description": "New native activation instance label."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "instance_name": {
          "type": "string",
          "minLength": 1,
          "description": "New native activation instance label."
        }
      },
      "required": [
        "instance_name"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /licenses/activate**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-api/activate-license-key). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "activate_license",
  "method": "POST",
  "path": "/licenses/activate",
  "title": "Activate license",
  "description": "Use the selected private profile license credential for native activate license. No global API-key fallback; customer metadata stays private.",
  "group": "license-api",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "instance_name": {
        "type": "string",
        "minLength": 1,
        "description": "New native activation instance label."
      }
    },
    "required": [
      "instance_name"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "instance_name": {
      "type": "string",
      "minLength": 1,
      "description": "New native activation instance label."
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": true,
  "source": "https://docs.lemonsqueezy.com/api/license-api/activate-license-key"
}
~~~

#### deactivate_license

Use the selected private profile license credential for native deactivate license. No global API-key fallback; customer metadata stays private.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `instance_id` | string | Optional | Native instance ID returned by activation. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.instance_id` | string | Required | Native instance ID returned by activation. {"minLength": 1} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli deactivate-license --help
lemonsqueezy-cli schema deactivate-license
~~~

~~~json
{
  "type": "object",
  "properties": {
    "instance_id": {
      "type": "string",
      "minLength": 1,
      "description": "Native instance ID returned by activation."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "instance_id": {
          "type": "string",
          "minLength": 1,
          "description": "Native instance ID returned by activation."
        }
      },
      "required": [
        "instance_id"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /licenses/deactivate**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-api/deactivate-license-key). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "deactivate_license",
  "method": "POST",
  "path": "/licenses/deactivate",
  "title": "Deactivate license",
  "description": "Use the selected private profile license credential for native deactivate license. No global API-key fallback; customer metadata stays private.",
  "group": "license-api",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "instance_id": {
        "type": "string",
        "minLength": 1,
        "description": "Native instance ID returned by activation."
      }
    },
    "required": [
      "instance_id"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "instance_id": {
      "type": "string",
      "minLength": 1,
      "description": "Native instance ID returned by activation."
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": true,
  "source": "https://docs.lemonsqueezy.com/api/license-api/deactivate-license-key"
}
~~~

#### validate_license

Use the selected private profile license credential for native validate license. No global API-key fallback; customer metadata stays private.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `instance_id` | string | Optional | Native instance ID returned by activation. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.instance_id` | string | Optional | Native instance ID returned by activation. {"minLength": 1} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli validate-license --help
lemonsqueezy-cli schema validate-license
~~~

~~~json
{
  "type": "object",
  "properties": {
    "instance_id": {
      "type": "string",
      "minLength": 1,
      "description": "Native instance ID returned by activation."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "payload": {
      "type": "object",
      "properties": {
        "instance_id": {
          "type": "string",
          "minLength": 1,
          "description": "Native instance ID returned by activation."
        }
      },
      "required": [],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /licenses/validate**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-api/validate-license-key). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "validate_license",
  "method": "POST",
  "path": "/licenses/validate",
  "title": "Validate license",
  "description": "Use the selected private profile license credential for native validate license. No global API-key fallback; customer metadata stays private.",
  "group": "license-api",
  "risk": "read",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "instance_id": {
        "type": "string",
        "minLength": 1,
        "description": "Native instance ID returned by activation."
      }
    },
    "required": [],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "instance_id": {
      "type": "string",
      "minLength": 1,
      "description": "Native instance ID returned by activation."
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": true,
  "source": "https://docs.lemonsqueezy.com/api/license-api/validate-license-key"
}
~~~

#### list_license_key_instances

Returns a paginated list of license key instances.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `license_key_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: license-key. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-license-key-instances --help
lemonsqueezy-cli schema list-license-key-instances
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "license_key_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: license-key."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /license-key-instances**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-key-instances/list-all-license-key-instances). No native JSON body.

~~~json
{
  "name": "list_license_key_instances",
  "method": "GET",
  "path": "/license-key-instances",
  "title": "List license key instances",
  "description": "Returns a paginated list of license key instances.",
  "group": "license-key-instances",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[license_key_id]",
      "key": "license_key_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: license-key."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "license-key"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/license-key-instances/list-all-license-key-instances"
}
~~~

#### get_license_key_instance

Retrieves the license key instance with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: license-key. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-license-key-instance --help
lemonsqueezy-cli schema get-license-key-instance
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: license-key."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /license-key-instances/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-key-instances/retrieve-license-key-instance). No native JSON body.

~~~json
{
  "name": "get_license_key_instance",
  "method": "GET",
  "path": "/license-key-instances/{id}",
  "title": "Get license key instance",
  "description": "Retrieves the license key instance with the given ID.",
  "group": "license-key-instances",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: license-key."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "license-key"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/license-key-instances/retrieve-license-key-instance"
}
~~~

#### list_license_keys

Returns a paginated list of license keys.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `order_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `order_item_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `product_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `status` | string | Optional | Exact native filter value. {"minLength": 1} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, license-key-instances. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-license-keys --help
lemonsqueezy-cli schema list-license-keys
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "order_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "order_item_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "product_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "status": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, license-key-instances."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /license-keys**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-keys/list-all-license-keys). No native JSON body.

~~~json
{
  "name": "list_license_keys",
  "method": "GET",
  "path": "/license-keys",
  "title": "List license keys",
  "description": "Returns a paginated list of license keys.",
  "group": "license-keys",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[order_id]",
      "key": "order_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[order_item_id]",
      "key": "order_item_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[product_id]",
      "key": "product_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[status]",
      "key": "status",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, license-key-instances."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "customer",
    "order",
    "order-item",
    "product",
    "license-key-instances"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/license-keys/list-all-license-keys"
}
~~~

#### get_license_key

Retrieves the license key with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, license-key-instances. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-license-key --help
lemonsqueezy-cli schema get-license-key
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, license-key-instances."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /license-keys/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-keys/retrieve-license-key). No native JSON body.

~~~json
{
  "name": "get_license_key",
  "method": "GET",
  "path": "/license-keys/{id}",
  "title": "Get license key",
  "description": "Retrieves the license key with the given ID.",
  "group": "license-keys",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, license-key-instances."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "customer",
    "order",
    "order-item",
    "product",
    "license-key-instances"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/license-keys/retrieve-license-key"
}
~~~

#### update_license_key

Updates the license key with the given ID and provided attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `activation_limit` | ['integer', 'null'] | Optional | Reviewed native/schema value {"minimum": 0} |
| `expires_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `disabled` | boolean | Optional | Reviewed native/schema value |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "license-keys"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.activation_limit` | ['integer', 'null'] | Optional | Reviewed native/schema value {"minimum": 0} |
| `payload.data.attributes.expires_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `payload.data.attributes.disabled` | boolean | Optional | Reviewed native/schema value |
| `payload.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli update-license-key --help
lemonsqueezy-cli schema update-license-key
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "activation_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "expires_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "disabled": {
      "type": "boolean"
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "license-keys"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "activation_limit": {
                  "type": [
                    "integer",
                    "null"
                  ],
                  "minimum": 0
                },
                "expires_at": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "format": "date-time"
                },
                "disabled": {
                  "type": "boolean"
                }
              },
              "required": [],
              "additionalProperties": false
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "attributes",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **PATCH /license-keys/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/license-keys/update-license-key). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "update_license_key",
  "method": "PATCH",
  "path": "/license-keys/{id}",
  "title": "Update license key",
  "description": "Updates the license key with the given ID and provided attributes.",
  "group": "license-keys",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "license-keys"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "activation_limit": {
                "type": [
                  "integer",
                  "null"
                ],
                "minimum": 0
              },
              "expires_at": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time"
              },
              "disabled": {
                "type": "boolean"
              }
            },
            "required": [],
            "additionalProperties": false
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "Exact opaque native resource ID; no traversal or URL.",
            "pattern": "^[A-Za-z0-9_-]+$",
            "maxLength": 256
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "activation_limit": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0
    },
    "expires_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "disabled": {
      "type": "boolean"
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/license-keys/update-license-key"
}
~~~

#### list_order_items

Returns a paginated list of order items.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `product_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `variant_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `order_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: order, product, variant. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-order-items --help
lemonsqueezy-cli schema list-order-items
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "product_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "variant_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "order_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: order, product, variant."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /order-items**. [Current provider reference](https://docs.lemonsqueezy.com/api/order-items/list-all-order-items). No native JSON body.

~~~json
{
  "name": "list_order_items",
  "method": "GET",
  "path": "/order-items",
  "title": "List order items",
  "description": "Returns a paginated list of order items.",
  "group": "order-items",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[product_id]",
      "key": "product_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[variant_id]",
      "key": "variant_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[order_id]",
      "key": "order_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: order, product, variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "order",
    "product",
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/order-items/list-all-order-items"
}
~~~

#### get_order_item

Retrieves the order item with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: order, product, variant. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-order-item --help
lemonsqueezy-cli schema get-order-item
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: order, product, variant."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /order-items/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/order-items/retrieve-order-item). No native JSON body.

~~~json
{
  "name": "get_order_item",
  "method": "GET",
  "path": "/order-items/{id}",
  "title": "Get order item",
  "description": "Retrieves the order item with the given ID.",
  "group": "order-items",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: order, product, variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "order",
    "product",
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/order-items/retrieve-order-item"
}
~~~

#### generate_order_invoice

Generates a new invoice for the given order with given attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `name` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `address` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `city` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `state` | string | Optional | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `zip_code` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `country` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `notes` | string | Optional | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `locale` | string | Optional | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `output_file` | string | Required | Required absolute NEW private file for the signed checkout/invoice URL; exclusive0600, no overwrite. {"minLength": 1} |

~~~bash
lemonsqueezy-cli generate-order-invoice --help
lemonsqueezy-cli schema generate-order-invoice
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "address": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "city": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "state": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "zip_code": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "country": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "notes": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "locale": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "output_file": {
      "type": "string",
      "minLength": 1,
      "description": "Required absolute NEW private file for the signed checkout/invoice URL; exclusive0600, no overwrite."
    }
  },
  "required": [
    "id",
    "name",
    "address",
    "city",
    "zip_code",
    "country",
    "output_file"
  ],
  "additionalProperties": false
}
~~~

Native request: **POST /orders/{id}/generate-invoice**. [Current provider reference](https://docs.lemonsqueezy.com/api/orders/generate-order-invoice). No native JSON body; required invoice fields are query parameters.

~~~json
{
  "name": "generate_order_invoice",
  "method": "POST",
  "path": "/orders/{id}/generate-invoice",
  "title": "Generate order invoice",
  "description": "Generates a new invoice for the given order with given attributes.",
  "group": "orders",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "name",
      "key": "name",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "address",
      "key": "address",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "city",
      "key": "city",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "state",
      "key": "state",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "zip_code",
      "key": "zip_code",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "country",
      "key": "country",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "notes",
      "key": "notes",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "locale",
      "key": "locale",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": true,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/orders/generate-order-invoice"
}
~~~

#### refund_order

Issue the exact requested partial refund, or an explicitly named full refund. Local approval required; no automatic replay.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `amount` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `full_refund` | boolean | Optional | Explicit full-refund intent. Must be true with no amount; cannot coexist with amount. |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "orders"} |
| `payload.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.amount` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli refund-order --help
lemonsqueezy-cli schema refund-order
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "amount": {
      "type": "integer",
      "minimum": 1
    },
    "full_refund": {
      "type": "boolean",
      "description": "Explicit full-refund intent. Must be true with no amount; cannot coexist with amount."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "orders"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            },
            "attributes": {
              "type": "object",
              "properties": {
                "amount": {
                  "type": "integer",
                  "minimum": 1
                }
              },
              "required": [],
              "additionalProperties": false
            }
          },
          "required": [
            "type",
            "id",
            "attributes"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **POST /orders/{id}/refund**. [Current provider reference](https://docs.lemonsqueezy.com/api/orders/issue-refund). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "refund_order",
  "method": "POST",
  "path": "/orders/{id}/refund",
  "title": "Refund order",
  "description": "Issue the exact requested partial refund, or an explicitly named full refund. Local approval required; no automatic replay.",
  "group": "orders",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "orders"
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "Exact opaque native resource ID; no traversal or URL.",
            "pattern": "^[A-Za-z0-9_-]+$",
            "maxLength": 256
          },
          "attributes": {
            "type": "object",
            "properties": {
              "amount": {
                "type": "integer",
                "minimum": 1
              }
            },
            "required": [],
            "additionalProperties": false
          }
        },
        "required": [
          "type",
          "id",
          "attributes"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "amount": {
      "type": "integer",
      "minimum": 1
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/orders/issue-refund"
}
~~~

#### list_orders

Returns a paginated list of orders.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `user_email` | string | Optional | Exact native filter value. {"minLength": 1} |
| `order_number` | string | Optional | Exact native filter value. {"minLength": 1} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, customer, order-items, subscriptions, license-keys, discount-redemptions. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-orders --help
lemonsqueezy-cli schema list-orders
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "user_email": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "order_number": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, customer, order-items, subscriptions, license-keys, discount-redemptions."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /orders**. [Current provider reference](https://docs.lemonsqueezy.com/api/orders/list-all-orders). No native JSON body.

~~~json
{
  "name": "list_orders",
  "method": "GET",
  "path": "/orders",
  "title": "List orders",
  "description": "Returns a paginated list of orders.",
  "group": "orders",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[user_email]",
      "key": "user_email",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[order_number]",
      "key": "order_number",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, customer, order-items, subscriptions, license-keys, discount-redemptions."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "customer",
    "order-items",
    "subscriptions",
    "license-keys",
    "discount-redemptions"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/orders/list-all-orders"
}
~~~

#### get_order

Retrieves the order with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, customer, order-items, subscriptions, license-keys, discount-redemptions. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-order --help
lemonsqueezy-cli schema get-order
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, customer, order-items, subscriptions, license-keys, discount-redemptions."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /orders/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/orders/retrieve-order). No native JSON body.

~~~json
{
  "name": "get_order",
  "method": "GET",
  "path": "/orders/{id}",
  "title": "Get order",
  "description": "Retrieves the order with the given ID.",
  "group": "orders",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, customer, order-items, subscriptions, license-keys, discount-redemptions."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "customer",
    "order-items",
    "subscriptions",
    "license-keys",
    "discount-redemptions"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/orders/retrieve-order"
}
~~~

#### list_prices

Retrieves a paginated list of prices.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `variant_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: variant. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-prices --help
lemonsqueezy-cli schema list-prices
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "variant_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: variant."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /prices**. [Current provider reference](https://docs.lemonsqueezy.com/api/prices/list-all-prices). No native JSON body.

~~~json
{
  "name": "list_prices",
  "method": "GET",
  "path": "/prices",
  "title": "List prices",
  "description": "Retrieves a paginated list of prices.",
  "group": "prices",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[variant_id]",
      "key": "variant_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/prices/list-all-prices"
}
~~~

#### get_price

Retrieves the price with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: variant. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-price --help
lemonsqueezy-cli schema get-price
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: variant."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /prices/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/prices/retrieve-price). No native JSON body.

~~~json
{
  "name": "get_price",
  "method": "GET",
  "path": "/prices/{id}",
  "title": "Get price",
  "description": "Retrieves the price with the given ID.",
  "group": "prices",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: variant."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "variant"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/prices/retrieve-price"
}
~~~

#### list_products

Retrieves a paginated list of all products.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, variants. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-products --help
lemonsqueezy-cli schema list-products
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, variants."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /products**. [Current provider reference](https://docs.lemonsqueezy.com/api/products/list-all-products). No native JSON body.

~~~json
{
  "name": "list_products",
  "method": "GET",
  "path": "/products",
  "title": "List products",
  "description": "Retrieves a paginated list of all products.",
  "group": "products",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, variants."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "variants"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/products/list-all-products"
}
~~~

#### get_product

Retrieves the product with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, variants. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-product --help
lemonsqueezy-cli schema get-product
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, variants."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /products/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/products/retrieve-product). No native JSON body.

~~~json
{
  "name": "get_product",
  "method": "GET",
  "path": "/products/{id}",
  "title": "Get product",
  "description": "Retrieves the product with the given ID.",
  "group": "products",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, variants."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "variants"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/products/retrieve-product"
}
~~~

#### list_stores

Retrieves a paginated list of all stores.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: products, orders, subscriptions, discounts, license-keys, webhooks. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-stores --help
lemonsqueezy-cli schema list-stores
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: products, orders, subscriptions, discounts, license-keys, webhooks."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /stores**. [Current provider reference](https://docs.lemonsqueezy.com/api/stores/list-all-stores). No native JSON body.

~~~json
{
  "name": "list_stores",
  "method": "GET",
  "path": "/stores",
  "title": "List stores",
  "description": "Retrieves a paginated list of all stores.",
  "group": "stores",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: products, orders, subscriptions, discounts, license-keys, webhooks."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "products",
    "orders",
    "subscriptions",
    "discounts",
    "license-keys",
    "webhooks"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/stores/list-all-stores"
}
~~~

#### get_store

Retrieves the store with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: products, orders, subscriptions, discounts, license-keys, webhooks. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-store --help
lemonsqueezy-cli schema get-store
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: products, orders, subscriptions, discounts, license-keys, webhooks."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /stores/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/stores/retrieve-store). No native JSON body.

~~~json
{
  "name": "get_store",
  "method": "GET",
  "path": "/stores/{id}",
  "title": "Get store",
  "description": "Retrieves the store with the given ID.",
  "group": "stores",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: products, orders, subscriptions, discounts, license-keys, webhooks."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "products",
    "orders",
    "subscriptions",
    "discounts",
    "license-keys",
    "webhooks"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/stores/retrieve-store"
}
~~~

#### generate_subscription_invoice

Generates a new invoice for the given subscription with given parameters.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `name` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `address` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `city` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `state` | string | Optional | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `zip_code` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `country` | string | Required | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `notes` | string | Optional | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `locale` | string | Optional | Native invoice query field; US/CA state is required. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `output_file` | string | Required | Required absolute NEW private file for the signed checkout/invoice URL; exclusive0600, no overwrite. {"minLength": 1} |

~~~bash
lemonsqueezy-cli generate-subscription-invoice --help
lemonsqueezy-cli schema generate-subscription-invoice
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "name": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "address": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "city": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "state": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "zip_code": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "country": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "notes": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "locale": {
      "type": "string",
      "minLength": 1,
      "description": "Native invoice query field; US/CA state is required."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "output_file": {
      "type": "string",
      "minLength": 1,
      "description": "Required absolute NEW private file for the signed checkout/invoice URL; exclusive0600, no overwrite."
    }
  },
  "required": [
    "id",
    "name",
    "address",
    "city",
    "zip_code",
    "country",
    "output_file"
  ],
  "additionalProperties": false
}
~~~

Native request: **POST /subscription-invoices/{id}/generate-invoice**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-invoices/generate-subscription-invoice). No native JSON body; required invoice fields are query parameters.

~~~json
{
  "name": "generate_subscription_invoice",
  "method": "POST",
  "path": "/subscription-invoices/{id}/generate-invoice",
  "title": "Generate subscription invoice",
  "description": "Generates a new invoice for the given subscription with given parameters.",
  "group": "subscription-invoices",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "name",
      "key": "name",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "address",
      "key": "address",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "city",
      "key": "city",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "state",
      "key": "state",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "zip_code",
      "key": "zip_code",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "country",
      "key": "country",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "notes",
      "key": "notes",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "locale",
      "key": "locale",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Native invoice query field; US/CA state is required."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": true,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "subscription",
    "customer",
    "affiliate"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-invoices/generate-subscription-invoice"
}
~~~

#### refund_subscription_invoice

Issue the exact requested partial refund, or an explicitly named full refund. Local approval required; no automatic replay.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `amount` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `full_refund` | boolean | Optional | Explicit full-refund intent. Must be true with no amount; cannot coexist with amount. |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "subscription-invoices"} |
| `payload.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.amount` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli refund-subscription-invoice --help
lemonsqueezy-cli schema refund-subscription-invoice
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "amount": {
      "type": "integer",
      "minimum": 1
    },
    "full_refund": {
      "type": "boolean",
      "description": "Explicit full-refund intent. Must be true with no amount; cannot coexist with amount."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "subscription-invoices"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            },
            "attributes": {
              "type": "object",
              "properties": {
                "amount": {
                  "type": "integer",
                  "minimum": 1
                }
              },
              "required": [],
              "additionalProperties": false
            }
          },
          "required": [
            "type",
            "id",
            "attributes"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **POST /subscription-invoices/{id}/refund**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-invoices/issue-refund). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "refund_subscription_invoice",
  "method": "POST",
  "path": "/subscription-invoices/{id}/refund",
  "title": "Refund subscription invoice",
  "description": "Issue the exact requested partial refund, or an explicitly named full refund. Local approval required; no automatic replay.",
  "group": "subscription-invoices",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "subscription-invoices"
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "Exact opaque native resource ID; no traversal or URL.",
            "pattern": "^[A-Za-z0-9_-]+$",
            "maxLength": 256
          },
          "attributes": {
            "type": "object",
            "properties": {
              "amount": {
                "type": "integer",
                "minimum": 1
              }
            },
            "required": [],
            "additionalProperties": false
          }
        },
        "required": [
          "type",
          "id",
          "attributes"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "amount": {
      "type": "integer",
      "minimum": 1
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "subscription",
    "customer",
    "affiliate"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-invoices/issue-refund"
}
~~~

#### list_subscription_invoices

Returns a paginated list of subscription invoices.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `status` | string | Optional | Exact native filter value. {"minLength": 1} |
| `refunded` | boolean | Optional | Reviewed native/schema value |
| `subscription_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated supported primary relationship names: store, subscription, customer, affiliate. {"minLength": 1} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-subscription-invoices --help
lemonsqueezy-cli schema list-subscription-invoices
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "status": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "refunded": {
      "type": "boolean"
    },
    "subscription_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated supported primary relationship names: store, subscription, customer, affiliate."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /subscription-invoices**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-invoices/list-all-subscription-invoices). No native JSON body.

~~~json
{
  "name": "list_subscription_invoices",
  "method": "GET",
  "path": "/subscription-invoices",
  "title": "List subscription invoices",
  "description": "Returns a paginated list of subscription invoices.",
  "group": "subscription-invoices",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[status]",
      "key": "status",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[refunded]",
      "key": "refunded",
      "schema": {
        "type": "boolean"
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[subscription_id]",
      "key": "subscription_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated supported primary relationship names: store, subscription, customer, affiliate."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "subscription",
    "customer"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-invoices/list-all-subscription-invoices"
}
~~~

#### get_subscription_invoice

Retrieves the subscription invoice with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated supported primary relationship names: store, subscription, customer, affiliate. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-subscription-invoice --help
lemonsqueezy-cli schema get-subscription-invoice
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated supported primary relationship names: store, subscription, customer, affiliate."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /subscription-invoices/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-invoices/retrieve-subscription-invoice). No native JSON body.

~~~json
{
  "name": "get_subscription_invoice",
  "method": "GET",
  "path": "/subscription-invoices/{id}",
  "title": "Get subscription invoice",
  "description": "Retrieves the subscription invoice with the given ID.",
  "group": "subscription-invoices",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated supported primary relationship names: store, subscription, customer, affiliate."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "subscription",
    "customer"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-invoices/retrieve-subscription-invoice"
}
~~~

#### list_subscription_items

Returns a paginated list of subscriptions items.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `price_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated supported primary relationship names: subscription, price, usage-records. {"minLength": 1} |
| `subscription_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-subscription-items --help
lemonsqueezy-cli schema list-subscription-items
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "price_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated supported primary relationship names: subscription, price, usage-records."
    },
    "subscription_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /subscription-items**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-items/list-all-subscription-items). No native JSON body.

~~~json
{
  "name": "list_subscription_items",
  "method": "GET",
  "path": "/subscription-items",
  "title": "List subscription items",
  "description": "Returns a paginated list of subscriptions items.",
  "group": "subscription-items",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[price_id]",
      "key": "price_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated supported primary relationship names: subscription, price, usage-records."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[subscription_id]",
      "key": "subscription_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "subscription",
    "price",
    "usage-records"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-items/list-all-subscription-items"
}
~~~

#### get_subscription_item_current_usage

Retrieves the unit usage for a subscription item for the current billing period.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-subscription-item-current-usage --help
lemonsqueezy-cli schema get-subscription-item-current-usage
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /subscription-items/{id}/current-usage**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-items/retrieve-subscription-item-current-usage). No native JSON body.

~~~json
{
  "name": "get_subscription_item_current_usage",
  "method": "GET",
  "path": "/subscription-items/{id}/current-usage",
  "title": "Get subscription item current usage",
  "description": "Retrieves the unit usage for a subscription item for the current billing period.",
  "group": "subscription-items",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "subscription",
    "price",
    "usage-records"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-items/retrieve-subscription-item-current-usage"
}
~~~

#### get_subscription_item

Retrieves the subscription item with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated supported primary relationship names: subscription, price, usage-records. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-subscription-item --help
lemonsqueezy-cli schema get-subscription-item
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated supported primary relationship names: subscription, price, usage-records."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /subscription-items/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-items/retrieve-subscription-item). No native JSON body.

~~~json
{
  "name": "get_subscription_item",
  "method": "GET",
  "path": "/subscription-items/{id}",
  "title": "Get subscription item",
  "description": "Retrieves the subscription item with the given ID.",
  "group": "subscription-items",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated supported primary relationship names: subscription, price, usage-records."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "subscription",
    "price",
    "usage-records"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-items/retrieve-subscription-item"
}
~~~

#### update_subscription_item

Updates the subscription with the given ID and provided attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `quantity` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `invoice_immediately` | boolean | Optional | Reviewed native/schema value |
| `disable_prorations` | boolean | Optional | Reviewed native/schema value |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "subscription-items"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.quantity` | integer | Required | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.invoice_immediately` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.disable_prorations` | boolean | Optional | Reviewed native/schema value |
| `payload.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli update-subscription-item --help
lemonsqueezy-cli schema update-subscription-item
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "quantity": {
      "type": "integer",
      "minimum": 1
    },
    "invoice_immediately": {
      "type": "boolean"
    },
    "disable_prorations": {
      "type": "boolean"
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "subscription-items"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "quantity": {
                  "type": "integer",
                  "minimum": 1
                },
                "invoice_immediately": {
                  "type": "boolean"
                },
                "disable_prorations": {
                  "type": "boolean"
                }
              },
              "required": [
                "quantity"
              ],
              "additionalProperties": false
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "attributes",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **PATCH /subscription-items/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscription-items/update-subscription-item). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "update_subscription_item",
  "method": "PATCH",
  "path": "/subscription-items/{id}",
  "title": "Update subscription item",
  "description": "Updates the subscription with the given ID and provided attributes.",
  "group": "subscription-items",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "subscription-items"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "quantity": {
                "type": "integer",
                "minimum": 1
              },
              "invoice_immediately": {
                "type": "boolean"
              },
              "disable_prorations": {
                "type": "boolean"
              }
            },
            "required": [
              "quantity"
            ],
            "additionalProperties": false
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "Exact opaque native resource ID; no traversal or URL.",
            "pattern": "^[A-Za-z0-9_-]+$",
            "maxLength": 256
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "quantity": {
      "type": "integer",
      "minimum": 1
    },
    "invoice_immediately": {
      "type": "boolean"
    },
    "disable_prorations": {
      "type": "boolean"
    }
  },
  "attributeRequired": [
    "quantity"
  ],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "subscription",
    "price",
    "usage-records"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscription-items/update-subscription-item"
}
~~~

#### cancel_subscription

Cancels an active subscription.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |

~~~bash
lemonsqueezy-cli cancel-subscription --help
lemonsqueezy-cli schema cancel-subscription
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **DELETE /subscriptions/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscriptions/cancel-subscription). No native JSON body.

~~~json
{
  "name": "cancel_subscription",
  "method": "DELETE",
  "path": "/subscriptions/{id}",
  "title": "Cancel subscription",
  "description": "Cancels an active subscription.",
  "group": "subscriptions",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscriptions/cancel-subscription"
}
~~~

#### list_subscriptions

Returns a paginated list of subscriptions.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `order_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `order_item_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `product_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `variant_id` | string | Optional | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `user_email` | string | Optional | Exact native filter value. {"minLength": 1} |
| `status` | string | Optional | Exact native filter value. {"minLength": 1} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, variant, subscription-items, subscription-invoices. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-subscriptions --help
lemonsqueezy-cli schema list-subscriptions
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "order_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "order_item_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "product_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "variant_id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "user_email": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "status": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, variant, subscription-items, subscription-invoices."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /subscriptions**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscriptions/list-all-subscriptions). No native JSON body.

~~~json
{
  "name": "list_subscriptions",
  "method": "GET",
  "path": "/subscriptions",
  "title": "List subscriptions",
  "description": "Returns a paginated list of subscriptions.",
  "group": "subscriptions",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[order_id]",
      "key": "order_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[order_item_id]",
      "key": "order_item_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[product_id]",
      "key": "product_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[variant_id]",
      "key": "variant_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[user_email]",
      "key": "user_email",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[status]",
      "key": "status",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, variant, subscription-items, subscription-invoices."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "customer",
    "order",
    "order-item",
    "product",
    "variant",
    "subscription-items",
    "subscription-invoices"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscriptions/list-all-subscriptions"
}
~~~

#### get_subscription

Retrieves the subscription with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, variant, subscription-items, subscription-invoices. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-subscription --help
lemonsqueezy-cli schema get-subscription
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, variant, subscription-items, subscription-invoices."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /subscriptions/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscriptions/retrieve-subscription). No native JSON body.

~~~json
{
  "name": "get_subscription",
  "method": "GET",
  "path": "/subscriptions/{id}",
  "title": "Get subscription",
  "description": "Retrieves the subscription with the given ID.",
  "group": "subscriptions",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store, customer, order, order-item, product, variant, subscription-items, subscription-invoices."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store",
    "customer",
    "order",
    "order-item",
    "product",
    "variant",
    "subscription-items",
    "subscription-invoices"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscriptions/retrieve-subscription"
}
~~~

#### update_subscription

Updates the subscription with the given ID and provided attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `variant_id` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `pause` | schema | Optional | Reviewed native/schema value |
| `cancelled` | boolean | Optional | Reviewed native/schema value |
| `trial_ends_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `billing_anchor` | ['integer', 'null'] | Optional | Reviewed native/schema value {"minimum": 0, "maximum": 31} |
| `invoice_immediately` | boolean | Optional | Reviewed native/schema value |
| `disable_prorations` | boolean | Optional | Reviewed native/schema value |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "subscriptions"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.variant_id` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.pause` | schema | Optional | Reviewed native/schema value |
| `payload.data.attributes.cancelled` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.trial_ends_at` | ['string', 'null'] | Optional | Reviewed native/schema value {"format": "date-time"} |
| `payload.data.attributes.billing_anchor` | ['integer', 'null'] | Optional | Reviewed native/schema value {"minimum": 0, "maximum": 31} |
| `payload.data.attributes.invoice_immediately` | boolean | Optional | Reviewed native/schema value |
| `payload.data.attributes.disable_prorations` | boolean | Optional | Reviewed native/schema value |
| `payload.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli update-subscription --help
lemonsqueezy-cli schema update-subscription
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "variant_id": {
      "type": "integer",
      "minimum": 1
    },
    "pause": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "object",
          "properties": {
            "mode": {
              "type": "string",
              "enum": [
                "void",
                "free"
              ]
            },
            "resumes_at": {
              "type": [
                "string",
                "null"
              ],
              "format": "date-time"
            }
          },
          "required": [
            "mode"
          ],
          "additionalProperties": false
        }
      ]
    },
    "cancelled": {
      "type": "boolean"
    },
    "trial_ends_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "billing_anchor": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0,
      "maximum": 31
    },
    "invoice_immediately": {
      "type": "boolean"
    },
    "disable_prorations": {
      "type": "boolean"
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "subscriptions"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "variant_id": {
                  "type": "integer",
                  "minimum": 1
                },
                "pause": {
                  "anyOf": [
                    {
                      "type": "null"
                    },
                    {
                      "type": "object",
                      "properties": {
                        "mode": {
                          "type": "string",
                          "enum": [
                            "void",
                            "free"
                          ]
                        },
                        "resumes_at": {
                          "type": [
                            "string",
                            "null"
                          ],
                          "format": "date-time"
                        }
                      },
                      "required": [
                        "mode"
                      ],
                      "additionalProperties": false
                    }
                  ]
                },
                "cancelled": {
                  "type": "boolean"
                },
                "trial_ends_at": {
                  "type": [
                    "string",
                    "null"
                  ],
                  "format": "date-time"
                },
                "billing_anchor": {
                  "type": [
                    "integer",
                    "null"
                  ],
                  "minimum": 0,
                  "maximum": 31
                },
                "invoice_immediately": {
                  "type": "boolean"
                },
                "disable_prorations": {
                  "type": "boolean"
                }
              },
              "required": [],
              "additionalProperties": false
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "attributes",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **PATCH /subscriptions/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/subscriptions/update-subscription). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "update_subscription",
  "method": "PATCH",
  "path": "/subscriptions/{id}",
  "title": "Update subscription",
  "description": "Updates the subscription with the given ID and provided attributes.",
  "group": "subscriptions",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "subscriptions"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "variant_id": {
                "type": "integer",
                "minimum": 1
              },
              "pause": {
                "anyOf": [
                  {
                    "type": "null"
                  },
                  {
                    "type": "object",
                    "properties": {
                      "mode": {
                        "type": "string",
                        "enum": [
                          "void",
                          "free"
                        ]
                      },
                      "resumes_at": {
                        "type": [
                          "string",
                          "null"
                        ],
                        "format": "date-time"
                      }
                    },
                    "required": [
                      "mode"
                    ],
                    "additionalProperties": false
                  }
                ]
              },
              "cancelled": {
                "type": "boolean"
              },
              "trial_ends_at": {
                "type": [
                  "string",
                  "null"
                ],
                "format": "date-time"
              },
              "billing_anchor": {
                "type": [
                  "integer",
                  "null"
                ],
                "minimum": 0,
                "maximum": 31
              },
              "invoice_immediately": {
                "type": "boolean"
              },
              "disable_prorations": {
                "type": "boolean"
              }
            },
            "required": [],
            "additionalProperties": false
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "Exact opaque native resource ID; no traversal or URL.",
            "pattern": "^[A-Za-z0-9_-]+$",
            "maxLength": 256
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "variant_id": {
      "type": "integer",
      "minimum": 1
    },
    "pause": {
      "anyOf": [
        {
          "type": "null"
        },
        {
          "type": "object",
          "properties": {
            "mode": {
              "type": "string",
              "enum": [
                "void",
                "free"
              ]
            },
            "resumes_at": {
              "type": [
                "string",
                "null"
              ],
              "format": "date-time"
            }
          },
          "required": [
            "mode"
          ],
          "additionalProperties": false
        }
      ]
    },
    "cancelled": {
      "type": "boolean"
    },
    "trial_ends_at": {
      "type": [
        "string",
        "null"
      ],
      "format": "date-time"
    },
    "billing_anchor": {
      "type": [
        "integer",
        "null"
      ],
      "minimum": 0,
      "maximum": 31
    },
    "invoice_immediately": {
      "type": "boolean"
    },
    "disable_prorations": {
      "type": "boolean"
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/subscriptions/update-subscription"
}
~~~

#### create_usage_record

Create a usage record.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `quantity` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `action` | string | Optional | Reviewed native/schema value {"enum": ["increment", "set"]} |
| `subscription_item_id` | string | Optional | Reviewed native/schema value {"pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "usage-records"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.quantity` | integer | Required | Reviewed native/schema value {"minimum": 1} |
| `payload.data.attributes.action` | string | Optional | Reviewed native/schema value {"enum": ["increment", "set"]} |
| `payload.data.relationships` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.subscription-item` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.subscription-item.data` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.subscription-item.data.type` | schema | Required | Reviewed native/schema value {"const": "subscription-items"} |
| `payload.data.relationships.subscription-item.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli create-usage-record --help
lemonsqueezy-cli schema create-usage-record
~~~

~~~json
{
  "type": "object",
  "properties": {
    "quantity": {
      "type": "integer",
      "minimum": 1
    },
    "action": {
      "type": "string",
      "enum": [
        "increment",
        "set"
      ]
    },
    "subscription_item_id": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_-]+$"
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "usage-records"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "quantity": {
                  "type": "integer",
                  "minimum": 1
                },
                "action": {
                  "type": "string",
                  "enum": [
                    "increment",
                    "set"
                  ]
                }
              },
              "required": [
                "quantity"
              ],
              "additionalProperties": false
            },
            "relationships": {
              "type": "object",
              "properties": {
                "subscription-item": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "const": "subscription-items"
                        },
                        "id": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Exact opaque native resource ID; no traversal or URL.",
                          "pattern": "^[A-Za-z0-9_-]+$",
                          "maxLength": 256
                        }
                      },
                      "required": [
                        "type",
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "required": [
                    "data"
                  ],
                  "additionalProperties": false
                }
              },
              "required": [
                "subscription-item"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "type",
            "attributes",
            "relationships"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /usage-records**. [Current provider reference](https://docs.lemonsqueezy.com/api/usage-records/create-usage-record). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "create_usage_record",
  "method": "POST",
  "path": "/usage-records",
  "title": "Create usage record",
  "description": "Create a usage record.",
  "group": "usage-records",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "usage-records"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "quantity": {
                "type": "integer",
                "minimum": 1
              },
              "action": {
                "type": "string",
                "enum": [
                  "increment",
                  "set"
                ]
              }
            },
            "required": [
              "quantity"
            ],
            "additionalProperties": false
          },
          "relationships": {
            "type": "object",
            "properties": {
              "subscription-item": {
                "type": "object",
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "const": "subscription-items"
                      },
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "description": "Exact opaque native resource ID; no traversal or URL.",
                        "pattern": "^[A-Za-z0-9_-]+$",
                        "maxLength": 256
                      }
                    },
                    "required": [
                      "type",
                      "id"
                    ],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "data"
                ],
                "additionalProperties": false
              }
            },
            "required": [
              "subscription-item"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "type",
          "attributes",
          "relationships"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "quantity": {
      "type": "integer",
      "minimum": 1
    },
    "action": {
      "type": "string",
      "enum": [
        "increment",
        "set"
      ]
    }
  },
  "attributeRequired": [
    "quantity"
  ],
  "relationships": {
    "subscription-item": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "subscription-items"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false
    }
  },
  "relationshipRequired": [
    "subscription-item"
  ],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/usage-records/create-usage-record"
}
~~~

#### list_usage_records

Returns a paginated list of usage records.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `subscription_item_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: subscription-item. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-usage-records --help
lemonsqueezy-cli schema list-usage-records
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "subscription_item_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: subscription-item."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /usage-records**. [Current provider reference](https://docs.lemonsqueezy.com/api/usage-records/list-all-usage-records). No native JSON body.

~~~json
{
  "name": "list_usage_records",
  "method": "GET",
  "path": "/usage-records",
  "title": "List usage records",
  "description": "Returns a paginated list of usage records.",
  "group": "usage-records",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[subscription_item_id]",
      "key": "subscription_item_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: subscription-item."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "subscription-item"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/usage-records/list-all-usage-records"
}
~~~

#### get_usage_record

Retrieves the usage record with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: subscription-item. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-usage-record --help
lemonsqueezy-cli schema get-usage-record
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: subscription-item."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /usage-records/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/usage-records/retrieve-usage-record). No native JSON body.

~~~json
{
  "name": "get_usage_record",
  "method": "GET",
  "path": "/usage-records/{id}",
  "title": "Get usage record",
  "description": "Retrieves the usage record with the given ID.",
  "group": "usage-records",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: subscription-item."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "subscription-item"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/usage-records/retrieve-usage-record"
}
~~~

#### get_user

Retrieves the currently authenticated user.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-user --help
lemonsqueezy-cli schema get-user
~~~

~~~json
{
  "type": "object",
  "properties": {
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /users/me**. [Current provider reference](https://docs.lemonsqueezy.com/api/users/retrieve-user). No native JSON body.

~~~json
{
  "name": "get_user",
  "method": "GET",
  "path": "/users/me",
  "title": "Get user",
  "description": "Retrieves the currently authenticated user.",
  "group": "users",
  "risk": "read",
  "params": [],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/users/retrieve-user"
}
~~~

#### list_variants

Retrieves a paginated list of variants.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `status` | string | Optional | Exact native filter value. {"minLength": 1} |
| `product_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: product, files, price-model. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-variants --help
lemonsqueezy-cli schema list-variants
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "status": {
      "type": "string",
      "minLength": 1,
      "description": "Exact native filter value."
    },
    "product_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: product, files, price-model."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /variants**. [Current provider reference](https://docs.lemonsqueezy.com/api/variants/list-all-variants). No native JSON body.

~~~json
{
  "name": "list_variants",
  "method": "GET",
  "path": "/variants",
  "title": "List variants",
  "description": "Retrieves a paginated list of variants.",
  "group": "variants",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[status]",
      "key": "status",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact native filter value."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[product_id]",
      "key": "product_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: product, files, price-model."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "product",
    "files",
    "price-model"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/variants/list-all-variants"
}
~~~

#### get_variant

Retrieves the variant with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: product, files, price-model. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-variant --help
lemonsqueezy-cli schema get-variant
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: product, files, price-model."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /variants/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/variants/retrieve-variant). No native JSON body.

~~~json
{
  "name": "get_variant",
  "method": "GET",
  "path": "/variants/{id}",
  "title": "Get variant",
  "description": "Retrieves the variant with the given ID.",
  "group": "variants",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: product, files, price-model."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "product",
    "files",
    "price-model"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/variants/retrieve-variant"
}
~~~

#### create_webhook

Creates a webhook.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `url` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "uri"} |
| `events` | array | Optional | Reviewed native/schema value {"minItems": 1, "maxItems": 100} |
| `secret` | string | Optional | Private signing secret; prefer payload_file. Never echo or log. {"minLength": 1} |
| `test_mode` | boolean | Optional | Reviewed native/schema value |
| `store_id` | string | Optional | Reviewed native/schema value {"pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "webhooks"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.url` | string | Required | Reviewed native/schema value {"minLength": 1, "format": "uri"} |
| `payload.data.attributes.events` | array | Required | Reviewed native/schema value {"minItems": 1, "maxItems": 100} |
| `payload.data.attributes.secret` | string | Required | Private signing secret; prefer payload_file. Never echo or log. {"minLength": 1} |
| `payload.data.attributes.test_mode` | boolean | Optional | Reviewed native/schema value |
| `payload.data.relationships` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data` | object | Required | Reviewed native/schema value |
| `payload.data.relationships.store.data.type` | schema | Required | Reviewed native/schema value {"const": "stores"} |
| `payload.data.relationships.store.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli create-webhook --help
lemonsqueezy-cli schema create-webhook
~~~

~~~json
{
  "type": "object",
  "properties": {
    "url": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "uri"
    },
    "events": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": ""
      }
    },
    "secret": {
      "type": "string",
      "minLength": 1,
      "description": "Private signing secret; prefer payload_file. Never echo or log."
    },
    "test_mode": {
      "type": "boolean"
    },
    "store_id": {
      "type": "string",
      "pattern": "^[A-Za-z0-9_-]+$"
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "webhooks"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string",
                  "minLength": 1,
                  "description": "",
                  "format": "uri"
                },
                "events": {
                  "type": "array",
                  "minItems": 1,
                  "maxItems": 100,
                  "items": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  }
                },
                "secret": {
                  "type": "string",
                  "minLength": 1,
                  "description": "Private signing secret; prefer payload_file. Never echo or log."
                },
                "test_mode": {
                  "type": "boolean"
                }
              },
              "required": [
                "url",
                "events",
                "secret"
              ],
              "additionalProperties": false
            },
            "relationships": {
              "type": "object",
              "properties": {
                "store": {
                  "type": "object",
                  "properties": {
                    "data": {
                      "type": "object",
                      "properties": {
                        "type": {
                          "const": "stores"
                        },
                        "id": {
                          "type": "string",
                          "minLength": 1,
                          "description": "Exact opaque native resource ID; no traversal or URL.",
                          "pattern": "^[A-Za-z0-9_-]+$",
                          "maxLength": 256
                        }
                      },
                      "required": [
                        "type",
                        "id"
                      ],
                      "additionalProperties": false
                    }
                  },
                  "required": [
                    "data"
                  ],
                  "additionalProperties": false
                }
              },
              "required": [
                "store"
              ],
              "additionalProperties": false
            }
          },
          "required": [
            "type",
            "attributes",
            "relationships"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **POST /webhooks**. [Current provider reference](https://docs.lemonsqueezy.com/api/webhooks/create-webhook). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "create_webhook",
  "method": "POST",
  "path": "/webhooks",
  "title": "Create webhook",
  "description": "Creates a webhook.",
  "group": "webhooks",
  "risk": "destructive",
  "params": [],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "webhooks"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "format": "uri"
              },
              "events": {
                "type": "array",
                "minItems": 1,
                "maxItems": 100,
                "items": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                }
              },
              "secret": {
                "type": "string",
                "minLength": 1,
                "description": "Private signing secret; prefer payload_file. Never echo or log."
              },
              "test_mode": {
                "type": "boolean"
              }
            },
            "required": [
              "url",
              "events",
              "secret"
            ],
            "additionalProperties": false
          },
          "relationships": {
            "type": "object",
            "properties": {
              "store": {
                "type": "object",
                "properties": {
                  "data": {
                    "type": "object",
                    "properties": {
                      "type": {
                        "const": "stores"
                      },
                      "id": {
                        "type": "string",
                        "minLength": 1,
                        "description": "Exact opaque native resource ID; no traversal or URL.",
                        "pattern": "^[A-Za-z0-9_-]+$",
                        "maxLength": 256
                      }
                    },
                    "required": [
                      "type",
                      "id"
                    ],
                    "additionalProperties": false
                  }
                },
                "required": [
                  "data"
                ],
                "additionalProperties": false
              }
            },
            "required": [
              "store"
            ],
            "additionalProperties": false
          }
        },
        "required": [
          "type",
          "attributes",
          "relationships"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "url": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "uri"
    },
    "events": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": ""
      }
    },
    "secret": {
      "type": "string",
      "minLength": 1,
      "description": "Private signing secret; prefer payload_file. Never echo or log."
    },
    "test_mode": {
      "type": "boolean"
    }
  },
  "attributeRequired": [
    "url",
    "events",
    "secret"
  ],
  "relationships": {
    "store": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "stores"
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false
    }
  },
  "relationshipRequired": [
    "store"
  ],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/webhooks/create-webhook"
}
~~~

#### delete_webhook

Delete a webhook with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |

~~~bash
lemonsqueezy-cli delete-webhook --help
lemonsqueezy-cli schema delete-webhook
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **DELETE /webhooks/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/webhooks/delete-webhook). No native JSON body.

~~~json
{
  "name": "delete_webhook",
  "method": "DELETE",
  "path": "/webhooks/{id}",
  "title": "Delete webhook",
  "description": "Delete a webhook with the given ID.",
  "group": "webhooks",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/webhooks/delete-webhook"
}
~~~

#### list_webhooks

Returns a paginated list of webhooks.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `page` | integer | Optional | Reviewed native/schema value {"minimum": 1} |
| `per_page` | integer | Optional | Native page size; default10, max100. {"minimum": 1, "maximum": 100} |
| `store_id` | string | Optional | Exact native resource ID. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli list-webhooks --help
lemonsqueezy-cli schema list-webhooks
~~~

~~~json
{
  "type": "object",
  "properties": {
    "page": {
      "type": "integer",
      "minimum": 1
    },
    "per_page": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Native page size; default10, max100."
    },
    "store_id": {
      "type": "string",
      "minLength": 1,
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256,
      "description": "Exact native resource ID."
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [],
  "additionalProperties": false
}
~~~

Native request: **GET /webhooks**. [Current provider reference](https://docs.lemonsqueezy.com/api/webhooks/list-all-webhooks). No native JSON body.

~~~json
{
  "name": "list_webhooks",
  "method": "GET",
  "path": "/webhooks",
  "title": "List webhooks",
  "description": "Returns a paginated list of webhooks.",
  "group": "webhooks",
  "risk": "read",
  "params": [
    {
      "name": "page[number]",
      "key": "page",
      "schema": {
        "type": "integer",
        "minimum": 1
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "page[size]",
      "key": "per_page",
      "schema": {
        "type": "integer",
        "minimum": 1,
        "maximum": 100,
        "description": "Native page size; default10, max100."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "filter[store_id]",
      "key": "store_id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256,
        "description": "Exact native resource ID."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/webhooks/list-all-webhooks"
}
~~~

#### get_webhook

Retrieves the webhook with the given ID.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `include` | string | Optional | Comma-separated native relationships from pinned official SDK: store. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |

~~~bash
lemonsqueezy-cli get-webhook --help
lemonsqueezy-cli schema get-webhook
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "include": {
      "type": "string",
      "minLength": 1,
      "description": "Comma-separated native relationships from pinned official SDK: store."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **GET /webhooks/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/webhooks/retrieve-webhook). No native JSON body.

~~~json
{
  "name": "get_webhook",
  "method": "GET",
  "path": "/webhooks/{id}",
  "title": "Get webhook",
  "description": "Retrieves the webhook with the given ID.",
  "group": "webhooks",
  "risk": "read",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    },
    {
      "name": "include",
      "key": "include",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Comma-separated native relationships from pinned official SDK: store."
      },
      "in": "query",
      "required": false,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": null,
  "bodyRequired": false,
  "privateOutput": false,
  "attributes": {},
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [
    "store"
  ],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/webhooks/retrieve-webhook"
}
~~~

#### update_webhook

Updates the webhook with the given ID and provided attributes.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `url` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "uri"} |
| `events` | array | Optional | Reviewed native/schema value {"minItems": 1, "maxItems": 100} |
| `secret` | string | Optional | Private replacement signing secret; prefer payload_file. {"minLength": 1} |
| `account` | string | Optional | Exact private profile label. Does not prove store ownership; mode applies to the main API key only. |
| `confirm` | boolean | Optional | Explicit approval for this requested effect, including private output files. |
| `payload` | object | Optional | Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input. |
| `payload.data` | object | Required | Reviewed native/schema value |
| `payload.data.type` | schema | Required | Reviewed native/schema value {"const": "webhooks"} |
| `payload.data.attributes` | object | Required | Reviewed native/schema value |
| `payload.data.attributes.url` | string | Optional | Reviewed native/schema value {"minLength": 1, "format": "uri"} |
| `payload.data.attributes.events` | array | Optional | Reviewed native/schema value {"minItems": 1, "maxItems": 100} |
| `payload.data.attributes.secret` | string | Optional | Private replacement signing secret; prefer payload_file. {"minLength": 1} |
| `payload.data.id` | string | Required | Exact opaque native resource ID; no traversal or URL. {"minLength": 1, "maxLength": 256, "pattern": "^[A-Za-z0-9_-]+$"} |
| `payload_file` | string | Optional | Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags. {"minLength": 1} |

~~~bash
lemonsqueezy-cli update-webhook --help
lemonsqueezy-cli schema update-webhook
~~~

~~~json
{
  "type": "object",
  "properties": {
    "id": {
      "type": "string",
      "minLength": 1,
      "description": "Exact opaque native resource ID; no traversal or URL.",
      "pattern": "^[A-Za-z0-9_-]+$",
      "maxLength": 256
    },
    "url": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "uri"
    },
    "events": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": ""
      }
    },
    "secret": {
      "type": "string",
      "minLength": 1,
      "description": "Private replacement signing secret; prefer payload_file."
    },
    "account": {
      "type": "string",
      "description": "Exact private profile label. Does not prove store ownership; mode applies to the main API key only."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this requested effect, including private output files."
    },
    "payload": {
      "type": "object",
      "properties": {
        "data": {
          "type": "object",
          "properties": {
            "type": {
              "const": "webhooks"
            },
            "attributes": {
              "type": "object",
              "properties": {
                "url": {
                  "type": "string",
                  "minLength": 1,
                  "description": "",
                  "format": "uri"
                },
                "events": {
                  "type": "array",
                  "minItems": 1,
                  "maxItems": 100,
                  "items": {
                    "type": "string",
                    "minLength": 1,
                    "description": ""
                  }
                },
                "secret": {
                  "type": "string",
                  "minLength": 1,
                  "description": "Private replacement signing secret; prefer payload_file."
                }
              },
              "required": [],
              "additionalProperties": false
            },
            "id": {
              "type": "string",
              "minLength": 1,
              "description": "Exact opaque native resource ID; no traversal or URL.",
              "pattern": "^[A-Za-z0-9_-]+$",
              "maxLength": 256
            }
          },
          "required": [
            "type",
            "attributes",
            "id"
          ],
          "additionalProperties": false
        }
      },
      "required": [
        "data"
      ],
      "additionalProperties": false,
      "description": "Complete native JSON object body. JSON:API uses data/type/id/attributes/relationships. No mixing with body flags or payload_file. License credential is private configuration, never body input."
    },
    "payload_file": {
      "type": "string",
      "minLength": 1,
      "description": "Absolute regular non-symlink native JSON body file at most 1 MiB; cannot mix with payload or body flags."
    }
  },
  "required": [
    "id"
  ],
  "additionalProperties": false
}
~~~

Native request: **PATCH /webhooks/{id}**. [Current provider reference](https://docs.lemonsqueezy.com/api/webhooks/update-webhook). Use native body flags OR payload OR payload_file; never mixed.

~~~json
{
  "name": "update_webhook",
  "method": "PATCH",
  "path": "/webhooks/{id}",
  "title": "Update webhook",
  "description": "Updates the webhook with the given ID and provided attributes.",
  "group": "webhooks",
  "risk": "destructive",
  "params": [
    {
      "name": "id",
      "key": "id",
      "schema": {
        "type": "string",
        "minLength": 1,
        "description": "Exact opaque native resource ID; no traversal or URL.",
        "pattern": "^[A-Za-z0-9_-]+$",
        "maxLength": 256
      },
      "in": "path",
      "required": true,
      "style": "form",
      "explode": false
    }
  ],
  "bodySchema": {
    "type": "object",
    "properties": {
      "data": {
        "type": "object",
        "properties": {
          "type": {
            "const": "webhooks"
          },
          "attributes": {
            "type": "object",
            "properties": {
              "url": {
                "type": "string",
                "minLength": 1,
                "description": "",
                "format": "uri"
              },
              "events": {
                "type": "array",
                "minItems": 1,
                "maxItems": 100,
                "items": {
                  "type": "string",
                  "minLength": 1,
                  "description": ""
                }
              },
              "secret": {
                "type": "string",
                "minLength": 1,
                "description": "Private replacement signing secret; prefer payload_file."
              }
            },
            "required": [],
            "additionalProperties": false
          },
          "id": {
            "type": "string",
            "minLength": 1,
            "description": "Exact opaque native resource ID; no traversal or URL.",
            "pattern": "^[A-Za-z0-9_-]+$",
            "maxLength": 256
          }
        },
        "required": [
          "type",
          "attributes",
          "id"
        ],
        "additionalProperties": false
      }
    },
    "required": [
      "data"
    ],
    "additionalProperties": false
  },
  "bodyRequired": true,
  "privateOutput": false,
  "attributes": {
    "url": {
      "type": "string",
      "minLength": 1,
      "description": "",
      "format": "uri"
    },
    "events": {
      "type": "array",
      "minItems": 1,
      "maxItems": 100,
      "items": {
        "type": "string",
        "minLength": 1,
        "description": ""
      }
    },
    "secret": {
      "type": "string",
      "minLength": 1,
      "description": "Private replacement signing secret; prefer payload_file."
    }
  },
  "attributeRequired": [],
  "relationships": {},
  "relationshipRequired": [],
  "includes": [],
  "licenseAPI": false,
  "source": "https://docs.lemonsqueezy.com/api/webhooks/update-webhook"
}
~~~

#### list_accounts

Local profile labels/default/auth method only. No keys, token paths, provider identity or network request.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |

~~~bash
lemonsqueezy-cli list-accounts --help
lemonsqueezy-cli schema list-accounts
~~~

~~~json
{
  "type": "object",
  "properties": {},
  "required": [],
  "additionalProperties": false
}
~~~

#### get_operation_schema

Local reviewed method/path/query/body schema and provenance for one native tool. No credentials or provider request.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `operation` | string | Required | Exact native tool name, e.g. update_subscription or refund_order. {"enum": ["list_affiliates", "get_affiliate", "create_checkout", "list_checkouts", "get_checkout", "create_customer", "list_customers", "get_customer", "update_customer", "list_discount_redemptions", "get_discount_redemption", "create_discount", "delete_discount", "list_discounts", "get_discount", "list_files", "get_file", "activate_license", "deactivate_license", "validate_license", "list_license_key_instances", "get_license_key_instance", "list_license_keys", "get_license_key", "update_license_key", "list_order_items", "get_order_item", "generate_order_invoice", "refund_order", "list_orders", "get_order", "list_prices", "get_price", "list_products", "get_product", "list_stores", "get_store", "generate_subscription_invoice", "refund_subscription_invoice", "list_subscription_invoices", "get_subscription_invoice", "list_subscription_items", "get_subscription_item_current_usage", "get_subscription_item", "update_subscription_item", "cancel_subscription", "list_subscriptions", "get_subscription", "update_subscription", "create_usage_record", "list_usage_records", "get_usage_record", "get_user", "list_variants", "get_variant", "create_webhook", "delete_webhook", "list_webhooks", "get_webhook", "update_webhook"]} |

~~~bash
lemonsqueezy-cli get-operation-schema --help
lemonsqueezy-cli schema get-operation-schema
~~~

~~~json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "list_affiliates",
        "get_affiliate",
        "create_checkout",
        "list_checkouts",
        "get_checkout",
        "create_customer",
        "list_customers",
        "get_customer",
        "update_customer",
        "list_discount_redemptions",
        "get_discount_redemption",
        "create_discount",
        "delete_discount",
        "list_discounts",
        "get_discount",
        "list_files",
        "get_file",
        "activate_license",
        "deactivate_license",
        "validate_license",
        "list_license_key_instances",
        "get_license_key_instance",
        "list_license_keys",
        "get_license_key",
        "update_license_key",
        "list_order_items",
        "get_order_item",
        "generate_order_invoice",
        "refund_order",
        "list_orders",
        "get_order",
        "list_prices",
        "get_price",
        "list_products",
        "get_product",
        "list_stores",
        "get_store",
        "generate_subscription_invoice",
        "refund_subscription_invoice",
        "list_subscription_invoices",
        "get_subscription_invoice",
        "list_subscription_items",
        "get_subscription_item_current_usage",
        "get_subscription_item",
        "update_subscription_item",
        "cancel_subscription",
        "list_subscriptions",
        "get_subscription",
        "update_subscription",
        "create_usage_record",
        "list_usage_records",
        "get_usage_record",
        "get_user",
        "list_variants",
        "get_variant",
        "create_webhook",
        "delete_webhook",
        "list_webhooks",
        "get_webhook",
        "update_webhook"
      ],
      "description": "Exact native tool name, e.g. update_subscription or refund_order."
    }
  },
  "required": [
    "operation"
  ],
  "additionalProperties": false
}
~~~

#### preview_commerce_batch

Local validation and SHA-256 of exact inputs, request order, selected profile label/mode and reviewed native schema. No provider requests, secret load, store ownership check or financial guarantee.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `tasks` | array | Required | One to twenty exact ordered commerce effects. No signed-output operations or mutable payload files. Financial effects require explicit native amount/full-refund intent; subscription changes can charge or alter recurring billing. {"minItems": 1, "maxItems": 20} |
| `tasks[].tool` | string | Required | Reviewed native/schema value {"enum": ["create_customer", "update_customer", "create_discount", "delete_discount", "activate_license", "deactivate_license", "update_license_key", "refund_order", "refund_subscription_invoice", "update_subscription_item", "cancel_subscription", "update_subscription", "create_usage_record", "create_webhook", "delete_webhook", "update_webhook"]} |
| `tasks[].arguments` | object | Required | Native arguments without account, confirm, payload_file or output_file. |
| `account` | string | Optional | Exact selected private account profile; binds label, not key ownership. |

~~~bash
lemonsqueezy-cli preview-commerce-batch --help
lemonsqueezy-cli schema preview-commerce-batch
~~~

~~~json
{
  "type": "object",
  "properties": {
    "tasks": {
      "type": "array",
      "minItems": 1,
      "maxItems": 20,
      "description": "One to twenty exact ordered commerce effects. No signed-output operations or mutable payload files. Financial effects require explicit native amount/full-refund intent; subscription changes can charge or alter recurring billing.",
      "items": {
        "type": "object",
        "properties": {
          "tool": {
            "type": "string",
            "enum": [
              "create_customer",
              "update_customer",
              "create_discount",
              "delete_discount",
              "activate_license",
              "deactivate_license",
              "update_license_key",
              "refund_order",
              "refund_subscription_invoice",
              "update_subscription_item",
              "cancel_subscription",
              "update_subscription",
              "create_usage_record",
              "create_webhook",
              "delete_webhook",
              "update_webhook"
            ]
          },
          "arguments": {
            "type": "object",
            "description": "Native arguments without account, confirm, payload_file or output_file."
          }
        },
        "required": [
          "tool",
          "arguments"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact selected private account profile; binds label, not key ownership."
    }
  },
  "required": [
    "tasks"
  ],
  "additionalProperties": false
}
~~~

#### submit_commerce_batch

Confirmed one-to-twenty ordered effects. Prevalidate all and check the exact review hash before the first request. Stop on first failure with known results and unattempted indices; no retry, transaction, rollback or implicit continuation.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `tasks` | array | Required | One to twenty exact ordered commerce effects. No signed-output operations or mutable payload files. Financial effects require explicit native amount/full-refund intent; subscription changes can charge or alter recurring billing. {"minItems": 1, "maxItems": 20} |
| `tasks[].tool` | string | Required | Reviewed native/schema value {"enum": ["create_customer", "update_customer", "create_discount", "delete_discount", "activate_license", "deactivate_license", "update_license_key", "refund_order", "refund_subscription_invoice", "update_subscription_item", "cancel_subscription", "update_subscription", "create_usage_record", "create_webhook", "delete_webhook", "update_webhook"]} |
| `tasks[].arguments` | object | Required | Native arguments without account, confirm, payload_file or output_file. |
| `account` | string | Optional | Exact selected private account profile; binds label, not key ownership. |
| `confirm` | boolean | Optional | Explicit approval for this exact requested ordered batch. |
| `review_sha256` | string | Required | Exact preview_commerce_batch hash for identical tasks, selected profile/mode/schema/order. {"pattern": "^[a-f0-9]{64}$"} |

~~~bash
lemonsqueezy-cli submit-commerce-batch --help
lemonsqueezy-cli schema submit-commerce-batch
~~~

~~~json
{
  "type": "object",
  "properties": {
    "tasks": {
      "type": "array",
      "minItems": 1,
      "maxItems": 20,
      "description": "One to twenty exact ordered commerce effects. No signed-output operations or mutable payload files. Financial effects require explicit native amount/full-refund intent; subscription changes can charge or alter recurring billing.",
      "items": {
        "type": "object",
        "properties": {
          "tool": {
            "type": "string",
            "enum": [
              "create_customer",
              "update_customer",
              "create_discount",
              "delete_discount",
              "activate_license",
              "deactivate_license",
              "update_license_key",
              "refund_order",
              "refund_subscription_invoice",
              "update_subscription_item",
              "cancel_subscription",
              "update_subscription",
              "create_usage_record",
              "create_webhook",
              "delete_webhook",
              "update_webhook"
            ]
          },
          "arguments": {
            "type": "object",
            "description": "Native arguments without account, confirm, payload_file or output_file."
          }
        },
        "required": [
          "tool",
          "arguments"
        ],
        "additionalProperties": false
      }
    },
    "account": {
      "type": "string",
      "description": "Exact selected private account profile; binds label, not key ownership."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this exact requested ordered batch."
    },
    "review_sha256": {
      "type": "string",
      "pattern": "^[a-f0-9]{64}$",
      "description": "Exact preview_commerce_batch hash for identical tasks, selected profile/mode/schema/order."
    }
  },
  "required": [
    "tasks",
    "review_sha256"
  ],
  "additionalProperties": false
}
~~~

#### export_resources

Confirmed paginated JSON:API export to a new exclusive0600 file. Preserves data and included resources while redacting credentials/signed URLs. Uses native page counters, never follows links, downloads files or promises an atomic backup.

| Argument | Type | Required | Meaning and constraints |
| --- | --- | --- | --- |
| `operation` | string | Required | Reviewed native/schema value {"enum": ["list_affiliates", "list_checkouts", "list_customers", "list_discount_redemptions", "list_discounts", "list_files", "list_license_key_instances", "list_license_keys", "list_order_items", "list_orders", "list_prices", "list_products", "list_stores", "list_subscription_invoices", "list_subscription_items", "list_subscriptions", "list_usage_records", "list_variants", "list_webhooks"]} |
| `arguments` | object | Optional | Actual selected list-operation filters/page/per_page/include only; no profile override. |
| `account` | string | Optional | Exact selected private account profile; binds label, not key ownership. |
| `confirm` | boolean | Optional | Explicit approval for this exact requested ordered batch. |
| `start_offset` | integer | Optional | Reviewed native/schema value {"minimum": 0, "maximum": 99} |
| `max_pages` | integer | Optional | Local budget default10. {"minimum": 1, "maximum": 100} |
| `max_items` | integer | Optional | Local budget default1000. {"minimum": 1, "maximum": 10000} |
| `output_file` | string | Required | Reviewed native/schema value {"minLength": 1} |

~~~bash
lemonsqueezy-cli export-resources --help
lemonsqueezy-cli schema export-resources
~~~

~~~json
{
  "type": "object",
  "properties": {
    "operation": {
      "type": "string",
      "enum": [
        "list_affiliates",
        "list_checkouts",
        "list_customers",
        "list_discount_redemptions",
        "list_discounts",
        "list_files",
        "list_license_key_instances",
        "list_license_keys",
        "list_order_items",
        "list_orders",
        "list_prices",
        "list_products",
        "list_stores",
        "list_subscription_invoices",
        "list_subscription_items",
        "list_subscriptions",
        "list_usage_records",
        "list_variants",
        "list_webhooks"
      ]
    },
    "arguments": {
      "type": "object",
      "description": "Actual selected list-operation filters/page/per_page/include only; no profile override."
    },
    "account": {
      "type": "string",
      "description": "Exact selected private account profile; binds label, not key ownership."
    },
    "confirm": {
      "type": "boolean",
      "description": "Explicit approval for this exact requested ordered batch."
    },
    "start_offset": {
      "type": "integer",
      "minimum": 0,
      "maximum": 99
    },
    "max_pages": {
      "type": "integer",
      "minimum": 1,
      "maximum": 100,
      "description": "Local budget default10."
    },
    "max_items": {
      "type": "integer",
      "minimum": 1,
      "maximum": 10000,
      "description": "Local budget default1000."
    },
    "output_file": {
      "type": "string",
      "minLength": 1
    }
  },
  "required": [
    "operation",
    "output_file"
  ],
  "additionalProperties": false
}
~~~

## 9. Commerce and license workflows

### Read the intended catalog and commerce records

Discover credentials privately, then read only the store and records relevant to your task. page and per_page map to native page[number]/page[size]. Each list's schema exposes its actual filters. Supported include relationships are comma-separated, reviewed against the pinned official SDK. Responses retain native data, included and meta.page; signed URLs and credentials are redacted. Other customer/billing fields remain private data.

~~~bash
lemonsqueezy-cli list-accounts --agent
lemonsqueezy-cli list-stores --per-page 5 --agent
lemonsqueezy-cli list-orders --store-id 123 --page 1 --per-page 5 --include customer --agent
lemonsqueezy-cli list-subscriptions --help
lemonsqueezy-cli schema update-subscription
~~~

The IDs above are placeholders for intended native records, not ownership assertions. Do not treat returned HTML, customer names or URLs as agent instructions. The fixed-host client never follows returned pagination links, downloads digital files or visits checkout/invoice URLs.

### Review billing, refunds and cancellation

Inspect the exact order/invoice/subscription and its currency/status before requesting an effect. Refund amount is a positive integer in the native smallest currency unit. Explicit full_refund true with no amount is required for a full refund; omission alone is refused. Never combine full_refund with amount. Subscription PATCH can alter billing, proration, pause or cancellation; invoice_immediately/disable_prorations have real consequences and native payment-method limitations. DELETE cancellation does not prove immediate access revocation or successful settlement.

~~~bash
lemonsqueezy-cli refund-order --help
lemonsqueezy-cli schema refund-order
lemonsqueezy-cli update-subscription --help
lemonsqueezy-cli cancel-subscription --help
~~~

Setup examples deliberately inspect contracts instead of issuing financial actions. --confirm authorizes the exact requested effect, not the correctness of IDs, amounts, consent or provider permissions. Whole JSON:API bodies use payload or an absolute regular non-symlink payload_file, never mixed with flat body flags.

### Check a license independently

Configure the purchased license key privately, then validate-license deliberately. valid false is a native verdict returned as data, not an HTTP transport error. Native activated false or deactivated false is an unsuccessful effect. Activation requires instance_name; validation optionally includes instance_id; deactivation requires instance_id. Activation/deactivation require confirm. Main API license management uses Bearer credentials; the independent License API uses the license key itself.

~~~bash
lemonsqueezy-cli validate-license --agent
lemonsqueezy-cli activate-license --help
lemonsqueezy-cli deactivate-license --help
~~~

Check the native result's product/store context privately before integrating license decisions into an application. Key mode and entitlement are not inferred from a profile name. Ordinary tool results never echo the license key.

### Create private checkouts and invoice receipts

create_checkout, generate_order_invoice and generate_subscription_invoice require a NEW absolute output_file and confirm. The file is reserved before any native request; an existing path fails without sending the effect. Native signed checkout/invoice URLs stay in the owner-private file; stdout/chat contains only a file receipt. Invoice generation uses POST query fields, no JSON body, and requires native customer address fields including state for US/CA. Checkout bodies use native JSON:API store/variant relationships and reviewed attributes. No URL is followed or media downloaded.

~~~bash
lemonsqueezy-cli create-checkout --help
lemonsqueezy-cli generate-order-invoice --help
lemonsqueezy-cli get-operation-schema --operation create_checkout --agent
~~~

Webhook configuration sends the reviewed HTTPS callback/event/secret settings to the provider. This package does not start a public listener, verify event delivery or replace your application's signature validation. Keep webhook secrets in private payload files/configuration and out of command transcripts.


## 10. Exact reviewed batches and private exports

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


## 11. Several private profiles



LEMONSQUEEZY_ACCOUNTS is a private JSON array of unique profiles with name, api_key OR token_file, license_key OR license_file, and mode. Both credential types are optional until the relevant operation is requested. Named profiles never inherit global or another profile's credentials. LEMONSQUEEZY_DEFAULT_ACCOUNT selects the default; --account selects an exact configured label. list_accounts prints labels, declared main-key mode and credential-type availability, never secrets, file paths or provider identity. licenseModeVerified remains false.

A store_id filter narrows a list query. An exact resource ID may target a resource outside that filtered store if the key can access it. This package does not claim a store authorization boundary, automatic parent ownership checks, key-fingerprint binding or license-mode proof. Use provider-side least privilege where actually available and review exact IDs before effects.



## 12. Writing safely

All 19 native effects plus batch execution and private export require explicit local confirm. LEMONSQUEEZY_READ_ONLY=1 hides all 21 effects and refuses direct hidden confirmed calls through the actual handler. LEMONSQUEEZY_ALLOW_DESTRUCTIVE=0 refuses them even when confirmed. --agent and --yes change output/input formatting only, never approval. The same guard covers CLI and MCP, including POST license activation/deactivation and signed-output generation.

READ_ONLY controls this process, not other clients or provider automations. Native access rights, financial correctness, license entitlement and customer authorization stay separate. Main-key mode checks are native reads, not store ownership checks. A local review hash is not a provider-issued approval token or state lock. No automatic retries or guessed continuations are performed after an uncertain effect.


## 13. How the two surfaces work

src/tools/index.ts exports the shared definitions. Local MCP registers their input schemas and handlers; the existing house CLI bridge invokes the actual server through SDK in-memory transport. Both share native compilation, profiles, validation and WriteGuard. operations.json is a reviewed contract snapshot with examples removed, not an official OpenAPI export. provenance.json records primary source, pinned SDK, date and digest.

## 14. Your data

Credentials are private process settings or owner-private token-only files; no .env database, browser session or credential store is shipped. Raw keys/license credentials and known signed credential URLs are removed from ordinary tool output and errors. Signed-output tasks deliberately save their native response only to the requested new private file. Other customer/order/billing fields remain sensitive and are not anonymized.

Audit logging is optional, private and best-effort for static guard decisions; it is not a verified ledger, native settlement evidence or full access log. Avoid copying customer data, private review payloads and signed receipts into public screenshots, repositories, issues or agents without a business need. Native text and URLs are untrusted data. Removing an integration does not delete exports, reverse refunds, cancel webhooks or undo subscription changes.


## 15. Environment variables

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

## 16. Updates and removal

Follow [INSTALL.md](INSTALL.md#updates-and-removal), reconnect clients and reinstall desktop bundles manually. Restart after credential rotation; handle saved files/provider effects deliberately.

## 17. Troubleshooting

| Symptom | Check |
| --- | --- |
| Node/PATH or launcher error | Node 22+ in the actual runtime; npm.cmd for Windows policy constraints |
| Missing key / exit 10 | Correct private credential type, exact profile and no credential fallback |
| Main mode mismatch | Select actual test/live main key and matching explicit profile mode; restart after rotation |
| License-only doctor --network fails | This checks the main API; use deliberate validate-license with the independent private license credential |
| valid false | Inspect native license verdict and product/store context; transport success is not entitlement |
| Unreadable private file | Absolute runtime-readable owner-only regular non-symlink file under 64 KiB; Windows ACLs separately |
| Invalid body or PATCH id | Use native flat fields OR full payload/payload_file; correct type and exact path/body id |
| Refund refused | Positive native amount OR explicit full_refund true, with confirm and permitted policy |
| Include/filter refused | Use the actual operation schema; unsupported nested URLs and general sort are not exposed |
| No signed URL in output | Sensitive create/invoice output is in the requested new private file |
| File already exists | Choose another new file; no unrelated overwrite/removal |
| Review hash mismatch | Preview the identical ordered tasks/profile/mode/schema again |
| 429/timeout or partial batch | No retry; inspect native state and known/unattempted indices before a deliberate follow-up |
| Export incomplete | Use receipt filters/page/per_page/start_offset in another new file; no atomic snapshot |
| 401/403 | Native key expiration/revocation/permission; profile labels do not confer store access |
| Desktop restriction | Supported host/organization policy and Node 22; protocol discovery is not GUI installation |

## 18. API coverage and comparisons

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

## 19. Versions and migration

| Component | Reviewed version/evidence |
| --- | --- |
| Package/desktop | 2.0.0; public source/npm/desktop verification recorded separately |
| Native API | v1, 60 reviewed operations checked 2026-10-03 |
| Official SDK | 4.0.0, pinned source only |
| YawLabs community | 1.0.1 at 7dfff25e0117470c6fa2335b1067cd111eb01e6b |
| Node | >=22 |
| Private legacy | 1.0.0, all 51 tool names preserved |
| Codex task/token comparison | Pending actual equivalent provider outcomes |

| Legacy contract | Current requirement |
| --- | --- |
| 51 native tool names | All preserved; current schemas and major argument changes apply |
| Global main key required at startup | Credential-free discovery; independent license-only configuration works |
| License key in tool arguments/JSON Bearer request | Private LICENSE_KEY/LICENSE_FILE; native form encoding without Authorization |
| Unconfirmed refunds or omitted amount | Explicit confirm plus amount OR full_refund true |
| Opaque arbitrary body fields | Reviewed typed JSON:API body, matching ids/relationships; reject unknown fields |
| Invoice JSON body | Native POST query fields plus required new private output_file |
| Signed checkout URL in chat | New private output_file reserved before effect |
| Legacy SDK 1.x/Zod schemas | Current shared TypeScript/SDK/Ajv bridge; 65 tools/44 reads/21 approved effects |
| No dedicated task binary | lemonsqueezy-cli and lemonsqueezy-mcp from scoped package |
| Old source history | Intact private legacy remains separate; only sanitized fresh public snapshot is published |

See [CHANGELOG.md](CHANGELOG.md). Private history is preserved separately; sanitized publishing begins from a fresh verified snapshot, preserving AGPL-3.0.

## 20. FAQ

<details>
<summary><b>Is this free and open source?</b></summary>

The package preserves AGPL-3.0. Provider services, merchant eligibility and native access remain separate. Read LICENSE and the provider terms before redistribution or service use.

</details>

<details>
<summary><b>Why offer this when the SDK and community MCP exist?</b></summary>

Use it when you want the shared task CLI/local MCP, isolated private profiles, mandatory per-effect approval, exact locally reviewed batches and bounded private exports. The official SDK and YawLabs already cover the native routes; no universal superiority is claimed.

</details>

<details>
<summary><b>Does Lemon Squeezy have an official MCP or CLI?</b></summary>

No official provider MCP or dedicated task CLI was identified in the reviewed primary sources on October 3, 2026. That is a dated search finding, not proof of absence. Official SDK and generic MCP terminal clients remain alternatives.

</details>

<details>
<summary><b>How many tools and operations are included?</b></summary>

65 shared tasks: 44 reads/helpers and 21 explicitly confirmed effects. They cover 60 distinct reviewed native operations plus five local helpers. READ_ONLY exposes 44. Count route aliases separately when comparing another MCP.

</details>

<details>
<summary><b>Which account key should I use?</b></summary>

The main JSON:API uses a private Bearer API key created in the intended test/live mode. Configure one key or token file. API keys expire after one year; check current native access and permissions. A profile label does not restrict provider visibility to a store.

</details>

<details>
<summary><b>Does the License API need my main API key?</b></summary>

No. Configure the purchased license key privately using LICENSE_KEY or LICENSE_FILE. The native form-encoded License API has no Bearer header. Do not pass the license credential in tool arguments or shared command transcripts.

</details>

<details>
<summary><b>Are test mode and read-only the same?</b></summary>

No. The main-key mode check compares native meta.test_mode with the declared profile mode. READ_ONLY hides and directly refuses effects. License key mode is not proven by that main-key check or the profile label; test effects can still cause native test notifications.

</details>

<details>
<summary><b>Can I use several accounts or licenses?</b></summary>

Use the private ACCOUNTS array with unique names and explicit credential sources/mode. DEFAULT_ACCOUNT or --account chooses an exact label. Named profiles never fall back to global or another profile credentials; incomplete profiles fail only when that credential type is needed.

</details>

<details>
<summary><b>Are store filters a security boundary?</b></summary>

No. store_id narrows supported list queries, while a resource ID can target anything visible to the key. This package does not claim automatic store ownership validation. Use actual provider permissions and review IDs before effects.

</details>

<details>
<summary><b>How do CLI and MCP stay consistent?</b></summary>

The same tool definitions, input schemas, native request compiler, account selection and WriteGuard serve both. The house CLI invokes the actual MCP server through SDK in-memory transport; no separate API implementation is maintained.

</details>

<details>
<summary><b>How do I approve a financial or license effect?</b></summary>

Use explicit confirm for the exact requested task and configure local policy to allow it. --agent/--yes never provide approval. READ_ONLY or ALLOW_DESTRUCTIVE=0 refuses effects even with confirm. Approval does not prove the amount, ownership, entitlement or customer permission.

</details>

<details>
<summary><b>How are full and partial refunds distinguished?</b></summary>

Partial refunds require a positive integer amount in the native smallest currency unit. Full refunds require explicit full_refund true without amount. Omission alone and combining the two are refused. Inspect current provider state after ambiguous failures; do not automatically repeat.

</details>

<details>
<summary><b>Can subscription updates charge the customer?</b></summary>

Native variant, quantity, invoice/proration and pause changes can affect billing. Inspect the exact subscription and native contract first. DELETE cancellation does not prove immediate access revocation or final settlement; this wrapper adds no financial guarantee.

</details>

<details>
<summary><b>Where are signed checkout and invoice URLs saved?</b></summary>

These three native tasks require a new absolute private output_file and confirm. The file is exclusively reserved before network effects. Native sensitive URLs stay there; output contains only the receipt. The client does not follow the URL, overwrite existing files or download invoices.

</details>

<details>
<summary><b>What does a commerce review hash guarantee?</b></summary>

It binds exact local tasks, request order, profile label/mode and reviewed schema. It does not bind loaded credentials, freeze provider state, expire, guarantee single use, validate store ownership or make the batch atomic. Re-review after credential or upstream changes.

</details>

<details>
<summary><b>Can the export back up all digital files?</b></summary>

No. It is a budgeted JSON:API metadata export with native counters, included resources and explicit resume offsets. Credentials/signed URLs are redacted. It is not atomic, does not follow returned links, and does not download digital files or promise financial reconciliation.

</details>

<details>
<summary><b>Does the package retry failures?</b></summary>

No automatic retry is performed, including 429, timeout and unknown financial outcomes. Local default pacing is 1,000 ms with a 30-second timeout. Main and License API quotas differ, and other processes may share them. Inspect native state before repeating.

</details>

<details>
<summary><b>Which clients and operating systems are documented?</b></summary>

Codex, Claude Code, Claude Desktop extension/manual settings, Cursor, VS Code/Copilot, Windsurf, Zed, Gemini CLI, Docker and compatible local stdio clients are documented for their supported macOS/Windows/Linux runtimes. Remote-URL-only clients need another connector. Actual desktop GUI acceptance is separate from archive discovery.

</details>

<details>
<summary><b>Does CLI use fewer tokens than MCP?</b></summary>

That remains unmeasured for equivalent completed Codex provider tasks. Client loading mode, discovery, output and task outcome all matter. --agent/--select can narrow formatting/results, but tool counts and character estimates are not token benchmarks.

</details>

<details>
<summary><b>How do I update, remove or report a problem?</b></summary>

Update the scoped npm package or restart npx@latest, reconnect clients, and install the new desktop bundle manually. Revoke intended credentials separately and restart after rotation. Uninstalling does not undo provider effects or private files. Report reproducible secret-free issues; use private security reporting for sensitive matters.

</details>

## Questions

Open a [secret-free issue](https://github.com/thenavidm/lemonsqueezy-mcp-cli/issues). Read [CONTRIBUTING.md](CONTRIBUTING.md) and [SECURITY.md](SECURITY.md).

## About the author

Navid Moazzez is a leading AI business strategist, and the host of the AI Creator Summit, watched by 100,000+ creators. He helps creators and founders master AI and build their own AI Operating System (AI OS) to automate their business and life. He creates useful free tools, MCP servers and CLIs that creators and founders can use in their own workflows.

**Links**

- Personal website: [navid.me](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=lemonsqueezy-mcp-cli&utm_content=readme)
- Link in bio: [navid.bio](https://navid.bio?utm_source=github&utm_medium=referral&utm_campaign=lemonsqueezy-mcp-cli&utm_content=readme)
- Navid Media: [navid.media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=lemonsqueezy-mcp-cli&utm_content=readme)
- YouTube: [@thenavidm](https://youtube.com/@thenavidm?sub_confirmation=1) and [@thenavidai](https://youtube.com/@thenavidai?sub_confirmation=1)
- X: [@thenavidm](https://x.com/thenavidm)
- Instagram: [@thenavidm](https://instagram.com/thenavidm)
- LinkedIn: [thenavidm](https://linkedin.com/in/thenavidm)

If this is useful, star the repo and come say hi on [X](https://x.com/thenavidm).

## Dependencies

| Dependency | Exact lock version | Role |
| --- | --- | --- |
| @modelcontextprotocol/sdk | 1.32.0 | Runtime |
| ajv | 8.20.0 | Runtime |
| ajv-formats | 3.0.1 | Runtime |
| @anthropic-ai/mcpb | 2.1.2 | Development/packaging |
| @types/node | 22.20.5 | Development/packaging |
| typescript | 7.0.2 | Development/packaging |
| vite | 8.3.2 | Development/packaging |
| vitest | 5.0.3 | Development/packaging |

Runtime dependencies ship in the desktop archive; packaging dependencies do not. Production audit is clean at this review. Full development audit has two high advisories in the MCPB packer node-forge dependency with no available fix; it is excluded from the shipped runtime. Recheck before each release.

## License

Preserves [AGPL-3.0](LICENSE) and intact private legacy history. Read [THIRD_PARTY_NOTICES.md](THIRD_PARTY_NOTICES.md). Provider terms and trademarks remain separate.

---

© 2026 [Navid Media](https://navid.media?utm_source=github&utm_medium=referral&utm_campaign=lemonsqueezy-mcp-cli&utm_content=readme). Made with ❤️ by [Navid Moazzez](https://navid.me?utm_source=github&utm_medium=referral&utm_campaign=lemonsqueezy-mcp-cli&utm_content=readme).
