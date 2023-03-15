<template lang="">
    <div class="v-nav">
        <div class="nav-desktop">
            <div class="header__nav__link">
                <a href="!#">Идеи для поездок</a>
            </div>
            <div class="header__nav__link">
                <a href="!#">Решения от ВТБ</a>
            </div>
            <div class="header__nav__link">
                <a href="!#">Мультибонусы</a>
            </div>
        </div>
        <div class="nav-mobile">
            <a href="#"><img src="../../../assets/images/burger.png" alt="menu"></a>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-nav',
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
    .nav-desktop {
        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: center;
        @media (max-width: 992px) {
            gap: 10px;
        }
        @media (max-width: 767px) {
            display: none;
        }
    }

    .nav-mobile {
        display: block;
        @media (min-width: 767px) {
            display: none;
        }
    }

    .header__nav__link {
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: #FFFFFF;
        @media (max-width: 992px) {
            font-weight: 400;
            font-size: 14px;
            line-height: 14px;
        }
    }

</style>