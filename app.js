const menuButton=document.getElementById('menuButton');
const navigation=document.getElementById('navigation');
menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')!=='true';menuButton.setAttribute('aria-expanded',String(open));navigation.classList.toggle('open',open);});
navigation.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('open');}));
document.addEventListener('keydown',e=>{if(e.key==='Escape'){menuButton.setAttribute('aria-expanded','false');navigation.classList.remove('open');}});
document.getElementById('shareButton').addEventListener('click',async()=>{const button=document.getElementById('shareButton');const url='https://renildo-certinho-riacho-fundo.flutedpitch3.chatgpt.site/';try{await navigator.clipboard.writeText(url);const toast=document.getElementById('toast');toast.hidden=false;setTimeout(()=>toast.hidden=true,3500);}catch{if(navigator.share){try{await navigator.share({title:'Renildo • Certinho do Esporte',url});}catch{}}else{button.textContent=url;}}});
