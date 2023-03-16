<template lang="">
    <div class="container">
        <div class="v-card-modal-window">
            <img class="v-card-modal-window__close" @click="closeCardModalWindow" src="../../../assets/images/close.png" alt="close">
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
        closeCardModalWindow () {
            this.$emit('closeCardModalWindow');
        }
    }
}
</script>

<style lang="scss">
    .v-card-modal-window {
        padding: 10px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
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

    .v-card-modal-window__close {
        width: 7.5%;
        margin-left: auto;
        padding: 10px;
        cursor: pointer;
        @media (max-width: 767px) {
            width: 12%;
        }
    }

    .v-modal-reject p {
        margin-top: 16px;
        margin-bottom: 40px;
        font-size: 14px;
    }
</style>