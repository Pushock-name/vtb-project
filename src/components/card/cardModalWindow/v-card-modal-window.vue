<template lang="">
    <div class="container">
        <div class="v-card-modal-window">
            <img class="v-card-modal-window__close" @click="onCloseCardModalWindow" src="../../../assets/images/close.svg" alt="close">
            <p>Кешбэк начисляется мультибонусами, 
                которые можно: конвертировать в рубли 
                по курсу 1 мультибонус = 0,85 рублей или обменять на товары, 
                путешествия, сертификаты и многое другое в каталоге программы «Мультибонус». 
                Максимальная сумма кешбэка в месяц – 2 000 мультибонусов. 
                Максимальная сумма кешбэка за покупки у партнеров Банка не ограничена.</p>
        </div>
    </div>        
</template>

<script>
export default {
    name: 'v-card-modal-window',
    methods: {
        onCloseCardModalWindow () {
            this.$emit('onCloseCardModalWindow');
        }
    }
}
</script>

<style lang="scss">
    .v-card-modal-window {
        padding: 20px 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        position: absolute;
        top: 10%;
        left: 2%;
        background: #0D0D0D;
        background-image: url(../../../assets/images/background.png);
        border-radius: 8px;
        width: 35%;
        z-index: 50;
        @media (max-width: 1200px) {
            width: 45%;
            top: 8%;
            left: 2%;
        }
        @media (max-width: 992px) {
            width: 50%;
            top: 10%;
            left: 2%;
            p {
                font-size: 16px;
            }
        }
        @media (max-width: 767px) {
            width: 100%;
            top: 30%;
            left: 0%;
        }
    }

    .v-card-modal-window__close {
        margin-left: auto;
        padding: 10px;
        cursor: pointer;
        @media (max-width: 767px) {
            width: 12%;
        }
    }

</style>