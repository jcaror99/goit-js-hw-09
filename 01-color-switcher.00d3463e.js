const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");let a=null;const r=()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`};t.addEventListener("click",(()=>{r(),t.disabled=!0,a=setInterval(r,1e3)})),e.addEventListener("click",(()=>{clearInterval(a),t.disabled=!1}));
//# sourceMappingURL=01-color-switcher.00d3463e.js.map
