<template>
    <table border="1" align="center">
    <tr>
        <td width="100">Token</td>
        <td width="500">{{token}}</td>
    </tr>
    <tr>
        <td width="100">Message</td>
        <td width="500">{{message}}</td>
    </tr>
    <tr>
        <td width="100">Nickname</td>
        <td width="500">{{nickname}}</td>
    </tr>
    <tr>
        <td width="100">Email</td>
        <td width="500">{{email}}</td>
    </tr>
    <tr>
        <td width="100">Name</td>
        <td width="500">{{name}}</td>
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
      token : this.$session.get("token")
      ,message : this.$session.get("message")
      ,nickname : this.$session.get("nickname")
      ,email : this.$session.get("email")
      ,name : this.$session.get("name")
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