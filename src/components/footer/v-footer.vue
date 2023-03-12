<template lang="">
    <div class="v-footer">
        <div class="container">
            <div class="footer">
                <v-logo />
                <nav class="footer__nav">
                    <div class="footer__nav__link">
                        <a href="!#">Есть вопросы?</a>
                    </div>
                    <div class="footer__nav__link">
                        <a href="!#">Обратная связь</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import vLogo from '../common/logo/v-logo.vue';

export default {
    name: 'v-footer',
        components: {
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
    .v-footer {
        background-color: #000000;
        height: 111px;
    }

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 111px;
    }

    .footer__nav__link {
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 400;
        font-size: 16px;
        line-height: 30px;
        color: #FFFFFF;
    }

    .footer__nav {
        display: flex;
        flex-direction: row;
        gap: 20px;
    }
</style>