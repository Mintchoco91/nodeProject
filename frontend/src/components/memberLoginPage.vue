<template>
    <table border="1" align="center">
    <tr>
        <td width="100">아이디</td>
        <td width="500"><input type="text" id="user_id" v-model="user_id"></td>
    </tr>
    <tr>
        <td width="100">비밀번호</td>
        <td width="500"><input type="text" id="user_pw" v-model="user_pw"></td>
    </tr>
    <tr>
        <td width="500" colspan="2">   
            <button @click="fn_login">로그인</button>
            <button @click="goToList">취소</button>       
        </td>
    </tr>
    <div id="naverIdLogin"><a id="naverIdLogin_loginButton" href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=7WdjBQw0JVti0EBOaRwi&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=hLiDdL2uhPtsftcU&auth_type=reprompt" role="button"><img src="https://static.nid.naver.com/oauth/big_g.PNG" width=320></a></div>
    </table>

    
</template>

<script>
/* eslint-disable */
export default {
    created() {
        /*
        this
            .$http
            .get("/boards/boardWritePage/" + this.$route.params.id)
            .then(response => {
                this.board = response.data;
            });
            */
    },
    data() {
        return {
            user_id: ""
            ,user_pw: ""
        };
    },
    methods: {
        fn_login () {
            alert("로그인 구현중..");
        },
        goToList () {
            this.$router.push({
                name: 'boardListPage'
            })
        }
    }
};
</script>