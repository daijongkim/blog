(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{f820:function(o,t,e){"use strict";e.r(t);var n=e("7a23");const s={class:"markdown-body"};function i(o,t,e,i,c,r){return Object(n["p"])(),Object(n["d"])("div",s,[Object(n["f"])("div",{innerHTML:o.profile},null,8,["innerHTML"])])}var c=e("ce1f"),r=e("0e54"),l=e.n(r);class a extends c["b"]{constructor(){super(...arguments),this.profile="",this.profileRaw=""}created(){const o="http://localhost:8080",t="/docs",e=o+t+"/About.md";console.log(e),this.$http.get(e).then(o=>{this.profileRaw=o.data,this.profile=l()(this.profileRaw)})}mounted(){console.log("mounted","init"),this.profileRaw&&console.log("mounted","procc")}}a.render=i;t["default"]=a}}]);
//# sourceMappingURL=about.a148805c.js.map