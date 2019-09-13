<template>

  <div id="app">
    <div class="topcorner" v-if="this.message == 'success'">
      {{name}} 님 안녕하세요.
      <button @click="goToLogout">로그아웃</button>
      <button @click="goToMemberInfo">내정보</button>
    </div> 
    <div class="topcorner" v-else>
      <button @click="goToLogin">로그인</button>
      <button @click="goToJoin">회원가입</button>
    </div> 

     <div class="jb-table">
      <div class="jb-table-row">
        <div class="jb-table-cell" @click="goToList">
          <p>메인페이지</p>
        </div>
      </div>
    </div>
    <div class="space"></div>
  <!--
    <img src="./assets/logo.png" @click="goToList">
-->
    <router-view/>
  </div>
</template>

<style>
      div {
        border: 1px solid #bcbcbc;
      }
       .topcorner{ 
      position:absolute; 
      top:0; 
      right:0; 
      } 
      .space{
        border: none;
        height:30px;
      }
      .jb-table {
        display: table;
        width: 100%;
      }
      .jb-table-row {
        display: table-row;
      }
      .jb-table-cell {
        display: table-cell;
        padding: 0px 20px;
        height: 50px;
      }
      .jb-top {
        vertical-align: top;
      }
      .jb-middle {
        vertical-align: middle;
      }
      .jb-bottom {
        vertical-align: bottom;
      }
</style>

<script>
export default {
  name: 'App',
  beforeCreate () {
    /*
    [Session Info]
    1. Session Set : this.$session.set(KEY,VALUE)
    2. Session Get : this.$session.get(KEY)
    3. ITEM 
    - id : ID(실제 아이디가 아닌 고유값)
    - name : 이름
    - nickname : 닉네임
    - email : 이메일
    - message : 로그인 후 메세지 (성공시 : "success")
    - token : 토큰번호
    */
    this.$session.start();
  },
  data () {
    return {
      name : this.$session.get("name")
      ,message : this.$session.get("message")
    }
  },
  created () {
    //console.log("3")
  },
  methods:{
    goToLogin(){
        this.$router.push({
            name: 'memberLoginPage'
        })
    },
    goToJoin(){
        this.$router.push({
            name: 'memberJoinPage'
        })
    },
    goToLogout(){
      this.$session.destroy();
      alert("로그아웃 되었습니다.");
      location.reload();
    },
    goToMemberInfo(){
        this.$router.push({
            name: 'memberDetailPage'
        })
    },    
    goToList(){
        this.$router.push({
            name: 'boardListPage'
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
