(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/index/address"],{"0c60":function(e,a,n){},"0ffd":function(e,a,n){"use strict";var s=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("view",{staticClass:"address-main",style:{height:e.winHeight+"px"}},[n("view",{staticClass:"address-main-search"},[n("navigator",{attrs:{url:"address-search?addresss="+e.addresssEscape,"hover-class":"none"}},[n("input",{staticClass:"address-main-input",attrs:{disabled:"false",type:"text",placeholder:"输入城市名或拼音"}})])],1),n("view",{staticClass:"addressDirectory"},[n("address-list",{attrs:{addresss:e.addresss,letter:e.letter,scrollAnimationOFF:e.scrollAnimationOFF,eventid:"b471b656-0",mpcomid:"b471b656-0"},on:{change:e.handleaddressListIndex,reset:e.handleReset,handleClick:e.handleClick}}),n("address-alphabet",{attrs:{addresss:e.addresss,addressListIndex:e.addressListIndex,eventid:"b471b656-1",mpcomid:"b471b656-1"},on:{change:e.handleDatasetKey,scrollAnimationOFF:e.handleScrollAnimationOFF,reset:e.handleReset}})],1)])},i=[];n.d(a,"a",function(){return s}),n.d(a,"b",function(){return i})},2218:function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=l(n("9429")),i=l(n("ad80"));function l(e){return e&&e.__esModule?e:{default:e}}var t={name:"address-directory",components:{addressList:s.default,addressAlphabet:i.default},props:{addresss:Object,default:!1},data:function(){return{winHeight:0,letter:"",scrollAnimationOFF:!0,addressListIndex:"",reset:!0}},computed:{addresssEscape:function(){return escape(JSON.stringify(this.addresss))}},mounted:function(){var a=e.getSystemInfoSync().windowHeight;this.winHeight=a-56,this.addresss||e.showToast({title:"没有数据",icon:"none",mask:!1,duration:1500})},methods:{handleClick:function(e){this.$emit("paramClick",e)},handleDatasetKey:function(e){this.letter=e},handleScrollAnimationOFF:function(e){this.scrollAnimationOFF=e},handleaddressListIndex:function(e){this.reset&&(this.addressListIndex=e)},handleReset:function(e){e&&(this.letter=""),this.reset=e}}};a.default=t}).call(this,n("649d")["default"])},3833:function(e,a,n){},"3a53":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s={name:"address-alphabet",props:{addresss:Object,addressListIndex:String},data:function(){return{touchStatus:!1,timer:null,activeClass:"",addresssArr:[],touchmove:!1}},mounted:function(){var e=Object.keys(this.addresss);this.addresssArr=e},watch:{addressListIndex:function(e){this.activeClass=e}},methods:{handleTouchStart:function(e){this.$emit("reset",!1);var a=e.target.dataset.key;this.activeClass=a,this.$emit("change",e.target.dataset.key),this.touchStatus=!0},handleTouchMove:function(e){var a=this;this.$emit("scrollAnimationOFF",!1),this.touchStatus&&(this.touchmove=!0,this.timer&&clearTimeout(this.timer),this.timer=setTimeout(function(){var n=e.touches[0].clientY-54,s=Math.floor(n/20);s>=0&&s<a.addresssArr.length&&(a.activeClass=a.addresssArr[s],a.$emit("change",a.addresssArr[s]))},16))},handleTouchEnd:function(e){this.$emit("scrollAnimationOFF",!0),this.touchStatus=!1,this.touchmove=!1}}};a.default=s},"3a89":function(e,a,n){"use strict";var s=n("0c60"),i=n.n(s);i.a},4760:function(e,a,n){"use strict";(function(e){Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={name:"address-list",props:{addresss:Object,letter:String,scrollAnimationOFF:Boolean},data:function(){return{winHeight:0,scrollTop:0,letterDetails:[],timer:null}},computed:{scrollViewId:function(){return this.letter}},mounted:function(){this.winHeight=e.getSystemInfoSync().windowHeight-100},methods:{handleClick:function(e){this.$emit("handleClick",e.target.dataset)},handleScroll:function(a){var n=this;if(0===this.letterDetails.length){var s=e.createSelectorQuery().selectAll(".list-item");s.boundingClientRect(function(e){var a=e[0].top;e.forEach(function(e,s){e.top=e.top-a,e.bottom=e.bottom-a,n.letterDetails.push({id:e.id,top:e.top,bottom:e.bottom})})}).exec()}var i=a.detail.scrollTop;this.letterDetails.some(function(e,a){if(i>=e.top&&i<=e.bottom-5)return n.$emit("change",e.id),n.$emit("reset",!0),!0})}}};a.default=n}).call(this,n("649d")["default"])},"4ee1":function(e,a,n){"use strict";n.r(a);var s=n("2218"),i=n.n(s);for(var l in s)"default"!==l&&function(e){n.d(a,e,function(){return s[e]})}(l);a["default"]=i.a},"54c3":function(e,a,n){"use strict";n.r(a);var s=n("4760"),i=n.n(s);for(var l in s)"default"!==l&&function(e){n.d(a,e,function(){return s[e]})}(l);a["default"]=i.a},"585f":function(e,a,n){},"6ce1":function(e,a,n){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var s=i(n("b80c"));function i(e){return e&&e.__esModule?e:{default:e}}var l={name:"addresss",components:{addressDirectory:s.default},data:function(){return{addresss:{A:[{id:56,name:"阿坝"},{id:57,spell:"akesu",name:"阿克苏"},{id:58,spell:"alashanmeng",name:"阿拉善盟"},{id:59,spell:"aletai",name:"阿勒泰"},{id:60,spell:"ali",name:"阿里"},{id:61,spell:"ankang",name:"安康"},{id:62,spell:"anqing",name:"安庆"},{id:63,spell:"anshan",name:"鞍山"},{id:64,spell:"anshun",name:"安顺"},{id:65,spell:"anyang",name:"安阳"},{id:338,spell:"acheng",name:"阿城"},{id:339,spell:"anfu",name:"安福"},{id:340,spell:"anji",name:"安吉"},{id:341,spell:"anning",name:"安宁"},{id:342,spell:"anqiu",name:"安丘"},{id:343,spell:"anxi",name:"安溪"},{id:344,spell:"anyi",name:"安义"},{id:345,spell:"anyuan",name:"安远"}],B:[{id:1,spell:"beijing",name:"北京"},{id:66,spell:"baicheng",name:"白城"},{id:67,spell:"baise",name:"百色"},{id:68,spell:"baishan",name:"白山"},{id:69,spell:"baiyin",name:"白银"},{id:70,spell:"bangbu",name:"蚌埠"},{id:71,spell:"baoding",name:"保定"},{id:72,spell:"baoji",name:"宝鸡"},{id:73,spell:"baoshan",name:"保山"},{id:74,spell:"baotou",name:"包头"},{id:75,spell:"bayannaoer",name:"巴彦淖尔"},{id:76,spell:"bayinguoleng",name:"巴音郭楞"},{id:77,spell:"bazhong",name:"巴中"},{id:78,spell:"beihai",name:"北海"},{id:79,spell:"benxi",name:"本溪"},{id:80,spell:"bijie",name:"毕节"},{id:81,spell:"binzhou",name:"滨州"},{id:82,spell:"boertala",name:"博尔塔拉"},{id:83,spell:"bozhou",name:"亳州"},{id:346,spell:"baoying",name:"宝应"},{id:347,spell:"bayan",name:"巴彦"},{id:348,spell:"binhai",name:"滨海"},{id:349,spell:"binxian",name:"宾县"},{id:350,spell:"binyang",name:"宾阳"},{id:351,spell:"bishan",name:"璧山"},{id:352,spell:"boai",name:"博爱"},{id:353,spell:"boluo",name:"博罗"},{id:354,spell:"boxing",name:"博兴"}],C:[{id:2,spell:"chongqing",name:"重庆"},{id:5,spell:"changchun",name:"长春"},{id:6,spell:"changsha",name:"长沙"},{id:7,spell:"changzhou",name:"常州"},{id:8,spell:"chengdu",name:"成都"},{id:84,spell:"cangzhou",name:"沧州"},{id:85,spell:"changde",name:"常德"},{id:86,spell:"changdu",name:"昌都"},{id:87,spell:"changji",name:"昌吉"},{id:88,spell:"changzhi",name:"长治"},{id:89,spell:"chaohu",name:"巢湖"},{id:90,spell:"chaoyang",name:"朝阳"},{id:91,spell:"chaozhou",name:"潮州"},{id:92,spell:"chengde",name:"承德"},{id:93,spell:"chenzhou",name:"郴州"},{id:94,spell:"chifeng",name:"赤峰"},{id:95,spell:"chizhou",name:"池州"},{id:96,spell:"chongzuo",name:"崇左"},{id:97,spell:"chuxiong",name:"楚雄"},{id:98,spell:"chuzhou",name:"滁州"},{id:355,spell:"cangnan",name:"苍南"},{id:356,spell:"cangshan",name:"苍山"},{id:357,spell:"caoxian",name:"曹县"},{id:358,spell:"changdao",name:"长岛"},{id:359,spell:"changfeng",name:"长丰"},{id:360,spell:"changhai",name:"长海"},{id:361,spell:"changle",name:"长乐"},{id:362,spell:"changle",name:"昌乐"},{id:363,spell:"changshan",name:"常山"},{id:364,spell:"changshu",name:"常熟"},{id:365,spell:"changtai",name:"长泰"},{id:366,spell:"changting",name:"长汀"},{id:367,spell:"changxing",name:"长兴"},{id:368,spell:"changyi",name:"昌邑"},{id:369,spell:"chaoan",name:"潮安"},{id:370,spell:"chenggong",name:"呈贡"},{id:371,spell:"chengkou",name:"城口"},{id:372,spell:"chengwu",name:"成武"},{id:373,spell:"chiping",name:"茌平"},{id:374,spell:"chongren",name:"崇仁"},{id:375,spell:"chongyi",name:"崇义"},{id:376,spell:"chongzhou",name:"崇州"},{id:377,spell:"chunan",name:"淳安"},{id:378,spell:"cixi",name:"慈溪"},{id:379,spell:"conghua",name:"从化"},{id:380,spell:"congyang",name:"枞阳"}],K:[{id:25,spell:"kunming",name:"昆明"},{id:174,spell:"kaifeng",name:"开封"},{id:175,spell:"kashidi",name:"喀什地"},{id:176,spell:"kelamayi",name:"克拉玛依"},{id:177,spell:"kezile",name:"克孜勒"},{id:555,spell:"kaihua",name:"开化"},{id:556,spell:"kaiping",name:"开平"},{id:557,spell:"kaixian",name:"开县"},{id:558,spell:"kaiyang",name:"开阳"},{id:559,spell:"kangping",name:"康平"},{id:560,spell:"kenli",name:"垦利"},{id:561,spell:"kunshan",name:"昆山"}],M:[{id:203,spell:"maanshan",name:"马鞍山"},{id:204,spell:"maoming",name:"茂名"}],S:[{id:3,spell:"shanghai",name:"上海"},{id:36,spell:"shenyang",name:"沈阳"},{id:37,spell:"shenzhen",name:"深圳"},{id:38,spell:"shijiazhuang",name:"石家庄"},{id:39,spell:"suzhou",name:"苏州"},{id:237,spell:"sanmenxia",name:"三门峡"},{id:238,spell:"sanming",name:"三明"},{id:239,spell:"sanya",name:"三亚"},{id:240,spell:"shangluo",name:"商洛"},{id:241,spell:"shangqiu",name:"商丘"},{id:242,spell:"shangrao",name:"上饶"},{id:243,spell:"shannan",name:"山南"},{id:244,spell:"shantou",name:"汕头"},{id:245,spell:"shanwei",name:"汕尾"},{id:246,spell:"shaoguan",name:"韶关"},{id:247,spell:"shaoxing",name:"绍兴"},{id:248,spell:"shaoyang",name:"邵阳"},{id:249,spell:"shiyan",name:"十堰"},{id:250,spell:"shizuishan",name:"石嘴山"},{id:251,spell:"shuangyashan",name:"双鸭山"},{id:252,spell:"shuozhou",name:"朔州"},{id:253,spell:"siping",name:"四平"},{id:254,spell:"songyuan",name:"松原"},{id:255,spell:"suihua",name:"绥化"},{id:256,spell:"suining",name:"遂宁"}],T:[{id:4,spell:"tianjin",name:"天津"},{id:40,spell:"taizhou",name:"台州"},{id:41,spell:"tangshan",name:"唐山"},{id:260,spell:"tachengdi",name:"塔城地"},{id:261,spell:"taian",name:"泰安"},{id:262,spell:"taiyuan",name:"太原"},{id:263,spell:"taizhou",name:"泰州"},{id:264,spell:"tianshui",name:"天水"},{id:265,spell:"tieling",name:"铁岭"},{id:266,spell:"tongchuan",name:"铜川"},{id:267,spell:"tonghua",name:"通化"},{id:268,spell:"tongliao",name:"通辽"}],X:[{id:46,spell:"xiamen",name:"厦门"},{id:47,spell:"xian",name:"西安"},{id:48,spell:"xuchang",name:"许昌"}],Y:[{id:50,spell:"yangzhou",name:"扬州"},{id:51,spell:"yantai",name:"烟台"},{id:298,spell:"yaan",name:"雅安"},{id:299,spell:"yanan",name:"延安"}],Z:[{id:52,spell:"zhangzhou",name:"漳州"},{id:53,spell:"zhengzhou",name:"郑州"},{id:54,spell:"zhongshan",name:"中山"},{id:55,spell:"zhuhai",name:"珠海"},{id:321,spell:"zaozhuang",name:"枣庄"},{id:322,spell:"zhengzhou",name:"郑州"},{id:323,spell:"zhongshan",name:"中山"},{id:324,spell:"zhuhai",name:"珠海"},{id:325,spell:"zaozhuang",name:"枣庄"},{id:326,spell:"zhengzhou",name:"郑州"},{id:254,spell:"zhongshan",name:"中山"},{id:355,spell:"zhuhai",name:"珠海"},{id:121,spell:"zaozhuang",name:"枣庄"},{id:453,spell:"zhengzhou",name:"郑州"},{id:554,spell:"zhongshan",name:"中山"},{id:255,spell:"zhuhai",name:"珠海"},{id:368,spell:"zaozhuang",name:"枣庄"},{id:369,spell:"zhengzhou",name:"郑州"},{id:754,spell:"zhongshan",name:"中山"},{id:655,spell:"zhuhai",name:"珠海"},{id:668,spell:"zaozhuang",name:"枣庄"}]}}},methods:{paramClick:function(e){console.log(this.addresss)}}};a.default=l},"7f14":function(e,a,n){"use strict";n.r(a);var s=n("8b3d"),i=n("f487");for(var l in i)"default"!==l&&function(e){n.d(a,e,function(){return i[e]})}(l);var t=n("2877"),d=Object(t["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=d.exports},"8b3d":function(e,a,n){"use strict";var s=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("view",[n("view",[n("address-directory",{attrs:{addresss:e.addresss,eventid:"d5be2652-0",mpcomid:"d5be2652-0"},on:{paramClick:e.paramClick}})],1)])},i=[];n.d(a,"a",function(){return s}),n.d(a,"b",function(){return i})},9429:function(e,a,n){"use strict";n.r(a);var s=n("a58a"),i=n("54c3");for(var l in i)"default"!==l&&function(e){n.d(a,e,function(){return i[e]})}(l);n("b180");var t=n("2877"),d=Object(t["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=d.exports},a58a:function(e,a,n){"use strict";var s=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("view",[n("scroll-view",{staticClass:"scroll-list",style:{height:e.winHeight+"px"},attrs:{"scroll-top":1,"scroll-y":"true","scroll-with-animation":e.scrollAnimationOFF,"scroll-into-view":e.scrollViewId,eventid:"2c0b4936-1"},on:{scroll:e.handleScroll}},[n("view",{staticStyle:{"background-color":"#F0F1F2",padding:"15rpx"}},[n("p",{staticClass:"t-tip"},[e._v("最近访问")]),n("view",{staticClass:"bj-item-list"},[n("text",{staticClass:"bj-item"},[e._v("长沙")]),n("text",{staticClass:"bj-item"},[e._v("株洲")])]),n("p",{staticClass:"t-tip"},[e._v("热门城市")]),n("view",{staticClass:"bj-item-list"},[n("text",{staticClass:"bj-item"},[e._v("北京")]),n("text",{staticClass:"bj-item"},[e._v("上海")]),n("text",{staticClass:"bj-item"},[e._v("广州")]),n("text",{staticClass:"bj-item"},[e._v("深圳")]),n("text",{staticClass:"bj-item"},[e._v("长沙")]),n("text",{staticClass:"bj-item"},[e._v("武汉")])])],1),n("view",{staticClass:"address-list"},e._l(e.addresss,function(a,s){return n("view",{key:s,staticClass:"list-item",attrs:{id:s}},[n("view",{staticClass:"list-item-title"},[e._v(e._s(s))]),e._l(a,function(a,i){return n("view",{key:a.id,staticClass:"list-item-address",attrs:{"hover-class":"commonly-hover","hover-start-time":20,"hover-stay-time":70,"data-name":a.name,"data-id":a.id,"data-addressNumber":a.addressNumber,eventid:"2c0b4936-0-"+s+"-"+i},on:{click:e.handleClick}},[e._v(e._s(a.name))])})],2)}))])],1)},i=[];n.d(a,"a",function(){return s}),n.d(a,"b",function(){return i})},ad80:function(e,a,n){"use strict";n.r(a);var s=n("fc3a"),i=n("d1b4");for(var l in i)"default"!==l&&function(e){n.d(a,e,function(){return i[e]})}(l);n("dbdf");var t=n("2877"),d=Object(t["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=d.exports},ae86:function(e,a,n){"use strict";n("a0da");var s=l(n("b0ce")),i=l(n("7f14"));function l(e){return e&&e.__esModule?e:{default:e}}Page((0,s.default)(i.default))},b180:function(e,a,n){"use strict";var s=n("3833"),i=n.n(s);i.a},b80c:function(e,a,n){"use strict";n.r(a);var s=n("0ffd"),i=n("4ee1");for(var l in i)"default"!==l&&function(e){n.d(a,e,function(){return i[e]})}(l);n("3a89");var t=n("2877"),d=Object(t["a"])(i["default"],s["a"],s["b"],!1,null,null,null);a["default"]=d.exports},d1b4:function(e,a,n){"use strict";n.r(a);var s=n("3a53"),i=n.n(s);for(var l in s)"default"!==l&&function(e){n.d(a,e,function(){return s[e]})}(l);a["default"]=i.a},dbdf:function(e,a,n){"use strict";var s=n("585f"),i=n.n(s);i.a},f487:function(e,a,n){"use strict";n.r(a);var s=n("6ce1"),i=n.n(s);for(var l in s)"default"!==l&&function(e){n.d(a,e,function(){return s[e]})}(l);a["default"]=i.a},fc3a:function(e,a,n){"use strict";var s=function(){var e=this,a=e.$createElement,n=e._self._c||a;return n("view",{staticClass:"alphabet"},[e._l(e.addresss,function(a,s){return n("view",{key:s,staticClass:"alphabet-item",class:e.activeClass==s?"active":"",attrs:{"data-key":s,eventid:"58a3730b-0-"+s},on:{touchstart:e.handleTouchStart,touchmove:e.handleTouchMove,touchend:e.handleTouchEnd,touchcancel:e.handleTouchCancel}},[e._v(e._s(s))])}),e.touchmove?n("view",{staticClass:"alphabet-alert"},[e._v(e._s(e.activeClass))]):e._e()],2)},i=[];n.d(a,"a",function(){return s}),n.d(a,"b",function(){return i})}},[["ae86","common/runtime","common/vendor"]]]);