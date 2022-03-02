(()=>{"use strict";(e=>{const t=document.querySelector("#timer-days"),o=document.querySelector("#timer-hours"),r=document.querySelector("#timer-minutes"),a=document.querySelector("#timer-seconds"),n=()=>{let e=(new Date("25 march 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,days:Math.floor(e/60/60/24),hours:Math.floor(e/60/60)%24,minutes:Math.floor(e/60)%60,seconds:Math.floor(e%60)}};let s=n(),l=setInterval((()=>{s.timeRemaining>0?(()=>{let e=n();5>e.days%10>1?t.textContent=e.days+" дня /":e.days%10==1&&11!=e.days?t.textContent=e.days+" день /":t.textContent=e.days+" дней /",e.hours<10&&e.hours>=0?o.textContent="0"+e.hours+" ч":o.textContent=e.hours+" ч",e.minutes<10&&e.minutes>=0?r.textContent="0"+e.minutes+" м":r.textContent=e.minutes+" м",e.seconds<10&&e.seconds>=0?a.textContent="0"+e.seconds+" с":a.textContent=e.seconds+" с"})():(clearTimeout(l),console.log("Остановка!"))}),1e3)})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector("body"),o=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",(t=>{if(t.target.closest(".menu"))o();else{if(t.target.matches("menu"))return;if(t.target.classList.contains("close-btn"))o();else if(t.target.matches("ul>li>a")){t.preventDefault();const e=t.target.getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"}),o()}else if(t.target.matches("main>a>img")){t.preventDefault();const e=t.target.closest("a").getAttribute("href");document.querySelector(e).scrollIntoView({behavior:"smooth",block:"start"})}else!e.classList.contains("active-menu")||t.target.closest(".menu")||t.target.matches("ul>li")||o()}}))})(),(()=>{const e=document.querySelector(".popup"),t=e.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn");let r,a=0;const n=()=>{r=requestAnimationFrame(n),t.style.transition="all 0.3s",t.style.top>"10%"?(a++,t.style.top=120-10*a+"%"):cancelAnimationFrame(r)},s=()=>{r=requestAnimationFrame(n),t.style.transition="all 0.3s",t.style.top<"120%"?(a++,t.style.top=10+10*a+"%"):cancelAnimationFrame(r)};o.forEach((o=>{o.addEventListener("click",(()=>{e.style.display="block",innerWidth<=768?t.style.top="10%":(r=requestAnimationFrame(n),t.style.top="120%")}))})),e.addEventListener("click",(o=>{o.target.closest(".popup-content")&&!o.target.classList.contains("popup-close")||(innerWidth>768?(t.style.top="120%",a=0,setTimeout((()=>{e.style.display="none"}),100)):(r=requestAnimationFrame(s),t.style.top="10%",e.style.display="none"))}))})(),(()=>{const e=document.querySelector(".calc-block").querySelectorAll("input"),t=document.querySelectorAll('[name="user_message"], [name="user_name"]'),o=document.querySelectorAll('[type="tel"]'),r=document.querySelectorAll('[type="email"]'),a=document.querySelectorAll('[name="user_form"] input');e.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/\D+/g,"")}))})),t.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-я\ \-\.\,]/gi,"")})),e.addEventListener("blur",(e=>{e.target.value=e.target.value.toLowerCase().replace(/([\-\ ]|^)([а-яё])/g,(e=>e.toUpperCase()))}))})),o.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9()-]/gi,"")}))})),r.forEach((e=>{e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^\@\-\_\.\!\~\*\'\w]/gi,"")}))})),a.forEach((e=>{e.addEventListener("blur",(e=>{e.target.value=e.target.value.replace(/^\-+|\-+$/g,"").replace(/([\s\-])+/g,((e,t)=>t))}))}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const r=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===r?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})(),((e,t,o)=>{const r=document.querySelector(".portfolio-content"),a=document.querySelectorAll(".portfolio-item"),n=document.querySelector(".portfolio-dots");let s,l,c=0;const i=(e,t,o)=>{e[t].classList.remove(o)},u=(e,t,o)=>{e[t].classList.add(o)},d=(e=1500)=>{s=setInterval(m,e)},m=()=>{i(a,c,o),i(l,c,t),c++,c>=a.length&&(c=0),u(a,c,o),u(l,c,t)};r.addEventListener("click",(r=>{r.preventDefault(),r.target.matches(".dot, .portfolio-btn")&&(i(a,c,o),i(l,c,t),r.target.matches("#arrow-right")?c++:r.target.matches("#arrow-left")?c--:r.target.classList.contains(e)&&l.forEach(((e,t)=>{r.target===e&&(c=t)})),c>=a.length&&(c=0),c<0&&(c=a.length-1),u(a,c,o),u(l,c,t))})),r.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-btn")&&clearInterval(s)}),!0),r.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-btn")&&d(2e3)}),!0),d(2e3),a.forEach((()=>{let t=document.createElement("li");t.classList.add(e),n.append(t)})),l=document.querySelectorAll(".dot"),l[0].classList.add(t)})("dot","dot-active","portfolio-item-active")})();