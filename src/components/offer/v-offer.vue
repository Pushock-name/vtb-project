<template lang="">
    <div class="v-offer">
        <div class="container">
            <div class="offer">
                <h2>Оформите карту<br>
                всего за 3 шага</h2>
                <h3 class="offer__description">Чтобы каждый день получать выгоду:</h3>
                <div class="envelope"><img src="../../assets/images/envelope.png" alt=""></div>
                <div class="offer__items">
                    <div class="offer__item">
                        <span>1</span>
                        <p>Заполните <a class="offer__item__link" href="https://online.vtb.ru/debit-card/step1/multicard-ready?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_text_online_application_cpc_rf_p1_feb_apr">онлайн-заявку</a> —<br>
                        это займёт не больше минуты.</p>
                    </div>
                    <div class="offer__item">
                        <span>2</span>
                        <p>Выберите способ получения:<br> 
                        самостоятельно в отделении ВТБ<br>
                        или бесплатно курьером.</p>
                    </div>
                    <div class="offer__item offer__item3">
                        <span>3</span>
                        <p>Подключите программу лояльности<br>
                        «Мультибонус» и получайте кешбэк<br>
                        от покупок.</p>
                    </div>
                </div>
                <a class="offer__card-issue__btn" @click="cardIssueMetrika" href="https://www.vtb.promo/daily?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_button_issue_card_cpc_rf_p1_feb_apr">Оформить</a>
                <div class="offer__card-issue__description">
                    Выпуск и обслуживание дебетовой карты — 0 ₽. 
                    Кешбэк – возврат части стоимости покупки в виде мультибонусов 
                    на бонусный счет участника программы лояльности «Мультибонус». 
                    Мультибонусы могут быть конвертированы в рубли из расчета 1 мультибонус = 0,85 рубля. 
                    2% кешбэка начисляются за покупки по карте в категориях «Рестораны», «Транспорт», «Супермаркеты». 
                    Максимальная сумма кешбэка в месяц – 2 000 мультибонусов.
                    Дополнительно к вознаграждению от Банка участник программы лояльности «Мультибонус» 
                    может получить до 30% кешбэка за покупки у партнёров программы на бонусный счет. 
                    Максимальная сумма кешбэка за покупки у партнеров Банка не ограничена. 
                    Комиссия за платежи через ВТБ Онлайн не взимается банком. 
                    Возможно списание комиссии со стороны Поставщика Услуг или Агрегатора. 
                    Бесплатные переводы по номеру телефона на сумму до 100 000 руб. 
                    в месяц с использованием Системы быстрых платежей в ВТБ Онлайн. 
                    Подробную информацию о программе лояльности, начислении и выплате кешбэка, условиях предоставления продуктов банка 
                    и о тарифах вы можете получить на официальном сайте vtb.ru, а также по первому требованию во всех подразделениях банка. Банк ВТБ (ПАО). 
                    Генеральная лицензия ЦБ РФ №1000.
                </div>    
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-offer',
    components: {},
    props: {},
    data() {
        return {}
    },
    computed: {},
    methods: {
        cardIssueMetrika() {
            this.$metrika.reachGoal('card_issue_button')
        }
    },
    watch: {}
}
</script>

<style lang="scss">
.v-offer {
    background: #191919;
    background-image: url(../../assets/images/background2.png);
    background-position: center;
    background-size: cover;
}

.offer {
    padding-top: 120px;
    padding-bottom: 120px;
    position: relative;
    color: #FFFFFF;

    h2 {
        @media (max-width: 767px) {
            text-align: center;
        }
    }

    @media (max-width: 767px) {
        padding-top: 68px;
        padding-bottom: 80px;
    }
}

.offer__description {
    margin-top: 24px;
    margin-bottom: 40px;

    @media (max-width: 767px) {
        text-align: center;
    }
}

.offer__items {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;

    span {
        display: inline-block;
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 130%;
        color: #368CFF;
        text-transform: uppercase;
        margin-left: 10px;
        margin-top: 20px;

        @media (max-width: 992px) {
            font-size: 24px;
        }
    }

    p {
        margin-left: 10px;

        @media (max-width: 1200px) {
            font-size: 16px;
        }

        @media (max-width: 992px) {
            font-size: 13px;
        }

        @media (max-width: 767px) {
            font-size: 16px;
        }
    }

    @media (max-width: 767px) {
        gap: 8px;
        margin-top: 224px;
    }
}

.offer__item {
    width: 399px;
    height: 165px;
    background: rgba(0, 0, 0, 0.2);
    backdrop-filter: blur(25px);
    border-radius: 8px;

    @media (max-width: 1200px) {
        width: 315px;
    }

    @media (max-width: 992px) {
        width: 245px;
        height: 150px;
    }

    @media (max-width: 767px) {
        width: 343px;
        height: 127px;
        padding-right: 30px;
        padding-bottom: 10px;
    }
}

.envelope {
    position: absolute;
    top: 55px;
    right: 0px;

    @media (max-width: 1200px) {
        width: 35%;
        height: 35%;
        top: 80px;
    }

    @media (max-width: 992px) {
        width: 32%;
        height: 32%;
        top: 140px;
    }

    @media (max-width: 767px) {
        top: 200px;
        right: 40px;
        width: 80%;
    }
}

.envelope::after {
    content: url(../../assets/images/arrow.png);
    position: absolute;
    top: -4px;
    left: 0px;
    z-index: 1;

    @media (max-width: 1200px) {
        visibility: hidden;
    }
}

.offer__card-issue__btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 343px;
    height: 60px;
    background: linear-gradient(90deg, #1437F5 0%, #3983F7 100%), #FFFFFF;
    border-radius: 10px;
    margin-bottom: 24px;
    margin-top: 40px;
    transition: 300ms;
}

.offer__card-issue__btn:hover {
    background: #f4f8fe;
    color: #2353e0;
    transition: 300ms;
}

.offer__card-issue__description {
    font-size: 14px;
    line-height: 140%;
    opacity: 0.5;
}

.offer__item__link {
    text-decoration: underline;
}
</style>
