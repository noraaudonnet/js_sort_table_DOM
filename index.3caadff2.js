function r(r,e){(null==e||e>r.length)&&(e=r.length);for(var t=0,n=Array(e);t<e;t++)n[t]=r[t];return n}function e(e){return function(e){if(Array.isArray(e))return r(e)}(e)||function(r){if("undefined"!=typeof Symbol&&null!=r[Symbol.iterator]||null!=r["@@iterator"])return Array.from(r)}(e)||function(e,t){if(e){if("string"==typeof e)return r(e,void 0);var n=Object.prototype.toString.call(e).slice(8,-1);if("Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return r(e,void 0)}}(e)||function(){throw TypeError("Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}var t=document.querySelector("thead tr"),n=e(document.querySelectorAll("thead tr th"));t.addEventListener("click",function(r){var t,o=r.target.closest("th");if(o){var i=n.indexOf(o),a=e(document.querySelectorAll("tbody tr"));switch(o.innerText){case"Name":case"Position":t=a.sort(function(r,e){return r.children[i].innerText.localeCompare(e.children[i].innerText)});break;case"Age":t=a.sort(function(r,e){return+r.children[i].innerText-+e.children[i].innerText});break;case"Salary":t=a.sort(function(r,e){return+r.children[i].innerText.slice(1).split(",").join("")-+e.children[i].innerText.slice(1).split(",").join("")});break;default:return}var c=document.querySelector("tbody");t.forEach(function(r){return c.append(r)})}});
//# sourceMappingURL=index.3caadff2.js.map
