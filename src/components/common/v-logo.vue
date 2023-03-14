<template lang="">
    <div class="v-logo">
        <a href="https://www.vtb.promo/daily?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_logo_cpc_rf_p1_feb_apr"><img src="../../assets/images/logovtb.png" alt="logoVTB"></a>
        <div class="divider"></div>
        <a href="https://rasp.yandex.ru/"><img src="../../assets/images/logoyandex.png" alt="logoYandex"></a>
    </div>
</template>

<script>
export default {
        name: 'v-logo',
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
    .v-logo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
    @media (max-width: 767px) {
            width: 60%;
            height: 60%;
    }
}

.divider {
    width: 1px;
    height: 16px;
    background: #C4DAFD;
    border-radius: 1px;
}
</style>

