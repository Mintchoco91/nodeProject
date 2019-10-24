<template>
    <table border="1" align="center">
        <tr style="background-color:#CCCCCC">
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
                <button @click="goToTempWritePage">비회원등록(임시)</button>
                <button @click="fn_del">삭제</button>
                <button @click="fn_api">API호출</button>
                <button @click="fn_chat">채팅</button>
            </td>
        </tr>
        </table>
    </template>

<script>
export default {
    created() {
        var url_string = window.location.href
        var url = new URL(url_string);
        var code = url.searchParams.get("code");
        var state = url.searchParams.get("state");

        //게시판 정보 로딩
        this.$http.get("/boards")
            .then(response => {
                this.boards = response.data;
            });

        if(code != null && state != null && this.$session.get("message") != "success"){
        //token Get
        this.$http.get("/callback?code="+code+"&state="+state)
            .then(response => {
                var token = response.data.access_token;
                this.$session.set('token', token);

                //토큰이 정상이고 message가 없을경우(성공하면 message : success)
                if(token != undefined && this.$session.get("message") != "success") {
                
                //네이버 사용자 정보 Get
                this.$http.get("/member?token="+token)
                    .then(response => {
                        this.$session.set('id', response.data.response.id);
                        this.$session.set('name', response.data.response.name);
                        this.$session.set('nickname', response.data.response.nickname);
                        this.$session.set('email', response.data.response.email);
                        this.$session.set('message', response.data.message);
                        location.reload();
                        
                    });
                    
                }
            });
        }
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
            if(this.$session.get("message") == "success"){
                this.$router.push({
                    name: 'boardWritePage', params: {id: 'new'}
                })
            }
            else{
                this.$router.push({
                    name: 'memberLoginPage'
                })
            }
        },
        goToTempWritePage () {
            this.$router.push({
                    name: 'boardWritePage', params: {id: 'new'}
            })
        },
        fn_del () {
            console.log("구현중");
        },
        fn_api() {
            var api_url = 'https://kkwnodeproject.herokuapp.com/api/'
            this
                .$http
                .get(api_url)
                .then(response => {        
                    console.log(response);
                    alert(response.data);
                })
                .catch(error => {
                    console.log('failed', error)
                });
        },
        fn_chat(){
                this.$router.push({
                    name: 'chatPage'
                })
        }
    }
};
</script>