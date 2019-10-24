<template>
    <table border="1" align="center">
        <tr>
            <td width="100"><textarea id="msgtextarea" style="width:300px;height:300px;"></textarea></td>
        </tr>
        <tr>
            <td width="100"><input type="text" id="msgbox"><button @click="fn_chat">전송</button></td>
        </tr>
    </table>
</template>

<script>
export default {
    created() {
        //empty
    },
    data() {
        this.$socket.on('chat message', (msg) => {
            document.getElementById("msgtextarea").value = msg;
        });
    },
    methods : {
        fn_chat(){
            var msgbox  = document.getElementById("msgbox").value;
            this.$socket.emit('chat message', msgbox);
        }
    }
};
</script>