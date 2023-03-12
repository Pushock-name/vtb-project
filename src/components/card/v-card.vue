<template lang="">
    <div class="v-card">
        <div class="container">
            <div class="card">
                <div class="card__title">
                    <h2>Решения от ВТБ<br>
                        на каждый день</h2>
                </div>
                <div>
                    <h3>Карта ВТБ подойдёт для любых трат, будь то покупка<br> 
                        билетов на электричку или любимого кофе</h3>
                </div>
                <div class="card__items">
                    <div class="card__item"><span>-</span><p><a href="!#" class="card__item__link">Кешбэк*</a> до 30% за покупки у партнёров банка</p></div>
                    <div class="card__item"><span>-</span><p>Кешбэк 2% в самых популярных категориях:<br>
                        транспорт, супермаркеты и рестораны</p></div>
                    <div class="card__item"><span>-</span><p>Возможность переводить накопленный кешбэк в рубли,<br>
                        тратить на путешествия или другие товары в программе<br>
                        лояльности «Мультибонус»</p></div>
                    <div class="card__item"><span>-</span><p>Бесплатное обслуживание, и никаких комиссий за оплату<br>
                        ЖКУ и переводы в другие банки</p></div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'v-card',
        components: {},
        props: {},
        data () {
            return {}        
        },    
        computed: {},
        methods: {},
}
</script>
<style lang="scss">
    .v-card {
        border-radius: 8px;
        background-image: url(../../assets/images/background.png);
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 24px;
        padding-top: 120px;
        position: relative;
    }

    .card__title h2 {
        color: #FFFFFF;
    }

    .card__items {
        margin-bottom: 118px;
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        gap: 16px;
    }

    .card__item {
        display: flex;
        flex-direction: row;
        gap: 16px;
    }

    .card__item span {
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 500;
        font-size: 24px;
        line-height: 130%;
        text-transform: uppercase;
        color: #FFFFFF;
        text-shadow: 0px 0px 4px rgba(31, 107, 255, 0.35);
    }

    .card__item__link {
        text-decoration: underline;
    }

    .card::before {
        content: url(../../assets/images/cart.png);
        position: absolute;
        top: 175px;
        right: 30px;
    }

    .card::after {
        content: url(../../assets/images/pearl.png);
        position: absolute;
        top: 257px;
        right: 420px;
    }
</style>