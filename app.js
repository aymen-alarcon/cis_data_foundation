'use strict';
const $ = id => document.getElementById(id);
const reviewedIds = new Set([23,90]); // CSDM-focused Governance & Business Value questions
const csdmTopics = new Set([
  'CSDM Dashboard','Information Objects','CSDM Domains','CSDM Lifecycle','CSDM Crawl',
  'CSDM Maturity','CSDM Stages','CSDM Playbooks','CSDM Roles','CSDM Walk',
  'CSDM Incident','CSDM Classes','Technical Service Offerings','Group Synchronization',
  'Change Management','Incident Routing','Security Operations'
]);
const subjectOf = q => reviewedIds.has(q.id) || csdmTopics.has(q.topic) ||
  /CSDM|Information Objects|Technical Service Offering|Business Service|Service Consumption|Service Delivery|Design and Planning|Change Management|Incident Routing/i.test(q.topic)
  ? 'csdm' : 'cmdb';
const scoredBank = QUESTIONS.filter(q => q.status === 'practice' && q.correct.length);
const heldBank = [];
const shuffle = input => { const a = [...input]; for (let i=a.length-1;i>0;i--) { const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
const same = (a,b) => a.length===b.length && a.every(v=>b.includes(v));
const getSubject = () => document.querySelector('input[name="subject"]:checked')?.value || 'both';
const bankForSubject = () => scoredBank.filter(q => getSubject()==='both'||subjectOf(q)===getSubject());
let exam=[], answers={}, index=0, showAll=false;
function updateCounts() {
  const cmdb=scoredBank.filter(q=>subjectOf(q)==='cmdb').length;
  const csdm=scoredBank.length-cmdb;
  $('bankCount').textContent=scoredBank.length;
  $('cmdbCount').textContent=cmdb+' scored questions';
  $('csdmCount').textContent=csdm+' scored questions';
  $('bothCount').textContent=scoredBank.length+' scored questions';

  const count=bankForSubject().length;
  $('selectionSummary').textContent=`${count} practice questions available in this mode. All ${scoredBank.length} unique questions are included in scoring.`;
  for(const opt of $('length').options) {
    if(opt.value==='all') {opt.textContent=`All ${count} questions`; continue;}
    opt.disabled=Number(opt.value)>count;
  }
  if($('length').selectedOptions[0]?.disabled) $('length').value='all';
}
function section(name) {
  for(const s of ['setup','exam','results']) $(s).classList.toggle('hidden', s!==name);
  window.scrollTo({top:0,behavior:'smooth'});
}
function start() {
  let pool=bankForSubject();
  if(!pool.length) {alert('No verified-practice questions are available for this selection.'); return;}
  if($('shuffle').checked)pool=shuffle(pool);
  const amount=$('length').value;
  if(amount!=='all')pool=pool.slice(0,Number(amount));
  exam=pool.map(q=>{
    const out={...q,options:[...q.options],correct:[...q.correct]};
    if($('shuffleOptions').checked){
      const order=shuffle(q.options.map((_,i)=>i));
      out.options=order.map(i=>q.options[i]);
      out.correct=q.correct.map(i=>order.indexOf(i));
    }
    return out;
  });
  answers={}; index=0; section('exam'); render();
}
function render() {
  const q=exam[index]; if(!q)return;
  const chosen=answers[q.id]||[];
  $('topic').textContent=q.topic.toUpperCase()+' · ORIGINAL Q'+q.id;
  $('counter').textContent=`Question ${index+1} of ${exam.length}`;
  $('progressBar').style.width=((index+1)/exam.length*100)+'%';
  $('question').textContent=q.question;
  $('selectHint').textContent=q.correct.length>1?`Select exactly ${q.correct.length} answers.`:'Select one answer.';
  $('choices').replaceChildren(...q.options.map((option,i)=>{
    const button=document.createElement('button');button.type='button';button.className='choice'+(chosen.includes(i)?' selected':'');
    button.setAttribute('aria-pressed', String(chosen.includes(i)));
    const letter=document.createElement('span');letter.className='letter';letter.textContent=String.fromCharCode(65+i);
    const label=document.createElement('span');label.textContent=option;button.append(letter,label);
    button.addEventListener('click',()=>{
      let current=[...(answers[q.id]||[])];
      if(q.correct.length===1)current=[i];
      else if(current.includes(i))current=current.filter(x=>x!==i);
      else if(current.length<q.correct.length)current.push(i);
      answers[q.id]=current;
      render();
    });return button;
  }));
  $('prev').disabled=index===0;
  $('next').textContent=index===exam.length-1?'Finish exam ✓':'Next →';
  $('answered').textContent=`${exam.filter(q=>(answers[q.id]||[]).length).length} of ${exam.length} answered`;
}
function makeSourceLink(q) {
  if(!q.source||!q.source.startsWith('https://www.servicenow.com/'))return null;
  const p=document.createElement('p');p.className='reference';
  const link=document.createElement('a');link.href=q.source;link.target='_blank';link.rel='noopener noreferrer';
  link.textContent='Related ServiceNow documentation ↗';p.append(link);return p;
}
function renderReviewCard(q,chosen=[],held=false){
  const card=document.createElement('article');card.className='reviewCard';
  const topic=document.createElement('small');topic.textContent=`Q${q.id} · ${q.topic}`;
  const h=document.createElement('h3');h.textContent=q.question;card.append(topic,h);
  if(held){
    const warning=document.createElement('p');warning.className='bad';warning.textContent='Not scored — '+(q.issue||'Needs verification');card.append(warning);
    const options=document.createElement('p');options.className='optionsReview';
    options.textContent=q.options.map((s,i)=>`${String.fromCharCode(65+i)}. ${s}`).join('  |  ');card.append(options);
    if(q.correct.length){const probable=document.createElement('p');probable.textContent='Proposed answer (NOT verified for grading): '+q.correct.map(i=>String.fromCharCode(65+i)+'. '+q.options[i]).join(' | ');card.append(probable);}
  }else{
    const isCorrect=same(chosen,q.correct);
    const theirs=document.createElement('p');theirs.className=isCorrect?'good':'bad';
    theirs.textContent='Your answer: '+(chosen.length?chosen.map(i=>String.fromCharCode(65+i)+'. '+q.options[i]).join(' | '):'Not answered');
    const correct=document.createElement('p');correct.className='good';
    correct.textContent='Correct answer: '+q.correct.map(i=>String.fromCharCode(65+i)+'. '+q.options[i]).join(' | ');
    card.append(theirs,correct);
  }
  const why=document.createElement('p');why.className='explanation';why.textContent='Explanation: '+q.explanation;card.append(why);
  const source=makeSourceLink(q);if(source)card.append(source);
  return card;
}
function review() {
  const visible=showAll?exam:exam.filter(q=>!same(answers[q.id]||[],q.correct));
  $('reviewHeading').textContent=showAll?'All questions and explanations':`Questions to review (${visible.length})`;
  $('review').replaceChildren(...visible.map(q=>renderReviewCard(q,answers[q.id]||[])));
  if(!visible.length)$('review').textContent='No missed questions in this exam.';
}
function finish(){
  if(!exam.length)return;
  const numCorrect=exam.filter(q=>same(answers[q.id]||[],q.correct)).length;
  const numSkipped=exam.filter(q=>!(answers[q.id]||[]).length).length;
  const exact=numCorrect/exam.length*100;
  const pct=Number(exact.toFixed(1));
  const pass=numCorrect*4>=exam.length*3; // Compare exact score, never a rounded display value
  $('score').textContent=pct+'%';$('correct').textContent=numCorrect;
  $('wrong').textContent=exam.length-numCorrect-numSkipped;$('skipped').textContent=numSkipped;
  $('resultTitle').textContent=pass?'You passed!':'Keep practicing';
  $('resultSubtitle').textContent=`${numCorrect} of ${exam.length} correct · ${pct}% score · 75% needed to pass`;
  $('scoreCircle').classList.toggle('fail',!pass);
  showAll=false;$('reviewAll').textContent='Show all questions';review();section('results');
}
function showHeld(){
  $('heldHeading').textContent=`${heldBank.length} questions held for manual review`;
  $('heldList').replaceChildren(...heldBank.map(q=>renderReviewCard(q,[],true)));
  section('held');
}
$('start').addEventListener('click',start);
$('prev').addEventListener('click',()=>{if(index>0){index--;render();}});
$('next').addEventListener('click',()=>{
  if(index===exam.length-1){
    if(exam.some(q=>!(answers[q.id]||[]).length)&&!confirm('Some questions are unanswered. Finish anyway?'))return;
    finish();
  }else{index++;render();}
});
$('quit').addEventListener('click',()=>{if(confirm('End exam and score your answers?'))finish();});
$('retry').addEventListener('click',()=>section('setup'));
$('reviewAll').addEventListener('click',()=>{showAll=!showAll;$('reviewAll').textContent=showAll?'Show missed only':'Show all questions';review();});


$('export').addEventListener('click',()=>{
  const correct=exam.filter(q=>same(answers[q.id]||[],q.correct)).length;
  const data={examMode:getSubject(),scoreExact:exam.length?correct/exam.length*100:0,passed:correct*4>=exam.length*3,
    note:'Questions with malformed original wording have been repaired or rewritten; see CORRECTIONS.md.',
    results:exam.map(q=>({id:q.id,subject:subjectOf(q),question:q.question,selected:(answers[q.id]||[]).map(i=>q.options[i]),correct:q.correct.map(i=>q.options[i]),explanation:q.explanation,source:q.source}))};
  const url=URL.createObjectURL(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}));
  const a=document.createElement('a');a.href=url;a.download='cmdb-csdm-audited-results.json';a.click();setTimeout(()=>URL.revokeObjectURL(url),0);
});
document.querySelectorAll('input[name="subject"]').forEach(r=>r.addEventListener('change',updateCounts));
updateCounts();
