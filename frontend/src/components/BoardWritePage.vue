<template>
    <table border="1" align="center">
    <tr>
        <td width="100">제목</td>
        <td width="500"><input type="text" id="title" :value="board.title"></td>
    </tr>
    <tr>
        <td width="100">내용</td>
        <td width="500"><input type="text" id="contents" :value="board.contents"></td>
        </tr>
        <tr>
            <td width="100">글쓴이</td>
            <td width="500"><input type="text" id="author" value="master" readonly="true"></td>
        </tr>
        <tr>
            <td v-if="this.$route.params.id == 'new'" width="500" colspan="2">   
                <button @click="fn_submit">글쓰기</button>
                <button @click="goToList">취소</button>       
            </td>
            <td v-else width="500" colspan="2">                 
                <button @click="fn_modify">수정</button>
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
            .get("/boards/boardWritePage/" + this.$route.params.id)
            .then(response => {
                this.board = response.data;
            });
    },
    data() {
        return {board: []};
    },
    methods: {
        fn_submit() {
            this.$http.post('/boards/boardWrite', {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    title: document.getElementById("title").value
                    ,contents: document.getElementById("contents").value
                    ,author: document.getElementById("author").value
                })
                .then(response => {
                    this.goToList()
                })
                .catch(error => {
                    console.log('failed', error)
                })
            },
        fn_modify() {
            this.$http.post('/boards/boardUpdate/' + this.$route.params.id, {
                    headers: {
                        'Content-type': 'application/x-www-form-urlencoded'
                    },
                    title: document.getElementById("title").value
                    ,contents: document.getElementById("contents").value
                    ,author: document.getElementById("author").value
                })
                .then(response => {
                    alert("수정되었습니다.");
                    this.goToList()
                })
                .catch(error => {
                    console.log('failed', error)
                })
        },
        goToList () {
            this.$router.push({
                name: 'boardListPage'
            })
        }
    }
};
</script>