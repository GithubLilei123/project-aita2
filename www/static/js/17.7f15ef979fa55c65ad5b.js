webpackJsonp([17],{"+M6w":function(n,t,a){"use strict";var e=a("Dd8w"),o=a.n(e),i=a("9QUg"),A=a("7biW");t.a={data:function(){return{title:"选择收货地址",suggestionLists:[],fromIndex:!1,alertText:"",showTip:!1}},methods:{fun_click:function(n){var t=this;a.i(i.b)({keyword:n}).then(function(n){t.suggestionLists=n.data.data.data})},locationNow:function(){this.$store.dispatch("clearAddress"),this.$store.dispatch("location"),this.$router.push("/index")},selectAddress:function(n){this.fromIndex?(this.$store.dispatch("clearAddress"),this.$store.dispatch("recordAddress",o()({address:n.title},n.location)),this.$router.push("/index")):(this.$store.dispatch("recodeDeliveryAddress",n),this.$router.go(-1))}},mounted:function(){this.fromIndex=!!this.$route.query.fromIndex},components:{search:A.a}}},"1gJf":function(n,t,a){var e=a("oVcA");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("56650869",e,!0,{})},"7biW":function(n,t,a){"use strict";function e(n){a("1gJf")}var o=a("CNvo"),i=a("cdjE"),A=a("VU/8"),r=e,s=A(o.a,i.a,!1,r,"data-v-b7a321e0",null);t.a=s.exports},A561:function(n,t,a){"use strict";function e(n){a("wX0N")}Object.defineProperty(t,"__esModule",{value:!0});var o=a("+M6w"),i=a("wX1S"),A=a("VU/8"),r=e,s=A(o.a,i.a,!1,r,"data-v-d872a544",null);t.default=s.exports},CNvo:function(n,t,a){"use strict";t.a={props:["placeholder","fun_click"],data:function(){return{search_val:"",btnActive:!1}},watch:{search_val:function(n){""!==n?(this.btnActive=!0,this.fun_click(n)):this.btnActive=!1}}}},QQh4:function(n,t,a){var e=a("kxFB");t=n.exports=a("FZ+f")(!0),t.push([n.i,"@import url(//at.alicdn.com/t/font_687988_72mjq1o2tsi.css);",""]),t.push([n.i,'.mixin loading[data-v-d872a544]{background:#fff;text-align:center;font-size:14px;height:26px;line-height:26px}.mixin loading .loading[data-v-d872a544]:before{content:"";display:inline-block;position:relative;left:-11px;padding:0;border:0;background:0;width:2px;height:2px;border-radius:100%;-webkit-box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;box-shadow:0 -7px 0 .9px #666,7px 0 #999,0 7px #999,-7px 0 #999,-5px -5px 0 .4px #999,5px -5px 0 1.1px #666,5px 5px #999,-5px 5px #999;animation:spin 1.5s linear infinite;-webkit-animation:spin 1.5s linear infinite;top:-4px}.mixin loading .keyframes spin 0%[data-v-d872a544]{-webkit-transform:rotate(0deg);transform:rotate(0deg)}.mixin loading .keyframes spin to[data-v-d872a544]{-webkit-transform:rotate(1turn);transform:rotate(1turn)}.mixin ellipsis[data-v-d872a544],.text1[data-v-d872a544]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@font-face{font-family:iconfont;src:url('+e(a("Gbmw"))+");src:url("+e(a("Gbmw"))+'?#iefix) format("embedded-opentype"),url('+e(a("XB7B"))+') format("woff"),url('+e(a("38jt"))+') format("truetype"),url('+e(a("PayV"))+'#iconfont) format("svg")}.iconfont[data-v-d872a544]{font-family:iconfont!important;font-size:24px;font-style:normal;-webkit-font-smoothing:antialiased;-webkit-text-stroke-width:.2px;-moz-osx-font-smoothing:grayscale}.location[data-v-d872a544]{position:absolute;top:0;left:0;right:0;bottom:0;background-color:#f4f4f4;padding-top:12vw}.location .location-now[data-v-d872a544]{background:#fff;margin-top:.3rem;text-align:center}.location .location-now .iconfont[data-v-d872a544]{display:inline-block;font-size:.4rem;margin-right:8px}.location .location-now span[data-v-d872a544]{font-size:.4rem;font-weight:500}.location .lists ul li[data-v-d872a544]{border-bottom:1px solid #e7e7e7;background:#fff;font-size:.34rem;padding-left:.2rem}.location .lists ul li h3[data-v-d872a544]{margin-bottom:.2rem;padding-top:.2rem}.location .lists ul li span[data-v-d872a544]{color:#a3a3a3}',"",{version:3,sources:["d:/Prototype2018/project-aita2/src/views/location/location.vue"],names:[],mappings:"AAEA,gCAEE,gBAAiB,AACjB,kBAAmB,AACnB,eAAgB,AAChB,YAAa,AACb,gBAAkB,CACnB,AACD,gDACE,WAAY,AACZ,qBAAsB,AACtB,kBAAmB,AACnB,WAAY,AACZ,UAAW,AACX,SAAU,AACV,aAAc,AACd,UAAW,AACX,WAAY,AACZ,mBAAoB,AACpB,+IAAyJ,AACjJ,uIAAiJ,AACzJ,oCAAqC,AACrC,4CAA6C,AAC7C,QAAU,CACX,AACD,mDACE,+BAAgC,AACxB,sBAAwB,CACjC,AACD,mDACE,gCAAkC,AAC1B,uBAA0B,CACnC,AAOD,yDALE,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CAOrB,AACD,WACE,qBAAwB,AACxB,kCAA4C,AAC5C,uMAAiQ,CAClQ,AACD,2BACE,+BAAmC,AACnC,eAAgB,AAChB,kBAAmB,AACnB,mCAAoC,AACpC,+BAAiC,AACjC,iCAAmC,CACpC,AACD,2BACE,kBAAmB,AACnB,MAAO,AACP,OAAQ,AACR,QAAS,AACT,SAAU,AACV,yBAA0B,AAC1B,gBAAkB,CACnB,AACD,yCACE,gBAAiB,AACjB,iBAAmB,AACnB,iBAAmB,CACpB,AACD,mDACE,qBAAsB,AACtB,gBAAkB,AAClB,gBAAkB,CACnB,AACD,8CACE,gBAAkB,AAClB,eAAiB,CAClB,AACD,wCACE,gCAAiC,AACjC,gBAAiB,AACjB,iBAAmB,AACnB,kBAAqB,CACtB,AACD,2CACE,oBAAsB,AACtB,iBAAoB,CACrB,AACD,6CACE,aAAe,CAChB",file:"location.vue",sourcesContent:["\n@import '//at.alicdn.com/t/font_687988_72mjq1o2tsi.css';\n.mixin loading[data-v-d872a544] {\n  /*loading部分*/\n  background: #fff;\n  text-align: center;\n  font-size: 14px;\n  height: 26px;\n  line-height: 26px;\n}\n.mixin loading .loading[data-v-d872a544]:before {\n  content: \"\";\n  display: inline-block;\n  position: relative;\n  left: -11px;\n  padding: 0;\n  border: 0;\n  background: 0;\n  width: 2px;\n  height: 2px;\n  border-radius: 100%;\n  -webkit-box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n          box-shadow: 0 -7px 0 0.9px #666, 7px 0 #999, 0 7px #999, -7px 0 #999, -5px -5px 0 0.4px #999, 5px -5px 0 1.1px #666, 5px 5px #999, -5px 5px #999;\n  animation: spin 1.5s linear infinite;\n  -webkit-animation: spin 1.5s linear infinite;\n  top: -4px;\n}\n.mixin loading .keyframes spin from[data-v-d872a544] {\n  -webkit-transform: rotate(0deg);\n          transform: rotate(0deg);\n}\n.mixin loading .keyframes spin to[data-v-d872a544] {\n  -webkit-transform: rotate(360deg);\n          transform: rotate(360deg);\n}\n.mixin ellipsis[data-v-d872a544] {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n/*颜色*/\n.text1[data-v-d872a544] {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n@font-face {\n  font-family: 'iconfont';\n  src: url('../../assets/fonts/iconfont.eot');\n  src: url('../../assets/fonts/iconfont.eot?#iefix') format('embedded-opentype'), url('../../assets/fonts/iconfont.woff') format('woff'), url('../../assets/fonts/iconfont.ttf') format('truetype'), url('../../assets/fonts/iconfont.svg#iconfont') format('svg');\n}\n.iconfont[data-v-d872a544] {\n  font-family: \"iconfont\" !important;\n  font-size: 24px;\n  font-style: normal;\n  -webkit-font-smoothing: antialiased;\n  -webkit-text-stroke-width: 0.2px;\n  -moz-osx-font-smoothing: grayscale;\n}\n.location[data-v-d872a544] {\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  bottom: 0;\n  background-color: #F4F4F4;\n  padding-top: 12vw;\n}\n.location .location-now[data-v-d872a544] {\n  background: #fff;\n  margin-top: 0.3rem;\n  text-align: center;\n}\n.location .location-now .iconfont[data-v-d872a544] {\n  display: inline-block;\n  font-size: 0.4rem;\n  margin-right: 8px;\n}\n.location .location-now span[data-v-d872a544] {\n  font-size: 0.4rem;\n  font-weight: 500;\n}\n.location .lists ul li[data-v-d872a544] {\n  border-bottom: 1px solid #e7e7e7;\n  background: #fff;\n  font-size: 0.34rem;\n  padding-left: 0.2rem;\n}\n.location .lists ul li h3[data-v-d872a544] {\n  margin-bottom: 0.2rem;\n  padding-top: 0.2rem;\n}\n.location .lists ul li span[data-v-d872a544] {\n  color: #a3a3a3;\n}\n"],sourceRoot:""}])},cdjE:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{},[a("mt-search",{attrs:{autofocus:"",placeholder:n.placeholder},model:{value:n.search_val,callback:function(t){n.search_val="string"==typeof t?t.trim():t},expression:"search_val"}})],1)},o=[],i={render:e,staticRenderFns:o};t.a=i},oVcA:function(n,t,a){t=n.exports=a("FZ+f")(!0),t.push([n.i,"@import url(//at.alicdn.com/t/font_687988_72mjq1o2tsi.css);",""]),t.push([n.i,".mint-search[data-v-b7a321e0]{height:auto}.search-container[data-v-b7a321e0]{display:-webkit-box;display:-ms-flexbox;display:flex;padding-bottom:.2rem;background:#fff}.search-container .btn-search[data-v-b7a321e0],.search-container .search-input[data-v-b7a321e0]{font-size:.2rem}.search-container .search-input[data-v-b7a321e0]{-webkit-box-flex:1;-ms-flex:1;flex:1;background:#efeef4;border-radius:.4rem;margin:0 10px;padding-left:10px}.search-container .search-input input[data-v-b7a321e0]{width:85%;height:100%;border:none;text-indent:20px;outline:none;background:hsla(0,0%,93%,.1);line-height:normal}.search-container .search-input input[data-v-b7a321e0]::-webkit-input-placeholder{font-size:.3rem}.search-container .btn-search[data-v-b7a321e0]{font-size:.4rem;display:inline-block;color:#fff;background:#919191;text-align:center;border-radius:.1rem;margin-right:5px}.search-container .btn-search.active[data-v-b7a321e0]{background:#f2f2f2}","",{version:3,sources:["d:/Prototype2018/project-aita2/src/components/search.vue"],names:[],mappings:"AAEA,8BACE,WAAa,CACd,AACD,mCACE,oBAAqB,AACrB,oBAAqB,AACrB,aAAc,AACd,qBAAuB,AACvB,eAAiB,CAClB,AACD,gGAEE,eAAkB,CACnB,AACD,iDACE,mBAAoB,AAChB,WAAY,AACR,OAAQ,AAChB,mBAAoB,AACpB,oBAAsB,AACtB,cAAe,AACf,iBAAmB,CACpB,AACD,uDACE,UAAW,AACX,YAAa,AACb,YAAa,AACb,iBAAkB,AAClB,aAAc,AACd,6BAAqC,AACrC,kBAAoB,CACrB,AACD,kFACE,eAAkB,CACnB,AACD,+CACE,gBAAkB,AAClB,qBAAsB,AACtB,WAAY,AACZ,mBAAoB,AACpB,kBAAmB,AACnB,oBAAsB,AACtB,gBAAkB,CACnB,AACD,sDACE,kBAAoB,CACrB",file:"search.vue",sourcesContent:["\n@import '//at.alicdn.com/t/font_687988_72mjq1o2tsi.css';\n.mint-search[data-v-b7a321e0] {\n  height: auto;\n}\n.search-container[data-v-b7a321e0] {\n  display: -webkit-box;\n  display: -ms-flexbox;\n  display: flex;\n  padding-bottom: 0.2rem;\n  background: #fff;\n}\n.search-container .search-input[data-v-b7a321e0],\n.search-container .btn-search[data-v-b7a321e0] {\n  font-size: 0.2rem;\n}\n.search-container .search-input[data-v-b7a321e0] {\n  -webkit-box-flex: 1;\n      -ms-flex: 1;\n          flex: 1;\n  background: #efeef4;\n  border-radius: 0.4rem;\n  margin: 0 10px;\n  padding-left: 10px;\n}\n.search-container .search-input input[data-v-b7a321e0] {\n  width: 85%;\n  height: 100%;\n  border: none;\n  text-indent: 20px;\n  outline: none;\n  background: rgba(237, 237, 237, 0.1);\n  line-height: normal;\n}\n.search-container .search-input input[data-v-b7a321e0]::-webkit-input-placeholder {\n  font-size: 0.3rem;\n}\n.search-container .btn-search[data-v-b7a321e0] {\n  font-size: 0.4rem;\n  display: inline-block;\n  color: #fff;\n  background: #919191;\n  text-align: center;\n  border-radius: 0.1rem;\n  margin-right: 5px;\n}\n.search-container .btn-search.active[data-v-b7a321e0] {\n  background: #f2f2f2;\n}\n"],sourceRoot:""}])},wX0N:function(n,t,a){var e=a("QQh4");"string"==typeof e&&(e=[[n.i,e,""]]),e.locals&&(n.exports=e.locals);a("rjj0")("49200804",e,!0,{})},wX1S:function(n,t,a){"use strict";var e=function(){var n=this,t=n.$createElement,a=n._self._c||t;return a("div",{staticClass:"location"},[a("v-header",{attrs:{title:n.title,fixed:!0}}),n._v(" "),a("search",{attrs:{placeholder:"请输入收货地址",fun_click:n.fun_click}}),n._v(" "),n.fromIndex&&!n.suggestionLists.length?a("div",{staticClass:"location-now",on:{click:n.locationNow}},[a("i",{staticClass:"iconfont"},[n._v("")]),n._v(" "),a("span",[n._v("点击定位当前位置")])]):a("div",{staticClass:"lists"},[a("ul",n._l(n.suggestionLists,function(t){return a("li",{key:t.id,on:{click:function(a){n.selectAddress(t)}}},[a("h3",[n._v(n._s(t.title))]),n._v(" "),a("span",[n._v(n._s(t.address))])])}))]),n._v(" "),a("alert-tip",{attrs:{text:n.alertText,showTip:n.showTip},on:{"update:showTip":function(t){n.showTip=t}}})],1)},o=[],i={render:e,staticRenderFns:o};t.a=i}});
//# sourceMappingURL=17.7f15ef979fa55c65ad5b.js.map