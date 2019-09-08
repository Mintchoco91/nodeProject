<template>
    <table border="1" align="center">
        <tr>
            <td width="100">선택</td>
            <td width="100">제목</td>
            <td width="500">내용</td>
            <td width="100">글쓴이</td>
            <td width="100">작성시간</td>
        </tr>
        <tr v-for="board in boards" :key="board.id">
            <td width="100"><input type="checkbox" v-model="selboards"></td>
            <td width="100" @click="goToDetailPage(board._id)">{{board.title}}</td>
            <td width="500" @click="goToDetailPage(board._id)">{{board.contents}}</td>
            <td width="100" @click="goToDetailPage(board._id)">{{board.author}}</td>
            <td width="100" @click="goToDetailPage(board._id)">{{board.board_date}}</td>
        </tr>
        <tr>
            <td colspan="5">
                <button @click="goToWritePage">등록</button>
                <button @click="fn_del">삭제</button>
            </td>
        </tr>
        
        <div id="naverIdLogin"><a id="naverIdLogin_loginButton" href="https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=7WdjBQw0JVti0EBOaRwi&redirect_uri=http%3A%2F%2Flocalhost%3A3000%2F&state=hLiDdL2uhPtsftcU" role="button"><img src="https://static.nid.naver.com/oauth/big_g.PNG" width=320></a></div>
        
        </table>
    </template>

<script>
export default {
    created() {
        var url_string = window.location.href
        var url = new URL(url_string);
        var code = url.searchParams.get("code");
        var state = url.searchParams.get("state");

        this.$http.get("/boards")
            .then(response => {
                this.boards = response.data;
            });
        this.$http.get("/callback?code="+code+"&state="+state)
            .then(response => {
                console.log(response);
            });
    },
    data() {
        return {boards: []};
    },
    methods : {
        goToDetailPage (id) {
            this.$router.push({
                name: 'boardDetailPage', params: {id: id}
            })              
        },
        goToWritePage () {
            this.$router.push({
                name: 'boardWritePage', params: {id: 'new'}
            })
        },
        fn_del () {
            console.log("!!");
        },        
    }
};
</script>