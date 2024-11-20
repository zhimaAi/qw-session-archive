"use strict";(self["webpackChunkzmwk_session_archive"]=self["webpackChunkzmwk_session_archive"]||[]).push([[562],{2041:function(e,t,a){a.d(t,{A:function(){return u}});var n=a(6768),r={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M168 504.2c1-43.7 10-86.1 26.9-126 17.3-41 42.1-77.7 73.7-109.4S337 212.3 378 195c42.4-17.9 87.4-27 133.9-27s91.5 9.1 133.8 27A341.5 341.5 0 01755 268.8c9.9 9.9 19.2 20.4 27.8 31.4l-60.2 47a8 8 0 003 14.1l175.7 43c5 1.2 9.9-2.6 9.9-7.7l.8-180.9c0-6.7-7.7-10.5-12.9-6.3l-56.4 44.1C765.8 155.1 646.2 92 511.8 92 282.7 92 96.3 275.6 92 503.8a8 8 0 008 8.2h60c4.4 0 7.9-3.5 8-7.8zm756 7.8h-60c-4.4 0-7.9 3.5-8 7.8-1 43.7-10 86.1-26.9 126-17.3 41-42.1 77.8-73.7 109.4A342.45 342.45 0 01512.1 856a342.24 342.24 0 01-243.2-100.8c-9.9-9.9-19.2-20.4-27.8-31.4l60.2-47a8 8 0 00-3-14.1l-175.7-43c-5-1.2-9.9 2.6-9.9 7.7l-.7 181c0 6.7 7.7 10.5 12.9 6.3l56.4-44.1C258.2 868.9 377.8 932 512.2 932c229.2 0 415.5-183.7 419.8-411.8a8 8 0 00-8-8.2z"}}]},name:"sync",theme:"outlined"},l=r,s=a(4827);function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?Object(arguments[t]):{},n=Object.keys(a);"function"===typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(a).filter((function(e){return Object.getOwnPropertyDescriptor(a,e).enumerable})))),n.forEach((function(t){c(e,t,a[t])}))}return e}function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var i=function(e,t){var a=o({},e,t.attrs);return(0,n.bF)(s.A,o({},a,{icon:l}),null)};i.displayName="SyncOutlined",i.inheritAttrs=!1;var u=i},7875:function(e,t,a){a.d(t,{HN:function(){return o},LB:function(){return u},RJ:function(){return l},Xj:function(){return s},aN:function(){return r},kc:function(){return c},s6:function(){return i}});var n=a(7277);const r=()=>n.A.get("/api/department/sync"),l=()=>n.A.get("/api/department/list"),s=e=>n.A.get("/api/staff/list",{params:e}),o=e=>n.A.get("/api/groups/list",{params:e}),c=e=>n.A.get("/api/groups/sync",{params:e}),i=e=>n.A.get("/api/customers/list",{params:e}),u=e=>n.A.get("/api/customers/sync",{params:e})},4115:function(e,t,a){a.r(t),a.d(t,{default:function(){return R}});var n=a(6768),r=a(4232),l=a(144),s=a(7767),o=a(7694),c=a(2041),i=a(7894),u=a(7875);a(8298);const m={class:"filter-box"},d={class:"filter-item"},p={class:"mr10"},_={class:"filter-item",style:{"justify-content":"right"}},g={class:"container"},k={class:"left-block"},v={class:"header-box mt12"},f={class:"zm-flex-between"},y={class:"num"},b={key:0,class:"zm-user-info"},h={class:"name"},w={key:1,class:"create_time"};var x={__name:"index",setup(e){const t=(0,l.KR)(null),a=(0,l.Kh)({size:20,page:1,name:"",member_name:"",tagNames:[],remark_yes:-1,sort:1,normal_status:""}),x=(0,l.Kh)({type:0,contain_tag:[],contain_tag_keys:[],contain_tag_map:[],exclude_tag:[],exclude_tag_map:[]}),L=[{title:"群名",dataIndex:"name",scopedSlots:{customRender:"name"},minWidth:"200",ellipsis:!0,sort_key:"name"},{title:"群主",dataIndex:"owner_name",scopedSlots:{customRender:"owner_name_slot"},minWidth:"140",sort_key:"owner_name"},{dataIndex:"total_member",title:"群人数",minWidth:"65",scopedSlots:{customRender:"total_member"},sort_key:"total_member"},{dataIndex:"group_create_time",scopedSlots:{customRender:"group_create_time"},title:"创建时间",minWidth:"120",sort_key:"group_create_time"}],A=(0,l.KR)(""),R=(0,l.KR)(!1),z=(0,l.KR)([]),C=(0,l.Kh)({total:0,current:1,pageSize:10,showSizeChanger:!0,pageSizeOptions:["10","20","50","100"]}),S=(0,l.Kh)({keyword:""}),K=(0,l.KR)([]);(0,n.sV)((()=>{X()}));const O=(0,l.KR)(""),W=(0,l.KR)(!1),j=(0,l.Kh)({end_time:void 0,success:!0}),N=()=>{W.value||(W.value=!0,j.success=!1,(0,u.kc)({}).then((e=>{console.log("rea1",e),W.value=!1,j.success=!0,o.Ay.success("更新成功")})))},F=(0,l.KR)(0),I=()=>{F.value=(new Date).getTime()/1e3,a.page=1,E()},P=()=>{x.type=0,x.contain_tag=[],x.contain_tag_keys=[],x.contain_tag_map=[],x.exclude_tag=[],x.exclude_tag_map=[],K.value=[],A.value="",a.name="",I()},E=()=>{z.value=[],C.total=1,C.current=1,X()},X=()=>{R.value=!0,console.log(a);let e={page:C.current,size:C.pageSize,keyword:a.name};S.keyword=S.keyword.trim(),S.keyword&&(e.keyword=S.keyword),(0,u.HN)(e).then((e=>{console.log("res",e),z.value=e.data.items||[],O.value=e.data.last_sync_time||"",C.total=Number(e.data.total)})).finally((()=>{R.value=!1}))},B=e=>{C.current=e.current,C.pageSize=e.pageSize,X()};return(e,o)=>{const u=(0,n.g2)("a-input"),x=(0,n.g2)("a-button"),A=(0,n.g2)("a-tooltip"),S=(0,n.g2)("a-table");return(0,n.uX)(),(0,n.Wv)(i.A,{title:"群列表"},{default:(0,n.k6)((()=>[(0,n.Lk)("div",m,[(0,n.Lk)("div",d,[o[1]||(o[1]=(0,n.Lk)("label",null,"群名称：",-1)),(0,n.Lk)("div",p,[(0,n.bF)(u,{ref_key:"inputGroupNameRef",ref:t,style:{width:"100%"},placeholder:"请输入客户群名称搜索",allowClear:"",onPressEnter:I,value:a.name,"onUpdate:value":o[0]||(o[0]=e=>a.name=e)},null,8,["value"])])]),o[4]||(o[4]=(0,n.Lk)("div",{class:"filter-item"},null,-1)),(0,n.Lk)("div",_,[(0,n.bF)(x,{onClick:I,type:"primary"},{default:(0,n.k6)((()=>o[2]||(o[2]=[(0,n.eW)("搜索")]))),_:1}),(0,n.bF)(x,{onClick:P,class:"ml8"},{default:(0,n.k6)((()=>o[3]||(o[3]=[(0,n.eW)("重置")]))),_:1})])]),(0,n.Lk)("div",g,[(0,n.Lk)("div",k,[(0,n.Lk)("div",v,[(0,n.Lk)("div",f,[(0,n.Lk)("div",null,[o[5]||(o[5]=(0,n.eW)("群总数：")),(0,n.Lk)("strong",null,(0,r.v_)(C.total),1)])]),(0,n.bF)(A,{overlayClassName:"user-info-tooltip"},{title:(0,n.k6)((()=>[(0,n.Lk)("span",null,[o[6]||(o[6]=(0,n.eW)(" 上次更新时间：")),(0,n.Lk)("span",y,(0,r.v_)(O.value||"暂无更新时间"),1)])])),default:(0,n.k6)((()=>[(0,n.bF)(x,{type:"primary",style:{"margin-left":"20px"},icon:(0,n.h)((0,l.R1)(c.A)),loading:0==j.success,onClick:N},{default:(0,n.k6)((()=>o[7]||(o[7]=[(0,n.eW)(" 更新数据 ")]))),_:1},8,["icon","loading"])])),_:1})]),(0,n.bF)(S,{class:"mt16",loading:R.value,"data-source":z.value,columns:L,pagination:C,onChange:B},{bodyCell:(0,n.k6)((({column:e,text:t,record:a})=>["name"===e.dataIndex?((0,n.uX)(),(0,n.CE)("div",b,[o[8]||(o[8]=(0,n.Lk)("img",{class:"avatar",src:s},null,-1)),(0,n.Lk)("span",h,(0,r.v_)(a.name),1)])):(0,n.Q3)("",!0),"group_create_time"===e.dataIndex?((0,n.uX)(),(0,n.CE)("div",w,(0,r.v_)(a.group_create_time),1)):(0,n.Q3)("",!0)])),_:1},8,["loading","data-source","pagination"])])])])),_:1})}}},L=a(1241);const A=(0,L.A)(x,[["__scopeId","data-v-c7ee14d4"]]);var R=A}}]);
//# sourceMappingURL=562.8424c7d2.js.map