(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/yonghuwenzhang/add-or-update"],{"0dcf":function(n,e,a){},"10a6":function(n,e,a){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=t(a("a34a"));function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e,a,i,t,r,o){try{var u=n[r](o),c=u.value}catch(s){return void a(s)}u.done?e(c):Promise.resolve(c).then(i,t)}function o(n){return function(){var e=this,a=arguments;return new Promise((function(i,t){var o=n.apply(e,a);function u(n){r(o,i,t,u,c,"next",n)}function c(n){r(o,i,t,u,c,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([a.e("common/vendor"),a.e("components/w-picker/w-picker")]).then(function(){return resolve(a("975f"))}.bind(null,a)).catch(a.oe)},c={data:function(){return{ruleForm:{biaoti:"",wenzhangfenlei:"",neirong:"",bianjishijian:"",fengmian:"",zhanghao:"",xingming:"",bianjizhanghao:"",bianjixingming:"",sfsh:"",shhf:"",userid:""},wenzhangfenleiOptions:[],wenzhangfenleiIndex:0,bianjizhanghaoOptions:[],bianjizhanghaoIndex:0,user:{},ro:{biaoti:!1,wenzhangfenlei:!1,neirong:!1,bianjishijian:!1,fengmian:!1,zhanghao:!1,xingming:!1,bianjizhanghao:!1,bianjixingming:!1,sfsh:!1,shhf:!1,userid:!1}}},components:{wPicker:u},computed:{},onLoad:function(e){var a=this;return o(i.default.mark((function t(){var r,o,u,c;return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a.ruleForm.bianjishijian=a.$utils.getCurDate(),r=n.getStorageSync("nowTable"),t.next=4,a.$api.session(r);case 4:return o=t.sent,a.user=o.data,a.ruleForm.zhanghao=a.user.zhanghao,a.ruleForm.xingming=a.user.xingming,t.next=10,a.$api.option("wenzhangfenlei","wenzhangfenlei",{});case 10:return o=t.sent,a.wenzhangfenleiOptions=o.data,t.next=14,a.$api.option("bianji","bianjizhanghao",{});case 14:if(o=t.sent,a.bianjizhanghaoOptions=o.data,a.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(a.ruleForm.refid=e.refid,a.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){t.next=24;break}return a.ruleForm.id=e.id,t.next=22,a.$api.info("yonghuwenzhang",a.ruleForm.id);case 22:o=t.sent,a.ruleForm=o.data;case 24:if(!e.cross){t.next=71;break}u=n.getStorageSync("crossObj"),t.t0=i.default.keys(u);case 27:if((t.t1=t.t0()).done){t.next=71;break}if(c=t.t1.value,"biaoti"!=c){t.next=33;break}return a.ruleForm.biaoti=u[c],a.ro.biaoti=!0,t.abrupt("continue",27);case 33:if("wenzhangfenlei"!=c){t.next=37;break}return a.ruleForm.wenzhangfenlei=u[c],a.ro.wenzhangfenlei=!0,t.abrupt("continue",27);case 37:if("neirong"!=c){t.next=41;break}return a.ruleForm.neirong=u[c],a.ro.neirong=!0,t.abrupt("continue",27);case 41:if("bianjishijian"!=c){t.next=45;break}return a.ruleForm.bianjishijian=u[c],a.ro.bianjishijian=!0,t.abrupt("continue",27);case 45:if("fengmian"!=c){t.next=49;break}return a.ruleForm.fengmian=u[c],a.ro.fengmian=!0,t.abrupt("continue",27);case 49:if("zhanghao"!=c){t.next=53;break}return a.ruleForm.zhanghao=u[c],a.ro.zhanghao=!0,t.abrupt("continue",27);case 53:if("xingming"!=c){t.next=57;break}return a.ruleForm.xingming=u[c],a.ro.xingming=!0,t.abrupt("continue",27);case 57:if("bianjizhanghao"!=c){t.next=61;break}return a.ruleForm.bianjizhanghao=u[c],a.ro.bianjizhanghao=!0,t.abrupt("continue",27);case 61:if("bianjixingming"!=c){t.next=65;break}return a.ruleForm.bianjixingming=u[c],a.ro.bianjixingming=!0,t.abrupt("continue",27);case 65:if("userid"!=c){t.next=69;break}return a.ruleForm.userid=u[c],a.ro.userid=!0,t.abrupt("continue",27);case 69:t.next=27;break;case 71:a.styleChange();case 72:case"end":return t.stop()}}),t)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},bianjizhanghaoChange:function(n){var e=this;return o(i.default.mark((function a(){var t;return i.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e.bianjizhanghaoIndex=n.target.value,e.ruleForm.bianjizhanghao=e.bianjizhanghaoOptions[e.bianjizhanghaoIndex],a.next=4,e.$api.follow("bianji","bianjizhanghao",{columnValue:e.ruleForm.bianjizhanghao});case 4:t=a.sent,t.data.bianjixingming&&(e.ruleForm.bianjixingming=t.data.bianjixingming);case 6:case"end":return a.stop()}}),a)})))()},bianjishijianChange:function(n){this.ruleForm.bianjishijian=n.target.value,this.$forceUpdate()},wenzhangfenleiChange:function(n){this.wenzhangfenleiIndex=n.target.value,this.ruleForm.wenzhangfenlei=this.wenzhangfenleiOptions[this.wenzhangfenleiIndex]},fengmianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fengmian=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(i.default.mark((function e(){return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(!n.ruleForm.id){e.next=5;break}return e.next=3,n.$api.update("yonghuwenzhang",n.ruleForm);case 3:e.next=7;break;case 5:return e.next=7,n.$api.add("yonghuwenzhang",n.ruleForm);case 7:n.$utils.msgBack("提交成功");case 8:case"end":return e.stop()}}),e)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,a=e.getFullYear(),i=e.getMonth()+1,t=e.getDate();return"start"===n?a-=60:"end"===n&&(a+=2),i=i>9?i:"0"+i,t=t>9?t:"0"+t,"".concat(a,"-").concat(i,"-").concat(t)},toggleTab:function(n){this.$refs[n].show()}}};e.default=c}).call(this,a("543d")["default"])},"1cf0":function(n,e,a){"use strict";a.r(e);var i=a("f73e"),t=a("64ea");for(var r in t)"default"!==r&&function(n){a.d(e,n,(function(){return t[n]}))}(r);a("a85b");var o,u=a("f0c5"),c=Object(u["a"])(t["default"],i["b"],i["c"],!1,null,"767c2d21",null,!1,i["a"],o);e["default"]=c.exports},6372:function(n,e,a){"use strict";(function(n){a("56dd");i(a("66fd"));var e=i(a("1cf0"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,a("543d")["createPage"])},"64ea":function(n,e,a){"use strict";a.r(e);var i=a("10a6"),t=a.n(i);for(var r in i)"default"!==r&&function(n){a.d(e,n,(function(){return i[n]}))}(r);e["default"]=t.a},a85b:function(n,e,a){"use strict";var i=a("0dcf"),t=a.n(i);t.a},f73e:function(n,e,a){"use strict";var i;a.d(e,"b",(function(){return t})),a.d(e,"c",(function(){return r})),a.d(e,"a",(function(){return i}));var t=function(){var n=this,e=n.$createElement;n._self._c},r=[]}},[["6372","common/runtime","common/vendor"]]]);