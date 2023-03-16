<template lang="">
    <div class="container">
        <div class="v-modal-reject">
            <img class="v-modal-reject__close" @click="closeModalRejectWindow" src="../../../assets/images/close.png" alt="close">
            <h2>Подсказка</h2>
            <p>Мы не нашли такого пункта назначения в списке. Пожалуйста, попробуйте ещё раз.</p>
            <button @click="closeModalRejectWindow" class="v-modal-reject__btn">Попробовать еще</button>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'v-modal-reject',
    methods: {
        closeModalRejectWindow () {
            this.$emit('closeModalRejectWindow');
        }
    }
}
</script>

<style lang="scss">
    .v-modal-reject {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: absolute;
        top: 25%;
        left: 25%;
        background: #0D0D0D;
        background-image: url(../../../assets/images/background.png);
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

    .v-modal-reject__close {
        width: 7.5%;
        margin-left: auto;
        padding: 10px;
        cursor: pointer;
        @media (max-width: 767px) {
            width: 12%;
        }
    }

    .v-modal-reject h2 {
        margin-top: 38px;
        font-size: 32px;
        line-height: 110%;    
        text-shadow: 0px 0px 4px rgba(31, 107, 255, 0.35);
        color:#368CFF;
        text-align: center;
        font-weight: 400;
    }

    .v-modal-reject p {
        margin-top: 16px;
        margin-bottom: 40px;
        font-weight: 500;
        text-align: center;
    }

    .v-modal-reject__btn {
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