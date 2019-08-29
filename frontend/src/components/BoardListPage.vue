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

        </table>
    </template>

<script>
export default {
    created() {
        this.$http.get("/boards")
            .then(response => {
                this.boards = response.data;
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
            alert("구현중");
        },        
    }
};
</script>