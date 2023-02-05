var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};var n=function(){function t(t){this.menu=[],this.menu=t.menu||[],this.el=t.el||null,this.node=this.init();var n=this;this.clickCallback=null==t?void 0:t.clickCallback,this.el.oncontextmenu=function(t){return!1},this.el.addEventListener("mouseup",(function(t){2==t.button&&n.show(t.clientX,t.clientY)})),this.addHandler(document,"click",(function(){n.hide()}))}return t.prototype.init=function(){var t,n=((null===(t=this.el)||void 0===t?void 0:t.shadowRoot)||this.el).appendChild(this.createMenu(this.menu));return this.el.oncontextmenu=function(t){return!1},n},t.prototype.createMenu=function(t){var n=this,e=document.createElement("ul");e.className="menu";for(var o=function(o){var l=document.createElement("li");if(l.innerHTML=t[o].name,function(e){n.addHandler(l,"click",(function(){n.hide(),n.emitEvent(t[e],"menuclick"),"function"==typeof n.clickCallback&&n.clickCallback.call(this,t[e])}))}(o),t[o].menu){var r=document.createElement("img");r.src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADQAAAAwCAYAAABe6Vn9AAABJElEQVRoQ+3YXQ0CMRAE4DkHOEACSAAnIAEnOAAcIAEJOMACDiCbtAnhgeslO1NymXul7OWb6ZWfATO7hpl5YNC/N+qG3JA4AW85ceCTb+eGJkcmfoMbagh8A+AO4NmwNn0Jo6GAPABse6AYoDWAWy8UAxTbqBuKBQrUojT1ArAvz1X6M/M9kAn6RC3LMxWHBfVig+QoBUiKUoFkKCVIglKDKuoKYMU4KHqAArUDcCrH+Tnz2OsBqphLgWV65H9jUTGRjLIhOkYJkmBUIBlGAZJi2KCKOQA4ph5lP4axDgXa58xYMAxQNwxry8Vvnthiqd8AxpqprzMaar03ZZ1BlFgTh7qhxDApo9wQJdbEoW4oMUzKKDdEiTVxqBtKDJMyanYNvQHK1zAx+3qsRwAAAABJRU5ErkJggg==",l.appendChild(r),l.appendChild(i.createMenu(t[o].menu))}e.appendChild(l)},i=this,l=0;l<t.length;l++)o(l);return e},t.prototype.addHandler=function(t,n,e){t.addEventListener?t.addEventListener(n,(function(t){e(),t.stopPropagation()}),!1):t.attachEvent&&t.attachEvent("on"+n,(function(t){e(),window.event.cancelBubble=!0}))},t.prototype.show=function(t,n){var e,o=[];if(this.el.getElementsByClassName)o=null===(e=this.el)||void 0===e?void 0:e.getElementsByClassName("menu");else for(var i=this.el.getElementsByTagName("*"),l=0;l<i.length;l++)"menu"==i[l].className&&o.push(i[l]);for(l=0;l<o.length;l++)o[l].removeAttribute("style");this.node.style.display="inline-block",this.node.style.left=t+1+"px",this.node.style.top=n+1+"px"},t.prototype.hide=function(){this.node.style.display="none"},t.prototype.destroy=function(){var t;null===(t=this.node)||void 0===t||t.remove(),this.el.oncontextmenu=function(t){return!0};var n=this;this.el.removeEventListener("mouseup",(function(t){2==t.button&&n.show(t.clientX,t.clientY)})),document.removeEventListener("click",(function(){n.hide()}))},t.prototype.emitEvent=function(t,n){var e,o,i=new CustomEvent(n,{detail:t||null,bubbles:!0,composed:!0,cancelable:!1});(null===(e=this.el)||void 0===e?void 0:e.shadowRoot)?null===(o=this.el)||void 0===o||o.shadowRoot.dispatchEvent(i):document.dispatchEvent(i)},t}();!function(){if(void 0!==window.Reflect&&void 0!==window.customElements&&!window.customElements.hasOwnProperty("polyfillWrapFlushCallback")){var t=HTMLElement;window.HTMLElement=function(){return Reflect.construct(t,[],this.constructor)},HTMLElement.prototype=t.prototype,HTMLElement.prototype.constructor=HTMLElement,Object.setPrototypeOf(HTMLElement,t)}}();var e=function(e){function o(){var t=e.call(this)||this;return t.attachShadow({mode:"open"}).innerHTML="\n            <style>\n                :host {\n\n                }\n\n                .menu {\n                display: none;\n                position: fixed;\n                padding: 0;\n                margin: 0;\n                color: #444;\n                background-color: #fff;\n                border: 1px solid #eee;\n                border-radius: 2px;\n                list-style: none;\n                font-size: 12px;\n                cursor: default;\n                user-select: none;\n                -moz-user-select: none;\n                -webkit-user-select: none;\n                -ms-user-select: none;\n                -o-user-select: none;\n            }\n\n            .menu li {\n                position: relative;\n                padding: 10px;\n                min-width: 80px;\n            }\n\n            .menu li:hover {\n                background-color: #efefef;\n            }\n\n            .menu li>ul {\n                display: none;\n                position: absolute;\n                width: max-content;\n                top: 0;\n                left: 100%;\n            }\n\n            .menu li:hover>ul {\n                display: inline-block;\n            }\n\n            .menu img {\n                position: absolute;\n                right: 10px;\n                top: 9px;\n                width: 20px;\n                height: 20px;\n            }\n            </style>\n            <slot></slot>\n        ",t}return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function o(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(o.prototype=e.prototype,new o)}(o,e),Object.defineProperty(o,"observedAttributes",{get:function(){return["list"]},enumerable:!1,configurable:!0}),o.prototype.connectedCallback=function(){this.upgradeProperty(),this.menu=new n({el:this,menu:JSON.parse(this.list)})},o.prototype.attributeChangedCallback=function(t,n,e){"list"===t&&n!==e&&(this.list=e)},o.prototype.disconnectedCallback=function(){this.menu.destroy()},o.prototype.upgradeProperty=function(){this.list=this.list},Object.defineProperty(o.prototype,"list",{get:function(){return this.getAttribute("list")||"[]"},set:function(t){this.setAttribute("list","string"!=typeof t?JSON.stringify(t):t)},enumerable:!1,configurable:!0}),o}(HTMLElement);customElements.get("wu-right-menu")||customElements.define("wu-right-menu",e);export{n as RightMenuCore,e as WuRightMenu};
