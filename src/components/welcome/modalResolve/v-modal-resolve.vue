<template lang="">
    <div class="container">
        <div class="v-modal-resolve">
            <img class="v-modal-resolve__close" @click="closeModalResolveWindow" src="../../../assets/images/close.png" alt="close">
            <h2>{{wishMessage}}</h2>
            <p>А ещё вы можете подумать про кешбэк, который сможете получить при оплате билетов и такси с дебетовой картой ВТБ.</p>
            <a href="https://www.vtb.promo/daily?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_logo_cpc_rf_p1_feb_apr" class="v-modal-resolve__btn">Подробнее</a>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'v-modal-resolve',
    props: ['wishMessage'],
    methods: {
        closeModalResolveWindow () {
            this.$emit('closeModalResolveWindow');
        }
    }
}
</script>

<style lang="scss">

    .v-modal-resolve {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 25%;
        left: 25%;
        background: linear-gradient(90deg, #1437F5 0%, #3983F7 100%);
        border-radius: 8px;
        width: 50%;
        z-index: 50;
        @media (max-width: 992px) {
            width: 75%;
            top: 15%;
            left: 13%;
        }
        @media (max-width: 767px) {
            width: 100%;
            top: 0%;
            left: 0%;
        }
    }

    .v-modal-resolve__close {
        margin-left: auto;
        padding: 10px;
        cursor: pointer;
        @media (max-width: 767px) {
            width: 12%;
        }
    }

    .v-modal-resolve h2 {
        font-size: 20px;
        line-height: 110%;    
        text-shadow: 0px 0px 4px rgba(31, 107, 255, 0.35);
        color: #FFFFFF;
        text-align: center;
        font-weight: 400;
    }

    .v-modal-resolve p {
        margin-top: 16px;
        margin-bottom: 30px;
        font-weight: 500;
        text-align: center;
    }

    .v-modal-resolve__btn {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 343px;
        height: 60px;
        background: linear-gradient(0deg, #F4F7FA, #F4F7FA), linear-gradient(90deg, #1437F5 0%, #3983F7 100%);
        border-radius: 8px;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
        margin-bottom: 40px;
    }
</style>