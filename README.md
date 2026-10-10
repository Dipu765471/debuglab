# DebugLab Assessment (prototype)
Run: `cd debuglab && python3 -m http.server 8000`, open http://localhost:8000.
Logins (insecure demo): admin / admin-demo, candidate / candidate-demo.
Flow: Admin > Create New Assessment > fill details, add questions (starter code per language, tests as `input ||| expected ||| public|hidden`), Save/Publish > Candidate logs in, Starts > Submit > Admin > Submissions > View / Export CSV.
Code execution: set `EXEC.url` in js/execution.js to a Judge0 endpoint. If unset, running is disabled with a message and scores stay "pending". Never put secret API keys in frontend code; use a small backend proxy.
Data: browser localStorage key `debuglab_v1` (admin: "Clear data" button).
Monaco loads from jsDelivr CDN (internet required).
Limitations: no real auth, hidden tests/answers/timer are all inspectable and tamperable in the browser; production requires a server.
Not included yet: negative marking (not applied), results.html, availability-window enforcement UI polish, mobile tabs, resizable split, multi-candidate UI, font size/find UI.
