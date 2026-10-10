const DB={k:'debuglab_v1',
load(){try{const d=JSON.parse(localStorage.getItem(this.k));if(d&&Array.isArray(d.assessments)&&Array.isArray(d.attempts))return d}catch(e){}
return{users:[{id:'u1',name:'Admin',email:'admin',role:'admin'},{id:'u2',name:'Friend',email:'candidate',role:'candidate'}],assessments:[],attempts:[]}},
save(d){localStorage.setItem(this.k,JSON.stringify(d))},uid:p=>p+Math.random().toString(36).slice(2,9),reset(){localStorage.removeItem(this.k)}};
