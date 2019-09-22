<template>
    <table border="1" align="center">
        <tr>
            <td width="100">제목</td>
            <td width="500">{{board.title}}</td>
        </tr>
            <tr>
                <td width="100">내용</td>
                <td width="500">{{board.contents}}</td>
            </tr>
            <tr>
                <td width="100">글쓴이</td>
                <td width="500">{{board.author}}</td>
           </tr>
            <tr>
                <td width="100">작성시간</td>
                <td width="500">{{board.board_date}}</td>
           </tr>
            <tr>
                <td width="500" colspan="2">
                    <button @click="fn_modify">수정</button>
                    <button @click="fn_del">삭제</button>
                    <button @click="goToList">취소</button>
                </td>
            </tr>
        </table>
</template>
<script>
/* eslint-disable */
export default {
    created() {
        this
            .$http
            .get("/boards/boardDetailPage/" + this.$route.params.id)
            .then(response => {
                this.board = response.data;
            });
    },
    data() {
        return {board: []};
    },
    methods: {
        fn_modify(){
            this.$router.push({
                name: 'boardWritePage', params: {id: this.$route.params.id}
            })                                   
        },
        fn_del(){
            this.$http.get("/boards/boardDelete/" + this.$route.params.id)
                .then(response => {
                    alert("삭제되었습니다.");
                    this.goToList();
                });
        },
        goToList(){
            this.$router.push({
                name: 'boardListPage'
            })         
        }
    }
};
</script>