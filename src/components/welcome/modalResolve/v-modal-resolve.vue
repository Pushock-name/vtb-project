<template lang="">
    <div class="container">
        <div class="v-modal-bg">
        <div class="v-modal-resolve">
            <img class="v-modal-resolve__close" @click="closeModalResolveWindow" src="../../../assets/images/close.svg" alt="close">
            <h2>{{wishMessage}}</h2>
            <p>{{randomMessage}} <a href="https://www.vtb.promo/daily">Оформите бесплатную дебетовую карту для жизни.</a></p>
            <a href="https://www.vtb.promo/daily?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_logo_cpc_rf_p1_feb_apr" class="v-modal-resolve__btn" @click="moreDetailsMetrika">Подробнее</a>
        </div>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'v-modal-resolve',
    props: ['wishMessage', 'messages'],
    methods: {
        moreDetailsMetrika () {
            this.$metrika.reachGoal('more_details_button')
        },
        closeModalResolveWindow () {
            this.$emit('closeModalResolveWindow');
        },
        randomInteger(min, max) {
            let rand = min - 0.5 + Math.random() * (max - min + 1);
            return Math.round(rand);
        }
    },
    computed: {
        randomMessage () {
            let randomNumber = this.randomInteger(0, 4);
            return this.messages[randomNumber] 
        }
    }
}
</script>

<style lang="scss">

.v-modal-bg {
    width: auto;
    position: fixed;
    background: rgba(0, 0, 0, 0.45);
    left: 0;
    right: 0;
    top: 0;
    bottom:0;
    z-index: 40;

}

    .v-modal-resolve {
        top: 0;
        left: 0;
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        background: linear-gradient(90deg, #1437F5 0%, #3983F7 100%);
        border-radius: 8px;
        width: 50%;
        z-index: 50;
        h2 {
            font-size: 20px;
            line-height: 110%;    
            text-shadow: 0px 0px 4px rgba(31, 107, 255, 0.35);
            color: #FFFFFF;
            text-align: center;
            font-weight: 400;
        }
        p {
            margin-top: 16px;
            margin-bottom: 30px;
            font-weight: 500;
            text-align: center;
            a {
            text-decoration: underline;
            }
        }
        @media (max-width: 992px) {
            width: 75%;
        }
        @media (max-width: 767px) {
            width: 90%;
        }
    }

    .v-modal-resolve__close {
        margin-left: auto;
        padding: 10px;
        cursor: pointer;
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