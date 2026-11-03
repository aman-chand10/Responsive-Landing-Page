const navbar=document.querySelector('#navbar');
const toggle=document.querySelector('#menu-toggle');
const links=document.querySelector('#nav-links');
const navLinks=[...document.querySelectorAll('.nav-link')];
function updateScrollStyle(){navbar.classList.toggle('scrolled',window.scrollY>24)}
updateScrollStyle();
window.addEventListener('scroll',updateScrollStyle,{passive:true});
toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
navLinks.forEach(link=>link.addEventListener('click',()=>{navLinks.forEach(item=>item.classList.toggle('active',item===link));links.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.setAttribute('aria-label','Open navigation')}));
const sections=[...document.querySelectorAll('main section[id]')];
const observer=new IntersectionObserver(entries=>{const visible=entries.filter(e=>e.isIntersecting).sort((a,b)=>b.intersectionRatio-a.intersectionRatio)[0];if(!visible)return;const id=visible.target.id;navLinks.forEach(link=>link.classList.toggle('active',link.getAttribute('href')===`#${id}`))},{rootMargin:'-25% 0px -60% 0px',threshold:[0,.2,.5]});
sections.forEach(section=>observer.observe(section));