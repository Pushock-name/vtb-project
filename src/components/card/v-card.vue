<template lang="">
    <div class="v-card">
        <div class="container">
                <div class="card__image__hook">
                    <div class="card__image"><img src="../../assets/images/cart.png" alt=""></div>
                    <div class="card">
                        <div class="card__title">
                            <h2>Решения от ВТБ<br>
                                на каждый день</h2>
                        </div>
                        <div>
                            <h3>Карта ВТБ подойдёт для любых трат, будь то покупка<br> 
                                билетов на электричку или любимого кофе</h3>
                        </div>
                        <div class="card__image__mobile"><img src="../../assets/images/cardmobile.png" alt=""></div>
                        <div class="card__items">
                            <div class="card__item"><span>-</span><p><a href="#" class="card__item__link">Кешбэк*</a> до 30% за покупки у партнёров банка</p></div>
                            <div class="card__item"><span>-</span><p><a href="#" class="card__item__link">Кешбэк 2%*</a> в самых популярных категориях:<br>
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
        position: relative;
        border-radius: 8px;
        background-image: url(../../assets/images/background.png);
    }

    .card__image__hook {
        position: relative;
    }

    .card__image {
        position: absolute;
        top: 175px;
        right: 30px;
        @media (max-width: 1200px) {
            width: 50%;
            height: 50%;
            top: 190px;
            right: 0px;
        }
        @media (max-width: 992px) {
            width: 50%;
            height: 50%;
            top: 240px;
            right: 0px;
        }
        @media (max-width: 767px) {
            display: none;
        }
    }

    .card__image__mobile {
        position: relative;
        margin: 30px 0px;
        @media (max-width: 1200px) {
            display: none;
        }
        @media (max-width: 992px) {
            display: none;
        }
        @media (min-width: 767px) {
            display: none;
        }
        @media (max-width: 767px) {
            display: block;
        }
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 24px;
        padding-top: 120px;
        margin-bottom: 55px;
        position: relative;
        @media (max-width: 767px) {
            padding-top: 80px;
            margin-bottom: 55px;
            justify-content: space-between;
            align-items: center;
        }
    }

    .card__title h2 {
        color: #FFFFFF;
        @media (max-width: 767px) {
            text-align: center;
        }
    }

    .card h3 {
        @media (max-width: 767px) {
            text-align: center;
        }
    }

    .card__items {
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

    .card__item p {
        @media (max-width: 1200px) {
            font-size: 16px;
        }
        @media (max-width: 992px) {
            font-size: 13px;
        }
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

    .card__image::before {
        content: url(../../assets/images/pearl.png);
        position: absolute;
        top: 85px;
        left: 80px;
        @media (max-width: 1200px) {
            top: 65px;
            left: 100px;
        }
        @media (max-width: 992px) {
            content: url(../../assets/images/pearlmobile.png);
            top: 60px;
            left: 50px;
        }
    }

    .card__image__mobile::before {
        content: url(../../assets/images/pearlmobile.png);
        position: absolute;
        top: -30px;
        left: 50px;
    }
</style>