(function(t){function e(e){for(var n,o,s=e[0],l=e[1],c=e[2],p=0,h=[];p<s.length;p++)o=s[p],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&h.push(r[o][0]),r[o]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n]);u&&u(e);while(h.length)h.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var t,e=0;e<i.length;e++){for(var a=i[e],n=!0,s=1;s<a.length;s++){var l=a[s];0!==r[l]&&(n=!1)}n&&(i.splice(e--,1),t=o(o.s=a[0]))}return t}var n={},r={app:0},i=[];function o(e){if(n[e])return n[e].exports;var a=n[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=t,o.c=n,o.d=function(t,e,a){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(a,n,function(e){return t[e]}.bind(null,n));return a},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],l=s.push.bind(s);s.push=e,s=s.slice();for(var c=0;c<s.length;c++)e(s[c]);var u=l;i.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";a("85ec")},1:function(t,e){},1294:function(t,e,a){"use strict";a("58ad")},"1a12":function(t,e,a){},2:function(t,e){},"2ab4":function(t,e,a){t.exports=a.p+"img/aircraft_autonavi.31ab796e.png"},3:function(t,e){},4:function(t,e){},5:function(t,e){},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=a("5c96"),i=a.n(r),o=(a("0fae"),a("e05f"),a("bc3a")),s=a.n(o),l=a("4328"),c=a.n(l),u=a("e11e"),p=a.n(u),h=(a("6cc5"),a("8c4f")),d=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"cards",attrs:{gutter:15}},[a("el-col",{attrs:{span:24,lg:7}},[a("el-card",{staticClass:"tree-card",attrs:{shadow:"never"}},[a("el-input",{staticClass:"search",attrs:{placeholder:"输入至少三位ICAO代码进行过滤"},model:{value:t.findText,callback:function(e){t.findText=e},expression:"findText"}}),a("div",{staticClass:"tree-container",staticStyle:{height:"750px",overflow:"auto"}},[a("el-tree",{ref:"tree",staticClass:"filter-tree",attrs:{data:t.list,props:t.defaultProps,"filter-node-method":t.filterNode,accordion:""},on:{"node-click":t.handleNodeClick}})],1)],1)],1),a("el-col",{attrs:{span:24,lg:17}},[a("el-card",[a("span",[t._v(" 控制: "),a("el-button-group",[a("el-button",{attrs:{icon:"el-icon-zoom-in"},on:{click:t.handleIn}}),a("el-button",{attrs:{icon:"el-icon-zoom-out"},on:{click:t.handleOut}})],1),t._v(" "),a("el-button-group",[a("el-button",{attrs:{icon:"el-icon-arrow-left",disabled:1==t.pageTotalNum&&void 0!==t.pageTotalNum},on:{click:t.handlePrev}}),a("el-button",{attrs:{icon:"el-icon-arrow-right",disabled:1==t.pageTotalNum&&void 0!==t.pageTotalNum},on:{click:t.handleNext}})],1)],1)]),a("el-card",{staticClass:"pdf-card",staticStyle:{height:"750px",overflow:"auto"}},[1!=t.pageTotalNum&&void 0!=t.pageTotalNum?a("div",{staticStyle:{float:"right"}},[t._v(" "+t._s(t.currentPage)+"/"+t._s(t.pageTotalNum)+" ")]):t._e(),a("div",[a("pdf",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:1!=t.loadedRatio,expression:"loadedRatio != 1",modifiers:{fullscreen:!0,lock:!0}}],ref:"pdfView",staticStyle:{overflow:"auto"},attrs:{page:t.currentPage,id:"pdfView",src:t.url},on:{"num-pages":function(e){t.pageTotalNum=e},progress:function(e){t.loadedRatio=e}}})],1)])],1)],1)],1)},f=[],m=(a("99af"),a("4de4"),a("c975"),a("b0c0"),a("d3b7"),a("ac1f"),a("25f0"),a("1276"),a("96cf"),a("1da1")),v=a("858e"),g={data:function(){return{availableCycle:0,scale:100,currentPage:1,loadedRatio:0,pageTotalNum:0,url:"index.pdf",text:"",airportsName:[],list:[],airportsId:[],defaultProps:{children:"children",label:"label"}}},computed:{findText:{get:function(){return this.text},set:function(t){this.text=t.toUpperCase()}}},watch:{text:[function(t){t.length>=3||""===t?this.$refs.tree.filter(t):this.$refs.tree.filter("")}]},components:{pdf:v["a"]},methods:{handleSelect:function(t,e){console.log(t,e)},handleOut:function(){this.scale-=5,this.$refs.pdfView.$el.style.width="".concat(parseInt(this.scale,0),"%")},handleIn:function(){this.scale<180&&(this.scale+=5,this.$refs.pdfView.$el.style.width="".concat(parseInt(this.scale,0),"%"))},handleNext:function(){this.currentPage<this.pageTotalNum&&(this.currentPage+=1)},handlePrev:function(){this.currentPage>1&&(this.currentPage-=1)},filterNode:function(t,e){return!t||-1!==e.label.split(" ")[0].indexOf(t)},handleNodeClick:function(t){console.log(t),-1===this.airportsId.indexOf(t.id)&&(console.log("is chart"),-1!==t.label.split(":")[0].split("-")[1].indexOf("AD")?this.url="https://cafpc-efb.oss-cn-beijing.aliyuncs.com/2011/".concat(t.label.split("-")[0],"/").concat(t.label.split("-")[0],".pdf"):this.url="https://cafpc-efb.oss-cn-beijing.aliyuncs.com/".concat(this.availableCycle,"/").concat(t.label.split("-")[0],"/").concat(t.label.split(":")[0],".pdf"),this.currentPage=1)},getCycleJson:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.getAvailableCycle();case 2:t.$axios.post("".concat(t.$proxyApiUrl,"/getCycleJson/").concat(t.availableCycle)).then((function(e){for(var a=e.data,n="",r=-1,i=0;i<a.length;i+=1)a[i].id.length<5&&a[i].id!==n?(n=a[i].id,r+=1,t.airportsId.push(i),t.airportsName.push(a[i].id),t.list.push({id:i,label:"".concat(a[i].id," ").concat(a[i].name),children:[]})):t.list[r].children.push({id:i,label:"".concat(a[i].name)})}));case 3:case"end":return e.stop()}}),e)})))()},getAvailableCycle:function(){var t=this;return Object(m["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,t.$axios.post("".concat(t.$proxyApiUrl,"/available")).then((function(e){t.availableCycle=e.data.version,localStorage.getItem("cycle")!==t.availableCycle.toString()&&t.$axios.post("".concat(t.$proxyApiUrl,"/getCycleNotam/").concat(t.availableCycle)).then((function(e){t.$alert(e.data.notam,"查看器数据已经更新至".concat(t.availableCycle,"期"),{confirmButtonText:"确定"}),localStorage.setItem("cycle",t.availableCycle.toString())}))}));case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.getCycleJson()}},b=g,x=(a("1294"),a("2877")),y=Object(x["a"])(b,d,f,!1,null,null,null),w=y.exports,_=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("el-row",{staticClass:"cards",attrs:{gutter:8}},[a("el-col",{attrs:{span:24,lg:7}},[a("el-card",{attrs:{shadow:"never"}},[a("div",[a("el-input",{staticClass:"search",attrs:{placeholder:"起飞机场",disabled:t.isLoading},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.dep,callback:function(e){t.dep=e},expression:"dep"}}),a("el-input",{staticClass:"search",attrs:{placeholder:"降落机场",disabled:t.isLoading},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.arr,callback:function(e){t.arr=e},expression:"arr"}}),a("el-input",{staticClass:"search",attrs:{placeholder:"输入航路/导航台/航路点进行搜索",disabled:t.isLoading},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.search(e)}},model:{value:t.findText,callback:function(e){t.findText=e},expression:"findText"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询")]),a("el-button",{attrs:{type:"danger"},on:{click:t.clear}},[t._v("清空")])],1),a("div",{staticStyle:{"margin-top":"5px"}},[a("el-input",{staticClass:"search",attrs:{placeholder:"输入SINO上的机组呼号进行跟踪",disabled:null!==t.timer},model:{value:t.callsign,callback:function(e){t.callsign=e},expression:"callsign"}}),a("el-button",{attrs:{type:"primary",disabled:null!==t.timer},on:{click:t.startCracker}},[t._v("开始跟踪")]),a("el-button",{attrs:{type:"primary"},on:{click:t.loadPlan}},[t._v("载入计划")]),a("el-button",{attrs:{type:"danger",disabled:null==t.timer},on:{click:t.stopCracker}},[t._v("停止跟踪")])],1),a("div",{staticStyle:{"margin-top":"5px"}},[a("el-switch",{attrs:{"active-text":"跟随位置","inactive-text":"不跟随位置","active-color":"#13ce66","inactive-color":"#ff4949"},model:{value:t.followPosition,callback:function(e){t.followPosition=e},expression:"followPosition"}}),a("el-slider",{staticClass:"silder",attrs:{"show-tooltip":!1,min:.1,max:1,step:.01},model:{value:t.opacity,callback:function(e){t.opacity=e},expression:"opacity"}})],1)])],1),a("el-col",{attrs:{span:24,lg:17}},[a("div",{attrs:{id:"map"}})])],1)],1)},k=[],C=(a("d81d"),a("fb6a"),a("a434"),a("841c"),a("498a"),a("584d")),A=a.n(C),O=a("dbbf"),T=a.n(O),P=a("2ab4"),N=a.n(P),S=(a("6ab4"),{name:"Erc",data:function(){return{text:"",map:null,url:"https://cafpc-efb.oss-cn-beijing.aliyuncs.com/2009/ENR6/Fixed/",opacity:1,map_layer:null,fixes:{},airports:{},routes:{},route_line:null,markers:[],callsign:"",timer:null,planeMarker:null,followPosition:!1,isLoading:!1,dep:"",arr:""}},watch:{opacity:[function(t){this.map_layer.setOpacity(t)}]},computed:{findText:{get:function(){return this.text},set:function(t){this.text=t.toUpperCase()}}},methods:{findRoute:function(){return"TODO"},initMap:function(){var t=this.L.map("map",{minZoom:3,maxZoom:14,center:[39.550339,116.114129],zoom:8,zoomControl:!0});this.map=t,window.map=t,this.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",{attribution:'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'}).addTo(this.map),this.map_layer=this.L.tileLayer("".concat(this.url,"{z}/{x}/{y}.png"),{attribution:'&copy; <a href="http://www.atmb.net.cn/">ATMB</a> contributors'}).addTo(this.map)},initFAR:function(t){var e=this;this.$axios.get("".concat(t,"/fixes.db")).then((function(t){for(var a=t.data.split("\n"),n=0,r=a.length;n<r;n+=1){var i=a[n].split(" ");e.fixes[i[0]]=[i[1],i[2]]}})),this.$axios.get("".concat(t,"/routes.db")).then((function(t){for(var a=t.data.split("\n"),n=0,r=a.length;n<r;n+=1)for(var i=a[n].split(" ")[0].trim(),o=a[n].split(" ").slice(1),s=0,l=o.length;s<l;s+=1)i in e.routes||(e.routes[i]=[]),e.routes[i].push(o[s].trim())})),this.$axios.get("".concat(t,"/airports.db")).then((function(t){for(var a=t.data.split("\n"),n=0,r=a.length;n<r;n+=1){var i=a[n].split(" ");e.airports[i[0]]=[i[1],i[2]]}}))},setPosition:function(t,e,a){var n=L.icon({iconUrl:A.a,iconSize:[25,41],iconAnchor:[13,21]});this.map.setZoom(a),this.map.flyTo([t,e]),this.markers.push(this.L.marker([t,e],{icon:n}).addTo(this.map))},setAirplaneMarker:function(t,e,a){var n=L.icon({iconUrl:N.a,iconAnchor:[12,12]});this.followPosition&&this.map.flyTo([t,e]),null!==this.planeMarker?this.planeMarker.setLatLng([t,e]):this.planeMarker=this.L.marker([t,e],{icon:n,rotationAngle:a}).addTo(this.map)},routeParse:function(t){var e=!0;t=t.split(" ");var a=[];for(r in t)""!=t[r].trim()&&a.push(t[r].trim());var n=[];t=[];for(var r=1,i=a.length;r<i;r+=2){if(!(r-1>=0&&r+1<=i-1)){e=!1;break}n.push([a[r],a[r-1],a[r+1]])}if(e)for(r in n){if(a=n[r],!(a[0]in this.routes)&&"DCT"!=a[0]){console.log("route ".concat(a[0]," does not exist")),e=!1;break}if("DCT"==a[0]){console.log("route DCT does not support"),e=!1;break}i=this.routes[a[0]];var o=-1,s=-1;for(r in i)if(i[r].split(".")[0]==a[1]&&(o=r),i[r].split(".")[0]==a[2]&&(s=r),-1!=o&&-1!=s)break;if(-1!=o&&-1!=s||(console.log("navs does not in route ".concat(a[0])),e=!1),!e)break;if(o=parseInt(o),s=parseInt(s),o>s)for(r=o;r>=s;r--)t.push(i[r]);else for(r=o;r<=s;r++)t.push(i[r])}for(i=t.length,r=i-1;r>=1;r--)t[r]==t[r-1]&&t.splice(r,1);for(r in n=[],t){if(!(t[r]in this.fixes)){console.log("fixes ".concat(t[r]," does not exist")),e=!1;break}n.push(this.fixes[t[r]])}return{success:e,routes:t,latlng:n}},addRouteMarker:function(t,e,a){var n=L.icon({iconUrl:T.a,iconAnchor:[5,5]});this.markers.push(this.L.marker([t,e],{icon:n,rotationAngle:a}).addTo(this.map))},setRoute:function(t,e,a){var n=this.routeParse(t),r=!1;if(""!==e&&""!==a&&(e in this.airports?(this.setPosition(this.airports[e][0],this.airports[e][1],9),n.latlng.unshift([this.airports[e][0],this.airports[e][1]]),r=!0):r=!1,a in this.airports?(this.setPosition(this.airports[a][0],this.airports[a][1],9),n.latlng.push([this.airports[a][0],this.airports[a][1]]),r=!0):r=!1),console.log(n),n.success){for(var i in n.latlng)(!r||0!=i&&i!=n.latlng.length-1)&&(this.addRouteMarker(n.latlng[i][0],n.latlng[i][1]),this.map.flyTo([n.latlng[i][0],n.latlng[i][1]]));this.route_line=L.polyline(n.latlng,{color:"orange"}).addTo(this.map)}else this.$notify.error({title:"错误",message:"你输入的航路貌似不正确，暂不支持包含DCT的航路"})},search:function(){var t=this.text;for(var e in this.clear(),console.log(t),this.fixes)if(e.split(".")[0]==t)return console.log(this.fixes[e][0],this.fixes[e][1]),void this.setPosition(this.fixes[e][0],this.fixes[e][1],9);t in this.airports?this.setPosition(this.airports[t][0],this.airports[t][1],9):-0===t.indexOf(" ")?this.$notify.error({title:"错误",message:"你输入的貌似并不是一个导航台/机场/航路"}):this.setRoute(t,this.dep,this.arr)},clear:function(){for(var t in this.markers)this.markers[t].remove();this.markers.length=0,null!==this.route_line&&this.route_line.remove(),this.route_line=null},startCracker:function(){this.timer=setInterval(this.getPositionSINO,5e3)},stopCracker:function(){clearInterval(this.timer),this.timer=null,this.planeMarker.remove(),this.planeMarker=null},getPositionSINO:function(){var t=this,e=this.callsign;this.$axios.post("".concat(this.$proxyWhazzupUrl,"?").concat(Math.random())).then((function(a){var n=a.data.split("\n"),r=n.indexOf("!CLIENTS");for(var i in n)if(i>r){var o=n[i].split(":");0==o.indexOf(e)&&t.setAirplaneMarker(o[5],o[6],Math.round(((4092&parseInt(o[o.length-1]))>>2)/1024*360))}}))},loadPlan:function(){var t=this;this.text="Loading...",this.dep="Loading...",this.arr="Loading...",this.isLoading=!0;var e=this.callsign;this.$axios.post("".concat(this.$proxyWhazzupUrl,"?").concat(Math.random())).then((function(a){t.isLoading=!1;var n=a.data.split("\n"),r=n.indexOf("!CLIENTS");for(var i in n)if(i>r){var o=n[i].split(":");if(0==o.indexOf(e))return t.text=o[30],t.dep=o[11],t.arr=o[13],void t.search()}t.text="404 Not Found",t.dep="404 Not Found",t.arr="404 Not Found"})).catch((function(e){t.text="Something Error.",t.dep="Something Error.",t.arr="Something Error.",console.log(e),t.isLoading=!1}))}},beforeDestroy:function(){clearInterval(this.timer),this.timer=null},mounted:function(){var t=this;this.$nextTick((function(){t.initMap(),t.initFAR("https://cafpc-efb.oss-cn-beijing.aliyuncs.com/Others")}))}}),$=S,E=(a("589b"),Object(x["a"])($,_,k,!1,null,null,null)),I=E.exports,M=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-row",{staticClass:"cards",attrs:{gutter:15}},[a("el-col",{attrs:{span:24,lg:5}},[a("el-card",[a("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"flex-start"}},[a("el-input",{staticClass:"search",attrs:{placeholder:"输入机场ICAO代码查询"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.search}},[t._v("查询报文")])],1),a("br"),a("div",{staticStyle:{display:"flex","flex-direction":"row","justify-content":"flex-start"}},[a("el-input",{staticClass:"search",attrs:{placeholder:"输入机场ICAO代码查询"},model:{value:t.text,callback:function(e){t.text=e},expression:"text"}}),a("el-button",{attrs:{type:"primary"},on:{click:t.searchRadar}},[t._v("查询雷达图")])],1)]),a("br"),a("el-card",{attrs:{shadow:"never"}},[a("p",[t._v("除特殊标注外本页面中所有时间均为UTC时间")])])],1),a("el-col",{attrs:{lg:7}},[t.radar.length>0?a("div",[a("el-image",{attrs:{src:t.radar[0],"preview-src-list":t.radar}})],1):t._e(),t._l(t.weathers,(function(e,n){return a("div",{key:n},[a("el-card",[t._v(" "+t._s(e.content)+" "),a("br"),t._v(" 数据发布时间："+t._s(e.datatime)+" "),a("br"),t._v(" 释义："+t._s(e.translation)+" ")]),a("br")],1)}))],2),a("el-col",{attrs:{span:24,lg:12}},[""!==t.otime?a("p",[t._v("更新时间："+t._s(t.otime))]):t._e(),t._l(t.awos,(function(t,e){return a("div",{key:e},[a("el-card",[a("el-table",{staticStyle:{width:"100%"},attrs:{data:t.runway,border:""}},[a("el-table-column",{attrs:{prop:"name",fixed:"",label:"跑道编号",width:"180"}}),a("el-table-column",{attrs:{prop:"mor",label:"MOR(m)",width:"180"}}),a("el-table-column",{attrs:{prop:"rvr",label:"RVR(m)"}}),a("el-table-column",{attrs:{prop:"qnh",label:"QNH(hPa)"}}),a("el-table-column",{attrs:{prop:"qfe",label:"QFE(hPa)"}}),a("el-table-column",{attrs:{prop:"cbase",label:"CBase(m)"}}),a("el-table-column",{attrs:{prop:"humid",label:"相对湿度(%)"}}),a("el-table-column",{attrs:{prop:"temp",label:"温度(°C)"}})],1),a("br")],1),a("br")],1)}))],2)],1)},R=[],U=(a("5319"),{name:"Weather",data:function(){return{text:"",weathers:[],awos:[],otime:"",radar:[]}},methods:{searchRadar:function(){var t=this;4==this.text.length&&this.$axios.post("".concat(this.$proxyWeatherUrl,"/radar/").concat(this.text.toUpperCase())).then((function(e){var a=e.data;if(0==a.status){var n=a.data;for(var r in t.radar.length=0,n)t.radar.push("".concat(t.$proxyApiUrl,"/image/").concat(n[r].IMAGE))}}))},search:function(){var t=this;4!==this.text.length||(this.$axios.post("".concat(this.$proxyWeatherUrl,"/").concat(this.text.toUpperCase())).then((function(e){var a=e.data;if(0==a.status){var n=a.data.weatherMessage[0].list;for(var r in t.weathers.length=0,n)t.weathers.push({content:n[r].CONTENT,datatime:n[r].DATETIME,translation:n[r].TRANSLATION})}else t.$message.error("目前暂无该机场的气象信息")})).catch((function(e){t.$message.error("出现了一些微小的偏差"),console.log(e)})),this.$axios.post("".concat(this.$proxyWeatherUrl,"/awos/").concat(this.text.toUpperCase())).then((function(e){var a=e.data;if(t.awos=[],0==a.status){var n=a.data;if(!n.length)return void(t.otime="");for(var r in t.data=0,n){var i={runway:[]};for(var o in n[r].awos)console.log(n[r]),i.runway.push({name:n[r].awos[o].NAME,mor:n[r].awos[o].MOR_1A.toString().replace("-999","无数据"),rvr:n[r].awos[o].RVR_1A.toString().replace("-999","无数据"),qnh:n[r].awos[o].QNH.toString().replace("-999","无数据"),qfe:n[r].awos[o].QFE.toString().replace("-999","无数据"),cbase:n[r].awos[o].CLD_HL.toString().replace("-999","无数据"),humid:n[r].awos[o].HUMID.toString().replace("-999","无数据"),temp:n[r].awos[o].TEMP.toString().replace("-999","无数据")}),t.otime=n[r].awos[o].OTIME;t.awos.push(i)}}})))}}}),j=U,z=Object(x["a"])(j,M,R,!1,null,null,null),D=z.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("h1",[t._v("年轻人不讲武德，耗子尾汁")]),a("h2",{on:{click:t.ar}},[t._v(t._s(t.text))])])},B=[],F={name:"Naip",data:function(){return{text:"需要授权"}},methods:{ar:function(){this.text="授权成功"}}},H=F,Q=Object(x["a"])(H,V,B,!1,null,null,null),Z=Q.exports,q=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-card",{staticStyle:{width:"800px auto",margin:"auto","margin-top":"10px"}},[a("h1",[t._v("关于")]),a("p",[t._v("这是一款船新的AIP查看器，但他更像是一个EFB，汇集了模拟飞行中常用的工具和资料，而且在不断的完善和扩充中。")]),a("p",[t._v("在开发这款工具的同时，使用了许多开源的库和程序，为我的开发提供了极大的便利，在此一并向其表示感谢：")]),a("ul",[a("li",[t._v("Vue")]),a("li",[t._v("Element")]),a("li",[t._v("Leaflet")]),a("li",[t._v("OpenStreetMap")]),a("li",[t._v("Axios")]),a("li",[t._v("Webpack")]),a("li",[t._v("Express")])]),a("p",[t._v("还有许多。按照开源界传统习俗，本查看器以GPLv2在GitHub开源：sparrowhe/new-aip。")]),a("p",[t._v("同时也获得了许多人的支持和帮助。目前该项目免费公开供大家使用，虽然前端架设在GitHubPages上，但后端服务器和CDN也是一笔不小的开支。")]),a("p",[t._v("如果你认可我的劳动成果并且想要支持我，可以扫描二维码打赏，备注打赏人和事项，我将会把这笔钱全部用在网站的维护上。")]),a("el-avatar",{attrs:{shape:"square",size:320,fit:"scale-down",src:"https://i.loli.net/2020/11/22/dkwET9sluOchJF4.jpg"}}),a("p",[t._v("真的"),a("span",{on:{click:t.wahaha}},[t._v(t._s(t.text))]),t._v("感谢")])],1)},W=[],K=["恭喜你发现彩蛋！（虽然没啥意义）","你是真的无聊吗","看在你这么无聊的份上就继续等把","你真的不累吗","你不累我都累了","好了不和你斗了","你赢了","但是没有奖励","所以你还是不肯走吗","除了这个彩蛋真的没东西拉","反正这个会一直循环下去，你不累电脑会累","算了我还是帮你一把吧","再不走的话就自动停止咯？","看来你的确是不肯走了","那就算了吧"],Y="非常非常",G={name:"About",data:function(){return{text:"非常非常",counter:4,tipCounter:0,handle:null}},methods:{wahaha:function(){var t=this;this.handle=this.handle||setInterval((function(){var e=100;if(t.counter>=(t.tipCounter+1)*e&&K[t.tipCounter]){var a=K[t.tipCounter],n=t.counter++-(t.tipCounter+1)*e;n>a.length-1?t.tipCounter++:t.text+=a[n]}else K[t.tipCounter]?t.text+=Y[t.counter++%Y.length]:(clearInterval(t.handle),t.handle=null,t.text="非常非常")}),200)}}},J=G,X=Object(x["a"])(J,q,W,!1,null,null,null),tt=X.exports;n["default"].use(h["a"]);var et=[{path:"/",name:"Home",component:w},{path:"/erc",name:"ERC",component:I},{path:"/weather",name:"Weather",component:D},{path:"/naip",name:"NAIP",component:Z},{path:"/about",name:"About",component:tt}],at=new h["a"]({mode:"history",base:"/",routes:et}),nt=at,rt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("navbar"),a("router-view")],1)},it=[],ot=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal","background-color":"#545c64","text-color":"#fff","active-text-color":"#ffd04b","default-active":t.$route.path,router:""}},[a("el-menu-item",{attrs:{index:"/"}},[t._v("机场图")]),a("el-menu-item",{attrs:{index:"/erc"}},[t._v("航路图")]),a("el-menu-item",{attrs:{index:"/weather"}},[t._v("气象")]),a("el-menu-item",{attrs:{index:"/naip"}},[t._v("NAIP")]),a("el-menu-item",{attrs:{index:"/about"}},[t._v("关于")])],1)},st=[],lt={name:"navbar"},ct=lt,ut=(a("5dfc"),Object(x["a"])(ct,ot,st,!1,null,null,null)),pt=ut.exports,ht={components:{navbar:pt},mounted:function(){var t=this;this.initCNZZ(),this.$nextTick((function(){"true"!==localStorage.getItem("visit")&&(localStorage.setItem("visit",!0),t.$notify({title:"警告",message:"本查看器所有航行资料来源于CAAC ATMB，仅限用于模拟飞行，不对数据的完整性和正确性做保证，不承担使用本查看器所造成的任何责任",duration:0,type:"warning"}))}))},methods:{initCNZZ:function(){var t=document.createElement("script");t.src="https://s9.cnzz.com/z_stat.php?id=1279478936&web_id=1279478936",t.language="JavaScript",t.id="cnzz",document.body.appendChild(t)}},watch:{$route:function(){if(window._czc){var t=window,e=t.location,a=e.pathname+e.hash,n="/";window._czc.push(["_trackPageview",a,n])}}}},dt=ht,ft=(a("034f"),Object(x["a"])(dt,rt,it,!1,null,null,null)),mt=ft.exports;n["default"].prototype.$proxyApiUrl="https://efbapi.sparrowhe.vaoc.net/api",n["default"].prototype.$proxyWhazzupUrl="https://efbapi.sparrowhe.vaoc.net/api/whazzup",n["default"].prototype.$proxyWeatherUrl="https://efbapi.sparrowhe.vaoc.net/metar",n["default"].prototype.$axios=s.a,n["default"].prototype.qs=c.a,n["default"].prototype.L=p.a,n["default"].config.productionTip=!1,n["default"].use(i.a),new n["default"]({router:nt,render:function(t){return t(mt)}}).$mount("#app")},"589b":function(t,e,a){"use strict";a("c365")},"58ad":function(t,e,a){},"5dfc":function(t,e,a){"use strict";a("1a12")},"85ec":function(t,e,a){},c365:function(t,e,a){},dbbf:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAKCAYAAACNMs+9AAAAs0lEQVR42mNgQAN3E7RNn6ToyTDgA/UMDEwPkvVKHqTolf4HsnEqvBOoLPYwxeDp/WSDZy8jFcVxKnyYqLPoYarhfzBO1luEVdH9BC0PuCIovp+g54Gi6EmchvDDZP096ApBYiA5sKKLseLcDxN10x6mGH7DUAgSS9BPBypjZADqin2QYnAAQxEUP0g2OPgoSV2KAaho14NUg984FQLl7iXrljE8TNK3eZCsH4QP30nSdgQACYOK6mZl2qQAAAAASUVORK5CYII="}});