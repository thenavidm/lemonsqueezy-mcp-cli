#!/usr/bin/env node
import{StdioServerTransport}from'@modelcontextprotocol/sdk/server/stdio.js';import{buildServer,VERSION}from'./server.js';import{runCli,exitCodeFor}from'./cli.js';import{runDoctor}from'./doctor.js';import{basename}from'node:path';
const HELP=`Lemon Squeezy MCP and shared task CLI ${VERSION}
lemonsqueezy-mcp                         Local stdio MCP
lemonsqueezy-cli <command> --help         Shared actual arguments
lemonsqueezy-cli schema <command>         Actual JSON input schema
lemonsqueezy-cli doctor [--network]       Local settings / explicit users/me mode check
lemonsqueezy-cli login                   Private setup instructions only
LEMONSQUEEZY_API_KEY / TOKEN_FILE         Private main JSON:API credential
LEMONSQUEEZY_LICENSE_KEY / LICENSE_FILE   Separate private License API credential
LEMONSQUEEZY_ACCOUNTS                    Named isolated profiles, each with mode test/live
LEMONSQUEEZY_MODE                        Global profile defaulttest; main API key mode checked
LEMONSQUEEZY_READ_ONLY=1                 Hide and directly refuse effects/file writes
LEMONSQUEEZY_ALLOW_DESTRUCTIVE=0          Refuse confirmed effects/file writes
LEMONSQUEEZY_REQUEST_TIMEOUT_MS          Default30000, no retries
LEMONSQUEEZY_MIN_REQUEST_INTERVAL_MS     Default1000, common conservative pacing
`;
async function main():Promise<void>{const args=process.argv.slice(2),command=args[0];if(['--version','-v'].includes(command??'')){console.log(VERSION);return;}if(['--help','-h','help'].includes(command??'')){process.stdout.write(HELP);return;}if(command==='login'){console.log('Create the intended test or live API key in https://app.lemonsqueezy.com/settings/api. Keys are valid one year; store privately in LEMONSQUEEZY_API_KEY or owner-only LEMONSQUEEZY_TOKEN_FILE. Explicit mode test/live must match the main API key; default test refuses a live key before requested operations. License API uses an independent customer license credential in LEMONSQUEEZY_LICENSE_KEY or owner-only LEMONSQUEEZY_LICENSE_FILE, with no Bearer header or API-key requirement. Its mode is not proven by the label. Named private LEMONSQUEEZY_ACCOUNTS profiles never inherit global credentials. login prints instructions only; no browser/cookie import or account changes.');return;}if(command==='doctor'){if(args.slice(1).some(a=>a!=='--network')){process.exitCode=2;console.error(JSON.stringify({error:'doctor accepts only --network'}));return;}process.exitCode=await runDoctor(args.includes('--network'));return;}if(args.length||basename(process.argv[1]??'').startsWith('lemonsqueezy-cli')){process.exitCode=await runCli(args);return;}const server=buildServer();await server.connect(new StdioServerTransport());for(const signal of ['SIGTERM','SIGINT'])process.on(signal,()=>void server.close().then(()=>process.exit(0)));}
main().catch(e=>{console.error(JSON.stringify({error:e.message}));process.exitCode=exitCodeFor(e.message);});
