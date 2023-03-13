<template lang="">
    <div class="v-nav">
        <div class="header__nav__link">
            <a href="!#">Пожелания по расписанию</a>
        </div>
        <div class="header__nav__link">
            <a href="!#">О Мультикарте</a>
        </div>
        <div class="header__nav__link">
            <a href="!#">Мультибонусы</a>
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
    .v-nav {
        display: flex;
        flex-direction: row;
        gap: 50px;
        align-items: center;
    }

    .header__nav__link {
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: #FFFFFF;
    }

</style>