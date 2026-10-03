// Verify the reviewed native snapshot without claiming an official OpenAPI export.
import fs from 'node:fs';
import assert from 'node:assert/strict';
import {createHash} from 'node:crypto';
import {ALL_TOOLS} from '../dist/tools/index.js';
const source=new URL('../src/tools/operations.json',import.meta.url);
// Git may check out CRLF on Windows; the reviewed snapshot uses LF.
const bytes=fs.readFileSync(source,'utf8').replace(/\r\n/g,'\n');
const operations=JSON.parse(bytes);
const provenance=JSON.parse(fs.readFileSync(new URL('../src/tools/provenance.json',import.meta.url)));
assert.equal(createHash('sha256').update(bytes).digest('hex'),provenance.sanitizedSnapshotSha256);
assert.equal(operations.length,60);
assert.equal(provenance.endpoints,60);
assert.equal(provenance.source,'https://docs.lemonsqueezy.com/api');
assert(provenance.schemaType.includes('not an official OpenAPI'));
assert.equal(ALL_TOOLS.length,65);
assert.equal(ALL_TOOLS.filter(t=>t.risk==='read').length,44);
for(const name of ['list_orders','activate_license','generate_order_invoice','get_usage_record'])assert(operations.some(o=>o.name===name));
console.log(JSON.stringify({native:60,shared:65,reads:44,snapshotVerified:true,schemaType:provenance.schemaType,checked:provenance.checked,providerNetworkCalls:0}));
