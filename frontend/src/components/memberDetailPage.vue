<template>
    <table border="1" align="center">
    <tr>
        <td width="100">ID</td>
        <td width="500">{{id}}</td>
    </tr>
    <tr>
        <td width="100">이름</td>
        <td width="500">{{name}}</td>
    </tr>
    <tr>
        <td width="100">닉네임</td>
        <td width="500">{{nickname}}</td>
    </tr>
    <tr>
        <td width="100">이메일</td>
        <td width="500">{{email}}</td>
    </tr>
    <tr>
        <td width="100">메세지</td>
        <td width="500">{{message}}</td>
    </tr>
    <tr>
        <td width="100">토큰</td>
        <td width="500">{{token}}</td>
    </tr>
    <tr>
        <td colspan="2">                 
            <button @click="goToList">목록</button>     
        </td>
    </tr>
    </table>
</template>

<script>

/* eslint-disable */
export default {
  data () {
    return {
      id : this.$session.get("id")
      ,name : this.$session.get("name")
      ,nickname : this.$session.get("nickname")
      ,email : this.$session.get("email")
      ,message : this.$session.get("message")
      ,token : this.$session.get("token")
    }
  },
    methods: {
        goToList () {
            this.$router.push({
                name: 'boardListPage'
            })
        }
    }
};
</script>