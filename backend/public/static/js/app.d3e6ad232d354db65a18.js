webpackJsonp([1],{NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),s={name:"App",beforeCreate:function(){this.$session.start()},data:function(){return{name:this.$session.get("name"),message:this.$session.get("message")}},created:function(){},methods:{goToLogin:function(){this.$router.push({name:"memberLoginPage"})},goToJoin:function(){this.$router.push({name:"memberJoinPage"})},goToLogout:function(){this.$session.destroy(),alert("로그아웃 되었습니다."),location.reload()},goToMemberInfo:function(){this.$router.push({name:"memberDetailPage"})},goToList:function(){this.$router.push({name:"boardListPage"})}}},o={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},["success"==this.message?n("div",{staticClass:"topcorner"},[t._v("\n      "+t._s(t.name)+" 님 안녕하세요.\n      "),n("button",{on:{click:t.goToLogout}},[t._v("로그아웃")]),t._v(" "),n("button",{on:{click:t.goToMemberInfo}},[t._v("내정보")])]):n("div",{staticClass:"topcorner"},[n("button",{on:{click:t.goToLogin}},[t._v("로그인")]),t._v(" "),n("button",{on:{click:t.goToJoin}},[t._v("회원가입")])]),t._v(" "),n("div",{staticClass:"jb-table"},[n("div",{staticClass:"jb-table-row"},[n("div",{staticClass:"jb-table-cell",on:{click:t.goToList}},[n("p",[t._v("메인페이지")])])])]),t._v(" "),n("div",{staticClass:"space"}),t._v(" "),n("router-view")],1)},staticRenderFns:[]};var r=n("VU/8")(s,o,!1,function(t){n("VXCY"),n("Z4Cz")},null,null).exports,i=n("/ocq"),d=n("18Sv"),c=n.n(d),u={created:function(){var t=this,e=window.location.href,n=new URL(e),a=n.searchParams.get("code"),s=n.searchParams.get("state");this.$http.get("/boards").then(function(e){t.boards=e.data}),null!=a&&null!=s&&"success"!=this.$session.get("message")&&this.$http.get("/callback?code="+a+"&state="+s).then(function(e){var n=e.data.access_token;t.$session.set("token",n),void 0!=n&&"success"!=t.$session.get("message")&&t.$http.get("/member?token="+n).then(function(e){t.$session.set("id",e.data.response.id),t.$session.set("name",e.data.response.name),t.$session.set("nickname",e.data.response.nickname),t.$session.set("email",e.data.response.email),t.$session.set("message",e.data.message),location.reload()})})},data:function(){return{boards:[]}},methods:{goToDetailPage:function(t){this.$router.push({name:"boardDetailPage",params:{id:t}})},goToWritePage:function(){"success"==this.$session.get("message")?this.$router.push({name:"boardWritePage",params:{id:"new"}}):this.$router.push({name:"memberLoginPage"})},fn_del:function(){console.log("구현중")}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1",align:"center"}},[t._m(0),t._v(" "),t._l(t.boards,function(e){return n("tr",{key:e.id},[n("td",{attrs:{width:"100"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.selboards,expression:"selboards"}],attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.selboards)?t._i(t.selboards,null)>-1:t.selboards},on:{change:function(e){var n=t.selboards,a=e.target,s=!!a.checked;if(Array.isArray(n)){var o=t._i(n,null);a.checked?o<0&&(t.selboards=n.concat([null])):o>-1&&(t.selboards=n.slice(0,o).concat(n.slice(o+1)))}else t.selboards=s}}})]),t._v(" "),n("td",{attrs:{width:"100"},on:{click:function(n){return t.goToDetailPage(e._id)}}},[t._v(t._s(e.title))]),t._v(" "),n("td",{attrs:{width:"500"},on:{click:function(n){return t.goToDetailPage(e._id)}}},[t._v(t._s(e.contents))]),t._v(" "),n("td",{attrs:{width:"100"},on:{click:function(n){return t.goToDetailPage(e._id)}}},[t._v(t._s(e.author))]),t._v(" "),n("td",{attrs:{width:"100"},on:{click:function(n){return t.goToDetailPage(e._id)}}},[t._v(t._s(e.board_date))])])}),t._v(" "),n("tr",[n("td",{attrs:{colspan:"5"}},[n("button",{on:{click:t.goToWritePage}},[t._v("등록")]),t._v(" "),n("button",{on:{click:t.fn_del}},[t._v("삭제")])])])],2)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",{staticStyle:{"background-color":"#CCCCCC"}},[n("td",{attrs:{width:"100"}},[t._v("선택")]),t._v(" "),n("td",{attrs:{width:"100"}},[t._v("제목")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v("내용")]),t._v(" "),n("td",{attrs:{width:"100"}},[t._v("글쓴이")]),t._v(" "),n("td",{attrs:{width:"100"}},[t._v("작성시간")])])}]},_=n("VU/8")(u,l,!1,null,null,null).exports,v={data:function(){return{board:[]}},created:function(){var t=this;this.$http.get("/boards/boardWritePage/"+this.$route.params.id).then(function(e){"new"==t.$route.params.id&&(e.data.author=t.$session.get("name")),t.board=e.data})},methods:{fn_submit:function(){var t=this;this.$http.post("/boards/boardWrite",{headers:{"Content-type":"application/x-www-form-urlencoded"},title:document.getElementById("title").value,contents:document.getElementById("contents").value,author:document.getElementById("author").value}).then(function(e){t.goToList()}).catch(function(t){console.log("failed",t)})},fn_modify:function(){var t=this;this.$http.post("/boards/boardUpdate/"+this.$route.params.id,{headers:{"Content-type":"application/x-www-form-urlencoded"},title:document.getElementById("title").value,contents:document.getElementById("contents").value,author:document.getElementById("author").value}).then(function(e){alert("수정되었습니다."),t.goToList()}).catch(function(t){console.log("failed",t)})},goToList:function(){this.$router.push({name:"boardListPage"})}}},h={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1",align:"center"}},[n("tr",[n("td",{attrs:{width:"100"}},[t._v("제목")]),t._v(" "),n("td",{attrs:{width:"500"}},[n("input",{attrs:{type:"text",id:"title"},domProps:{value:t.board.title}})])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("내용")]),t._v(" "),n("td",{attrs:{width:"500"}},[n("input",{attrs:{type:"text",id:"contents"},domProps:{value:t.board.contents}})])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("글쓴이")]),t._v(" "),n("td",{attrs:{width:"500"}},[n("input",{attrs:{type:"text",id:"author",readonly:"true"},domProps:{value:t.board.author}})])]),t._v(" "),n("tr",["new"==this.$route.params.id?n("td",{attrs:{width:"500",colspan:"2"}},[n("button",{on:{click:t.fn_submit}},[t._v("글쓰기")]),t._v(" "),n("button",{on:{click:t.goToList}},[t._v("취소")])]):n("td",{attrs:{width:"500",colspan:"2"}},[n("button",{on:{click:t.fn_modify}},[t._v("수정")]),t._v(" "),n("button",{on:{click:t.goToList}},[t._v("취소")])])])])},staticRenderFns:[]},m=n("VU/8")(v,h,!1,null,null,null).exports,p={created:function(){var t=this;this.$http.get("/boards/boardDetailPage/"+this.$route.params.id).then(function(e){t.board=e.data})},data:function(){return{board:[]}},methods:{fn_modify:function(){this.$router.push({name:"boardWritePage",params:{id:this.$route.params.id}})},fn_del:function(){var t=this;this.$http.get("/boards/boardDelete/"+this.$route.params.id).then(function(e){alert("삭제되었습니다."),t.goToList()})},goToList:function(){this.$router.push({name:"boardListPage"})}}},g={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1",align:"center"}},[n("tr",[n("td",{attrs:{width:"100"}},[t._v("제목")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.board.title))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("내용")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.board.contents))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("글쓴이")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.board.author))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("작성시간")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.board.board_date))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"500",colspan:"2"}},[n("button",{on:{click:t.fn_modify}},[t._v("수정")]),t._v(" "),n("button",{on:{click:t.fn_del}},[t._v("삭제")]),t._v(" "),n("button",{on:{click:t.goToList}},[t._v("취소")])])])])},staticRenderFns:[]},b=n("VU/8")(p,g,!1,null,null,null).exports,f={created:function(){},data:function(){return{user_id:"",user_pw:""}},methods:{fn_login:function(){alert("로그인 구현중..")},goToList:function(){this.$router.push({name:"boardListPage"})}}},w={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1",align:"center"}},[n("tr",[n("td",{attrs:{width:"100"}},[t._v("아이디")]),t._v(" "),n("td",{attrs:{width:"500"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{type:"text",id:"user_id"},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}})])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("비밀번호")]),t._v(" "),n("td",{attrs:{width:"500"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_pw,expression:"user_pw"}],attrs:{type:"text",id:"user_pw"},domProps:{value:t.user_pw},on:{input:function(e){e.target.composing||(t.user_pw=e.target.value)}}})])]),t._v(" "),n("tr",[n("td",{attrs:{width:"500",colspan:"2"}},[n("button",{on:{click:t.fn_login}},[t._v("로그인")]),t._v(" "),n("button",{on:{click:t.goToList}},[t._v("취소")])])]),t._v(" "),t._m(0)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"naverIdLogin"}},[e("a",{attrs:{id:"naverIdLogin_loginButton",href:"https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=7WdjBQw0JVti0EBOaRwi&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=hLiDdL2uhPtsftcU&auth_type=reprompt",role:"button"}},[e("img",{attrs:{src:"https://static.nid.naver.com/oauth/big_g.PNG",width:"320"}})])])}]},$=n("VU/8")(f,w,!1,null,null,null).exports,P={created:function(){},data:function(){return{user_id:"",user_pw:""}},methods:{fn_join:function(){alert("회원가입 구현중..")},goToList:function(){this.$router.push({name:"boardListPage"})}}},k={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1",align:"center"}},[n("tr",[n("td",{attrs:{width:"100"}},[t._v("아이디")]),t._v(" "),n("td",{attrs:{width:"500"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_id,expression:"user_id"}],attrs:{type:"text",id:"user_id"},domProps:{value:t.user_id},on:{input:function(e){e.target.composing||(t.user_id=e.target.value)}}})])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("비밀번호")]),t._v(" "),n("td",{attrs:{width:"500"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.user_pw,expression:"user_pw"}],attrs:{type:"text",id:"user_pw"},domProps:{value:t.user_pw},on:{input:function(e){e.target.composing||(t.user_pw=e.target.value)}}})])]),t._v(" "),n("tr",[n("td",{attrs:{width:"500",colspan:"2"}},[n("button",{on:{click:t.fn_join}},[t._v("회원가입")]),t._v(" "),n("button",{on:{click:t.goToList}},[t._v("취소")])])])])},staticRenderFns:[]},L=n("VU/8")(P,k,!1,null,null,null).exports,y={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("table",{attrs:{border:"1",align:"center"}},[n("tr",[n("td",{attrs:{width:"100"}},[t._v("ID")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.id))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("이름")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.name))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("닉네임")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.nickname))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("이메일")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.email))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("메세지")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.message))])]),t._v(" "),n("tr",[n("td",{attrs:{width:"100"}},[t._v("토큰")]),t._v(" "),n("td",{attrs:{width:"500"}},[t._v(t._s(t.token))])]),t._v(" "),n("tr",[n("td",{attrs:{colspan:"2"}},[n("button",{on:{click:t.goToList}},[t._v("목록")])])])])},staticRenderFns:[]},T=n("VU/8")({data:function(){return{id:this.$session.get("id"),name:this.$session.get("name"),nickname:this.$session.get("nickname"),email:this.$session.get("email"),message:this.$session.get("message"),token:this.$session.get("token")}},methods:{goToList:function(){this.$router.push({name:"boardListPage"})}}},y,!1,null,null,null).exports;a.a.use(c.a),a.a.use(i.a);var x=new i.a({routes:[{path:"/",name:"boardListPage",component:_},{path:"/callback",name:"boardListPagecallback",component:_},{path:"/boardWritePage/:id",name:"boardWritePage",component:m},{path:"/boardDetailPage/:id",name:"boardDetailPage",component:b},{path:"/memberLoginPage",name:"memberLoginPage",component:$},{path:"/memberJoinPage",name:"memberJoinPage",component:L},{path:"/memberDetailPage",name:"memberDetailPage",component:T}]}),C=n("mtWM"),E=n.n(C);a.a.config.productionTip=!1,a.a.prototype.$http=E.a,new a.a({el:"#app",router:x,components:{App:r},template:"<App/>"})},VXCY:function(t,e){},Z4Cz:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d3e6ad232d354db65a18.js.map