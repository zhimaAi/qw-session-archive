"use strict";(self["webpackChunkzmwk_session_archive"]=self["webpackChunkzmwk_session_archive"]||[]).push([[842],{1241:function(e,o){o.A=(e,o)=>{const t=e.__vccOpts||e;for(const[a,s]of o)t[a]=s;return t}},4935:function(e,o,t){t.d(o,{A:function(){return r}});var a=t(6768);const s={id:"_footer",class:"_main-footer normal hide"};var n={__name:"mainFooter",setup(e){function o(){const e=document.body.scrollHeight,o=window.innerHeight,t=document.getElementById("_footer");t&&(e>o?t.classList.add("normal"):t.classList.remove("normal"))}return(0,a.sV)((()=>{window.addEventListener("load",o),window.addEventListener("resize",o),setTimeout((()=>{o(),document.getElementById("_footer").classList.remove("hide")}),1e3)})),(e,o)=>((0,a.uX)(),(0,a.CE)("div",s,o[0]||(o[0]=[(0,a.Lk)("div",{class:"copyright"},"Copyright © 2021, 芝麻小事网络科技（武汉）有限公司",-1)])))}},i=t(1241);const c=(0,i.A)(n,[["__scopeId","data-v-6e41ce21"]]);var r=c},1034:function(e,o,t){t.d(o,{A:function(){return f}});var a=t(6768),s=t(4232),n=t(144),i=t.p+"img/logo.bfba7370.png",c=t(7767),r=t(782),d=t(9804),l=t(7694),g=t(5389),u=t(8298);const m={class:"right-header-nav"},A={key:0,class:"my-shadow"},v={key:0,class:"menus-box"},p={class:"user-info-box"},w={class:"ml4"};var b={__name:"mainHeader",props:{background:String,showMenus:{type:Boolean,default:!1}},setup(e){const o=e,t=(0,r.Pj)(),b=(0,a.EW)((()=>t.getters.getUserInfo)),k=(0,a.EW)((()=>({background:o.background}))),h=()=>{d.A.confirm({title:"提示",content:"确认退出当前登录账户？",onOk:()=>{l.Ay.loading("正在退出..."),setTimeout((()=>{l.Ay.destroy(),(0,u.Hr)()}),1e3)}})};return(o,t)=>{const r=(0,a.g2)("a-menu-item"),d=(0,a.g2)("a-menu"),l=(0,a.g2)("a-dropdown");return(0,a.uX)(),(0,a.CE)("div",{class:"_main-header",style:(0,s.Tr)(k.value)},[t[3]||(t[3]=(0,a.Lk)("div",{class:"logo-box"},[(0,a.Lk)("img",{src:i,class:"logo"})],-1)),(0,a.Lk)("div",m,[e.showMenus?((0,a.uX)(),(0,a.CE)("div",A)):(0,a.Q3)("",!0),(0,a.Lk)("div",null,[e.showMenus?((0,a.uX)(),(0,a.CE)("div",v,t[0]||(t[0]=[(0,a.Lk)("div",{class:"menu-item active"},"会话质检",-1)]))):(0,a.Q3)("",!0)]),b.value.id>0?((0,a.uX)(),(0,a.Wv)(l,{key:1},{overlay:(0,a.k6)((()=>[(0,a.bF)(d,null,{default:(0,a.k6)((()=>[(0,a.bF)(r),(0,a.bF)(r,null,{default:(0,a.k6)((()=>[(0,a.Lk)("div",{class:"text-center",onClick:h},t[2]||(t[2]=[(0,a.Lk)("a",null,"退出登录",-1)]))])),_:1}),(0,a.bF)(r)])),_:1})])),default:(0,a.k6)((()=>[(0,a.Lk)("div",p,[t[1]||(t[1]=(0,a.Lk)("img",{src:c,class:"avatar"},null,-1)),(0,a.Lk)("span",w,(0,s.v_)(b.value.userid),1),(0,a.bF)((0,n.R1)(g.A),{class:"ml4"})])])),_:1})):(0,a.Q3)("",!0)])],4)}}},k=t(1241);const h=(0,k.A)(b,[["__scopeId","data-v-5be8bb28"]]);var f=h},838:function(e,o,t){t.r(o),t.d(o,{default:function(){return p}});t(4114);var a=t(6768),s=t.p+"img/login-cover.796e3ff6.png",n=t(144),i=t(1387),c=t(782),r=t(1034),d=t(4935),l=t(1824),g=t(5067);const u={class:"_main-container"};var m={__name:"login",setup(e){const{proxy:o}=(0,a.nI)(),t=(0,i.rd)(),m=(0,c.Pj)(),A=(0,n.KR)(!0);(0,a.sV)((async()=>{console.log("ww",ww),console.log("SDK_VERSION",ww.SDK_VERSION),console.log("process.env.NODE_ENV","production"),v()}));const v=()=>{(0,l.hY)().then((e=>{if(e?.data?.init){let{corp_id:o,agent_id:t}=e.data;p(o,t)}else o.$message.warning("企业信息不存在，请先注册企业信息！"),setTimeout((()=>{t.push({path:"/authorizedAccess/index"})}),1e3)})).finally((()=>{A.value=!1}))},p=async(e,t)=>{try{ww.createWWLoginPanel({el:"#ww_login",params:{login_type:"CorpApp",appid:e,agentid:t,redirect_uri:window.location.origin,state:"loginState",redirect_type:"callback"},onCheckWeComLogin({isWeComLogin:e}){console.log(e)},onLoginSuccess({code:o}){console.log({code:o}),(0,l.w4)({corp_id:e,code:o}).then((e=>{console.log("res",e),w(e.data.token)}))},onLoginFail(e){console.log(e)}})}catch(a){console.log("loginInit Err:",a),o.$message.error("初始化登录失败！")}},w=async e=>{try{(0,g.O5)(e);const a=await(0,l.HW)(),s=await(0,l.Gu)();if(!a.data||!s.data)return void o.$message.error("登录失败");(0,g.iA)(a.data),(0,g.nY)(s.data),m.commit("setLoginInfo",a.data),m.commit("setCorpInfo",s.data),o.$message.success("登录成功，正在跳转主页"),setTimeout((()=>{s.data?.chat_public_key_version>0?t.push({path:"/index"}):t.push({path:"/authorizedAccess/guide"})}),1e3)}catch(a){console.log("Err:",a),o.$message.error("登录失败")}};return(e,o)=>((0,a.uX)(),(0,a.CE)("div",u,[(0,a.bF)(r.A),o[0]||(o[0]=(0,a.Fv)('<div class="main-content" data-v-535b858d><div class="left-box" data-v-535b858d><img src="'+s+'" class="cover" data-v-535b858d></div><div class="right-box" data-v-535b858d><div id="ww_login" data-v-535b858d></div></div></div>',1)),(0,a.bF)(d.A)]))}},A=t(1241);const v=(0,A.A)(m,[["__scopeId","data-v-535b858d"]]);var p=v},7767:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/tJREFUaEPtmk9slEUUwH/v6y5tFVpNgVBppSghYsVIqBFMTIxWapp4oD0RNfHmSSIHT8YT9mRiI568mZhIPLQk1aBgSbyBAmIIBaKEFi1UKaZxqdDt7n7PvG9dUpXdnV1m20/jO33ZfTPzfvNm5r35IyyQfQe1/rccz4qGPUAv0A7UL9RZgu8sMClwgCA8tCJIfLW7V9IFO6TwMfCFtobpcI8IrwJNS2CoS5PTqnwYZIPBN/tlygpEAJHx8zok6HaXWpZaR5GjQUb6DUKiYZMJ94rwxlIbVkn7qrzTnAzekoHPMj0aBh8BqyqpIAa6KZVglwyM5N5V2BMDg6oxYZ+8PZIbBzqqKR2DMhcMIAMkYmBMNSakDUCrKRmXMv8DFPPEsgQ0JPP/zmdhzgZqDcS7B+oTsOk+4aHWvwKcnoRzV5Rc6JfCK0BTA+zsCmi79/ZGTs7AgZMhqZv+ILwB3LUMujuFzW230qvbWjl2WRk9q8zO+YHwBrC1Q3iuU6gLShsWKhw5q3xz0c/i5w1g1zbhgVWle7+ANn5N+fhozABe6w5oanQbFjfSMHjYz2z25oHXdwTc7bj1sUn8/mjMAF7cLnSsdBtCF6eV/cdiNoSeeFB4ZpMQlGHIhjA6ppyciBnA8gbofljoXFua4Myk8uWYcmPebb6U0/I2B6whC2R9XQFriwSyyzMwHNdAVugpiwMb1wiPtkNjMr/pvpmB81P5VCJtZwwexasHFtqVrPsTQPIAltDVQmoGYNmoecM8YAmc754vdIY3AFt91jQTLaUrV4DlRhGA5AEs95n5HS5cVaav53/zIXcM0HoPbFgtPLZOoknsIqk5ODWhfP+LcjXlUqK4TtUANsYt739qo9DcmO/pSsSSOvPI8XHlux+r3ydUBWA9/cKWgPtbKBu4XKAu/Qojp6rbJ1QMYMZb3m+971POTWkUoSvd7FQEYJPypSeL77juFMg88cnXIZmce00VAdim5fnNfnv+76Z+fjrk20s1AFjdBH1bA1qWu1dejea1WRg+EUZLrYs4e+Dx9RKN/XLZpkujpXQsPthcOOGYrToD9HfZUUlth08B7PzPytBxt3TbGWDHI4J5YTHEYsPhM54BbPncsk5ob6kdgipcmckHt9lbt2Cl23P2gFVj479wXFgLDAOwpM+itKtUBOBa6WLq/ScA7JDP8UBkMfvWqa2seeAHYIOTevyUJgzgPWB3/Gwrb5HAoOz9VHtFw/0xvp0vRjItQfjyv/+i2/AGhrRVk7lhkG3lHRcHDT0mmbq+6KlBwRyDCBPRY49XYnxrn1Llg3889ihA2LuJ6/PZpwmCHoWdQFsM7pAtqfgJwoMqiUPNdRxZ+NzmD26ItxWYaSgLAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=842.af0a0055.js.map