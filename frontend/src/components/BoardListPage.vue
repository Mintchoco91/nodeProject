<template>
    <table border="1" align="center">
        <tr>
            <td width="100">제목</td>
            <td width="500">내용</td>
            <td width="100">글쓴이</td>
        </tr>
        <tr v-for="board in boards" :key="board.id">
            <td width="100">{{board.title}}</td>
            <td width="500">{{board.contents}}</td>
            <td width="100">{{board.author}}</td>
        </tr>
    </table>
</template>

<script>
    /* eslint-disable */
    export default {
        created() {
            this
                .$http
                .get("/boards")
                .then(response => {
                    this.boards = response.data;
                });
        },
        data() {
            return {boards: []};
        }
    };
</script>