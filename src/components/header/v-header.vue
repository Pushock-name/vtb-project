<template lang="">
    <div class="v-header_screen">
        <div class="v-header container">
            <v-logo />  
            <v-nav />    
        </div>
    </div>    
</template>
<script>
import vNav from './v-nav/v-nav.vue';
import vLogo from '../common/v-logo.vue';

export default {
        name: 'v-header',
        components: {
            vNav,
            vLogo
        },
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
    .v-header_screen {
        width: 100%; 
        height: 74px;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(25px);
        position: fixed;
        top: 0;
        left: 0;
        z-index: 100;
        @media (max-width: 767px) {
            height: 54px;
        }
    }

    .v-header {
        height: 74px;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        @media (max-width: 767px) {
            height: 54px;
        }
    }
</style>