(()=>{"use strict";const e=()=>{const e=document.getElementById("greeting");e&&e.remove()},t=async e=>{const t=document.createElement("div"),n=document.createElement("span");n.textContent="Loading...",t.appendChild(n),document.getElementById("container").appendChild(t),await(e=>new Promise(((t,n)=>{setTimeout((()=>{t()}),e)})))(e),n.textContent=(new Date).toString()};document.addEventListener("DOMContentLoaded",(()=>{document.getElementById("add-one").addEventListener("click",(()=>{e(),t(1e3*Math.random())})),document.getElementById("add-three").addEventListener("click",(()=>{e(),Array(3).fill().forEach((()=>{t(2e3*Math.random()+1e3)}))}))}))})();