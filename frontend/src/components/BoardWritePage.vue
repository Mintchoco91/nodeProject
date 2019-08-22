<template>
    <table border="1" align="center">
        <tr>
            <td width="100">제목</td>
            <td width="500"><input type="text"></td>
        </tr>
        <tr>
            <td width="100">내용</td>
            <td width="500"><input type="text"></td>
        </tr>
        <tr>
            <td width="100">글쓴이</td>
            <td width="500"><input type="text"></td>
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