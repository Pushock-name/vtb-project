<template lang="">
    <div class="v-welcome">
        <div class="container">
            <div class="welcome">
                <div class="train"><img src="../../assets/images/Train.png" alt="train"></div>
                <div class="welcome-content">
                    <div>
                        <h2>Необычные идеи<br>
                        для поездок</h2>
                    </div>
                    <div><h3>Введите время отправления, укажите станцию<br> 
                        прибытия, а мы подскажем, как сделать<br> 
                        привычный путь чуточку веселее.</h3>
                    </div>
                        <form class="welcome-content__form" id="data">
                            <div class="form__time__block">
                                <div class="hour__block">
                                    <label>Час</label>
                                    <input @focus="insertMinuteMetrika" class="hour" type="number" form="data" value="00">
                                </div>
                                <div class="delim">:</div>
                                <div class="minute__block">
                                    <label>Минута</label>
                                    <input @focus="insertHourMetrika" class="minute" type="number" form="data" value="00">
                                </div>
                            </div>
                            <div class="station__block">
                                <label>Станция прибытия</label>    
                                <input @focus="insertStationMetrika" class="station" type="text" form="data" value="Ваша станция">
                            </div>
                        </form>    
                        <button @click="poehaloMetrika" type="submit" form="data" class="submit__btn">Поехали!</button> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'v-welcome',
        components: {},
        props: {},
        data () {
            return {}        
        },    
        computed: {},
        methods: {
            poehaloMetrika () {
                this.$metrika.reachGoal('poehalo_button')
            },
            insertMinuteMetrika () {
                this.$metrika.reachGoal('insert_minute_field')
            },
            insertHourMetrika () {
                this.$metrika.reachGoal('insert_hour_field')
            },
            insertStationMetrika () {
                this.$metrika.reachGoal('insert_station_field')
            }
        },
        watch: {}
}
</script>

<style lang="scss">

    .v-welcome {
        position: relative;
        padding-top: 117px;
        @media (max-width: 767px) {
            background-color: #191919;
            background-image: url(../../assets/images/background.png);
        }
    }

    .welcome {
        position: relative;
        margin-bottom: 102px;
        background: #191919;
        border: 40px solid #000000;
        border-radius: 40px;
        background-image: url(../../assets/images/background.png);
        @media (max-width: 767px) {
            margin-bottom: 0px;
            padding-bottom: 14px;
            border: none;
        }
    }

    .train {
        position: absolute;
        right: 0px;
        top: 0px;
        z-index: 1;
        @media (max-width: 1200px) {
            width: 37%;
            height: 37%;
        }
        @media (max-width: 992px) {
            width: 35%;
            height: 35%;
            top: 330px;
        }
        @media (max-width: 767px) {
            width: 40%;
            height: 42%;
            top: 25px;
        }
    }

    .welcome-content {
        margin-top: 59px;
        margin-left: 36px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 32px;
        padding-bottom: 25px;
        @media (max-width: 767px) {
            margin-top: 0px;
            margin-left: 0px;
        }
    }

    .welcome-content h2 {
        @media (max-width: 767px) {
            font-size: 28px;
        }
    }

    .welcome-content__form {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        flex-wrap: wrap;
        gap: 36px;
    }

    .form__time__block {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .hour__block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .hour {
        width: 190px;
        height: 69px;
        background: #0D0D0D;
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 110%;
        text-transform: uppercase;
        color: #FFFFFF;
        text-align: center;
        @media (max-width: 767px) {
            width: 157px;
            height: 48px;
        }
    }

    .delim {
        height: 45px;
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 500;
        font-size: 27px;
        line-height: 250%;
        color:  #FFFFFF;
        @media (max-width: 767px) {
            width: 22px;
            height: 48px;
        }
    }

    .minute__block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .minute {
        width: 190px;
        height: 69px;
        background: #0D0D0D;
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 110%;
        text-transform: uppercase;
        color: #FFFFFF;
        text-align: center;
        @media (max-width: 767px) {
            width: 157px;
            height: 48px;
        }
    }

    .station__block {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
    }

    .station {
        width: 400px;
        height: 69px;
        background: #0D0D0D;
        font-family: 'Press Start 2P';
        font-style: normal;
        font-weight: 400;
        font-size: 26px;
        line-height: 110%;
        text-transform: uppercase;
        color: #FFFFFF;
        text-align: center;
        @media (max-width: 767px) {
            width: 343px;
            height: 48px;
        }
    }

    .welcome-content__form label {
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 110%;
        color: #006CFF;
    }

    .submit__btn {
        width: 343px;
        height: 60px;
        background: linear-gradient(0deg, #F4F7FA, #F4F7FA), linear-gradient(90deg, #1437F5 0%, #3983F7 100%);
        border-radius: 8px;
        font-family: 'YS Text';
        font-style: normal;
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
    }

    .welcome-content::before {
        content: url(../../assets/images/Vector.png);
        position: absolute;
        right: 0px;
        top: 0px;
        background: rgba(56, 128, 247, 0.6);
        mix-blend-mode: overlay;
        filter: blur(42px);
        @media (max-width: 992px) {
            top: 180px;
        }
    }

    .welcome::before {
        content: url(../../assets/images/column.png);
        position: absolute;
        left: 140px;
        top: -160px;
        transform: matrix(1, 0, 0, -1, 0, 0);
        @media (max-width: 767px) {
            display: none;
        }
}

    .welcome::after {
        content: url(../../assets/images/column.png);
        position: absolute;
        right: 140px;
        top: -160px;
        transform: matrix(1, 0, 0, -1, 0, 0);
        @media (max-width: 767px) {
            display: none;
        }
    }
</style>