/* Set url to a Judge0 endpoint. Never put a secret key here; use a backend proxy if one is required. */
const EXEC={url:'https://ce.judge0.com',ids:{python:71,cpp:54,c:50,java:62}};
async function runCode(code,lang,stdin){
if(!EXEC.url)return{ok:false,error:'Execution service not configured. Set EXEC.url in js/execution.js (see README).'};
if(!EXEC.ids[lang])return{ok:false,error:'Unsupported language'};
try{const r=await fetch(EXEC.url.replace(/\/$/,'')+'/submissions?base64_encoded=false&wait=true',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({source_code:code,language_id:EXEC.ids[lang],stdin:stdin||'',cpu_time_limit:5})});
if(r.status==429)return{ok:false,error:'Rate limited by execution service. Try again shortly.'};
if(!r.ok)return{ok:false,error:'Service error '+r.status};
const j=await r.json();return{ok:true,status:j.status?.description,id:j.status?.id,stdout:j.stdout||'',stderr:j.stderr||'',compile:j.compile_output||'',time:j.time}}
catch(e){return{ok:false,error:'Network error: '+e.message}}}
async function evalTests(code,lang,tests){let passed=0,err='';for(const t of tests){const r=await runCode(code,lang,t.in);if(!r.ok)return{status:'unavailable',passed,total:tests.length,err:r.error};
if(r.id===3&&r.stdout.trim()===t.out.trim())passed++;else err=r.compile||r.stderr||r.status||err}
return{status:'done',passed,total:tests.length,err}}
