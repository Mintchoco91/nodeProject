<template>
<h1>{{textvals}}</h1>
</template>
<script>
    module.exports = {
        data: function () {
            return {
                textvals: ''
            }
        },
        methods: {
            test: function () {
                console.log('hi');
            }
        }
    }
</script>
