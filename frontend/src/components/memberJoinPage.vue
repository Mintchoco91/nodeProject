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
            <button @click="fn_join">회원가입</button>
            <button @click="goToList">취소</button>       
        </td>
    </tr>
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
        fn_join () {
            alert("회원가입 구현중..");
        },
        goToList () {
            this.$router.push({
                name: 'boardListPage'
            })
        }
    }
};
</script>