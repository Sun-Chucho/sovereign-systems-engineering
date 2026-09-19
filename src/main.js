const page = document.body.dataset.page;
const nav = document.querySelector('.nav-links');
document.querySelector('.menu')?.addEventListener('click', () => nav.classList.toggle('open'));
document.querySelectorAll('.nav-links a').forEach(a => { if (a.dataset.page === page) a.classList.add('active'); });
const observer = new IntersectionObserver(entries => entries.forEach(entry => { if(entry.isIntersecting) entry.target.classList.add('visible'); }), {threshold:.12});
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

const models = {
  mission:{kicker:'01 — Mission architecture',title:'Define the outcome before designing the assets.',copy:'Translate national ambition into explicit outcomes, constraints, authorities and measurable public value. This is the governing logic for every downstream decision.',outputs:['Mission model','Decision rights','Outcome measures']},
  system:{kicker:'02 — System architecture',title:'Design the whole, not the projects in isolation.',copy:'Map energy, infrastructure, technology, institutions, finance and people as one interdependent system—then expose the interfaces where value is created or lost.',outputs:['System map','Interface register','Dependency model']},
  portfolio:{kicker:'03 — Portfolio architecture',title:'Sequence investments around shared capability.',copy:'Shape projects as a coherent portfolio, aligning enabling infrastructure, industrial capacity, talent and finance to the same strategic direction.',outputs:['Portfolio logic','Critical path','Capital sequence']},
  delivery:{kicker:'04 — Delivery architecture',title:'Make execution governable from day one.',copy:'Establish assurance, stage gates, ownership and feedback loops so leaders can see reality early and intervene before risk compounds.',outputs:['Delivery model','Assurance gates','Control room']},
  learning:{kicker:'05 — Learning architecture',title:'Turn evidence into institutional memory.',copy:'Measure outcomes, capture operating evidence and update standards so each delivery cycle strengthens the next one.',outputs:['Evidence ledger','Learning loops','Capability transfer']}
};
document.querySelectorAll('.system-tab').forEach(tab=>tab.addEventListener('click',()=>{
  document.querySelectorAll('.system-tab').forEach(t=>t.classList.remove('active')); tab.classList.add('active');
  const m=models[tab.dataset.model]; const display=document.querySelector('.system-display');
  display.innerHTML=`<div class="eyebrow">${m.kicker}</div><h3>${m.title}</h3><p>${m.copy}</p><div class="system-output">${m.outputs.map((x,i)=>`<div><b>0${i+1}</b>${x}</div>`).join('')}</div>`;
}));

document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
