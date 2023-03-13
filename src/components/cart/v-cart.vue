<template lang="">
    <div class="v-cart">
        <div class="container">
            <div class="cart">
                <div class="cart__title">
                    <h2>Решения от ВТБ на каждый день</h2>
                </div>
                <div class="cart__description">
                    <h3>Карта ВТБ подойдёт для любых трат, будь то покупка<br> 
                        билетов на электричку или любимого кофе</h3>
                </div>
                <div class="cart_items">
                    <div><p>Кешбэк* до 30% за покупки у партнёров банка</p></div>
                    <div><p>Кешбэк 2% в самых популярных категориях:<br>
                        транспорт, супермаркеты и рестораны</p></div>
                    <div><p>Возможность переводить накопленный кешбэк в рубли,
                        тратить на путешествия или другие товары в программе<br>
                        лояльности «Мультибонус»</p></div>
                    <div><p>Бесплатное обслуживание, и никаких комиссий за оплату<br>
                        ЖКУ и переводы в другие банки</p></div>
                </div>
            </div>
        </div>    
    </div>
</template>
<script>
export default {
    name: 'v-cart',
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
    .v-cart {
        border-radius: 8px;
    }

    .cart {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 24px;
        margin-top: 120px;
    }

    .cart__title h2 {
        color: #FFFFFF;
    }

    .cart__description h3 {
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 400;
        font-size: 24px;
        line-height: 140%;
        /* or 34px */
        color: #FFFFFF;
    }

    .cart_items {
        margin-bottom: 118px;
    }

    .cart_items p {
        font-weight: 400;
        font-size: 18px;
    }

    
</style>