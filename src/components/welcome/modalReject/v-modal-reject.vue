<template lang="">
    <div class="container">
        <div class="v-modal-bg">
        <div class="v-modal-reject">
            <img class="v-modal-reject__close" @click="closeModalRejectWindow" src="../../../assets/images/close.svg" alt="close">
            <h2>Подсказка</h2>
            <p>{{rejectMessage}}</p>
            <button @click="closeModalRejectWindow" class="v-modal-reject__btn">Попробовать еще</button>
        </div>
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
    },
    props: ['rejectMessage']
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

    .v-modal-reject {
        padding: 10px;
        display: flex;
        flex-direction: column;
        align-items: center;
        top: 50%;
        left: 50%;
        background: #0D0D0D;
        background-image: url(../../../assets/images/background.png);
        border-radius: 8px;
        width: 50%;
        z-index: 50;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        h2 {
            margin-top: 38px;
            font-size: 32px;
            line-height: 110%;    
            text-shadow: 0px 0px 4px rgba(31, 107, 255, 0.35);
            color:#368CFF;
            text-align: center;
            font-weight: 400;
        }
        p {
            margin-top: 16px;
            margin-bottom: 40px;
            font-weight: 500;
            text-align: center;
        }
        @media (max-width: 992px) {
            width: 75%;

        }
        @media (max-width: 767px) {
            width: 90%;

        }
    }

    .v-modal-reject__close {
        margin-left: auto;
        padding: 10px;
        cursor: pointer;
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