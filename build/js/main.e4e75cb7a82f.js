(()=>{"use strict";const e={notification:"E0yvz8SDFF78Hbsu2uXH"};function t(e){const t=e.map((function(e){const t=e.completed?"completed":"",n=e.completed?"checked":"";return`\n              <li data-id="${e.id}" class="${t}">\n                  <span class="custom-checkbox">\n                      <img class="check" src="./images/checkmark.svg" width="22" height="22"></img>\n                      <input class="real-checkbox" type="checkbox" ${n} />\n                  </span>\n                  <label>${e.text}</label>\n                  <span class="delete"></span>\n              </li>\n          `}));document.querySelector(".todo-list").innerHTML=t.join("")}function n(e){return parseInt(e.dataset.id||e.parentNode.dataset.id||e.parentNode.parentNode.dataset.id,10)}let o=JSON.parse('[{"id":1560865205317,"text":"Buy eggs","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false},{"id":1560865205318,"text":"Do 15 min exercise","completed":false}]');function c(){return o}function i(n){let i=n.target.value;var a;a={id:Date.now(),text:i,completed:!1},o.push(a),t(c()),document.querySelector(".new-todo").value="",function(){const t=`<div class="${e.notification}">Todo item added</div>`;document.body.innerHTML+=t,setTimeout((function(){document.querySelector(`.${e.notification}`)}),2e3)}()}window.addEventListener("load",(function(){t(c())})),document.addEventListener("change",(function(e){e.target.classList.contains("new-todo")&&i(e)})),document.addEventListener("click",(function(e){e.target.classList.contains("delete")&&function(e){var i;i=n(e.target),o=o.filter((function(e){return e.id!==i})),t(c())}(e),e.target.classList.contains("real-checkbox")&&function(e){!function(e,t){const n=o.findIndex((function(t){return t.id===e}));o[n].completed=t}(n(e.target),e.target.checked),t(c())}(e)})),console.log("Hello"),console.log("Hello"),console.log("Hello")})();