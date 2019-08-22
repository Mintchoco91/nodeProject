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
        <tr v-for="board in boards" :key="board.id">
            <td width="100">{{board.title}}</td>
            <td width="500">{{board.contents}}</td>
        </tr>
        <tr>
            <td>
                <router-link :to="{ name: 'BoardWrite'}">글쓰기</router-link>
            </td>
            <td>
                <button @click="fn_write">글쓰기</button>
                <button @click="fn_submit">submit_sample</button>
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
                    .get("/boards")
                    .then(response => {
                        this.boards = response.data;
                    });
            },
            data() {
                return {boards: []};
            },
            methods : {
                fn_write : function(){
                    alert("fn_write 호출");
                },
                fn_submit : function(){
                    alert("fn_submit 호출");
                }
            }
        };


    </script>