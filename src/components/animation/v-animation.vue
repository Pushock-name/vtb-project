<template lang="">
    <div class="v-animation">
        <marquee scrollamount="20" class="marquee">Кешбэк 2% на категорию Транспорт</marquee>
    </div>
</template>
<script>
export default {
    name: 'v-animation',
    components: {},
    props: {},
    data() {
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
    text-align: center;

    @media (max-width: 767px) {
        height: 52px;
    }
}

.marquee {
    margin-top: 26px;
    font-family: 'Press Start 2P';
    font-size: 32px;
    line-height: 110%;
    color: #006CFF;
    white-space: nowrap;

    @media (max-width: 767px) {
        font-size: 18px;
        margin-top: 16px;
    }
}
</style>


