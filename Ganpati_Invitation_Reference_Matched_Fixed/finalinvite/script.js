const intro=document.getElementById('intro');
const enter=document.getElementById('enterBtn');
const music=document.getElementById('music');
const musicBtns=[document.getElementById('musicBtn'),document.getElementById('heroMusic')].filter(Boolean);
let opened=false,playing=false;
function openSite(){if(opened)return;opened=true;document.body.classList.remove('locked');intro.classList.add('open');setTimeout(()=>{intro.remove();document.querySelector('.hero').classList.add('hero-in');},1450);}
enter.addEventListener('click',openSite);enter.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();openSite();}});
async function toggleMusic(){if(!playing){try{await music.play();playing=true;musicBtns.forEach(b=>b.classList.add('playing'));}catch(e){alert('Music साठी assets/bappa-music.mp3 जोडा.');}}else{music.pause();playing=false;musicBtns.forEach(b=>b.classList.remove('playing'));}}
musicBtns.forEach(b=>b.addEventListener('click',toggleMusic));
const io=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');io.unobserve(e.target);}}),{threshold:.12,rootMargin:'0px 0px -50px'});document.querySelectorAll('.reveal').forEach(x=>io.observe(x));
const progress=document.getElementById('progress');window.addEventListener('scroll',()=>{const max=document.documentElement.scrollHeight-innerHeight;progress.style.width=max?`${scrollY/max*100}%`:'0%'},{passive:true});
const track=document.getElementById('track'),cards=[...document.querySelectorAll('.family-card')];
function activeCard(){const c=track.scrollLeft+track.clientWidth/2;let best=cards[0],d=1e9;cards.forEach(x=>{const m=x.offsetLeft+x.offsetWidth/2,dd=Math.abs(m-c);if(dd<d){d=dd;best=x}});cards.forEach(x=>x.classList.toggle('active',x===best));}
track.addEventListener('scroll',activeCard,{passive:true});document.querySelector('.next').onclick=()=>track.scrollBy({left:track.clientWidth*.72,behavior:'smooth'});document.querySelector('.prev').onclick=()=>track.scrollBy({left:-track.clientWidth*.72,behavior:'smooth'});
