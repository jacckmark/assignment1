(function(e){function t(t){for(var r,o,i=t[0],c=t[1],u=t[2],p=0,d=[];p<i.length;p++)o=i[p],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(e[r]=c[r]);l&&l(t);while(d.length)d.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],r=!0,i=1;i<n.length;i++){var c=n[i];0!==a[c]&&(r=!1)}r&&(s.splice(t--,1),e=o(o.s=n[0]))}return e}var r={},a={app:0},s=[];function o(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=e,o.c=r,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/assignment1/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var l=c;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";n("85ec")},"0fec":function(e,t,n){n("1276"),n("ac1f"),e.exports={safeRead:function(e,t){for(var n=e,r=t.split("."),a=0;a<r.length;a+=1){if(void 0===r[a])break;n=n[r[a]]}return n}}},"56d7":function(e,t,n){"use strict";n.r(t);var r=n("2909"),a=(n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("159b"),n("2b0e")),s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("Table",{attrs:{endpoint:this.tableUrl,tableColumns:e.columns},on:{userListChanged:e.listChangedEvent}})],1)},o=[],i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container-fluid"},[n("TableSettings",{staticClass:"mb-3",attrs:{"search-is-on":this.searchIsOn,"sort-is-on":this.sortIsOn,"pagination-is-on":this.paginationIsOn},on:{sortToggled:e.toggleSort,paginToggled:e.togglePagination,searchToggled:e.toggleSearch}}),n("SearchInput",{directives:[{name:"show",rawName:"v-show",value:this.searchIsOn,expression:"this.searchIsOn"}],on:{searchTable:function(t){return e.filterUsers(t)}}}),e.isUsersListNotEmpty?n("div",{staticClass:"row justify-content-center"},[n("div",{staticClass:"col col-xl-10"},[n("table",{staticClass:"table"},[n("thead",[n("tr",e._l(e.sortedTableColumns,(function(t,r){return n("TableHeader",{key:r,attrs:{name:t.name,propertyPath:t.propertyPath,isSortingOn:e.sortIsOn},on:{sortColumn:e.sortByColumn}})})),1)]),e._l(e.usersList,(function(t){return n("tbody",{key:t.id},[n("tr",e._l(e.sortedTableColumns,(function(r,a){return n("td",{key:a,attrs:{scope:"row"}},[n("span",{domProps:{innerHTML:e._s(e.renderTableCell(t,r.propertyPath))}})])})),0)])}))],2),n("Paginator",{directives:[{name:"show",rawName:"v-show",value:e.paginationIsOn,expression:"paginationIsOn"}],attrs:{totalPages:e.totalPageAmount},on:{changePage:e.changePage}})],1)]):e._e(),e.isUsersListNotEmpty?e._e():n("div",[e._v(" nothing to show "),n("font-awesome-icon",{attrs:{icon:["fas","sad-cry"]}})],1)],1)},c=[],u=n("1da1"),l=(n("96cf"),n("841c"),n("ac1f"),n("99af"),n("4de4"),n("caad"),n("2532"),n("d3b7"),n("25f0"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"btn-group",attrs:{role:"group","aria-label":"Basic example"}},[n("button",{class:["btn",e.sortIsOn?"btn-success":"btn-secondary"],attrs:{type:"button"},on:{click:this.toggleSorting}},[e._v(" sorting ")]),n("button",{class:["btn",e.searchIsOn?"btn-success":"btn-secondary"],attrs:{type:"button"},on:{click:this.toggleSearch}},[e._v(" search ")]),n("button",{class:["btn",e.paginationIsOn?"btn-success":"btn-secondary"],attrs:{type:"button"},on:{click:this.togglePagination}},[e._v(" pagination ")])])}),p=[],d={name:"TableSettings",props:{searchIsOn:{type:Boolean,required:!0},sortIsOn:{type:Boolean,required:!0},paginationIsOn:{type:Boolean,required:!0}},methods:{toggleSorting:function(){this.$emit("sortToggled")},toggleSearch:function(){this.$emit("searchToggled")},togglePagination:function(){this.$emit("paginToggled")}}},h=d,g=n("2877"),f=Object(g["a"])(h,l,p,!1,null,"0018f5e5",null),m=f.exports,b=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"form-group mr-2 ml-2"},[n("div",{staticClass:"row"},[n("div",{staticClass:"col offset-md-2 col-md-6"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.searchPhrase,expression:"searchPhrase"}],staticClass:"form-control",attrs:{type:"text",id:"searchField","aria-describedby":"searchHelp",placeholder:"Enter search phrase"},domProps:{value:e.searchPhrase},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.searchTable(t)},input:function(t){t.target.composing||(e.searchPhrase=t.target.value)}}})]),n("div",{staticClass:"col col-md-2"},[n("button",{staticClass:"btn btn-primary btn-block",attrs:{type:"submit"},on:{click:e.searchTable}},[e._v(" Search ")])])]),n("small",{staticClass:"form-text text-muted",attrs:{id:"searchHelp"}},[e._v("Enter phrase and hit enter to search")])])},v=[],y={name:"SearchInput",data:function(){return{searchPhrase:""}},methods:{searchTable:function(){this.$emit("searchTable",this.searchPhrase)}}},O=y,w=Object(g["a"])(O,b,v,!1,null,"6dc1ca52",null),P=w.exports,x=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{attrs:{"aria-label":"page navigation"}},[n("ul",{staticClass:"pagination justify-content-center",on:{click:e.moveToPage}},e._l(e.totalPages,(function(t){return n("li",{key:t,staticClass:"page-item page-link",attrs:{"data-page":t}},[e._v(" "+e._s(t)+" ")])})),0)])},S=[],C=(n("a9e3"),{name:"Paginator",props:{totalPages:{type:Number,required:!0}},methods:{moveToPage:function(e){var t,n,r,a;null!==(t=e.target)&&void 0!==t&&null!==(n=t.dataset)&&void 0!==n&&n.page&&this.$emit("changePage",null===(r=e.target)||void 0===r||null===(a=r.dataset)||void 0===a?void 0:a.page)}}}),_=C,k=(n("7c7b"),Object(g["a"])(_,x,S,!1,null,"451cbafe",null)),T=k.exports,I=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("th",{staticClass:"header",attrs:{scope:"col"},on:{click:e.sortColumn}},[e._v(" "+e._s(e.name)+" "),n("font-awesome-icon",{directives:[{name:"show",rawName:"v-show",value:e.isSortingOn,expression:"isSortingOn"}],attrs:{icon:["fas",e.chevronDirection]}})],1)},j=[],L={name:"TableHeader",props:{name:{type:String,required:!0},propertyPath:{type:String,required:!0},isSortingOn:{type:Boolean,required:!0}},data:function(){return{isSortedAsc:!1}},methods:{sortColumn:function(){this.isSortingOn&&(this.isSortedAsc=!this.isSortedAsc,this.$emit("sortColumn",this.propertyPath,this.isSortedAsc))}},computed:{chevronDirection:function(){return this.isSortedAsc?"angle-up":"angle-down"}}},R=L,E=(n("5a85"),Object(g["a"])(R,I,j,!1,null,"443981eb",null)),U=E.exports,$=n("0fec"),N=n.n($),A={name:"Table",components:{TableSettings:m,SearchInput:P,Paginator:T,TableHeader:U},data:function(){return{searchIsOn:this.search,sortIsOn:this.sorting,paginationIsOn:this.pagination,usersList:[],defaultPageSize:3,totalPageAmount:0}},watch:{usersList:function(e){this.$emit("userListChanged",e)}},props:{endpoint:{type:String,required:!0},search:{type:Boolean,default:!1},pagination:{type:Boolean,default:!1},sorting:{type:Boolean,default:!1},tableColumns:{type:Array,default:function(){return[]}}},mounted:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.getUsers(e.endpoint);case 2:e.usersList=t.sent;case 3:case"end":return t.stop()}}),t)})))()},methods:{getUsers:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a,s,o,i;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=e,t&&n.paginationIsOn&&(s=t*n.defaultPageSize,a="".concat(a,"/?_start=").concat(s-n.defaultPageSize,"&_end=").concat(s)),r.prev=2,r.next=5,n.axios.get(a);case 5:return i=r.sent,null!==i&&void 0!==i&&null!==(o=i.headers)&&void 0!==o&&o["x-total-count"]&&(n.totalPageAmount=parseInt(i.headers["x-total-count"]/n.defaultPageSize)),r.abrupt("return",i.data);case 10:r.prev=10,r.t0=r["catch"](2),console.log(r.t0);case 13:case"end":return r.stop()}}),r,null,[[2,10]])})))()},togglePagination:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.paginationIsOn=!e.paginationIsOn,t.next=3,e.getUsers(e.endpoint,1);case 3:e.usersList=t.sent;case 4:case"end":return t.stop()}}),t)})))()},filterUsers:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(!e){n.next=7;break}return n.next=3,t.getUsers(t.endpoint);case 3:t.usersList=n.sent,t.usersList=t.usersList.filter((function(t){for(var n in t)if(t[n].toString().toLowerCase().includes(e.toLowerCase()))return!0;return!1})),n.next=10;break;case 7:return n.next=9,t.getUsers(t.endpoint);case 9:t.usersList=n.sent;case 10:case"end":return n.stop()}}),n)})))()},changePage:function(e){var t=this;return Object(u["a"])(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.next=2,t.getUsers(t.endpoint,e);case 2:t.usersList=n.sent;case 3:case"end":return n.stop()}}),n)})))()},sortByColumn:function(e,t){var n=this;return Object(u["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.next=2,n.getUsers(n.endpoint,e);case 2:a=r.sent,a.sort((function(n,r){return t?N.a.safeRead(n,e)<N.a.safeRead(r,e)?-1:1:N.a.safeRead(r,e)<N.a.safeRead(n,e)?-1:1})),n.usersList=a;case 5:case"end":return r.stop()}}),r)})))()},toggleSort:function(){var e=this;return Object(u["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(e.sortIsOn=!e.sortIsOn,e.sortIsOn){t.next=5;break}return t.next=4,e.getUsers(e.endpoint);case 4:e.usersList=t.sent;case 5:case"end":return t.stop()}}),t)})))()},toggleSearch:function(){this.searchIsOn=!this.searchIsOn},renderTableCell:function(e,t){var n=N.a.safeRead(e,t);return n.toString().includes("@")||t.toString().includes("mail")?'<a href="mailto:'.concat(n,'">').concat(n,"</a>"):"<span>".concat(n,"</span>")}},computed:{isUsersListNotEmpty:function(){var e;return null===(e=this.usersList)||void 0===e?void 0:e.length},sortedTableColumns:function(){var e=JSON.parse(JSON.stringify(this.tableColumns));return e.sort((function(e,t){return e.order-t.order}))}}},B=A,q=Object(g["a"])(B,i,c,!1,null,"0beb8e6c",null),H=q.exports,M={name:"App",components:{Table:H},data:function(){return{tableUrl:"https://jsonplaceholder.typicode.com/users",columns:[{name:"Name",order:2,propertyPath:"name"},{name:"#",order:1,propertyPath:"id"},{name:"Email",order:3,propertyPath:"email"},{name:"Company name",order:5,propertyPath:"company.name"},{name:"City",order:4,propertyPath:"address.city"},{name:"Website",order:7,propertyPath:"website"},{name:"Phone",order:6,propertyPath:"phone"}]}},methods:{listChangedEvent:function(e){console.log("Userslist changed to: ",e)}}},z=M,J=(n("034f"),Object(g["a"])(z,s,o,!1,null,null,null)),D=J.exports,F=(n("4989"),n("ab8b"),n("bc3a")),W=n.n(F),G=n("2106"),K=n.n(G),Q=n("ecee"),V=n("c074"),X=n("ad3d");a["a"].config.productionTip=!1,Q["c"].add(V["c"],V["a"],V["b"]),a["a"].component("font-awesome-icon",X["a"]),[[K.a,W.a]].forEach((function(e){return a["a"].use.apply(a["a"],Object(r["a"])(e))})),new a["a"]({render:function(e){return e(D)}}).$mount("#app")},"5a85":function(e,t,n){"use strict";n("73f9")},"73f9":function(e,t,n){},"7c7b":function(e,t,n){"use strict";n("a43b")},"85ec":function(e,t,n){},a43b:function(e,t,n){}});
//# sourceMappingURL=app.88fad186.js.map