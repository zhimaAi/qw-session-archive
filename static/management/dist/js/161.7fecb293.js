"use strict";(self["webpackChunkzmwk_session_archive"]=self["webpackChunkzmwk_session_archive"]||[]).push([[161],{1241:function(e,o){o.A=(e,o)=>{const a=e.__vccOpts||e;for(const[t,s]of o)a[t]=s;return a}},4935:function(e,o,a){a.d(o,{A:function(){return r}});var t=a(6768);const s={id:"_footer",class:"_main-footer normal hide"};var n={__name:"mainFooter",setup(e){function o(){const e=document.body.scrollHeight,o=window.innerHeight,a=document.getElementById("_footer");a&&(e>o?a.classList.add("normal"):a.classList.remove("normal"))}return(0,t.sV)((()=>{window.addEventListener("load",o),window.addEventListener("resize",o),setTimeout((()=>{o(),document.getElementById("_footer").classList.remove("hide")}),1e3)})),(e,o)=>((0,t.uX)(),(0,t.CE)("div",s,o[0]||(o[0]=[(0,t.Lk)("div",{class:"copyright"},"Copyright © 2021, 芝麻小事网络科技（武汉）有限公司",-1)])))}},c=a(1241);const i=(0,c.A)(n,[["__scopeId","data-v-6e41ce21"]]);var r=i},1034:function(e,o,a){a.d(o,{A:function(){return f}});var t=a(6768),s=a(4232),n=a(144),c=a.p+"img/logo.bfba7370.png",i=a(7767),r=a(782),l=a(9804),d=a(7694),g=a(5389),u=a(8298);const m={class:"right-header-nav"},A={key:0,class:"my-shadow"},v={key:0,class:"menus-box"},p={class:"user-info-box"},w={class:"ml4"};var b={__name:"mainHeader",props:{background:String,showMenus:{type:Boolean,default:!1}},setup(e){const o=e,a=(0,r.Pj)(),b=(0,t.EW)((()=>a.getters.getUserInfo)),k=(0,t.EW)((()=>({background:o.background}))),h=()=>{l.A.confirm({title:"提示",content:"确认退出当前登录账户？",onOk:()=>{d.Ay.loading("正在退出..."),setTimeout((()=>{d.Ay.destroy(),(0,u.Hr)()}),1e3)}})};return(o,a)=>{const r=(0,t.g2)("a-menu-item"),l=(0,t.g2)("a-menu"),d=(0,t.g2)("a-dropdown");return(0,t.uX)(),(0,t.CE)("div",{class:"_main-header",style:(0,s.Tr)(k.value)},[a[3]||(a[3]=(0,t.Lk)("div",{class:"logo-box"},[(0,t.Lk)("img",{src:c,class:"logo"})],-1)),(0,t.Lk)("div",m,[e.showMenus?((0,t.uX)(),(0,t.CE)("div",A)):(0,t.Q3)("",!0),(0,t.Lk)("div",null,[e.showMenus?((0,t.uX)(),(0,t.CE)("div",v,a[0]||(a[0]=[(0,t.Lk)("div",{class:"menu-item active"},"会话质检",-1)]))):(0,t.Q3)("",!0)]),b.value.id>0?((0,t.uX)(),(0,t.Wv)(d,{key:1},{overlay:(0,t.k6)((()=>[(0,t.bF)(l,null,{default:(0,t.k6)((()=>[(0,t.bF)(r),(0,t.bF)(r,null,{default:(0,t.k6)((()=>[(0,t.Lk)("div",{class:"text-center",onClick:h},a[2]||(a[2]=[(0,t.Lk)("a",null,"退出登录",-1)]))])),_:1}),(0,t.bF)(r)])),_:1})])),default:(0,t.k6)((()=>[(0,t.Lk)("div",p,[a[1]||(a[1]=(0,t.Lk)("img",{src:i,class:"avatar"},null,-1)),(0,t.Lk)("span",w,(0,s.v_)(b.value.userid),1),(0,t.bF)((0,n.R1)(g.A),{class:"ml4"})])])),_:1})):(0,t.Q3)("",!0)])],4)}}},k=a(1241);const h=(0,k.A)(b,[["__scopeId","data-v-5be8bb28"]]);var f=h},2263:function(e,o,a){a.r(o),a.d(o,{default:function(){return p}});a(4114);var t=a(6768),s=a.p+"img/login-cover.796e3ff6.png",n=a(144),c=a(1387),i=a(782),r=a(1034),l=a(4935),d=a(1824),g=a(5067);const u={class:"_main-container"};var m={__name:"login",setup(e){const{proxy:o}=(0,t.nI)(),a=(0,c.rd)(),m=(0,i.Pj)(),A=(0,n.KR)(!0);(0,t.sV)((async()=>{console.log("ww",ww),console.log("SDK_VERSION",ww.SDK_VERSION),console.log("process.env.NODE_ENV","production"),v()}));const v=()=>{(0,d.hY)().then((e=>{if(e?.data?.init){let{corp_id:o,agent_id:a}=e.data;p(o,a)}else o.$message.warning("企业信息不存在，请先注册企业信息！"),setTimeout((()=>{a.push({path:"/authorizedAccess/index"})}),1e3)})).finally((()=>{A.value=!1}))},p=async(e,a)=>{try{ww.createWWLoginPanel({el:"#ww_login",params:{login_type:"CorpApp",appid:e,agentid:a,redirect_uri:window.location.origin,state:"loginState",redirect_type:"callback"},onCheckWeComLogin({isWeComLogin:e}){console.log(e)},onLoginSuccess({code:o}){console.log({code:o}),(0,d.w4)({corp_id:e,code:o}).then((e=>{console.log("res",e),w(e.data.token)}))},onLoginFail(e){console.log(e)}})}catch(t){console.log("loginInit Err:",t),o.$message.error("初始化登录失败！")}},w=async e=>{try{(0,g.O5)(e);const t=await(0,d.HW)(),s=await(0,d.Gu)();if(!t.data||!s.data)return void o.$message.error("登录失败");(0,g.iA)(t.data),(0,g.nY)(s.data),m.commit("setLoginInfo",t.data),m.commit("setCorpInfo",s.data),o.$message.success("登录成功，正在跳转主页"),setTimeout((()=>{s.data?.chat_public_key_version>0?a.push({path:"/index"}):a.push({path:"/authorizedAccess/guide"})}),1e3)}catch(t){console.log("Err:",t),o.$message.error("登录失败")}};return(e,o)=>((0,t.uX)(),(0,t.CE)("div",u,[(0,t.bF)(r.A),o[0]||(o[0]=(0,t.Fv)('<div class="main-content" data-v-32bc856a><div class="left-box" data-v-32bc856a><img src="'+s+'" class="cover" data-v-32bc856a></div><div class="right-box" data-v-32bc856a><div id="ww_login" data-v-32bc856a></div></div></div>',1)),(0,t.bF)(l.A)]))}},A=a(1241);const v=(0,A.A)(m,[["__scopeId","data-v-32bc856a"]]);var p=v},7767:function(e){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAAA/tJREFUaEPtmk9slEUUwH/v6y5tFVpNgVBppSghYsVIqBFMTIxWapp4oD0RNfHmSSIHT8YT9mRiI568mZhIPLQk1aBgSbyBAmIIBaKEFi1UKaZxqdDt7n7PvG9dUpXdnV1m20/jO33ZfTPzfvNm5r35IyyQfQe1/rccz4qGPUAv0A7UL9RZgu8sMClwgCA8tCJIfLW7V9IFO6TwMfCFtobpcI8IrwJNS2CoS5PTqnwYZIPBN/tlygpEAJHx8zok6HaXWpZaR5GjQUb6DUKiYZMJ94rwxlIbVkn7qrzTnAzekoHPMj0aBh8BqyqpIAa6KZVglwyM5N5V2BMDg6oxYZ+8PZIbBzqqKR2DMhcMIAMkYmBMNSakDUCrKRmXMv8DFPPEsgQ0JPP/zmdhzgZqDcS7B+oTsOk+4aHWvwKcnoRzV5Rc6JfCK0BTA+zsCmi79/ZGTs7AgZMhqZv+ILwB3LUMujuFzW230qvbWjl2WRk9q8zO+YHwBrC1Q3iuU6gLShsWKhw5q3xz0c/i5w1g1zbhgVWle7+ANn5N+fhozABe6w5oanQbFjfSMHjYz2z25oHXdwTc7bj1sUn8/mjMAF7cLnSsdBtCF6eV/cdiNoSeeFB4ZpMQlGHIhjA6ppyciBnA8gbofljoXFua4Myk8uWYcmPebb6U0/I2B6whC2R9XQFriwSyyzMwHNdAVugpiwMb1wiPtkNjMr/pvpmB81P5VCJtZwwexasHFtqVrPsTQPIAltDVQmoGYNmoecM8YAmc754vdIY3AFt91jQTLaUrV4DlRhGA5AEs95n5HS5cVaav53/zIXcM0HoPbFgtPLZOoknsIqk5ODWhfP+LcjXlUqK4TtUANsYt739qo9DcmO/pSsSSOvPI8XHlux+r3ydUBWA9/cKWgPtbKBu4XKAu/Qojp6rbJ1QMYMZb3m+971POTWkUoSvd7FQEYJPypSeL77juFMg88cnXIZmce00VAdim5fnNfnv+76Z+fjrk20s1AFjdBH1bA1qWu1dejea1WRg+EUZLrYs4e+Dx9RKN/XLZpkujpXQsPthcOOGYrToD9HfZUUlth08B7PzPytBxt3TbGWDHI4J5YTHEYsPhM54BbPncsk5ob6kdgipcmckHt9lbt2Cl23P2gFVj479wXFgLDAOwpM+itKtUBOBa6WLq/ScA7JDP8UBkMfvWqa2seeAHYIOTevyUJgzgPWB3/Gwrb5HAoOz9VHtFw/0xvp0vRjItQfjyv/+i2/AGhrRVk7lhkG3lHRcHDT0mmbq+6KlBwRyDCBPRY49XYnxrn1Llg3889ihA2LuJ6/PZpwmCHoWdQFsM7pAtqfgJwoMqiUPNdRxZ+NzmD26ItxWYaSgLAAAAAElFTkSuQmCC"}}]);
//# sourceMappingURL=161.7fecb293.js.map