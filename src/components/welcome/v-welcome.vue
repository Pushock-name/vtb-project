<template lang="">
    <div class="v-welcome">
        <div class="container">
            <div class="v-logo-container">
                <v-logo class="welcome__logo"/>
            </div>
            <div class="welcome"> 
                <v-modal-resolve v-if="showModalResolve" :wishMessage="wishMessage" @closeModalResolveWindow="closeModalResolveWindow" />
                <v-modal-reject v-if="showModalReject" @closeModalRejectWindow="closeModalRejectWindow" />
                <div class="train"><img src="../../assets/images/train.png" alt="train"></div>
                <div class="welcome-content">
                    <div>
                        <h1>Необычные идеи<br>
                        для поездок</h1>
                    </div>
                    <div><h3>Введите время отправления и укажите станцию<br> 
                        прибытия. Мы подскажем, как сделать<br> 
                        привычный путь веселее.</h3>
                    </div>
                        <form class="welcome-content__form">
                            <div class="form__time__block">
                                <div class="hour__block">
                                    <label>Час</label>
                                    <input v-model="hour" @focus="insertMinuteMetrika" class="hour" type="text" maxlength="2" @input="validationHour" placeholder="00">
                                </div>
                                <div class="delim">:</div>
                                <div class="minute__block">
                                    <label>Минута</label>
                                    <input v-model="minute" @focus="insertHourMetrika" class="minute" type="text" maxlength="2" @input="validationMinute" placeholder="00">
                                </div>
                            </div>
                            <div class="station__block">
                                <label>Станция прибытия</label>    
                                <input v-model="station" @focus="insertStationMetrika" class="station" type="text" maxlength="14" @input="validationStation" placeholder="Ваша станция">
                            </div>
                        </form>    
                        <button @click="onSubmit" class="submit__btn">Поехали!</button> 
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import vLogo from '../common/v-logo.vue'
import vModalResolve from './modalResolve/v-modal-resolve.vue'
import vModalReject from './modalReject/v-modal-reject.vue'

export default {
    name: 'v-welcome',
        components: {
            vLogo,
            vModalResolve, 
            vModalReject
        },
        props: {},
        data () {
            return {
                hour: '',
                minute: '',
                station: '',
                hours: {
    "0": "С чувством, толком, расстановкой", 
    "1": "С огоньком в глазах",
    "2": "Заинтересованно",
    "3": "С энтузиазмом",
    "4": "С горящими глазами", 
    "5": "Бодро",
    "6": "С любопытством", 
    "7": "С любовью",
    "8": "С нежностью",
    "9": "Задорно",
    "00": "С чувством, толком, расстановкой", 
    "01": "С огоньком в глазах",
    "02": "Заинтересованно",
    "03": "С энтузиазмом",
    "04": "С горящими глазами", 
    "05": "Бодро",
    "06": "С любопытством", 
    "07": "С любовью",
    "08": "С нежностью",
    "09": "Задорно",
    "10": "Неспешно",
    "11": "С умным видом", 
    "12": "Задумчиво",
    "13": "Одухотворённо", 
    "14": "Радостно", 
    "15": "Воодушевлённо",
    "16": "С таинственным видом", 
    "17": "Сосредоточенно",
    "18": "Увлечённо",
    "19": "Напевая",
    "20": "Со всей ответственностью",
    "21": "С торжествующим видом",
    "22": "Уверенно", 
    "23": "С видом победителя"
},
                minutes: {
    "0": "разгадывать кроссворд",
    "1": "читать книгу", 
    "2": "рассматривать пейзажи за окном",
    "3": "изучать попутчиков", 
    "4": "проходить любимую игру на телефоне", 
    "5": "вести жаркую полемику с друзьями в чате",
    "6": "составлять план покорения мира", 
    "7": "считать ворон за окном", 
    "8": "строить планы на отпуск",
    "9": "договариваться с друзьями о встрече",                 
    "00": "разгадывать кроссворд",
    "01": "читать книгу", 
    "02": "рассматривать пейзажи за окном",
    "03": "изучать попутчиков", 
    "04": "проходить любимую игру на телефоне", 
    "05": "вести жаркую полемику с друзьями в чате",
    "06": "составлять план покорения мира", 
    "07": "считать ворон за окном", 
    "08": "строить планы на отпуск",
    "09": "договариваться с друзьями о встрече", 
    "10": "читать канал с советами по психологии",
    "11": "смотреть новую серию любимого сериала", 
    "12": "смотреть фильм с рейтингом от 8,5", 
    "13": "читать биографию любимого актёра",
    "14": "вспоминать приятные моменты своей жизни",
    "15": "смотреть курсы, на которые могли бы пойти", 
    "16": "сравнивать цены на новые кроссовки",
    "17": "думать о своих лучших качествах",
    "18": "представлять себя в стилистике XIX века",
    "19": "искать направления для путешествий",
    "20": "думать о том, каким замечательным будет лето", 
    "21": "искать отборные мемы", 
    "22": "ловить на себе взгляды попутчиков",
    "23": "проходить тест на тип личности", 
    "24": "планировать поход в ресторан",
    "25": "читать интересные факты о любимом фильме", 
    "26": "выбирать отель на лето", 
    "27": "проходить онлайн-квиз",
    "28": "выбирать интересное событие в афише",
    "29": "составлять список покупок",
    "30": "думать о том, чем вкусным себя сегодня побаловать",
    "31": "составлять список дел до конца года",
    "32": "прислушиваться к своим желаниям", 
    "33": "думать: «Кто, если не я?»",
    "34": "думать, чем бы себя сегодня порадовать", 
    "35": "искать интересную игру на телефоне",
    "36": "чистить память телефона", 
    "37": "писать в заметках эссе о новом фильме",
    "38": "планировать вечеринку", 
    "39": "смотреть, какие ретроспективы идут в кино",
    "40": "рассказывать соседу необычную историю из детства",
    "41": "обсуждать с соседом последние новинки техники", 
    "42": "смотреть, во что одеты люди за окном", 
    "43": "сёрфить по соцсетям",
    "44": "думать, чего бы хотелось прямо сейчас",
    "45": "придумывать сюрприз для родителей", 
    "46": "узнавать английские идиомы", 
    "47": "составлять список интересных книг",
    "48": "смотреть фильм 60-х годов",
    "49": "слушать увертюры Баха",
    "50": "планировать, каким спортом займётесь в этом месяце", 
    "51": "слушать любимый трек", 
    "52": "смотреть подборку интересных вещей для дома", 
    "53": "представлять, каким будет отпуск мечты",
    "54": "выбирать студию массажа",
    "55": "планировать долгую прогулку на свежем воздухе",
    "56": "запоминать новые английские слова", 
    "57": "делиться с друзьями смешными картинками", 
    "58": "рассматривать свои лучшие фотографии",
    "59": "записывать названия интересных сериалов"
},
                stations: {
    "А": "в течение всего пути",
    "Б": "в начале пути" ,
    "В": "каждые 10 минут", 
    "Г":"пока стучат колёса", 
    "Д": "во время остановок", 
    "Е": "пока объявляют следующую остановку", 
    "Ё": "пока поезд подъезжает к вашей остановке",
    "Ж": "спустя 5 минут, как тронулся поезд",
    "З": "за 20 минут до прибытия",
    "И": "при въезде в туннель",
    "Й": "при выезде из туннеля",
    "К": "пока все смотрят в телефоны", 
    "Л": "под разговоры соседей",
    "М": "пока несётся поезд",
    "Н": "в середине пути",
    "О": "в конце пути",
    "П": "и чувствовать ритм поезда",
    "Р": "и улыбаться", 
    "С": "когда в вагон входит новая волна пассажиров",
    "Т": "и смотреть на небо",
    "У": "пока проверяют билеты",
    "Ф": "и чувствовать, как поднимается настроение", 
    "Х": "во время посадки",
    "Ц": "на каждой остановке",
    "Ч": "пока держитесь за поручень",
    "Ш": "если светит солнце", 
    "Щ": "пока за окном дождь",
    "Э": "пока поезд стремится к остановке",
    "Ю": "пока за окном мелькают деревья",
    "Я": "как будто уже дома"
},
                showModalResolve: false,
                showModalReject: false
            }      
        },    
        computed: {
            wishMessage () {
                return `${this.hourCompare()} ${this.minuteCompare()} ${this.stationCompare()}`
            }
        },
        methods: {
            onSubmit () {
                this.wishMessage
                this.poehaloMetrika()
                if (!this.wishMessage.toUpperCase().includes('UNDEFINED')) {
                    this.showModalResolve = true 
                } else {
                    this.showModalReject = true
                } 
            },
            closeModalResolveWindow () {
                this.showModalResolve = false
            },
            closeModalRejectWindow () {
                this.showModalReject = false
            },
            hourCompare() {
                return this.hours[this.hour]
            },
            minuteCompare() {
                return this.minutes[this.minute]
            },
            stationCompare() {
                let str = this.station.slice(0, 1).toUpperCase()
                return this.stations[str]
            },
            validationHour () {
                this.hour = this.hour.replace( /[^\d]/g,' ')
            },
            validationMinute () {
                this.minute = this.minute.replace( /[^\d]/g, ' ')
                
                
            },
            validationStation () {
                this.station = this.station.replace(/[^а-яё\s]/gi, '')
            },
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
        padding-top: 30px;
        @media (max-width: 767px) {
            background-color: #191919;
            background-image: url(../../assets/images/background2.png);
            padding-top: 32px;
        }
    }

    .v-logo-container {
        display: flex;
        flex-direction: row;
        align-items: flex-end;
        justify-content: center;
        @media (max-width: 767px) {
            justify-content: flex-start;
        }
    }

    .welcome__logo {
        background: #000000;
        border-radius: 20px 20px 0px 0px;
        padding: 20px 30px 0px 30px;
        @media (max-width: 767px) {
        background: none;
        border-radius: 0;
        padding: 0;
        }
    }

    .welcome {
        position: relative;
        margin-bottom: 102px;
        background: #191919;
        border: 40px solid #000000;
        border-radius: 40px;
        background-image: url(../../assets/images/background2.png);
        @media (max-width: 767px) {
            margin-top: 63px;
            margin-bottom: 0px;
            padding-bottom: 14px;
            border: none;
        }
    }

    .train {
        position: absolute;
        right: 0px;
        top: -20px;
        z-index: 1;
        width: 40%;
        height: 40%;
        @media (max-width: 1200px) {
            width: 37%;
            height: 37%;
        }
        @media (max-width: 992px) {
            width: 35%;
            height: 35%;
            top: 270px;
        }
        @media (max-width: 767px) {
            width: 32%;
            height: 32%;
            top: 5px;
        }
    }

    .welcome-content {
        margin-top: 41px;
        margin-left: 36px;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        gap: 32px;
        padding-bottom: 43px;
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
        font-weight: 500;
        font-size: 27px;
        line-height: 250%;
        color:  #FFFFFF;
        @media (max-width: 767px) {
            width: 26px;
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

    .station::placeholder, .hour::placeholder, .minute::placeholder { 
        color: #FFFFFF;
        opacity: 1; 
    }

    .welcome-content__form label {
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
        font-weight: 500;
        font-size: 18px;
        line-height: 30px;
        color: #000000;
    }

    .welcome::before {
        content: url(../../assets/images/column.png);
        position: absolute;
        left: 140px;
        top: -160px;
        transform: matrix(1, 0, 0, -1, 0, 0);
        @media (max-width: 992px) {
            display: none;
        }
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
        @media (max-width: 992px) {
            display: none;
        }
        @media (max-width: 767px) {
            display: none;
        }
    }
</style>