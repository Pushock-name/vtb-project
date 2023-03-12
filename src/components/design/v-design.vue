<template lang="">
    <div class="v-design">
        <div class="container">
            <div class="design">
                <h2>Оформите карту<br>
                всего за 3 шага</h2>
                <h3 class="design__description">Чтобы каждый день получать выгоду:</h3>
                <div class="design__items">
                    <div class="design__item">
                        <div>1</div>
                        <p>Заполните <a class="design__item__link" href="https://online.vtb.ru/debit-card/step1/multicard-ready">онлайн-заявку</a> —<br>
                        это займёт не больше минуты.</p>
                    </div>
                    <div class="design__item">
                        <div>2</div>
                        <p>Выберите способ получения:<br> 
                        самостоятельно в отделении ВТБ<br>
                        или бесплатно курьером.</p>
                    </div>
                    <div class="design__item design__item3">
                        <div>3</div>
                        <p>Подключите программу лояльности<br>
                        «Мультибонус» и получайте кешбэк<br>
                        от покупок.</p>
                    </div>
                </div>
                <button class="design__card-issue__btn">Оформить</button>
                <div class="design__card-issue__description">
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
    name: 'v-app-wrapper',
        components: {},
        props: {},
        data () {
            return {}        
        },    
        computed: {},
        methods: {},
        watch: {}
    }
</script>

<style lang="scss">
    .v-design {
        background: #191919;
        background-image: url(../../assets/images/background.png);
    }

    .design {
        padding-top: 120px;
        position: relative;
    }

    .design__description {
        margin-top: 24px;
        margin-bottom: 40px;
    }

    .design__items {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    .design__items div {
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 130%;
        color: #368CFF;
        text-transform: uppercase;
        margin-left: 10px;
        margin-top: 20px;
    }

    .design__items p {
        margin-left: 10px;
    }

    .design__item {
        width: 399px;
        height: 165px;
        background: rgba(0, 0, 0, 0.2);
        backdrop-filter: blur(25px);
        border-radius: 8px;
    }

    .design::before {
        content: url(../../assets/images/envelope.png);
        position: absolute;
        top: 70px;
        right: 0px;
    }

    .design__item3 {
        position: relative;
    }

    .design__item3::before {
        content: url(../../assets/images/arrow.png);
        position: absolute;
        top: -42px;
        left: -4.8px;
    }

    .design__card-issue__btn {
        width: 343px;
        height: 60px;
        background: linear-gradient(90deg, #1437F5 0%, #3983F7 100%), #FFFFFF;
        border-radius: 10px;
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 400;
        font-size: 18px;
        line-height: 30px;
        color: #FFFFFF;
        margin-bottom: 24px;
        margin-top: 40px;
    }

    .design__card-issue__description {
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        line-height: 140%;
        /* or 20px */
        color: #FFFFFF;
        opacity: 0.5;
        padding-bottom: 120px;
    }

    .design__item__link {
        text-decoration: underline;
    }
</style>