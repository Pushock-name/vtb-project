<template lang="">
    <div class="v-footer">
        <div class="container">
            <div class="footer">
                <v-logo />
                <nav class="footer__nav">    
                    <div class="footer__nav__link">
                        <a href="https://yandex.ru/support/rasp">Есть вопросы?</a>
                    </div>
                    <div class="footer__nav__link">
                        <a href="https://yandex.ru/support/rasp/troubleshooting.html">Обратная связь</a>
                    </div>
                </nav>
            </div>
        </div>
    </div>
</template>

<script>
import vLogo from '../common/v-logo.vue';

export default {
    name: 'v-footer',
        components: {
            vLogo
        },
        props: {},
        data () {
            return {
            }        
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
        @media (max-width: 767px) {
            height: 156px;
        }
    }    

    .footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        height: 111px;
        @media (max-width: 767px) {
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            flex-direction: column-reverse;
            padding-top: 40px;
        }
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