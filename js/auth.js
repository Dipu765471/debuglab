/* DEMO ONLY: insecure client-side login. Not real security. */
const DEMO={admin:'admin-demo',candidate:'candidate-demo'};
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
function toast(m){let t=document.getElementById('toast');if(!t){t=document.createElement('div');t.id='toast';document.body.append(t)}t.textContent=m;t.style.display='block';setTimeout(()=>t.style.display='none',3000)}
function me(){try{return JSON.parse(sessionStorage.getItem('dl_user'))}catch(e){return null}}
function requireRole(r){const u=me();if(!u||u.role!==r)location.href='index.html';return u}
function logout(){sessionStorage.removeItem('dl_user');location.href='index.html'}
function login(e){e.preventDefault();const id=document.getElementById('u').value.trim(),pw=document.getElementById('p').value,err=document.getElementById('err');
if(!id||!pw){err.textContent='Enter username and password.';return}
const u=DB.load().users.find(x=>x.email===id);if(!u||DEMO[u.role]!==pw){err.textContent='Invalid credentials.';return}
sessionStorage.setItem('dl_user',JSON.stringify(u));location.href=u.role==='admin'?'admin.html':'candidate.html'}
