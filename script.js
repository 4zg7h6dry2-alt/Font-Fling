/* ---------- data ---------- */
// name, css family, vibe, personality, first-person bio, tags, [green flag, red flag], type, drama(1-5), class, strength, date spots
const FONTS = [
 ['Playfair',"'Playfair Display'",'the romantic','Hopeless romantic with a flair for the dramatic exit.',`I own three candles and a thesaurus. I will write you a letter, then another one explaining the first. Looking for someone who doesn't mind a little flourish at dinner.`,['serif','dramatic','sweet talker'],['writes you actual letters',`cries at weddings, including strangers'`],'elegant',4,'serif','beauty',['library','gallery']],
 ['Pacifico',"'Pacifico'",'the beach flirt','Golden retriever energy with a permanent vacation brain.',`Sunsets, iced coffee and zero chill. My curves are natural, thank you for noticing. Swipe right if you can keep up with my loops.`,['script','sunny','chatty'],['will always bring snacks','"just one more loop" is a lifestyle'],'playful',3,'other','personality',['field','coffee']],
 ['Caveat',"'Caveat'",'the doodler','Cozy overthinker with ink on their hands.',`I leave notes on your fridge and doodles in your margins. My handwriting is "charming", according to me. Looking for someone who laughs at my tiny drawings.`,['handwritten','cozy','thoughtful'],['remembers your coffee order','handwriting like a ransom note'],'playful',2,'other','personality',['coffee','field']],
 ['Space Mono',"'Space Mono'",'the overthinker','Loyal nerd in a hoodie who already has a plan for date three.',`I treat every letter equally, including you. Fluent in spreadsheets, emotionally consistent, and I will remember our anniversary to the pixel. Seeking someone who loves aligned columns.`,['mono','nerdy','loyal'],['never changes, ever','sends calendar invites for dates'],'minimalist',1,'other','readability',['library','coffee']],
 ['Fredoka',"'Fredoka'",'the sweetheart','Marshmallow with a heart. Has never once been mean.',`I'm round, I'm bubbly, and my hugs are 60% marshmallow. I've never been mean, not even in the comments. Looking for someone to share fries with.`,['rounded','playful','warm'],['gives free hugs','too nice, suspicious'],'playful',2,'sans','personality',['coffee','field']],
 ['Cormorant',"'Cormorant Garamond'",'the poet','Quiet dreamer with an unreasonable number of bookmarks.',`I'm thin, I'm mysterious, and I read in cafés until they close. I reply to texts in three to five business days. Worth the wait, mostly.`,['literary','romantic','melancholic'],['reads to you in bed','takes 3 days to reply'],'elegant',2,'serif','beauty',['library','gallery']],
 ['Abril Fatface',"'Abril Fatface'",'the main character','Knows the lighting is good. It is always good.',`I'm bold, glamorous, and I enter every room like a magazine cover. High maintenance? Sure. Worth it? Ask my thick downstrokes.`,['theatrical','attention-loving','bold'],['makes you feel famous','also makes it about them'],'elegant',5,'serif','personality',['gallery','club']],
 ['Special Elite',"'Special Elite'",'the typewriter ex','Moody vintage soul. Rain makes them poetic.',`I smell like old paper and bad decisions. I say "it's complicated" like it's a love language. I'll write your name on a postcard and never send it.`,['mysterious','old-fashioned','suspicious'],['writes you a sonnet','says "I’m not like other fonts"'],'mysterious',3,'other','personality',['library','bush']],
 ['Comfortaa',"'Comfortaa'",'the softie','A marshmallow in a cardigan.',`I'm all curves and zero edges. I cry at commercials, hold your bag, and apologise to furniture. Seeking someone who understands that soft is strong.`,['rounded','calm','kind'],['holds your bag, no questions','apologises to furniture'],'minimalist',1,'sans','readability',['coffee','field']],
 ['Lobster',"'Lobster'",'the dramatic one','Theatre kid who never left the theatre.',`Everything is a Big Deal and I will make a toast about it. I once threw a surprise party for myself. Come for the drama, stay for the sauce.`,['script','loud','fun'],['plans the surprise party','IS the surprise party'],'playful',5,'other','personality',['club','field']],
 ['DM Serif',"'DM Serif Display'",'the old soul','An old soul in a very good blazer.',`I read the paper on Sundays and I pick up the check without being weird about it. Confident, classic, and slightly smug about my ligatures.`,['sophisticated','expressive','smooth'],['picks up the check','talks about “the market”'],'elegant',2,'serif','versatility',['library','gallery']],
 ['Shadows',"'Shadows Into Light'",'the note-passer','Sweet, awkward, writes poetry in the margins.',`I'm shy but I'm great on paper. I'll slip you a folded note and then hide behind the lockers. Please say hi first, I will die.`,['handwritten','shy','sweet'],['slides notes into your locker','still hasn’t said hi'],'playful',1,'other','personality',['coffee','bush']],
 ['Bebas Neue',"'Bebas Neue'",'the gym guy','Gym-bro energy. Soft inside, will deny it.',`I ONLY SPEAK IN CAPS. I DON'T HAVE A LOWERCASE AND I DON'T THINK I NEED ONE. LOOKING FOR SOMEONE WHO CAN KEEP UP AT THE GYM AND ALSO HOLD MY HAND AFTER.`,['caps','tall','intense'],['always shows up early','cannot whisper'],'minimalist',3,'sans','readability',['club','coffee']],
 ['Permanent Marker',"'Permanent Marker'",'the rebel','Rebel with a Sharpie and a heart of gold.',`I wrote my name on a bathroom wall once. Not proud. Looking for someone who'll sneak out with me and ask zero questions.`,['marker','edgy','loud'],['will help you move at 2 a.m.','has opinions about walls'],'mysterious',4,'other','personality',['club','bush']],
 ['Dancing Script',"'Dancing Script'",'the flirt','Smooth talker, shameless, somehow always forgiven.',`I wink with my ascenders. I'm all loops, all charm, and yes, I flirt with the waiter. Ask me about my signature move.`,['script','smooth','charming'],['dances at your wedding','flirts with the waiter'],'elegant',3,'other','beauty',['gallery','club']],
 ['Press Start 2P',"'Press Start 2P'",'the gamer','Lovable gamer with several hidden levels.',`I'm 8-bit and ready to commit. I'll share my last life with you. Please be patient, I only have eight pixels of emotional range.`,['pixel','retro','loyal'],['shares the last life','rage-quits board games'],'playful',3,'other','personality',['club','coffee']],
 ['Cinzel',"'Cinzel'",'the history buff','Stately, ancient, takes themself very seriously (it’s cute).',`I carve my feelings in marble. I say "veni, vidi, amavi" and I mean it. Seeking someone for long walks through ruins and slightly too many columns.`,['grand','traditional','legendary'],['plans a romantic trip to Rome','calls the mall “the Forum”'],'elegant',4,'serif','beauty',['library','gallery']],
 ['Inter',"'Inter'",'the HR-approved','Reliable, neutral, somehow still attractive.',`I'm clean, clear, and HR-approved. I'll reply to your email within minutes. Looking for someone who values clarity and, honestly, a good grid.`,['clean','sans','calm'],['replies in 4 minutes','has never made a typo, or a mistake'],'minimalist',1,'sans','readability',['library','coffee']],
 ['Josefin Sans',"'Josefin Sans'",'the art deco','Chic, and quietly judging your wallpaper.',`I'm tall, geometric and a little bit art deco. I like thin lines, tall ceilings and expensive-looking silence.`,['geometric','chic','tall'],['great taste in lamps','judges your lamp'],'minimalist',2,'sans','beauty',['gallery','coffee']],
 ['UnifrakturCook',"'UnifrakturCook'",'the goth','Moody goth who is secretly a softie. Don’t tell.',`I'm gothic, I'm dramatic, and I only come out after dark. I own a lot of black and one (1) bat. Looking for someone who finds ornate letterforms hot.`,['blackletter','moody','dramatic'],['loyal till the end','wears black to the beach'],'mysterious',5,'other','personality',['club','bush']],
 ['Amatic SC',"'Amatic SC'",'the quirky one','Cottagecore chaos gremlin.',`I'm tall, skinny and extremely quirky. I name my plants and bake bread at midnight. Looking for someone who can handle a little chaos.`,['quirky','cottagecore','tall'],['bakes you bread','talks to plants, and they answer'],'playful',3,'sans','personality',['field','coffee']],
 ['Lora',"'Lora'",'the reliable one','Dependable romantic. The friend your mom likes best.',`I'm warm, I'm brushed with a little calligraphy, and I make a good lunch. Seeking someone to read next to on a rainy Sunday.`,['serif','warm','steady'],['brings soup when you’re sick','has opinions on your outfit'],'elegant',1,'serif','readability',['library','coffee']],
 ['Quicksand',"'Quicksand'",'the sunny one','Sunshine in a hoodie. Your emotional support font.',`I'm the sunny one in the group chat. Rounded, calm, and very good at making people feel like their font choices are valid.`,['rounded','sunny','friendly'],['actually listens','avoids conflict at any cost'],'playful',2,'sans','versatility',['coffee','field']],
 ['Righteous',"'Righteous'",'the retro-futurist','Neon dreamer from a 1982 version of the future.',`I'm retro-futuristic, chrome-plated, and a bit too into synthwave. Take me to a roller disco and I will never leave.`,['groovy','playful','nostalgic'],['plans themed dates','owns 14 neon lights'],'mysterious',4,'sans','personality',['club','gallery']],
 ['Comic Neue',"'Comic Neue'",'the ironic one','Misunderstood jester. Still the life of the party.',`Yes, I'm basically Comic Sans' better-dressed cousin. Am I ironic? Strictly ironic now. (Spoiler: no.) I just want to be taken seriously for once.`,['playful','casual','funny'],['makes you laugh in meetings','is tired of the discourse'],'playful',3,'sans','versatility',['club','field']],
 ['Fraunces',"'Fraunces'",'the charming oddball','Charming, peculiar and vintage. Owns too many teapots.',`I have wonky serifs and a very good vintage coat. I smell like a bookshop and I'm peculiar on purpose. Seeking someone who thinks "quirky" is a compliment.`,['charming','peculiar','vintage'],['has a story for every object','will tell you every story'],'playful',3,'serif','personality',['library','coffee']],
 ['Yeseva One',"'Yeseva One'",'the diva','Regal, romantic and extremely demanding.',`I expect flowers, reservations and eye contact. I'm romantic, but I have standards, and my standards have standards. You may kiss my hand. Briefly.`,['regal','romantic','demanding'],['treats you like royalty','expects to be treated like royalty'],'elegant',4,'serif','beauty',['gallery','club']],
 ['Bodoni Moda',"'Bodoni Moda'",'the fashion editor','Fashionable, dramatic and expensive.',`I'm all high contrast and hairline serifs. I own one black turtleneck in six versions. Don't ask what I paid. Seeking someone who can handle an editorial moment at brunch.`,['fashionable','dramatic','expensive'],['always dressed for the date','the date is also a photoshoot'],'elegant',4,'serif','beauty',['gallery','club']],
 ['Gloock',"'Gloock'",'the mysterious one','Mysterious, sharp and confident.',`I don't say much. I walk in, look incredible and leave early. My serifs are sharp and my mystery is fully intentional. Ask me anything. I'll answer with a smirk.`,['mysterious','sharp','confident'],['makes everything feel cinematic','answers everything with a smirk'],'mysterious',3,'serif','personality',['gallery','bush']],
 ['Bungee',"'Bungee'",'the loud one','Loud, bold and unapologetic.',`I'M HERE, I'M LOUD, AND I OWN A NEON SIGN. I'm basically a shop front in human form. If you want subtle, swipe left. If you want fun, hold on.`,['loud','bold','unapologetic'],['you will never lose them at a party','you will always hear them at a party'],'playful',5,'sans','personality',['club','field']],
 ['Lilita One',"'Lilita One'",'the cheerleader','Cheerful, chunky and confident.',`I'm chunky, I'm cheerful, and I believe in you. I will bring a sign to your event. I will make the sign myself. It will have glitter.`,['cheerful','chunky','confident'],['your biggest fan','your most embarrassing fan'],'playful',3,'sans','personality',['coffee','field']],
 ['Bowlby One',"'Bowlby One'",'the big ego','Big personality, bigger ego.',`I take up a lot of space and I'm not sorry. I'm bold, I'm heavy, and my ego has its own zip code. Seeking someone who can handle it and still tell me I'm humble.`,['big','heavy','confident'],['confident enough for both of you','talks about themself in third person'],'playful',4,'sans','personality',['club','coffee']],
 ['Changa One',"'Changa One'",'the retro entertainer','Retro, punchy and entertaining.',`I'm a 70s lunchbox with a heart of gold. I do bits. I do bits at weddings. Looking for someone who'll laugh at all of them, even the repeats.`,['retro','punchy','entertaining'],['always has a joke ready','always has the same joke ready'],'playful',3,'sans','personality',['coffee','club']],
 ['Syne',"'Syne'",'the art school ex','Artistic, experimental and unconventional.',`I'm wide, I'm weird, and I made a zine about you. I think rules are a suggestion. Seeking someone who gets conceptual art, or at least pretends convincingly.`,['artsy','experimental','weird'],['never boring','explains the art at length'],'mysterious',4,'sans','personality',['gallery','bush']],
 ['Unbounded',"'Unbounded'",'the ambitious one','Futuristic and ambitious. Has a five-year plan for date one.',`I have a five-year plan, a ten-year plan, and a startup idea for our first date. Rounded, futuristic and slightly out of breath. Looking for a co-founder. I mean partner.`,['futuristic','ambitious','rounded'],['supports your dreams like an investor','calls dinner "networking"'],'minimalist',3,'sans','versatility',['club','gallery']],
 ['Orbitron',"'Orbitron'",'the sci-fi nerd','Sci-fi obsessed and technological.',`I'm 80% circuits and 20% feelings. I talk to my robot vacuum. Looking for someone to watch every space movie with and argue about the sequels.`,['sci-fi','technical','nerdy'],['always charged and ready','talks to the robot vacuum'],'mysterious',3,'sans','personality',['library','club']],
 ['Rock Salt',"'Rock Salt'",'the messy one','Rebellious, messy and unpredictable.',`I'm scribbled, I'm scratchy, and I never reply on time. I wrote this bio on a napkin. Looking for someone who likes a little chaos with their coffee.`,['messy','rebellious','unpredictable'],['never boring','never on time'],'mysterious',4,'other','personality',['bush','club']],
 ['Coiny',"'Coiny'",'the bubbly weirdo','Quirky, bubbly and unapologetically eccentric.',`I'm round, I'm bouncy, and I once wore a banana costume to the grocery store on a Tuesday, for no reason. Looking for someone equally unhinged.`,['quirky','bubbly','eccentric'],['makes everyone smile','makes everyone wonder'],'playful',4,'sans','personality',['field','bush']],
 ['Space Grotesk',"'Space Grotesk'",'the quirky intellectual','Modern, intellectual and slightly eccentric.',`I read the footnotes. I have strong opinions about spreadsheets and weak opinions about small talk. I'll explain this poem to you whether you ask or not.`,['modern','intellectual','quirky'],['smartest person at dinner','makes sure you know it'],'minimalist',2,'sans','readability',['library','gallery']],
 ['Papyrus',"'Papyrus','Herculanum','Luminari',fantasy",'the misunderstood one','Misunderstood, dramatic and tired of the jokes.',`I'm misunderstood. Everyone thinks I'm obsessed with ancient Egypt. Is it a crime to have interests? Honestly, I deserve better.`,['misunderstood','dramatic','vintage'],['a surprisingly good listener','has heard every joke about themself'],'mysterious',4,'other','personality',['library','bush']]
].map(([name,css,vibe,personality,bio,tags,flags,type,drama,cls,strength,dates])=>({name,css,vibe,personality,bio,tags,flags,type,drama,cls,strength,dates}));

const CHARMS = ["❤︎ ̖́-", "✦", "*⑅♥", "◌˳𓇬", "⋆゜", "ꕀ", "ᯓ", "✩⡱", "˖ ࣪⊹", "✦.*◝", "☆ ︎︎◝", "✿ܓ", "𐀔", "𐦍⋆", "⋆.˚", "ᝰ", "𛰙᭜𖫴𖫰𖫱𖫳𖫲𖫲𖫳𖫴𖫰𖫱꛰·̫ ᭜𖫴𖫰𖫱𖫳𖫲𖫲𖫳𖫴𖫰𖫱꛰⋆͛", "⇢", "✿", "ܓ", "♡՞", "݀ ܸܸ⁺˳✿⏦۠₊"];
const PASS_LINES = ['ouch. ghosted.','swiped left. they’ll live.','a bold choice. brutal.','next! the kerning was off anyway.'];
const MATCH_LINES = n => [`it's a match! ${n} is already typing…`,`${n} just blushed. in bold.`,`${n} saved your number as “♡”`,`${n} said “I thought you’d never swipe.”`];
const SUPER_LINES = n => [`SUPER LIKE. ${n} felt that.`,`${n} is shaking. you absolute menace.`,`${n} just told their group chat.`];

/* ---------- helpers ---------- */
const $ = s => document.querySelector(s);
const pick = a => a[Math.floor(Math.random()*a.length)];
const store = {
  get:(k,d)=>{ try{ return JSON.parse(localStorage.getItem(k)) ?? d }catch{ return d } },
  set:(k,v)=>{ try{ localStorage.setItem(k,JSON.stringify(v)) }catch{} }
};
const STATIC_FONTS = ['Abril Fatface','Caveat','Fredoka','Pacifico'];   // loaded in index.html
const SYSTEM_FONTS = ['Papyrus'];                                       // installed on the visitor's device
const WEIGHTS = {'Playfair Display':600,'Cormorant Garamond':600,'Cinzel':600,'Inter':600,'Josefin Sans':600,'Quicksand':600,'Comic Neue':700,'Lora':500,'Comfortaa':500,'Syne':700,'Unbounded':600,'Orbitron':600,'Space Grotesk':600,'Bodoni Moda':600};
const loadedFonts = new Set();
function ensureFont(f){
  if(!f || loadedFonts.has(f.name) || STATIC_FONTS.includes(f.name) || SYSTEM_FONTS.includes(f.name)) return;
  loadedFonts.add(f.name);
  const fam = f.css.replace(/'/g,''), w = WEIGHTS[fam];
  const l = document.createElement('link'); l.rel = 'stylesheet';
  l.href = `https://fonts.googleapis.com/css2?family=${fam.replace(/ /g,'+')}${w?':wght@'+w:''}&display=swap`;
  document.head.appendChild(l);
}
const fontByName = n => FONTS.find(f => f.name === n) || FONTS[0];
function toast(msg){ const t=$('#toast'); t.textContent=msg; t.classList.add('show'); clearTimeout(toast.id); toast.id=setTimeout(()=>t.classList.remove('show'),1900) }
function burst(x,y,ch='♥',n=9){
  for(let i=0;i<n;i++){
    const s=document.createElement('span'); s.className='burst'; s.textContent=ch;
    s.style.left=x+'px'; s.style.top=y+'px';
    s.style.setProperty('--x',(Math.random()*240-120)+'px'); s.style.setProperty('--y',(-40-Math.random()*160)+'px');
    document.body.appendChild(s); setTimeout(()=>s.remove(),1000);
  }
}
async function copy(text){
  try{ await navigator.clipboard.writeText(text) }
  catch{ const a=document.createElement('textarea'); a.value=text; document.body.appendChild(a); a.select(); document.execCommand('copy'); a.remove() }
  toast('copied ♡');
}

/* ---------- floating background ---------- */
(function(){
  const box=$('#floaties'), bits=['✦','♡','✿','⋆','☁','✧'];
  for(let i=0;i<16;i++){
    const s=document.createElement('span'); s.textContent=bits[i%bits.length];
    s.style.left=Math.random()*100+'%'; s.style.fontSize=(14+Math.random()*22)+'px';
    s.style.animationDuration=(14+Math.random()*16)+'s'; s.style.animationDelay=(-Math.random()*20)+'s';
    box.appendChild(s);
  }
})();

/* ---------- tabs ---------- */
document.querySelectorAll('.tab').forEach(b => b.onclick = () => switchTab(b.dataset.tab));
function switchTab(id){
  document.querySelectorAll('.tab').forEach(t=>t.classList.toggle('active',t.dataset.tab===id));
  document.querySelectorAll('.panel').forEach(p=>p.classList.toggle('active',p.id===id));
}

/* ---------- TAB 1: dating ---------- */
let idx = 0;
let matches = store.get('ff-matches', []);
let supers = store.get('ff-super', []);
let activeMatch = matches[0] || null;
const compat = f => 62 + ([...f.name].reduce((a,c)=>a+c.charCodeAt(0),0) * 7 % 37);
const shuffle = a => { a = [...a]; for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]]; } return a; };
let deckOrder = shuffle(FONTS);

function renderCard(){
  const deck = $('#deck');
  deck.innerHTML = '';
  if(idx >= deckOrder.length){
    deck.innerHTML = '<div class="nomore">you’ve seen everyone. touch grass ✿<br>then tap ↺ for a rebound</div>';
    return;
  }
  const f = deckOrder[idx];
  for(let k=idx;k<idx+4;k++) ensureFont(deckOrder[k]);
  const c = document.createElement('div');
  c.className = 'card';
  c.innerHTML = `
    <span class="stamp yes">SWIPED ♥</span><span class="stamp no">GHOSTED</span><span class="stamp sup">SUPER ★</span>
    <div class="specimen" style="font-family:${f.css}">Aa</div>
    <h3 style="font-family:${f.css}">${f.name}</h3>
    <div class="vibe">${f.vibe}</div>
    <div class="persona">✦ ${f.personality}</div>
    <p class="bio">“${f.bio}”</p>
    <div class="tags">${f.tags.map(t=>`<span>#${t}</span>`).join('')}</div>
    <div class="flags"><span><b>♡ green flag:</b> ${f.flags[0]}</span><span><b>⚑ red flag:</b> ${f.flags[1]}</span></div>
    <div class="meter"><small>compatibility with you · ${compat(f)}%</small><div class="bar"><i></i></div></div>`;
  deck.appendChild(c);
  requestAnimationFrame(()=>requestAnimationFrame(()=>c.querySelector('.bar i').style.width = compat(f)+'%'));
  bindDrag(c);
}

function bindDrag(c){
  let sx = null, sy = 0;
  const yes = c.querySelector('.yes'), no = c.querySelector('.no'), sup = c.querySelector('.sup');
  c.onpointerdown = e => { sx = e.clientX; sy = e.clientY; c.classList.add('drag'); c.setPointerCapture(e.pointerId) };
  c.onpointermove = e => {
    if(sx === null) return;
    const dx = e.clientX - sx, dy = e.clientY - sy;
    c.style.transform = `translate(${dx}px,${Math.min(dy,0)}px) rotate(${dx/18}deg)`;
    const up = dy < 0 && Math.abs(dy) > Math.abs(dx);
    yes.style.opacity = up ? 0 : Math.max(0, dx/90);
    no.style.opacity = up ? 0 : Math.max(0, -dx/90);
    sup.style.opacity = up ? Math.min(1, -dy/90) : 0;
  };
  c.onpointerup = e => {
    if(sx === null) return;
    const dx = e.clientX - sx, dy = e.clientY - sy; sx = null; c.classList.remove('drag');
    if(dy < -110 && Math.abs(dy) > Math.abs(dx)) decide('super',c);
    else if(dx > 90) decide('like',c);
    else if(dx < -90) decide('pass',c);
    else { c.style.transform=''; yes.style.opacity=no.style.opacity=sup.style.opacity=0 }
  };
}

function addMatch(name, isSuper){
  if(!matches.includes(name)) matches.push(name);
  if(isSuper && !supers.includes(name)) supers.push(name);
  store.set('ff-matches',matches); store.set('ff-super',supers);
  activeMatch = name; renderMatches();
}

function decide(kind, card){
  card = card || document.querySelector('.card');
  if(!card) return;
  const f = deckOrder[idx];
  card.classList.remove('drag');
  card.style.transform = kind==='super' ? 'translateY(-560px) scale(1.1)' : `translateX(${kind==='like'?420:-420}px) rotate(${kind==='like'?25:-25}deg)`;
  card.style.opacity = 0;
  if(kind !== 'pass'){
    const r = card.getBoundingClientRect();
    burst(r.left + r.width/2, r.top + r.height/2, kind==='super'?'★':'♥', kind==='super'?18:9);
    addMatch(f.name, kind==='super');
    toast(pick(kind==='super' ? SUPER_LINES(f.name) : MATCH_LINES(f.name)));
  } else toast(pick(PASS_LINES));
  idx++;
  setTimeout(renderCard, 320);
}

function renderMatches(){
  $('#matchCount').textContent = matches.length;
  const box = $('#matches');
  box.innerHTML = matches.length ? '' : '<span class="empty">no matches yet… your standards are either very high or very low ✧</span>';
  matches.forEach(n => {
    const f = fontByName(n), b = document.createElement('button'); ensureFont(f);
    b.className = 'chip' + (n===activeMatch ? ' on' : ''); b.textContent = (supers.includes(n)?'★ ':'') + n; b.style.fontFamily = f.css;
    b.onclick = () => { activeMatch = n; renderMatches(); };
    box.appendChild(b);
  });
  const prev = $('#datePreview'), f = fontByName(activeMatch);
  prev.style.fontFamily = activeMatch ? f.css : '';
  prev.textContent = $('#dateText').value || '…';
}

$('#like').onclick = () => decide('like');
$('#pass').onclick = () => decide('pass');
$('#super').onclick = () => decide('super');
$('#undo').onclick = () => { idx = 0; deckOrder = shuffle(FONTS); renderCard(); toast('fresh start ✿'); };
$('#dateText').oninput = renderMatches;
document.addEventListener('keydown', e => {
  if(!$('#dating').classList.contains('active') || e.target.tagName==='INPUT') return;
  if(e.key==='ArrowRight') decide('like');
  else if(e.key==='ArrowLeft') decide('pass');
  else if(e.key==='ArrowUp') decide('super');
});

/* ---------- TAB 2: compatibility quiz ---------- */
const QUIZ = [
  {q:"What's your type?", key:'type', opts:[['Elegant','elegant'],['Playful','playful'],['Mysterious','mysterious'],['Minimalist','minimalist']]},
  {q:'How much drama can you tolerate?', key:'drama', opts:[['None. I need peace and a nap.',1],['A little spice, like a good soup.',2],['Soap-opera levels, please.',4],['Bring me chaos. I thrive.',5]]},
  {q:'Serif or sans-serif?', key:'cls', opts:[['Serif. I like a little foot.','serif'],['Sans. Clean lines only.','sans'],['Neither. Script, mono, handwritten. Surprise me.','other'],['What’s a serif? I’m here for the vibes.','any']]},
  {q:'What matters most?', key:'strength', opts:[['Readability','readability'],['Personality','personality'],['Beauty','beauty'],['Versatility','versatility']]},
  {q:'Pick your ideal date.', key:'date', opts:[['A quiet library','library'],['A sweaty nightclub','club'],['An art gallery','gallery'],['A coffee shop','coffee'],['Hiding in a bush (don’t ask)','bush'],['A flower field, running dramatically','field']]}
];
const DATE_WORDS = {library:'a quiet library',club:'a nightclub',gallery:'an art gallery',coffee:'a coffee shop',bush:'hiding in a bush',field:'a flower field'};
let qi = 0, ans = {};

function scoreFont(f){
  let s = 0; const why = [];
  if(f.type === ans.type){ s += 4; why.push(`is very ${f.type}`); }
  const dd = Math.abs(f.drama - ans.drama); s += 3 - dd;
  if(dd <= 1) why.push(f.drama >= 4 ? 'brings the drama you asked for' : 'keeps the drama at your comfort level');
  if(ans.cls === 'any') s += 1; else if(f.cls === ans.cls){ s += 3; why.push(ans.cls==='serif'?'has the serifs you like':ans.cls==='sans'?'keeps the lines clean':'is wonderfully unconventional'); }
  if(f.strength === ans.strength){ s += 3; why.push(`is all about ${f.strength}`); }
  if(f.dates.includes(ans.date)){ s += 3; why.push(`would happily go to ${DATE_WORDS[ans.date]}`); }
  return { f, s, pct: Math.min(99, 60 + Math.round(Math.max(0,s)/16*39)), why };
}
function joinWhy(a){ return a.length<2 ? (a[0]||'is a mysterious stranger, opposites attract') : a.slice(0,-1).join(', ')+' and '+a[a.length-1]; }

function renderQuiz(){
  const body = $('#quizBody');
  body.classList.remove('in'); void body.offsetWidth; body.classList.add('in');
  if(qi === -1){
    body.innerHTML = `<h2>tired of swiping?</h2><p class="qlead">Good news: I don’t discriminate against the lazy romantics. Answer five questions and I’ll hand you three fonts. No swiping, no rejection, mostly.</p><button class="soft" id="qstart">find my type ♡</button>`;
    $('#qstart').onclick = () => { qi = 0; ans = {}; renderQuiz(); };
    return;
  }
  if(qi >= QUIZ.length){ return renderResult(body); }
  const q = QUIZ[qi];
  body.innerHTML = `<div class="qbar"><i style="width:${qi/QUIZ.length*100}%"></i></div><small class="tiny">question ${qi+1} of ${QUIZ.length}</small><h2>${q.q}</h2><div class="qopts"></div>`;
  const box = body.querySelector('.qopts');
  q.opts.forEach(([label,val],i) => {
    const b = document.createElement('button'); b.className='qopt'; b.textContent = label; b.style.animationDelay = i*60+'ms';
    b.onclick = e => { ans[q.key] = val; const r=b.getBoundingClientRect(); burst(r.left+r.width/2,r.top,'♡',5); qi++; setTimeout(renderQuiz,200); };
    box.appendChild(b);
  });
}

function renderResult(body){
  const top = FONTS.map(scoreFont).sort((a,b)=>b.s-a.s).slice(0,3);
  top.forEach(r => ensureFont(r.f));
  const byDrama = [...top].sort((a,b)=>b.f.drama-a.f.drama);
  const loud = byDrama[0].f.name, quiet = byDrama[2].f.name, mid = byDrama[1].f.name;
  body.innerHTML = `<h2>your top three ♡</h2><p class="qlead">Three fonts, hand-picked by a very unqualified matchmaker.</p>` +
    top.map((r,i)=>`<div class="result" style="animation-delay:${i*180}ms"><div class="rank">${i+1}</div><div class="rbody">
      <div class="rname" style="font-family:${r.f.css}">${r.f.name} <small>${r.pct}% match</small></div>
      <div class="rsamp" style="font-family:${r.f.css}">Will you be my favourite font?</div>
      <p><b>why you’ll click:</b> ${r.f.name} ${joinWhy(r.why)}.</p>
      <p><b>bonus:</b> ${r.f.flags[0]}. <i>(watch out: ${r.f.flags[1]}.)</i></p>
      <button class="soft mini" data-pick="${r.f.name}">just pick ${r.f.name} ♡</button></div></div>`).join('') +
    `<div class="trio"><b>as a trio:</b> ${loud} takes the headlines, ${quiet} handles the paragraphs, and ${mid} sneaks in for captions and small flirtations. A very functional love triangle.</div>
     <div class="actions row"><button class="soft" id="qadd">add all three to my situationships ♡</button><button class="soft gold" id="qagain">retake the quiz</button></div>`;
  body.querySelectorAll('[data-pick]').forEach(b => b.onclick = () => {
    addMatch(b.dataset.pick,false); b.textContent='added ♡'; b.disabled=true;
    const r=b.getBoundingClientRect(); burst(r.left+r.width/2,r.top,'♥',8); toast(`${b.dataset.pick} is all yours. be gentle.`);
  });
  $('#qadd').onclick = e => { top.forEach(r=>addMatch(r.f.name,false)); const b=e.currentTarget.getBoundingClientRect(); burst(b.left+b.width/2,b.top,'♥',14); toast('three new situationships. good luck.'); switchTab('dating'); };
  $('#qagain').onclick = () => { qi = -1; renderQuiz(); };
}

/* ---------- TAB 3: decor (editable canvas + charms) ---------- */
let saved = store.get('ff-saved', []);
const canvas = $('#preview');
function autosize(){ canvas.style.height = 'auto'; canvas.style.height = canvas.scrollHeight + 'px'; }
function insertAtCaret(str){
  const a = canvas.selectionStart ?? canvas.value.length, b = canvas.selectionEnd ?? a;
  canvas.setRangeText(str, a, b, 'end'); autosize();
}
canvas.addEventListener('input', autosize);
canvas.value = 'soft notes ✦'; autosize();

CHARMS.forEach((ch,i) => {
  const b = document.createElement('button'); b.className = 'chip'; b.textContent = ch; b.style.animationDelay = i*25+'ms';
  b.onmousedown = b.onpointerdown = e => e.preventDefault(); // keep the cursor where it is
  b.onclick = () => { insertAtCaret(ch); const r = b.getBoundingClientRect(); burst(r.left+r.width/2, r.top, ch.length < 3 ? ch : '✦', 6); };
  $('#charms').appendChild(b);
});
$('#copy').onclick = () => copy(canvas.value);
$('#clear').onclick = () => { canvas.value = ''; autosize(); canvas.focus(); };
$('#save').onclick = () => {
  const t = canvas.value.trim();
  if(!t) return toast('add something pretty first ✦');
  saved.unshift({ text: t, font: 'Fredoka' });
  store.set('ff-saved', saved); drawSaved(); toast('pinned. it’s official ♡');
  const r = $('#save').getBoundingClientRect(); burst(r.left+r.width/2, r.top, '✦');
};
function drawSaved(){
  $('#savedCount').textContent = saved.length;
  const box = $('#saved');
  box.innerHTML = saved.length ? '' : '<span class="empty">nothing pinned yet. commitment issues? ✧</span>';
  saved.forEach((s,i) => {
    const row = document.createElement('div'); row.className = 'pin';
    const txt = document.createElement('div'); txt.textContent = s.text; txt.style.fontFamily = fontByName(s.font).css;
    const c = document.createElement('button'); c.textContent = '❐'; c.title = 'copy'; c.onclick = () => copy(s.text);
    const d = document.createElement('button'); d.textContent = '✕'; d.title = 'remove';
    d.onclick = () => { saved.splice(i,1); store.set('ff-saved',saved); drawSaved(); };
    row.append(txt,c,d); box.appendChild(row);
  });
}

/* ---------- pixel hearts (1em = 1 pixel) ---------- */
const HEART_GRID = ['.OOO.OOO.','OHHFOFFFO','OHFFFFFFO','OFFFFFFFO','.OFFFFFO.','..OFFFO..','...OFO...','....O....'];
(function drawHearts(){
  const sh = [];
  HEART_GRID.forEach((row,y)=>[...row].forEach((ch,x)=>{
    if(ch==='.') return;
    sh.push(`${x}em ${y}em 0 var(${ch==='O'?'--po':ch==='H'?'--ph':'--pf'})`);
  }));
  document.querySelectorAll('.pxh').forEach(p=>{ const i=document.createElement('i'); i.style.boxShadow = sh.join(','); p.appendChild(i); });
})();

/* ---------- intro ---------- */
(function(){
  const intro = $('#intro'), slides = [...intro.querySelectorAll('.slide')], dots = $('#dots');
  let cur = 0;
  slides.forEach((_,i)=>{ const d=document.createElement('i'); if(i===0) d.className='on'; dots.appendChild(d); });
  function go(n){
    const from = slides[cur]; from.classList.add('leaving');
    setTimeout(()=>{
      from.classList.remove('active','leaving'); cur = n;
      slides[cur].classList.add('active');
      [...dots.children].forEach((d,i)=>d.classList.toggle('on',i===cur));
    },380);
  }
  intro.querySelectorAll('.next').forEach(b=>b.onclick=()=>go(cur+1));
  $('#go').onclick = e => {
    const r = e.currentTarget.getBoundingClientRect(); burst(r.left+r.width/2, r.top+r.height/2);
    intro.classList.add('gone'); setTimeout(()=>intro.remove(),700);
  };
})();

/* ---------- init ---------- */
qi = -1;
renderCard(); renderMatches(); renderQuiz(); drawSaved();
