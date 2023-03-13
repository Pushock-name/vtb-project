<template lang="">
    <div class="v-animation">
        <span class="marquee">Кешбэк 2% на категорию Транспорт</span>
    </div>
</template>
<script>
export default {
    name: 'v-animation',
        components: {},
        props: {},
        data () {
            return {}        
        },    
        computed: {},
        methods: {},
        watch: {}
}
</script>
<style lang="scss">
    .v-animation {
        height: 82px;
        background: #FFFFFF;
        display: flex;
        align-items: center;
        overflow: hidden;   
    }

    .marquee {
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 110%;
        /* or 35px */
        text-align: center;
        color: #006CFF;
        white-space: nowrap;
        display: inline-block;
        padding-left: 100%;
        -webkit-animation: scroll 5s infinite linear;
        -moz-animation: scroll 5s infinite linear;
        animation: scroll 5s infinite linear;
    }
        @-webkit-keyframes scroll {
        0% {
            -webkit-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        100% {
            -webkit-transform: translate(-50%, 0);
            transform: translate(-50%, 0)
        }
    }
    
    @-moz-keyframes scroll {
        0% {
            -moz-transform: translate(0, 0);
            transform: translate(0, 0);
        }
        100% {
            -moz-transform: translate(-50%, 0);
            transform: translate(-50%, 0)
        }
    }
    @keyframes scroll {
        0% {
            transform: translate(0, 0);
        }
        100% {
            transform: translate(-100%, 0)
        }
    }
</style>