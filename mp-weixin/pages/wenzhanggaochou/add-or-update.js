(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/wenzhanggaochou/add-or-update"],{"028f":function(n,e,t){"use strict";var i,a=function(){var n=this,e=n.$createElement;n._self._c},r=[];t.d(e,"b",(function(){return a})),t.d(e,"c",(function(){return r})),t.d(e,"a",(function(){return i}))},"11b4":function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=a(t("a34a"));function a(n){return n&&n.__esModule?n:{default:n}}function r(n,e,t,i,a,r,u){try{var o=n[r](u),s=o.value}catch(h){return void t(h)}o.done?e(s):Promise.resolve(s).then(i,a)}function u(n){return function(){var e=this,t=arguments;return new Promise((function(i,a){var u=n.apply(e,t);function o(n){r(u,i,a,o,s,"next",n)}function s(n){r(u,i,a,o,s,"throw",n)}o(void 0)}))}}var o=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("cce5"))}.bind(null,t)).catch(t.oe)},s={data:function(){return{ruleForm:{zhanghao:"",xingming:"",wenzhangzishu:"",danjia:"",zongjia:"",dengjishijian:"",piaoju:"",bianjizhanghao:"",bianjixingming:"",ispay:"",userid:""},zhanghaoOptions:[],zhanghaoIndex:0,user:{},ro:{zhanghao:!1,xingming:!1,wenzhangzishu:!1,danjia:!1,zongjia:!1,dengjishijian:!1,piaoju:!1,bianjizhanghao:!1,bianjixingming:!1,ispay:!1,userid:!1}}},components:{wPicker:o},computed:{zongjia:{get:function(){return 1*this.ruleForm.wenzhangzishu*this.ruleForm.danjia}}},onLoad:function(){var e=u(i.default.mark((function e(t){var a,r,u,o;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return this.ruleForm.dengjishijian=this.$utils.getCurDate(),a=n.getStorageSync("nowTable"),e.next=4,this.$api.session(a);case 4:return r=e.sent,this.user=r.data,this.ruleForm.bianjizhanghao=this.user.bianjizhanghao,this.ruleForm.bianjixingming=this.user.bianjixingming,e.next=10,this.$api.option("yonghu","zhanghao",{});case 10:if(r=e.sent,this.zhanghaoOptions=r.data,this.ruleForm.userid=n.getStorageSync("userid"),t.refid&&(this.ruleForm.refid=t.refid,this.ruleForm.nickname=n.getStorageSync("nickname")),!t.id){e.next=20;break}return this.ruleForm.id=t.id,e.next=18,this.$api.info("wenzhanggaochou",this.ruleForm.id);case 18:r=e.sent,this.ruleForm=r.data;case 20:if(!t.cross){e.next=67;break}u=n.getStorageSync("crossObj"),e.t0=i.default.keys(u);case 23:if((e.t1=e.t0()).done){e.next=67;break}if(o=e.t1.value,"zhanghao"!=o){e.next=29;break}return this.ruleForm.zhanghao=u[o],this.ro.zhanghao=!0,e.abrupt("continue",23);case 29:if("xingming"!=o){e.next=33;break}return this.ruleForm.xingming=u[o],this.ro.xingming=!0,e.abrupt("continue",23);case 33:if("wenzhangzishu"!=o){e.next=37;break}return this.ruleForm.wenzhangzishu=u[o],this.ro.wenzhangzishu=!0,e.abrupt("continue",23);case 37:if("danjia"!=o){e.next=41;break}return this.ruleForm.danjia=u[o],this.ro.danjia=!0,e.abrupt("continue",23);case 41:if("zongjia"!=o){e.next=45;break}return this.ruleForm.zongjia=u[o],this.ro.zongjia=!0,e.abrupt("continue",23);case 45:if("dengjishijian"!=o){e.next=49;break}return this.ruleForm.dengjishijian=u[o],this.ro.dengjishijian=!0,e.abrupt("continue",23);case 49:if("piaoju"!=o){e.next=53;break}return this.ruleForm.piaoju=u[o],this.ro.piaoju=!0,e.abrupt("continue",23);case 53:if("bianjizhanghao"!=o){e.next=57;break}return this.ruleForm.bianjizhanghao=u[o],this.ro.bianjizhanghao=!0,e.abrupt("continue",23);case 57:if("bianjixingming"!=o){e.next=61;break}return this.ruleForm.bianjixingming=u[o],this.ro.bianjixingming=!0,e.abrupt("continue",23);case 61:if("userid"!=o){e.next=65;break}return this.ruleForm.userid=u[o],this.ro.userid=!0,e.abrupt("continue",23);case 65:e.next=23;break;case 67:this.styleChange();case 68:case"end":return e.stop()}}),e,this)})));function t(n){return e.apply(this,arguments)}return t}(),methods:{styleChange:function(){this.$nextTick((function(){}))},zhanghaoChange:function(){var n=u(i.default.mark((function n(e){var t;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return this.zhanghaoIndex=e.target.value,this.ruleForm.zhanghao=this.zhanghaoOptions[this.zhanghaoIndex],n.next=4,this.$api.follow("yonghu","zhanghao",{columnValue:this.ruleForm.zhanghao});case 4:t=n.sent,t.data.xingming&&(this.ruleForm.xingming=t.data.xingming);case 6:case"end":return n.stop()}}),n,this)})));function e(e){return n.apply(this,arguments)}return e}(),dengjishijianChange:function(n){this.ruleForm.dengjishijian=n.target.value,this.$forceUpdate()},piaojuTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.piaoju=n.$base.url+"upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=u(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(this.ruleForm.zongjia=this.zongjia,!this.ruleForm.wenzhangzishu||this.$validate.isIntNumer(this.ruleForm.wenzhangzishu)){n.next=4;break}return this.$utils.msg("文章字数应输入整数"),n.abrupt("return");case 4:if(!this.ruleForm.danjia||this.$validate.isNumber(this.ruleForm.danjia)){n.next=7;break}return this.$utils.msg("单价应输入数字"),n.abrupt("return");case 7:if(!this.ruleForm.id){n.next=12;break}return n.next=10,this.$api.update("wenzhanggaochou",this.ruleForm);case 10:n.next=14;break;case 12:return n.next=14,this.$api.add("wenzhanggaochou",this.ruleForm);case 14:this.$utils.msgBack("提交成功");case 15:case"end":return n.stop()}}),n,this)})));function e(){return n.apply(this,arguments)}return e}(),optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),i=e.getMonth()+1,a=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),i=i>9?i:"0"+i,a=a>9?a:"0"+a,"".concat(t,"-").concat(i,"-").concat(a)},toggleTab:function(n){this.$refs[n].show()}}};e.default=s}).call(this,t("543d")["default"])},"2f48":function(n,e,t){"use strict";t.r(e);var i=t("11b4"),a=t.n(i);for(var r in i)"default"!==r&&function(n){t.d(e,n,(function(){return i[n]}))}(r);e["default"]=a.a},"7cb3":function(n,e,t){},"919d":function(n,e,t){"use strict";(function(n){t("b69f"),t("921b");i(t("66fd"));var e=i(t("e2a8"));function i(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},e1b2:function(n,e,t){"use strict";var i=t("7cb3"),a=t.n(i);a.a},e2a8:function(n,e,t){"use strict";t.r(e);var i=t("028f"),a=t("2f48");for(var r in a)"default"!==r&&function(n){t.d(e,n,(function(){return a[n]}))}(r);t("e1b2");var u,o=t("f0c5"),s=Object(o["a"])(a["default"],i["b"],i["c"],!1,null,"7e2c3f5a",null,!1,i["a"],u);e["default"]=s.exports}},[["919d","common/runtime","common/vendor"]]]);