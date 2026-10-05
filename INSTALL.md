# Install Lemon Squeezy MCP Server & CLI

One package contains 65 shared tasks, both named binaries and a bundled desktop extension. Node 22+ is required.

## Requirements

Install [Node](https://nodejs.org/en/download) and check node --version/npm --version in the actual GUI, container or remote runtime. Windows may require npm.cmd if execution policy blocks npm.ps1. Do not weaken policy or use sudo.

## CLI

~~~bash
npm install -g @thenavidm/lemonsqueezy-mcp-cli@latest
lemonsqueezy-cli --version
lemonsqueezy-cli tools
lemonsqueezy-cli login
~~~

Alternatively use npx -y --package @thenavidm/lemonsqueezy-mcp-cli@latest lemonsqueezy-cli tools. Put the shipped SKILL.md in your supported private agent skill location; npm does not automatically register it.

## Private credential setup

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

1. Download `lemonsqueezy-3.0.0.mcpb` from [GitHub Releases](https://github.com/thenavidm/lemonsqueezy-mcp-cli/releases/latest).
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


## Verify

~~~bash
lemonsqueezy-cli --version
lemonsqueezy-cli tools
lemonsqueezy-cli list-accounts --agent
lemonsqueezy-cli doctor
# Deliberate main-key native read only after private configuration
lemonsqueezy-cli doctor --network
~~~

Discovery/help/schema/login are local. doctor --network is one deliberate main-key read; no checkout, refund, billing, license activation or webhook effect is used to test installation. Local protocol checks, provider account outcomes, actual desktop GUI and completed Codex task usage remain separate evidence.

## Environment reference

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

## Updates and removal

Restart npx@latest to resolve an update; upgrade a global CLI with npm install -g @thenavidm/lemonsqueezy-mcp-cli@latest. Install the new .mcpb manually. Remove only the requested registration, skill, extension or global package. Revoke intended native credentials separately and restart after rotation. Removal does not undo financial effects, webhooks or exports.

~~~bash
npm install -g @thenavidm/lemonsqueezy-mcp-cli@latest
lemonsqueezy-cli --version
# Removal only when requested
npm uninstall -g @thenavidm/lemonsqueezy-mcp-cli
~~~

## Troubleshooting

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

## Development

~~~bash
git clone https://github.com/thenavidm/lemonsqueezy-mcp-cli.git
cd lemonsqueezy-mcp-cli
npm ci
npm run typecheck
npm run build
npm test
npm run check:counts
npm run check:discovery
npm run sync:api -- --check
npm run build:mcpb
~~~

Source mode uses node /absolute/path/lemonsqueezy-mcp-cli/dist/index.js after building. Keep credential files outside the checkout and archive.

