const e=document.querySelectorAll(".link"),t=document.querySelectorAll("section");let c=0;e.forEach(((s,i)=>{s.addEventListener("click",(()=>{c!=i&&(e[c].classList.remove("active"),s.classList.add("active"),t[c].classList.remove("active"),setTimeout((()=>{c=i,t[i].classList.add("active")}),1e3))}))}));
//# sourceMappingURL=index.a49edc6d.js.map
