<template lang="">
    <div class="container">
        <div class="v-modal-resolve">
            <h2>Подсказка</h2>
            <p>Мы не нашли такого пункта назначения в списке. Пожалуйста, попробуйте ещё раз.</p>
            <button class="v-modal-resolve__btn">Поехали!</button>
        </div>
    </div>    
</template>

<script>
export default {
    name: 'v-modal-resolve'
}
</script>

<style lang="scss">
    .v-modal-resolve {
        background: #0D0D0D;
        border-radius: 8px;
        background-image: url(../../assets/images/background2.png);
        width: 50%;
        @media (max-width: 767px) {
            width: 100%;
        }

    }
    .v-modal-resolve h2 {
        margin-top: 58px;
        font-size: 22px;
        line-height: 110%;    
        text-shadow: 0px 0px 4px rgba(31, 107, 255, 0.35);
    }

    .v-modal-resolve p {
        margin-top: 16px;
        font-weight: 500;
        font-size: 18px;
    }

    .v-modal-resolve__btn {
        width: 343px;
        height: 60px;
        background: linear-gradient(0deg, #F4F7FA, #F4F7FA), linear-gradient(90deg, #1437F5 0%, #3983F7 100%);
        border-radius: 8px;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
    }
</style>