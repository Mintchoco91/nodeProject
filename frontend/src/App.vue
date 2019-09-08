<template>

  <div id="app">
    <div class="topcorner">
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
