!function(g,I){"object"==typeof exports&&"undefined"!=typeof module?I(exports,require("@wu-component/web-core-plus")):"function"==typeof define&&define.amd?define(["exports","@wu-component/web-core-plus"],I):I((g="undefined"!=typeof globalThis?globalThis:g||self).WuCodePlayground={},g.webCorePlus)}(this,(function(g,I){"use strict";var C=function(g,I){return C=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(g,I){g.__proto__=I}||function(g,I){for(var C in I)Object.prototype.hasOwnProperty.call(I,C)&&(g[C]=I[C])},C(g,I)};function A(g,I,C,A){var l,n=arguments.length,V=n<3?I:null===A?A=Object.getOwnPropertyDescriptor(I,C):A;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)V=Reflect.decorate(g,I,C,A);else for(var Z=g.length-1;Z>=0;Z--)(l=g[Z])&&(V=(n<3?l(V):n>3?l(I,C,V):l(I,C))||V);return n>3&&V&&Object.defineProperty(I,C,V),V}function l(g,I){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(g,I)}function n(g,I,C,A){return new(C||(C=Promise))((function(l,n){function V(g){try{c(A.next(g))}catch(g){n(g)}}function Z(g){try{c(A.throw(g))}catch(g){n(g)}}function c(g){var I;g.done?l(g.value):(I=g.value,I instanceof C?I:new C((function(g){g(I)}))).then(V,Z)}c((A=A.apply(g,I||[])).next())}))}function V(g,I){var C,A,l,n,V={label:0,sent:function(){if(1&l[0])throw l[1];return l[1]},trys:[],ops:[]};return n={next:Z(0),throw:Z(1),return:Z(2)},"function"==typeof Symbol&&(n[Symbol.iterator]=function(){return this}),n;function Z(n){return function(Z){return function(n){if(C)throw new TypeError("Generator is already executing.");for(;V;)try{if(C=1,A&&(l=2&n[0]?A.return:n[0]?A.throw||((l=A.return)&&l.call(A),0):A.next)&&!(l=l.call(A,n[1])).done)return l;switch(A=0,l&&(n=[2&n[0],l.value]),n[0]){case 0:case 1:l=n;break;case 4:return V.label++,{value:n[1],done:!1};case 5:V.label++,A=n[1],n=[0];continue;case 7:n=V.ops.pop(),V.trys.pop();continue;default:if(!(l=V.trys,(l=l.length>0&&l[l.length-1])||6!==n[0]&&2!==n[0])){V=0;continue}if(3===n[0]&&(!l||n[1]>l[0]&&n[1]<l[3])){V.label=n[1];break}if(6===n[0]&&V.label<l[1]){V.label=l[1],l=n;break}if(l&&V.label<l[2]){V.label=l[2],V.ops.push(n);break}l[2]&&V.ops.pop(),V.trys.pop();continue}n=I.call(g,V)}catch(g){n=[6,g],A=0}finally{C=l=0}if(5&n[0])throw n[1];return{value:n[0]?n[1]:void 0,done:!0}}([n,Z])}}}var Z=":host {\n  width: 100%;\n  height: 100%;\n}\n\n.playgroundContainer {\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n}\n\n.content {\n  width: 100%;\n  height: calc(100% - 56px);\n  display: flex;\n}\n\n.editorContainer {\n  width: 50%;\n  height: 100%;\n}\n\n.toolsContainer {\n  display: flex;\n}\n\n.codeViewerContainer {\n  width: 50%;\n  height: 100%;\n}\n\n.toolsNav {\n  width: 100%;\n  height: 56px;\n  background-color: rgba(24, 24, 24, 0.8);\n  display: flex;\n  align-items: center;\n  position: relative;\n}\n.toolsNav .runCode {\n  padding: 7px 15px;\n  border-radius: 3px;\n  font-size: 12px;\n  background-color: rgb(64, 158, 255);\n  border-color: rgb(64, 158, 255);\n  color: rgb(255, 255, 255);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 500;\n  line-height: 1;\n  margin: 0px;\n  outline: none;\n  text-align: center;\n  transition: all 0.1s ease 0s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  position: absolute;\n  right: 16px;\n  top: 50%;\n  transform: translateY(-50%);\n}\n.toolsNav .loadDepend {\n  padding: 7px 15px;\n  border-radius: 3px;\n  font-size: 12px;\n  background-color: rgb(64, 158, 255);\n  border-color: rgb(64, 158, 255);\n  color: rgb(255, 255, 255);\n  -webkit-appearance: none;\n     -moz-appearance: none;\n          appearance: none;\n  box-sizing: border-box;\n  cursor: pointer;\n  display: inline-block;\n  font-weight: 500;\n  line-height: 1;\n  margin: 0px;\n  outline: none;\n  text-align: center;\n  transition: all 0.1s ease 0s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  white-space: nowrap;\n  position: absolute;\n  right: 120px;\n  top: 50%;\n  transform: translateY(-50%);\n}";!function(g,I){void 0===I&&(I={});var C=I.insertAt;if(g&&"undefined"!=typeof document){var A=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===C&&A.firstChild?A.insertBefore(l,A.firstChild):A.appendChild(l),l.styleSheet?l.styleSheet.cssText=g:l.appendChild(document.createTextNode(g))}}(Z);var c=function(g){function c(){var I=g.call(this)||this;return I.editorContainer=null,I.previewContainer=null,I.initialEvalSuccess=!1,I}return function(g,I){if("function"!=typeof I&&null!==I)throw new TypeError("Class extends value "+String(I)+" is not a constructor or null");function A(){this.constructor=g}C(g,I),g.prototype=null===I?Object.create(I):(A.prototype=I.prototype,new A)}(c,g),c.prototype.connected=function(g){var I=this;this.editorContainer=g.querySelector("#editor"),this.previewContainer=g.querySelector("#preview"),this.initialEvalSuccess||setTimeout((function(){I.runCode(),I.initialEvalSuccess=!0}),1e3)},c.prototype.runCode=function(){return n(this,void 0,void 0,(function(){var g,I;return V(this,(function(C){switch(C.label){case 0:return g=this.editorContainer.editor,[4,(A=g.getModel("typescript").uri,n(void 0,void 0,void 0,(function(){return V(this,(function(g){switch(g.label){case 0:return[4,window.monaco.languages.typescript.getTypeScriptWorker()];case 1:return[4,g.sent()(A)];case 2:return[4,g.sent().getEmitOutput(A.toString())];case 3:return[2,g.sent().outputFiles[0].text]}}))})))];case 1:return I=C.sent(),this.previewContainer.runCode("ts",I),[2]}var A}))}))},c.prototype.loadDependencies=function(){this.previewContainer.loadDependencies({name:"o(*≧▽≦)ツ┏━┓",dependencies:{react:"https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js"},types:{react:"https://cdn.jsdelivr.net/npm/@types/react/index.d.ts"}}).then((function(g){}))},c.prototype.render=function(g,C){var A=this;return I.h("div",{class:"playgroundContainer"},I.h("div",{class:"toolsNav"},I.h("div",{class:"runCode",onClick:function(){return A.runCode()}},"run")),I.h("div",{class:"content"},I.h("div",{className:"editorContainer"},I.h("wu-code-monaco-editor",{className:"editorContainer",id:"editor","initial-value":"data:text/plain;base64,aW1wb3J0IHsgQ29tcG9uZW50LCBoLCBPbkNvbm5lY3RlZCwgUHJvcCwgV3VDb21wb25lbnQgfSBmcm9tICJAd3UtY29tcG9uZW50L3dlYi1jb3JlLXBsdXMiOw0KY29uc3QgY3NzID0gYA0KICAgICAgICAuY29udGFpbmVyIHsNCiAgICAgICAgICAgIGRpc3BsYXk6IGZsZXg7DQogICAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjsNCiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47DQogICAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyOw0KICAgICAgICB9DQogICAgICAgIC5idXR0b24gew0KICAgICAgICAgICAgbWF4LXdpZHRoOiAxMjBweDsNCiAgICAgICAgICAgIHBhZGRpbmc6IDdweCAxNXB4Ow0KICAgICAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4Ow0KICAgICAgICAgICAgZm9udC1zaXplOiAxMnB4Ow0KICAgICAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDY0LCAxNTgsIDI1NSk7DQogICAgICAgICAgICBib3JkZXItY29sb3I6IHJnYig2NCwgMTU4LCAyNTUpOw0KICAgICAgICAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTsNCiAgICAgICAgICAgIGFwcGVhcmFuY2U6IG5vbmU7DQogICAgICAgICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94Ow0KICAgICAgICAgICAgY3Vyc29yOiBwb2ludGVyOw0KICAgICAgICAgICAgZGlzcGxheTogaW5saW5lLWJsb2NrOw0KICAgICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDsNCiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxOw0KICAgICAgICAgICAgbWFyZ2luOiAwcHg7DQogICAgICAgICAgICBvdXRsaW5lOiBub25lOw0KICAgICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyOw0KICAgICAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuMXMgZWFzZSAwczsNCiAgICAgICAgICAgIHVzZXItc2VsZWN0OiBub25lOw0KICAgICAgICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDsNCiAgICAgICAgfQ0KICAgICAgICBpbWcgew0KICAgICAgICAgICAgbWF4LWhlaWdodDogMjUwcHg7DQogICAgICAgICAgICBkaXNwbGF5OiBibG9jazsNCiAgICAgICAgICAgIG1hcmdpbjogMnJlbSBhdXRvIDEuNXJlbSFpbXBvcnRhbnQ7DQogICAgICAgICAgICB3aWR0aDogMTQwcHg7DQogICAgICAgIH0NCmANCkBDb21wb25lbnQoew0KICAgIG5hbWU6ICd3dS1jb2RlLXRlc3QnLA0KICAgIGNzczogY3NzLA0KfSkNCmV4cG9ydCBjbGFzcyBXdUNvZGVQbGF5Z3JvdW5kIGV4dGVuZHMgV3VDb21wb25lbnQgaW1wbGVtZW50cyBPbkNvbm5lY3RlZCB7DQogICAgY29uc3RydWN0b3IoKSB7DQogICAgICAgIHN1cGVyKCk7DQogICAgfQ0KDQogICAgQFByb3AoeyBkZWZhdWx0OiAnJywgdHlwZTogU3RyaW5nIH0pDQogICAgcHVibGljIG5hbWU6IHN0cmluZzsNCg0KICAgIHB1YmxpYyB0YXBGdW4oKSB7DQogICAgICAgIGFsZXJ0KCLmjInpkq7ngrnlh7siKTsNCiAgICB9DQoNCiAgICBwdWJsaWMgb3ZlcnJpZGUgcmVuZGVyKF9yZW5kZXJQcm9wcyA9IHt9LCBfc3RvcmUgPSB7fSkgew0KICAgICAgICByZXR1cm4gKA0KICAgICAgICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyIj4NCiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz0iYnV0dG9uIiBvbkNsaWNrPXsoKSA9PiB0aGlzLnRhcEZ1bigpfT5XdUNvbXBvbmVudDwvc3Bhbj4NCiAgICAgICAgICAgICAgICA8aW1nIHNyYz0iZGF0YTppbWFnZS9wbmc7YmFzZTY0LGlWQk9SdzBLR2dvQUFBQU5TVWhFVWdBQUFTQUFBQUVnQ0FNQUFBQWpYVjZ5QUFBQ1QxQk1WRVVBQUFETjVqTFM2UzNYN0NncVpLNHFXcWJhN3lUaDhoMHBmTDhxVTZJcWI3YkUzenpKNHpZcVRwMHFiTE1wZDdzcWFiSEg0VGtwZ3NRcVhxcmM3eUlxUjVrcGNya3BoOGpkOFIvVzdDZ0FBQUFxVjZYRzR6a0FBQUFxUVpRQ0FnSXBmOEhrOVJvcGpzMG9VSnNBQUFISjR6WXFhcS9mOGg0Ylg1MEFBQURTNlNzb2k4c1pjS2tBQUFBQUFBRFo3eVhQNVRBQUFBQUFBQU1DQWdFQUFBREUzendBQUFBQUFBQUJBUUVtYUs0b2VMd3JlcmtpY3FnQUFBQXBZcTBCQVFFcVlhc0JBUUhwK2hvQ0FnTFo3aVVEQXdIYTd5UWZoY0FvZ3NNcGJyWXBUWndDQWdLcHpWSzAyVXdxVjZTb3psVW5pY2dwUVpNamtjeVp5MTRwV2FRZWNxNHBhYkhINHp5NDQwY2xsOUVsVUptZTJsK1oyV0FsUDRjbmtjNGdPSGl1M0ZJamtNb1BHejBXSmxQUzR4cmI4U1RiOHlFY0wyYkMwUml1dlJVV2JhV1Z6V01KRVNjMk93UnRkZ3VacGhJbm05VVhiYWFyMlZSaW5YdWl5RmdrajhvVWI2ZU91MlI4cjIxVFd3aUZrUStQMjJrb1JwVW1udGNvVUo0cVNaY2xqc3B5cUhVcVE1U290QThCQVFFVmJhV1AyMm02MmtZb2hzYTkzRVRCMzBBb2xOSFc3U2dvaThuUjZTN0Qzem9vZ2NPLzNENG9qc3dvbXRXMTFrb3BYNm5lOHlEWjd5UW5kcmtvYUxBcGJyWEc0amdvVmFMTTVqTW9rTTRwV3FXMzEwWW9lYjI4MmtJb2ZiOG9uOWkzMkVvb2w5UEk1RFlvVHB5eDAwMHBZNjBwVVo4WmRLMHBTWmtvb3RzY2JxVXBRNVVZYnFrQkF3dXEybFdoM2x3QWFxUUFhYU8rNEV1bTRsam0raDJ4M2s0cHArRVdHQUdZdjJHSnRXMlJ1bWNPRUFITTVTa2pjck1hZXJLVTRteGN3YmJsQUFBQWhIUlNUbE1BOC9QejgvUHo4L1AwOVBQejgvUHo4L1R6OC9QejgvUHoreFAwRXRMMG1mVHo4elAyK2pDWkNTR1piQmR5UGNySVgwN21Mc2p1Zzd4eCtYRW1DL212NTl6emtmekhwMEg1NWVXai9PcmswckhsbDM5d1ZmaEFOcnVQV1NqMCt2YXlmUHY2N1lGVytPdnE2YmI5OHU3bTVhbVNQT3pTenFWcDh1dmwxOUs5WXVSVnNwWnR6WDByQUFBVHZFbEVRVlI0MnV5YzMwdFRZUmpIejBWQkM1WlNuSUtpRlJxaGFFSVdsa3V0RUhFbFJFa0tDazdTQzBHOHFJdThLcEk0d1VBR1l5TllFWXV4TWNJZnMzbTd1L3JIZXA1enp2YWU0ODV4ZXoxUG51ZmkvY3o2QXo1OHovTjlmMnhIVXlnVUNvVkNvVkFvRkFxRlFxRlFLQlFLaFVLaFVDZ1VDb1VpZkladVVMSDQyc0dvRjQrOEdmQm1VT1BBMVNtRGhFTmpZLzhIOEJQNWFyT3pNekV4OFEzNTNpUnZFWS9IaThWaUNjZ2trSlJKMmlLWlRTYVRsVm1OQTNjTUtrSExaeU9Sc3phWFRNNVlkQ01YZ1BNbWw0RXU0Qnh3RTdsb2NxVkJqODEyZWxvTG4vNTdWSDVXSTRnUWhIN2dyeHNOQ1VFSStMRUVJZURIVzFBaFdYblpwNFhPcEVIRkV2cTVkcTJaSVJFZ1N4QmkrN0VGZFhrWjZyRU5KUXVGUW5aT0M1dWhFWU9FUTJNdDBpb0lQNGdRNUg3RXZBUTEvR1N6aFVMbGZlaHorakdWbncwOTBuR0NBSjhFaVFCbFVkRDI5aHN0WE80YVZJS1dJeklKNm1xWG9EVDRBVUdWcmR0YW1GeTlUdVZuSlFwMkNHWVFnbjR3UUVBeUoxLzFIQ3NlSjNUVUplaFM1elBvWXNzamhvTHNSeXpjcXI5UFYvR2d4eWRCM2RJSmF2cEJRYmt3cS82R1FjUUdCb2lreFRCQ1BiQ1V0Z1VoNFZYOTBDMkRBcXg0OEVNM2c5SXVRYm5RcXI3dklaV2ZGUjBFa2JWWWowTVFVcEdvZXJZVkh3VkJWT3VnTkpKMVJHaHJUT3NVbmhXL0dnVWlWRE1JQllrRUlTRlYvUU9EaWlVSUVOME1TcmNLU25aWTlVd3JmaTBLa00yZ2RLdWdTbmtoaEtxZm9mS3pFZk1TZEtuekdlUmVLS1pTN2htRWdpb2hWUDB3V2NVdlJ5a1RsQktDUklJcTVWT3YrbkhDaWtjOVZDMlc4aGFVeTNWWTlSdzNZVkZiVUpRaVFlakhRMUNsZk1wVjMwOVk4UWhKaTZFZnhFdFFydHkrNmxsVy9NWlNVMUEwOERwSStFRkI3bWVzazZwbmVjNGExYU5VTStoS0l1V2ZvRnkxWGRXelBHZGQwWFdkYkFaZEVYNWFCUUVEMm1reGJOQ0FGYS9yWkRNb2RieWc2cWxWL1RqWlZlcXFMaElVK0VReGtiTHhuRUZvNk5pcTUxanhoMHRDVU9BVHhVVEdQMEcyb0xlblUvWDlUOGttdEk0UXRWZ0dCZmtQYWFSNlROWHp1MHFGQ1IzVEFhSVpsTWkwU1JCUXJ2aFdQY3VLWDlZQmtoWkRQKzBUNUYvMWZDc2VvRmtIWllRZ240VWlVdmFyZW9ibnJBWUdpR3dHSlRJZEphaGMvK2hUOVJ6UFdYV0FaQVpaZnRyUElEVGtXZlZNTjJHNlRqYURNaDBLS3BkOXFwN2h0Nld3NG1OZ0J3VUZQRkc4V1JLQy9CZUt0cUY2UzlXenJuaUNCR0dBT2s5UXVacnpxSHAyVjZuV2hJNmhuVUF0MWdoUUtkUGhrQWJxUjZxZTV6bnJxazZYb0ZLcEpKRWd3RlgxUEN2K2NBa0Y0YjlndTNra2pvSWtFblMwNmxsVy9Kb2VBemswNjZDU0VOUitvV2daRWxYUHN1SmhRaStCSUtJWlZDekpKUWdGL2FlcXZ6OWlFTEVNZm9obVVCd0ZTYlFZNEs1NmpsZXBxekdBWWdhaEgxTlFTVXBRdFZwdVZqM0RxMVF6UUlEVll3RlBGSXVtSUltRm9pV292cUFoWENzK1ptTGJDWFNpR0JlQ1pCSUVpS3BuZHM1NkNKdXdocUJZMEJaRFAvSkRHZ1UxcTU3ak9Xdk1SZ2VDemFBaWduN2tFNFJWejNVVEJnUk5rQjBnSWFna2xTREFySHFlRmU4SVVMQjFVRHhmUk9RWGlsV2tQc3U1NGhFZFBvRVNsQWRCMGpOSUNLcE9NN3hLeFFsdG9mc2txUDB2RGhFVWxFZEI4alV2REMxd3ZFcGRpd24wQnE0bnpBSVZUU0JuNERNeE1UOC8zejEvWWI3cEI0aURJSjhoM2Y0SlF6LzErZ0MvaWw5NTVlYTVteGNPbnJoNGRwVExlUXNSSVovSERCQ1BtZE1UVmoyemlqZHVEWS8xdHVkMmU4YW0xL2RxZ2owQS9wUGs3K1lncjRvM2pFbU5pc1hhbDhDczkzSTdaMzNhcnhFeEYxeFA3V0NPMlZXcVlkelJpQmpickFVWE5NcnVuSFZxWENQaTNWNWdQM3Z2dUwxNEFpYTBSc1RvRno4T25IL0grK2xqVnZHR01hTVJjWHU5NW0xSElqK2JZOXgrc21MY3U2L1IwQmY4QWF0QmdiSDdWZW9Ec2djcytJQSttT04zbFhyOXFrYkQ0SWRmRFhaM2QzL1kvTFQ0S3Q2cTg2M0pId2Q1cEhqdXBXQ2F4VG1yWWR5bFd5UCtickJ2Z3FhQWhpZGJVTU9RODVWRGpaMWI0bUttdVIycExQU3hxUGpIR2tBVklhY2ZPMG9pUjZZZWh5QkxVZDVwNktiejE1dUZBUVpYcWNiSWtFYkhweFpCSWtEZUNjcTdCRGxleDVRR1FWdGpvVitsNGlhTWtzK21IaDlCSWtFN25nbENQMElRc0QwYmZzWERKb3lTM3BoVWd0eUNuQy8wTXNkUXR1ZkVjM3FHMzRTMldQUVM1RCtEOGc1QmNmeEtvL3ZIZC9BZXI1Q3ZVaCtPYXdqbG5ONlhUaEE2UWo5Q2tGMWtjS2cyY01LS1o3Y0pFM05hSmtIaUVRTS9nUGp0bEMxbysvMWdxSnV3R3hvOW4vZFAxR0wydDRiUlQwSUl5bFptd3p4bnZkZXYwZE9yU3ljSUF5UUVKVElPUWRzbm1kT1Q3STdKWEN6dXk3Y1krR2tLQWpsQ1VESzMwQmZhVmVxVTJJUVJ6Mm5aRm90M0NVR1pqRk1RWEh3TWhGYnhZa0xUOGtrdVFlaEhDRW9jRVNUL3ZzVmhocHV3Zjl5ZDYyOU1RUmpHajdxRjFpMUVIQ29pdXBSUVVkZUVhSUtRdUNjb0tSOUl0SEdKdXlDUkVISFpsR1lSYXl2WUVLd1NSTVNsVmx3VGY1ajMzWm5PZTg2ZU9Uc3pldWpNL3JiQ0p4OStlZlk1bmZmTW1WUGUweS9NZnBNVzI0YlJUMUFRR3JweFo5L0F6Rm1YNkkvSnpIdmE2Q28ya1FTQm40aWc1Mlk5UGMrNk1abUV0aGNHVjdHSktJaWVYSWdJZ3NQeWpDN3h0bzNKWWtabjJoMDBNU0RvbGtTUTRXRjVxMjFkaElXNUNINjBFblFQQmRIR2M0a2dzOFB5bXBaWTM5QWxHaSs4ZXZGR0swSDhCR3JtSjBhUVFVKzNKTFVJTXgyVG1mZTBYb0xRRHhmMHRJS2c0ek0xNTZ4MmpzbGt0TDNTNlNCeGhqbHR6SThJUXA1dDFiekUyemttay9mMEs4WHZRV0NJTnUyQm4wcUM3dWoxOUZLN0YyRmhMcW9UTkpJRWdaODRRZnl3dkxrNmMxWmJ4MlF4UGEzb29OYlJYQkQ2VVFoNi9reWpwNmZaT3lhVE1XT1VJa0dCZmJIMzFJTFVQZDNVWU50ZUJRVnREeXNtaUhZT2o3bW5GcVErL3FSeG1XMTdGVlNzV0E5NlloUFV5Z1hodGxpMW9EdkFPc1VsM29WRldKaUxKQ2lTb05heFhCRDZVUXRTbjNRMmVhb0xpN0R5bm40b1R4RDZZWUxRMEQyMUlJMWpxcGE2c1FncjcybDVndEFQQ2hKKzFBbWlZNnIrOFNXK1JUbmlUYmFuNVFrYVFvTHVhUXVxMk5NYmJOeXJvTlBUSUNlYW9DRWs2TDZlSUxZUFA3Nm5tOTFyYU1iMmg1SUVyU1JCOTdVRklYQjJ4VCsrbFRvMTZVV1l1cWNqQ1FJL1F0QjlNMEhQNGg1b1hlRFNJaXpNamhGbENVSS81b0w0ZHl5bXAyZFBkV2tSVmtaYldZTEFEeE9FZnJRRlZUNWphS2xiaTdBd0t6YUhFelNFQklFZXd3VEp6eGhxV21MeFhnVTEyNE9DSUVEanVTRHdZNXdnK1JsRExhNHR3c3A3K3BFUUJINUVncGdld3dROWt4dzgwT3h1UXpOMlVJSlc4cGRIZ3FCV25Fa2pab0xvakNHYXM5cTlWMEdEdHJ0OWd1aFo0RmJRWS80VkF5SlBqYyt6ZmErQ1RrL3p6ZmI4OWFOQUsrM3VNQktFeDU4OFd4ZStsZXJZbUV6R2RpYUlEaVFBUDMrWm9NaFQ0NnZ0MzZ1ZzA5TjN1UitlSUxvM2IxYlNkRUFNWGVJZFhZU0YyVEhsMFNNOGtvQkhLTFM3dzF4UW9LY2JXMXhkaEVWNm1nbkM0d2lHckpROXEwRitHTnhQNUN1R1VFOHZjSEZNSnUvcG9lSkFBdlNEVUFjaGtaTXN4UGtEb1FnaDFOT1Rwem81SnBNYUVvY1RuSGdYNXEzNGwvSzhBZUlFdjhTN3NsZkJnQjJIcmliQkRuYkFyek43RmJSWkI4LzlKc0RyMHVFVjA5elpxL0FmRHg2ZzB3Y1dWY2NsUHNTTVEwa0pPclFDQnEwT3o4bisvbXlQdDNxQzhEdlcxT0Q0T2w1R1d6K2ZyYWVXcnM0U3d0TUgzdllmZnNESG9pcThqSGx6ejN6OFZKR1BuejRDOEhjRkRzM2swMmczN3hkR3FXOWZLMWo4VGM0UEtkK2xMQmRiRnR6WTlxdWtJOWU5QnVqeWtXRy9RandRM0JUY1pqeEIwc0RqRXRrU0wxOFd0c3l0c3NWWS9meWNQN2lQbXBvYUVrSkdPRXdKUUVwUWltQWpmaTU1Z2hiM2RyMUlhTTkxZGZrbE9mQkJRejBQOElNLzNJL1MwY3NBWjBQM2ZLcmdVcjl6Y0JmZ1U0SnE4cUNHL0RCRkNrRlpFYURUcDBJalJac2ZVTlZrYlc0Tk04UVRCSUFiNWtqNGlSTkVlamp2dDVXOWtzYnAyNFpJUnpmWW9RalZsRUE1b09lQlVZSXdRbGxxNkNxWmVVQkRkekY4a1NDV0ljUTRRUnZQUlI1QWNIeEoxaTc4K0YyQkNBMWlFVEx0b096WnlQQ3YyZTFML2M3QjNheUIwRkNtVkVPTTFGOTFFRFYwdFZ6cXNhRVpmZ1orS0VFMUdDSDlEdUpRUTFmSnZaK083cjZLaGsrbUsrT2pJSzdJUEVIWTBCS1d1bnYzRUJvYUFzUkFQNW1NQ0JBYTBrOVFwS0dyNVA1emUyNk5TRkFHL3BBaFZKUXl2SW9WRGpkNlV1YTV1c2RzNTJBaENEc2FJZ1FJUDRNR3BZd1NsS1dHcnBaTC9kcmlHdW9ncktFTUlrb0lESmtrS0V1THNDclpSUVZURG9BcUNENGxSSUxBa0g2Q0NsdFdlTEZzY0hINkNnMk5naWhCdmsrQzBCR2luYUFzTkxRVWQ2ZXY3U1UvZ1E3Q0FGR0VtS0NVWm9MaUc5clo2ZXV1WVVGQlB2K0tZWWp5R1VvUUdOSkpFQVFvcHFIZG5iNnVMWFpIRStRSE0wU0dGQWtDQ21kVnB3cTR0bG14SThjQ1JCMlU0ZCt4UEg1UUVFZVZJSXhRNGZRSzVlR0FibTEzclo5ZjdCYUM2RXVHUDh3U0N1TG9kTkE1VDBXeld6ZGEyNHZkWlFueS9XQ0NNZ0ZCZGNxNWZmcXc0bVFCNTI2MFFrT1RJQTVMankrSlVKMUtFTnpJVUxQSXBlbnIybUlPT2loNkZmTkZndko1Rk1RWkZ5dW9ja003TzMzdHlDR1NxMWlnaFBKNUVsUlhVVkNhR3ZyL1hPcVhOWHFHbURjMDZGRWtDQ0JCZFJVVHBHcG81MjYwdGhmakVrVGtFUkpFaGlLQ2VtRk1Kc1haNlNzME5PWkhuaUNmRWdTUW9IRnhnaDVUUXl0cGFuQmkrZ29OclptZ25wUVFCSWJrZ3RKblBYMVd1L0IwSFRSMFhJSjhLR2xLRUpJaVFUZWxndEl3SnRObjlrTDdwNis4b2RVSlFucDZTTkE0aWFCc0lidk5rK1BzOUpVM3RMeURvSUlvUWN3UUNSb25FWlRXYkdpYXZscjNVckc0aHBZbXlJZWZjSUx5UFNSb1hFUlFPcTZoM1oyKzhvWUdQUlZYODVTZ25oUUpxaTBYMUh2V002WEY3aVVaTlhRdUY3K2Fwd1NWRE5VeFFVQ1pvRTVWUXp0M294VWJtcU5ZemVlRGhvU2cyckNndEc1RE8vT1lKalYwT0VGSVJ0WkJEQzRJRFFVRmRSbzFOTjFvdFhmNnVtc1lDb3E3aXBVbmlCUTlFQW1xclNWQmFScVRLWERtVVhGcWFObFZUTlpCbkJRSnFoV0NldU51WkRnN2ZlMlluaU9VQ2FJT1FrTmNFTUlGZGNiZHlIQjIrbHBxNkdMbEJORkVNUnloQnlraENBeVZ2bUM5MU5DbWJMQno3eXMyTktHZUIxR0FjQzlWWFptZzYxdm1EdndMeHFiOWc0WXV4bDNGYUtJb1N4QXpWQ3NNUFlFeDJjQy9vcTZoS2VHR0xnWVRGUDJHK1puWUJBSG9oNU5PUTBQYjhLYjVsaVFibXV4UWdpVExlWG1DZ0p1QkdvS0d0dU5OMkFzU2JlZ3dRVDArSXVUQUp5SUlEZFVLMHRzOE8xNjBtdGowdFg3djU4cDgwR0R2VGtHakxhL3FUV3hKdHVmOHRmNnoyMk5ZOUxMbjVLYXYyMzczMjgvdjg3dkVmMmZONjhLVG03NGVUc0xRSG85aHp3dm5HNXFUKzVJbFlPaHd2UmZFaHZjWko3ZjNkYmRhZ0lZaEwwQ1ZYZXJoUzVhQW9XMWVRalRhZDBwd2Y3NWs2a3RaTlV4ZmQxOUxnUE55UXdNM2ZmMjU1UElzUGVZbzJkVDdKWjczN0tQaTgwa3Z5TUF2eWI1ZU9UcTl5TWtSa2RsRmVHV0ZzTlVuQWJzUnhBSkNuQmNBUDMxY3YzNmIwOW5aK2FRVFNaZDRYQUN5QmJibmQ5TXUyeTcxWHhzT3Jwb09EQTh4Q1pnQURHTU1EbEhERUZ2Q0NaSURNQzJDVG9GUVUyQmtzN1JsWEJHZ0FialIrdlBLa2YxZ1NPcG9Rc1FSUGQ0dHRaU2kxU2R5blNrU2hBV1JJaUdvc0tYZVM0N21oQ0owNVJnS1F1U0NJaWtpUTRQWUQ1SHFHL0RjWkY4dkUwR0lvcUlINkVicmtnT3JEQVRWNEI5QUtBb1pDaVlJNUpnSjZ2M1QzaG5yTmhFRVlkZ1l5VnRjbXBWY0dFU0tsVGdKS29LQUJ5Q0NNcUtrb1hDUndtbVNHdGVXTEY5QlNZTlNYc0VUWEpQaUhvMWQzeDFqVnJlM084ZElONUhtazVNSCtQWGZmSjVkMlY3UGpqQlR2WjNUQ3ZKSmFsQjRET1d1UVUyQjhBMzYvWFhXd0V6MU1LZmpBY0VNZ2dMNUNYVmZISUNkUVZBZ1pxcXZkOThYbDlnRzJmL1FJTTlrTnB1dVFVVjZRT1hWMzIyZTIwcld6ZW0wQmprQ0RYTGtZeTFXOWk1aUxFNWZqNnBYcVEyQzh2UTI2Q3h2TEdaZk5wMzBnUGFnZUk2cTMxNk9icEFmMEpuTEI5ZWd1T0ludjJoOXVZRUtZUnMwOXdMSzJ4a2RhUkFrQkJPYW52ZUVxbGRFRFhJSllSdFVEaTloMDErME90VVR6U0JMODBZSU00TXFzaVdNL3ZlUllFN1ROTWlCYmREZVV6eFQxUlBOb1BZaHc4eWd2c3RVWnFldjllNGRWQ2l5aThVYjVCNHlSSU9xWWNYenVHaTFxbGNtR3RBOG9VRU9uZGFnc3FGZjhkd3VXbXVyZWo4Z0IrUURSQnVrYzhTeUdsQTh0NHZXZW5lN01QRWhIYmVZUTJ0RWczb1Uvd2hVSDVwQnc3c1lCS1FqRFlLRXdvcG5kdEhxVkcvSUdxUlRkN0dRNGxtcWZoc09DRG1EWEVKcE02Z0tLcDdoNmF1ZDAwUU5jaVExS0t4NGxxcS9KWnRCanFRWkZGWTh3OVBYR3VZMFFZUGlBY1VVei9MMDFkQTFTRWNEMnNjVXorNmkxYTVrb1RlSytBWmxPaEpRVlBFc0wxb05pY1VjV1RaOGFGOVdjY1V6UEgxRnpxQ2hSeXpUa1lBaWltZDcrdnIvRGVvK242SUhBa3BTUE1mVDF5V1Z4VExMVUlOU0ZNOXpKVnNSelNCSE9LQTB4WE5VL2JWYWtjeWc3RWdvb0VURnMxUzlXYUViaEE4b1VmRXNMMW8zWmtYWG9Ldy9vRlRGYzFWOTZFUVJaYkdXM29CU0ZjOVI5ZmIwMWRCWUxCd1FSdkhzVGw4ZjdFcW1DSGF4ck1NUENLVjRscXJmM1pnbFZZTWNYa0JveFhNOGZWVkxJb3M1RGw1QUI1emlPWjYrM2ltQ0JnRmVRQ2pGODFUOXc4YVF6Q0RvRUFRMGllTGh5eXZJVmpLS0JnR25EUnFqZUg0WHJUZUtvRUhBQWFpK3ZKcWg0S2g2dTVJOWhZUXdEWUtFc2tCQ0l4VFBjeVZURkJZRGlxNUFhM3lCdUtwK1FUYURvRUtqRk05VDlWc1ZhQkRFazl3Z1NHaXM0bGxldEtwRnBFRlBFZ09DaElxeGltZDUwYnFnbUVIQXZsSDg5QkNxSHRLQkJwMFNNQmdFNUZXb3NJcWZudGRrcXIvKythbmwyUWsvV3ViMjc3NGx2OC8vNFZmNzJ6MjYrYmhxMFV5Z3dpcWVBMjgvbmxQdytmenVUUThYRi9ZMXdJY3dWK3NaRDU1VDhZS1diOU5QYUVFUUJFRVFCRUVRQkVFUUJFRVFCRUVRQkVFUUJFSDRBNmxkN2RZV3owMktBQUFBQUVsRlRrU3VRbUNDIiAvPg0KICAgICAgICAgICAgPC9kaXY+DQogICAgICAgICk7DQogICAgfQ0KfQ0KDQovKioqKioqKioqKioqKioqKioqKioqKumdnue7hOS7tuWumuS5ieS7o+egge+8jOaJi+WKqOaPkuWFpeS7o+eggSAg5byA5aeLKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi8NCmNvbnN0IGRvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoIiN0ZXN0Q29tcG9uZW50Iik7DQppZiAoZG9tKSB7DQogICAgZG9tLnJlbW92ZSgpOw0KfQ0KY29uc3QgZGl2ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgiZGl2Iik7DQpkaXYuc2V0QXR0cmlidXRlKCJpZCIsICJ0ZXN0Q29tcG9uZW50Iik7DQpjb25zdCB0ZXN0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgid3UtY29kZS10ZXN0Iik7DQpkaXYuYXBwZW5kQ2hpbGQodGVzdCk7DQpkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCJib2R5IikuYXBwZW5kQ2hpbGQoZGl2KTsNCi8qKioqKioqKioqKioqKioqKioqKioq6Z2e57uE5Lu25a6a5LmJ5Luj56CB77yM5omL5Yqo5o+S5YWl5Luj56CBICDnu5PmnZ8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqLw0K",theme:"vs-dark",language:"typescript"})),I.h("div",{className:"codeViewerContainer"},I.h("wu-code-sandbox",{id:"preview",isBeforeRefresh:!0,"initial-src-doc":"data:text/plain;base64,PCFET0NUWVBFIGh0bWw+DQo8aHRtbCBsYW5nPSJlbiI+DQo8aGVhZD4NCiAgICA8bWV0YSBjaGFyc2V0PSJVVEYtOCI+DQogICAgPHRpdGxlPlRpdGxlPC90aXRsZT4NCiAgICA8c2NyaXB0IGFzeW5jIHNyYz0iaHR0cHM6Ly91bnBrZy5jb20vZXMtbW9kdWxlLXNoaW1zQDEuNS4xOC9kaXN0L2VzLW1vZHVsZS1zaGltcy53YXNtLmpzIj48L3NjcmlwdD4NCiAgICA8IS0tIGZvciB0eXBlc2NyaXB0IHRhcmdldDogQU1EIC0tPg0KICAgIDxzY3JpcHQgc3JjPSJodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvcmVxdWlyZWpzL3JlcXVpcmVqcy9yZXF1aXJlLmpzIj48L3NjcmlwdD4NCiAgICA8IS0tPHNjcmlwdCBzcmM9Imh0dHBzOi8vdW5wa2cuY29tL0B3dS1jb21wb25lbnQvd2ViLWNvcmUtcGx1c0AwLjMuMy9kaXN0L2luZGV4LmVzLmpzIj48L3NjcmlwdD4tLT4NCiAgICA8c2NyaXB0IHR5cGU9ImltcG9ydG1hcCIgaWQ9ImRlcGVuZGVuY2llc01hcCI+DQogICAgICAgIHsNCiAgICAgICAgICAiaW1wb3J0cyI6IHsNCiAgICAgICAgICAgICJAd3UtY29tcG9uZW50L3dlYi1jb3JlLXBsdXMiOiAiaHR0cHM6Ly91bnBrZy5jb20vQHd1LWNvbXBvbmVudC93ZWItY29yZS1wbHVzQDAuMy4zL2Rpc3QvaW5kZXguZXMuanMiDQogICAgICAgICAgfQ0KICAgICAgICB9DQogICAgPC9zY3JpcHQ+DQogICAgPHNjcmlwdD4NCiAgICAgICAgKCgpID0+IHsNCiAgICAgICAgICAgIGxldCBzY3JpcHRFbHMgPSBbXQ0KDQogICAgICAgICAgICB3aW5kb3cucHJvY2VzcyA9IHsgZW52OiB7fSB9DQogICAgICAgICAgICB3aW5kb3cuX19tb2R1bGVzX18gPSB7fQ0KDQogICAgICAgICAgICB3aW5kb3cuX19leHBvcnRfXyA9IChtb2QsIGtleSwgZ2V0KSA9PiB7DQogICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG1vZCwga2V5LCB7DQogICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IHRydWUsDQogICAgICAgICAgICAgICAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSwNCiAgICAgICAgICAgICAgICAgICAgZ2V0DQogICAgICAgICAgICAgICAgfSkNCiAgICAgICAgICAgIH0NCg0KICAgICAgICAgICAgd2luZG93Ll9fZHluYW1pY19pbXBvcnRfXyA9IGtleSA9PiB7DQogICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh3aW5kb3cuX19tb2R1bGVzX19ba2V5XSkNCiAgICAgICAgICAgIH0NCg0KICAgICAgICAgICAgLyoqDQogICAgICAgICAgICAgKiDliqDovb3kvp3otZYNCiAgICAgICAgICAgICAqIEBwYXJhbSBvcHRpb25zDQogICAgICAgICAgICAgKi8NCiAgICAgICAgICAgIGZ1bmN0aW9uIGxvYWRfZGVwZW5kZW5jaWVzKG9wdGlvbnMpIHsNCiAgICAgICAgICAgICAgICBjb25zdCBkb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCIjZGVwZW5kZW5jaWVzTWFwIik7DQogICAgICAgICAgICAgICAgY29uc3QgY3VycmVudCA9IEpTT04ucGFyc2UoZG9tLmlubmVySFRNTCk/IEpTT04ucGFyc2UoZG9tLmlubmVySFRNTCkuaW1wb3J0czoge30NCiAgICAgICAgICAgICAgICBjb25zdCBuZXdEZXBlbmRlbmNpZXMgPSBPYmplY3QuYXNzaWduKHt9LCBjdXJyZW50LCBvcHRpb25zLmRlcGVuZGVuY2llcyB8fCB7fSk7DQogICAgICAgICAgICAgICAgZG9tLmlubmVySFRNTCA9IEpTT04uc3RyaW5naWZ5KHsNCiAgICAgICAgICAgICAgICAgICAgImltcG9ydHMiOiBuZXdEZXBlbmRlbmNpZXMNCiAgICAgICAgICAgICAgICB9KQ0KICAgICAgICAgICAgICAgIGNvbnN0IG5ld0RvbSA9IGRvbS5jbG9uZU5vZGUodHJ1ZSk7DQogICAgICAgICAgICAgICAgZG9tLnJlbW92ZSgpDQogICAgICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcigiaGVhZCIpLmFwcGVuZENoaWxkKG5ld0RvbSk7DQogICAgICAgICAgICB9DQoNCiAgICAgICAgICAgIGFzeW5jIGZ1bmN0aW9uIGhhbmRsZV9tZXNzYWdlKGV2KSB7DQogICAgICAgICAgICAgICAgbGV0IHsgYWN0aW9uLCBjbWRfaWQgfSA9IGV2LmRhdGE7DQogICAgICAgICAgICAgICAgY29uc3Qgc2VuZF9tZXNzYWdlID0gKHBheWxvYWQpID0+IHBhcmVudC5wb3N0TWVzc2FnZSggeyAuLi5wYXlsb2FkIH0sIGV2Lm9yaWdpbik7DQogICAgICAgICAgICAgICAgY29uc3Qgc2VuZF9yZXBseSA9IChwYXlsb2FkKSA9PiBzZW5kX21lc3NhZ2UoeyAuLi5wYXlsb2FkLCBjbWRfaWQgfSk7DQogICAgICAgICAgICAgICAgY29uc3Qgc2VuZF9vayA9ICgpID0+IHNlbmRfcmVwbHkoeyBhY3Rpb246ICdjbWRfb2snIH0pOw0KICAgICAgICAgICAgICAgIGNvbnN0IHNlbmRfZXJyb3IgPSAobWVzc2FnZSwgc3RhY2spID0+IHNlbmRfcmVwbHkoeyBhY3Rpb246ICdjbWRfZXJyb3InLCBtZXNzYWdlLCBzdGFjayB9KTsNCg0KICAgICAgICAgICAgICAgIGlmIChhY3Rpb24gPT09ICdldmFsJykgew0KICAgICAgICAgICAgICAgICAgICB0cnkgew0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNjcmlwdEVscy5sZW5ndGgpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbHMuZm9yRWFjaChlbCA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmhlYWQucmVtb3ZlQ2hpbGQoZWwpDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbHMubGVuZ3RoID0gMA0KICAgICAgICAgICAgICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICAgICAgICAgICAgICBsZXQgeyBzY3JpcHQ6IHNjcmlwdHMgfSA9IGV2LmRhdGEuYXJncw0KICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzY3JpcHRzID09PSAnc3RyaW5nJykgc2NyaXB0cyA9IFtzY3JpcHRzXQ0KDQogICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IHNjcmlwdCBvZiBzY3JpcHRzKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2NyaXB0RWwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdEVsLnNldEF0dHJpYnV0ZSgndHlwZScsICdtb2R1bGUnKQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIHNlbmQgb2sgaW4gdGhlIG1vZHVsZSBzY3JpcHQgdG8gZW5zdXJlIHNlcXVlbnRpYWwgZXZhbHVhdGlvbg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIG9mIG11bHRpcGxlIHByb3h5LmV2YWwoKSBjYWxscw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRvbmUgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4gew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cuX19uZXh0X18gPSByZXNvbHZlDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHRFbC5pbm5lckhUTUwgPSBzY3JpcHQgKyBgXG53aW5kb3cuX19uZXh0X18oKWANCiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdEVsKQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdEVsLm9uZXJyb3IgPSBlcnIgPT4gc2VuZF9lcnJvcihlcnIubWVzc2FnZSwgZXJyLnN0YWNrKQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdEVscy5wdXNoKHNjcmlwdEVsKQ0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IGRvbmUNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRfb2soKQ0KICAgICAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7DQogICAgICAgICAgICAgICAgICAgICAgICBzZW5kX2Vycm9yKGUubWVzc2FnZSwgZS5zdGFjayk7DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9DQoNCiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAnY2F0Y2hfY2xpY2tzJykgew0KICAgICAgICAgICAgICAgICAgICB0cnkgew0KICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdG9wX29yaWdpbiA9IGV2Lm9yaWdpbjsNCiAgICAgICAgICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBldmVudCA9PiB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50LndoaWNoICE9PSAxKSByZXR1cm47DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV2ZW50Lm1ldGFLZXkgfHwgZXZlbnQuY3RybEtleSB8fCBldmVudC5zaGlmdEtleSkgcmV0dXJuOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChldmVudC5kZWZhdWx0UHJldmVudGVkKSByZXR1cm47DQoNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBlbnN1cmUgdGFyZ2V0IGlzIGEgbGluaw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBlbCA9IGV2ZW50LnRhcmdldDsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aGlsZSAoZWwgJiYgZWwubm9kZU5hbWUgIT09ICdBJykgZWwgPSBlbC5wYXJlbnROb2RlOw0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghZWwgfHwgZWwubm9kZU5hbWUgIT09ICdBJykgcmV0dXJuOw0KDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsLmhhc0F0dHJpYnV0ZSgnZG93bmxvYWQnKSB8fCBlbC5nZXRBdHRyaWJ1dGUoJ3JlbCcpID09PSAnZXh0ZXJuYWwnIHx8IGVsLnRhcmdldCkgcmV0dXJuOw0KDQogICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTsNCg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbC5ocmVmLnN0YXJ0c1dpdGgodG9wX29yaWdpbikpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChlbC5ocmVmKTsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVybC5oYXNoWzBdID09PSAnIycpIHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5oYXNoID0gdXJsLmhhc2g7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9DQoNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cub3BlbihlbC5ocmVmLCAnX2JsYW5rJyk7DQogICAgICAgICAgICAgICAgICAgICAgICB9KTsNCiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRfb2soKTsNCiAgICAgICAgICAgICAgICAgICAgfSBjYXRjaChlKSB7DQogICAgICAgICAgICAgICAgICAgICAgICBzZW5kX2Vycm9yKGUubWVzc2FnZSwgZS5zdGFjayk7DQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICB9DQoNCiAgICAgICAgICAgICAgICBpZiAoYWN0aW9uID09PSAibG9hZF9kZXBlbmRlbmNpZXMiKSB7DQogICAgICAgICAgICAgICAgICAgIHRyeSB7DQogICAgICAgICAgICAgICAgICAgICAgICBsb2FkX2RlcGVuZGVuY2llcyhldi5kYXRhLmFyZ3MpOw0KICAgICAgICAgICAgICAgICAgICAgICAgc2VuZF9vaygpDQogICAgICAgICAgICAgICAgICAgIH1jYXRjaCAoZSkgew0KICAgICAgICAgICAgICAgICAgICAgICAgc2VuZF9lcnJvcihlLm1lc3NhZ2UsIGUuc3RhY2spOw0KICAgICAgICAgICAgICAgICAgICB9DQoNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICB9DQoNCiAgICAgICAgICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtZXNzYWdlJywgaGFuZGxlX21lc3NhZ2UsIGZhbHNlKTsNCg0KICAgICAgICAgICAgd2luZG93Lm9uZXJyb3IgPSBmdW5jdGlvbiAobXNnLCB1cmwsIGxpbmVObywgY29sdW1uTm8sIGVycm9yKSB7DQogICAgICAgICAgICAgICAgaWYgKG1zZy5pbmNsdWRlcygnbW9kdWxlIHNwZWNpZmllciDigJx2dWXigJ0nKSkgew0KICAgICAgICAgICAgICAgICAgICAvLyBmaXJlZm94IG9ubHkgZXJyb3IsIGlnbm9yZQ0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2UNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgdHJ5IHsNCiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgYWN0aW9uOiAnZXJyb3InLCB2YWx1ZTogZXJyb3IgfSwgJyonKTsNCiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7DQogICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ2Vycm9yJywgdmFsdWU6IG1zZyB9LCAnKicpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0NCg0KICAgICAgICAgICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoInVuaGFuZGxlZHJlamVjdGlvbiIsIGV2ZW50ID0+IHsNCiAgICAgICAgICAgICAgICBpZiAoZXZlbnQucmVhc29uLm1lc3NhZ2UuaW5jbHVkZXMoJ0Nyb3NzLW9yaWdpbicpKSB7DQogICAgICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCkNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuDQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIHRyeSB7DQogICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ3VuaGFuZGxlZHJlamVjdGlvbicsIHZhbHVlOiBldmVudC5yZWFzb24gfSwgJyonKTsNCiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7DQogICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ3VuaGFuZGxlZHJlamVjdGlvbicsIHZhbHVlOiBldmVudC5yZWFzb24ubWVzc2FnZSB9LCAnKicpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0pOw0KDQogICAgICAgICAgICBsZXQgcHJldmlvdXMgPSB7IGxldmVsOiBudWxsLCBhcmdzOiBudWxsIH07DQoNCiAgICAgICAgICAgIFsnY2xlYXInLCAnbG9nJywgJ2luZm8nLCAnZGlyJywgJ3dhcm4nLCAnZXJyb3InLCAndGFibGUnXS5mb3JFYWNoKChsZXZlbCkgPT4gew0KICAgICAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsID0gY29uc29sZVtsZXZlbF07DQogICAgICAgICAgICAgICAgY29uc29sZVtsZXZlbF0gPSAoLi4uYXJncykgPT4gew0KICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBTdHJpbmcoYXJnc1swXSkNCiAgICAgICAgICAgICAgICAgICAgaWYgKA0KICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmluY2x1ZGVzKCdZb3UgYXJlIHJ1bm5pbmcgYSBkZXZlbG9wbWVudCBidWlsZCBvZiBWdWUnKSB8fA0KICAgICAgICAgICAgICAgICAgICAgICAgbXNnLmluY2x1ZGVzKCdZb3UgYXJlIHJ1bm5pbmcgdGhlIGVzbS1idW5kbGVyIGJ1aWxkIG9mIFZ1ZScpDQogICAgICAgICAgICAgICAgICAgICkgew0KICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuDQogICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3RyaW5naWZpZWRBcmdzID0gc3RyaW5naWZ5KGFyZ3MpOw0KICAgICAgICAgICAgICAgICAgICBpZiAoDQogICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5sZXZlbCA9PT0gbGV2ZWwgJiYNCiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzLmFyZ3MgJiYNCiAgICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzLmFyZ3MgPT09IHN0cmluZ2lmaWVkQXJncw0KICAgICAgICAgICAgICAgICAgICApIHsNCiAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ2NvbnNvbGUnLCBsZXZlbCwgZHVwbGljYXRlOiB0cnVlIH0sICcqJyk7DQogICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7DQogICAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cyA9IHsgbGV2ZWwsIGFyZ3M6IHN0cmluZ2lmaWVkQXJncyB9Ow0KDQogICAgICAgICAgICAgICAgICAgICAgICB0cnkgew0KICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ2NvbnNvbGUnLCBsZXZlbCwgYXJncyB9LCAnKicpOw0KICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7DQogICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgYWN0aW9uOiAnY29uc29sZScsIGxldmVsLCBhcmdzOiBhcmdzLm1hcChhID0+IHsNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhIGluc3RhbmNlb2YgRXJyb3IgPyBhLm1lc3NhZ2UgOiBTdHJpbmcoYSkNCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkgfSwgJyonKTsNCiAgICAgICAgICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgICAgICAgICAgfQ0KDQogICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsKC4uLmFyZ3MpOw0KICAgICAgICAgICAgICAgIH0NCiAgICAgICAgICAgIH0pOw0KDQogICAgICAgICAgICBbDQogICAgICAgICAgICAgICAgeyBtZXRob2Q6ICdncm91cCcsIGFjdGlvbjogJ2NvbnNvbGVfZ3JvdXAnIH0sDQogICAgICAgICAgICAgICAgeyBtZXRob2Q6ICdncm91cEVuZCcsIGFjdGlvbjogJ2NvbnNvbGVfZ3JvdXBfZW5kJyB9LA0KICAgICAgICAgICAgICAgIHsgbWV0aG9kOiAnZ3JvdXBDb2xsYXBzZWQnLCBhY3Rpb246ICdjb25zb2xlX2dyb3VwX2NvbGxhcHNlZCcgfSwNCiAgICAgICAgICAgIF0uZm9yRWFjaCgoZ3JvdXBfYWN0aW9uKSA9PiB7DQogICAgICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWwgPSBjb25zb2xlW2dyb3VwX2FjdGlvbi5tZXRob2RdOw0KICAgICAgICAgICAgICAgIGNvbnNvbGVbZ3JvdXBfYWN0aW9uLm1ldGhvZF0gPSAobGFiZWwpID0+IHsNCiAgICAgICAgICAgICAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgYWN0aW9uOiBncm91cF9hY3Rpb24uYWN0aW9uLCBsYWJlbCB9LCAnKicpOw0KDQogICAgICAgICAgICAgICAgICAgIG9yaWdpbmFsKGxhYmVsKTsNCiAgICAgICAgICAgICAgICB9Ow0KICAgICAgICAgICAgfSk7DQoNCiAgICAgICAgICAgIGNvbnN0IHRpbWVycyA9IG5ldyBNYXAoKTsNCiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsX3RpbWUgPSBjb25zb2xlLnRpbWU7DQogICAgICAgICAgICBjb25zdCBvcmlnaW5hbF90aW1lbG9nID0gY29uc29sZS50aW1lTG9nOw0KICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxfdGltZWVuZCA9IGNvbnNvbGUudGltZUVuZDsNCg0KICAgICAgICAgICAgY29uc29sZS50aW1lID0gKGxhYmVsID0gJ2RlZmF1bHQnKSA9PiB7DQogICAgICAgICAgICAgICAgb3JpZ2luYWxfdGltZShsYWJlbCk7DQogICAgICAgICAgICAgICAgdGltZXJzLnNldChsYWJlbCwgcGVyZm9ybWFuY2Uubm93KCkpOw0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgY29uc29sZS50aW1lTG9nID0gKGxhYmVsID0gJ2RlZmF1bHQnKSA9PiB7DQogICAgICAgICAgICAgICAgb3JpZ2luYWxfdGltZWxvZyhsYWJlbCk7DQogICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7DQogICAgICAgICAgICAgICAgaWYgKHRpbWVycy5oYXMobGFiZWwpKSB7DQogICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ2NvbnNvbGUnLCBsZXZlbDogJ3N5c3RlbS1sb2cnLCBhcmdzOiBbYCR7bGFiZWx9OiAke25vdyAtIHRpbWVycy5nZXQobGFiZWwpfW1zYF0gfSwgJyonKTsNCiAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBhY3Rpb246ICdjb25zb2xlJywgbGV2ZWw6ICdzeXN0ZW0td2FybicsIGFyZ3M6IFtgVGltZXIgJyR7bGFiZWx9JyBkb2VzIG5vdCBleGlzdGBdIH0sICcqJyk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICAgICAgY29uc29sZS50aW1lRW5kID0gKGxhYmVsID0gJ2RlZmF1bHQnKSA9PiB7DQogICAgICAgICAgICAgICAgb3JpZ2luYWxfdGltZWVuZChsYWJlbCk7DQogICAgICAgICAgICAgICAgY29uc3Qgbm93ID0gcGVyZm9ybWFuY2Uubm93KCk7DQogICAgICAgICAgICAgICAgaWYgKHRpbWVycy5oYXMobGFiZWwpKSB7DQogICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ2NvbnNvbGUnLCBsZXZlbDogJ3N5c3RlbS1sb2cnLCBhcmdzOiBbYCR7bGFiZWx9OiAke25vdyAtIHRpbWVycy5nZXQobGFiZWwpfW1zYF0gfSwgJyonKTsNCiAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBhY3Rpb246ICdjb25zb2xlJywgbGV2ZWw6ICdzeXN0ZW0td2FybicsIGFyZ3M6IFtgVGltZXIgJyR7bGFiZWx9JyBkb2VzIG5vdCBleGlzdGBdIH0sICcqJyk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIHRpbWVycy5kZWxldGUobGFiZWwpOw0KICAgICAgICAgICAgfTsNCg0KICAgICAgICAgICAgY29uc3Qgb3JpZ2luYWxfYXNzZXJ0ID0gY29uc29sZS5hc3NlcnQ7DQogICAgICAgICAgICBjb25zb2xlLmFzc2VydCA9IChjb25kaXRpb24sIC4uLmFyZ3MpID0+IHsNCiAgICAgICAgICAgICAgICBpZiAoY29uZGl0aW9uKSB7DQogICAgICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7DQogICAgICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ2NvbnNvbGUnLCBsZXZlbDogJ2Fzc2VydCcsIGFyZ3MsIHN0YWNrIH0sICcqJyk7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgICAgIG9yaWdpbmFsX2Fzc2VydChjb25kaXRpb24sIC4uLmFyZ3MpOw0KICAgICAgICAgICAgfTsNCg0KICAgICAgICAgICAgY29uc3QgY291bnRlciA9IG5ldyBNYXAoKTsNCiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsX2NvdW50ID0gY29uc29sZS5jb3VudDsNCiAgICAgICAgICAgIGNvbnN0IG9yaWdpbmFsX2NvdW50cmVzZXQgPSBjb25zb2xlLmNvdW50UmVzZXQ7DQoNCiAgICAgICAgICAgIGNvbnNvbGUuY291bnQgPSAobGFiZWwgPSAnZGVmYXVsdCcpID0+IHsNCiAgICAgICAgICAgICAgICBjb3VudGVyLnNldChsYWJlbCwgKGNvdW50ZXIuZ2V0KGxhYmVsKSB8fCAwKSArIDEpOw0KICAgICAgICAgICAgICAgIHBhcmVudC5wb3N0TWVzc2FnZSh7IGFjdGlvbjogJ2NvbnNvbGUnLCBsZXZlbDogJ3N5c3RlbS1sb2cnLCBhcmdzOiBgJHtsYWJlbH06ICR7Y291bnRlci5nZXQobGFiZWwpfWAgfSwgJyonKTsNCiAgICAgICAgICAgICAgICBvcmlnaW5hbF9jb3VudChsYWJlbCk7DQogICAgICAgICAgICB9Ow0KDQogICAgICAgICAgICBjb25zb2xlLmNvdW50UmVzZXQgPSAobGFiZWwgPSAnZGVmYXVsdCcpID0+IHsNCiAgICAgICAgICAgICAgICBpZiAoY291bnRlci5oYXMobGFiZWwpKSB7DQogICAgICAgICAgICAgICAgICAgIGNvdW50ZXIuc2V0KGxhYmVsLCAwKTsNCiAgICAgICAgICAgICAgICB9IGVsc2Ugew0KICAgICAgICAgICAgICAgICAgICBwYXJlbnQucG9zdE1lc3NhZ2UoeyBhY3Rpb246ICdjb25zb2xlJywgbGV2ZWw6ICdzeXN0ZW0td2FybicsIGFyZ3M6IGBDb3VudCBmb3IgJyR7bGFiZWx9JyBkb2VzIG5vdCBleGlzdGAgfSwgJyonKTsNCiAgICAgICAgICAgICAgICB9DQogICAgICAgICAgICAgICAgb3JpZ2luYWxfY291bnRyZXNldChsYWJlbCk7DQogICAgICAgICAgICB9Ow0KDQogICAgICAgICAgICBjb25zdCBvcmlnaW5hbF90cmFjZSA9IGNvbnNvbGUudHJhY2U7DQoNCiAgICAgICAgICAgIGNvbnNvbGUudHJhY2UgPSAoLi4uYXJncykgPT4gew0KICAgICAgICAgICAgICAgIGNvbnN0IHN0YWNrID0gbmV3IEVycm9yKCkuc3RhY2s7DQogICAgICAgICAgICAgICAgcGFyZW50LnBvc3RNZXNzYWdlKHsgYWN0aW9uOiAnY29uc29sZScsIGxldmVsOiAndHJhY2UnLCBhcmdzLCBzdGFjayB9LCAnKicpOw0KICAgICAgICAgICAgICAgIG9yaWdpbmFsX3RyYWNlKC4uLmFyZ3MpOw0KICAgICAgICAgICAgfTsNCg0KICAgICAgICAgICAgZnVuY3Rpb24gc3RyaW5naWZ5KGFyZ3MpIHsNCiAgICAgICAgICAgICAgICB0cnkgew0KICAgICAgICAgICAgICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoYXJncyk7DQogICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHsNCiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7DQogICAgICAgICAgICAgICAgfQ0KICAgICAgICAgICAgfQ0KICAgICAgICB9KSgpDQogICAgPC9zY3JpcHQ+DQo8L2hlYWQ+DQo8Ym9keT4NCiAgICA8ZGl2IGlkPSJhcHAiPjwvZGl2Pg0KPC9ib2R5Pg0KPC9odG1sPg0K"}))))},A([I.Prop({default:"",type:String}),l("design:type",String)],c.prototype,"name",void 0),c=A([I.Component({name:"wu-code-playground",css:Z}),l("design:paramtypes",[])],c)}(I.WuComponent);g.WuCodePlayground=c,Object.defineProperty(g,"__esModule",{value:!0})}));
