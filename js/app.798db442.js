(function(){"use strict";var t={966:function(t,e,s){var a=s(144),i=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("v-app-wrapper")],1)},o=[],n=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-app-wrapper"},[e("v-welcome"),e("v-animation"),e("v-card"),e("v-offer"),e("v-footer")],1)},r=[],l=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-welcome"},[e("div",{staticClass:"container"},[e("div",{staticClass:"v-logo-container"},[e("v-logo",{staticClass:"welcome__logo"})],1),e("div",{staticClass:"welcome"},[t.showModalResolve?e("v-modal-resolve",{attrs:{wishMessage:t.wishMessage,messages:t.messages},on:{closeModalResolveWindow:t.closeModalResolveWindow}}):t._e(),t.showModalReject?e("v-modal-reject",{attrs:{rejectMessage:t.rejectMessage},on:{closeModalRejectWindow:t.closeModalRejectWindow}}):t._e(),t._m(0),e("div",{staticClass:"welcome-content"},[t._m(1),t._m(2),e("form",{staticClass:"welcome-content__form"},[e("div",{staticClass:"form__time__block"},[e("div",{staticClass:"hour__block"},[e("label",[t._v("Час")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.hour,expression:"hour"}],staticClass:"hour",attrs:{type:"text",maxlength:"2",placeholder:"ЧЧ"},domProps:{value:t.hour},on:{focus:t.insertMinuteMetrika,input:[function(e){e.target.composing||(t.hour=e.target.value)},t.validationHour]}}),e("div",{staticClass:"validation",class:{hide:t.isHourHide}},[e("img",{attrs:{src:s(204),alt:"validation"}}),e("span",[t._v("только цифры")])])]),e("div",{staticClass:"delim"},[t._v(":")]),e("div",{staticClass:"minute__block"},[e("label",[t._v("Минута")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.minute,expression:"minute"}],staticClass:"minute",attrs:{type:"text",maxlength:"2",placeholder:"ММ"},domProps:{value:t.minute},on:{focus:t.insertHourMetrika,input:[function(e){e.target.composing||(t.minute=e.target.value)},t.validationMinute]}}),e("div",{staticClass:"validation",class:{hide:t.isMinuteHide}},[e("img",{attrs:{src:s(204),alt:"validation"}}),e("span",[t._v("только цифры")])])])]),e("div",{staticClass:"station__block"},[e("label",[t._v("Первая буква станции")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.station,expression:"station"}],staticClass:"station",attrs:{type:"text",maxlength:"1",placeholder:"Ваша станция"},domProps:{value:t.station},on:{focus:t.insertStationMetrika,input:[function(e){e.target.composing||(t.station=e.target.value)},t.validationStation]}}),e("div",{staticClass:"validation",class:{hide:t.isStationHide}},[e("img",{attrs:{src:s(204),alt:"validation"}}),e("span",[t._v("используйте русский алфавит")])])])]),e("div",{staticClass:"submit__btn__container"},[e("button",{staticClass:"submit__btn",on:{click:t.onSubmit}},[t._v("Поехали!")])])])],1)])])},c=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"train"},[e("img",{attrs:{src:s(500),alt:"train"}})])},function(){var t=this,e=t._self._c;return e("div",[e("h1",[t._v("Необычные идеи"),e("br"),t._v(" для поездок")])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Введите время отправления и укажите первую"),e("br"),t._v(" букву станции прибытия. Мы подскажем, "),e("br"),t._v(" как сделать привычный путь веселее.")])])}],d=function(){var t=this;t._self._c;return t._m(0)},u=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-logo"},[e("a",{attrs:{href:"https://www.vtb.promo/daily?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_logo_cpc_rf_p1_feb_apr"}},[e("img",{attrs:{src:s(379),alt:"logoVTB"}})]),e("div",{staticClass:"divider"}),e("a",{attrs:{href:"https://rasp.yandex.ru/"}},[e("img",{attrs:{src:s(766),alt:"logoYandex"}})])])}],v={name:"v-logo",props:{},data(){return{}},computed:{},methods:{},watch:{}},m=v,p=s(1),_=(0,p.Z)(m,d,u,!1,null,null,null),h=_.exports,f=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"v-modal-bg"},[e("div",{staticClass:"v-modal-reject"},[e("img",{staticClass:"v-modal-reject__close",attrs:{src:s(674),alt:"close"},on:{click:t.closeModalRejectWindow}}),e("h2",[t._v("Подсказка")]),e("p",[t._v(t._s(t.rejectMessage))]),e("button",{staticClass:"v-modal-reject__btn",on:{click:t.closeModalRejectWindow}},[t._v("Попробовать ещё")])])])])},g=[],C={name:"v-modal-reject",methods:{closeModalRejectWindow(){this.$emit("closeModalRejectWindow")}},props:["rejectMessage"]},w=C,A=(0,p.Z)(w,f,g,!1,null,null,null),k=A.exports,M=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"v-modal-bg"},[e("div",{staticClass:"v-modal-resolve"},[e("img",{staticClass:"v-modal-resolve__close",attrs:{src:s(674),alt:"close"},on:{click:t.closeModalResolveWindow}}),e("span",[t._v("Итак, что вы можете делать в пути:")]),e("h2",[t._v(t._s(t.wishMessage))]),e("p",[t._v(t._s(t.randomMessage)+" Оформите бесплатную дебетовую карту для жизни.")]),e("a",{staticClass:"v-modal-resolve__btn",attrs:{href:"https://www.vtb.promo/daily?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_button_more_cpc_rf_p1_feb_apr"},on:{click:t.moreDetailsMetrika}},[t._v("Подробнее")])])])])},b=[],x={name:"v-modal-resolve",props:["wishMessage","messages"],methods:{moreDetailsMetrika(){this.$metrika.reachGoal("more_details_button")},closeModalResolveWindow(){this.$emit("closeModalResolveWindow")},randomInteger(t,e){let s=t-.5+Math.random()*(e-t+1);return Math.round(s)}},computed:{randomMessage(){let t=this.randomInteger(0,4);return this.messages[t]}}},y=x,R=(0,p.Z)(y,M,b,!1,null,null,null),H=R.exports,B={name:"v-welcome",components:{vLogo:h,vModalResolve:H,vModalReject:k},props:{},data(){return{hour:"",minute:"",station:"",rejectMessage:"",messages:["И помнить, что с картой ВТБ каждый день вы можете получать кешбэк до 30% у партнёров банка.","И помнить, что при оплате картой ВТБ можно ежедневно получать кешбэк 2% с оплаты поездок в траспорте, покупок в супермаркетах и походов в рестораны.","И помнить, что обслуживание карты ВТБ — полностью бесплатное и без скрытых комиссий.","И помнить, что с картой ВТБ каждый день можно совершать любые платежи и переводы без комиссии.","И помнить, что с картой ВТБ можно совершать все важные платежи без комиссии."],hours:{0:"С чувством, толком, расстановкой",1:"С огоньком в глазах",2:"Заинтересованно",3:"С энтузиазмом",4:"С горящими глазами",5:"Бодро",6:"С любопытством",7:"С любовью",8:"С нежностью",9:"Задорно","00":"С чувством, толком, расстановкой","01":"С огоньком в глазах","02":"Заинтересованно","03":"С энтузиазмом","04":"С горящими глазами","05":"Бодро","06":"С любопытством","07":"С любовью","08":"С нежностью","09":"Задорно",10:"Неспешно",11:"С умным видом",12:"Задумчиво",13:"Одухотворённо",14:"Радостно",15:"Воодушевлённо",16:"С таинственным видом",17:"Сосредоточенно",18:"Увлечённо",19:"Напевая",20:"Со всей ответственностью",21:"С торжествующим видом",22:"Уверенно",23:"С видом победителя"},minutes:{0:"разгадывать кроссворд",1:"читать книгу",2:"рассматривать пейзажи за окном",3:"изучать попутчиков",4:"проходить любимую игру на телефоне",5:"вести жаркую полемику с друзьями в чате",6:"составлять план покорения мира",7:"считать ворон за окном",8:"строить планы на отпуск",9:"договариваться с друзьями о встрече","00":"разгадывать кроссворд","01":"читать книгу","02":"рассматривать пейзажи за окном","03":"изучать попутчиков","04":"проходить любимую игру на телефоне","05":"вести жаркую полемику с друзьями в чате","06":"составлять план покорения мира","07":"считать ворон за окном","08":"строить планы на отпуск","09":"договариваться с друзьями о встрече",10:"читать канал с советами по психологии",11:"смотреть новую серию любимого сериала",12:"смотреть фильм с рейтингом от 8,5",13:"читать биографию любимого актёра",14:"вспоминать приятные моменты своей жизни",15:"смотреть курсы, на которые могли бы пойти",16:"сравнивать цены на новые кроссовки",17:"думать о своих лучших качествах",18:"представлять себя в стилистике XIX века",19:"искать направления для путешествий",20:"думать о том, каким замечательным будет лето",21:"искать отборные мемы",22:"ловить на себе взгляды попутчиков",23:"проходить тест на тип личности",24:"планировать поход в ресторан",25:"читать интересные факты о любимом фильме",26:"выбирать отель на лето",27:"проходить онлайн-квиз",28:"выбирать интересное событие в афише",29:"составлять список покупок",30:"думать о том, чем вкусным себя сегодня побаловать",31:"составлять список дел до конца года",32:"прислушиваться к своим желаниям",33:"думать: «Кто, если не я?»",34:"думать, чем бы себя сегодня порадовать",35:"искать интересную игру на телефоне",36:"чистить память телефона",37:"писать в заметках эссе о новом фильме",38:"планировать вечеринку",39:"смотреть, какие ретроспективы идут в кино",40:"рассказывать соседу необычную историю из детства",41:"обсуждать с соседом последние новинки техники",42:"смотреть, во что одеты люди за окном",43:"сёрфить по соцсетям",44:"думать, чего бы хотелось прямо сейчас",45:"придумывать сюрприз для родителей",46:"узнавать английские идиомы",47:"составлять список интересных книг",48:"смотреть фильм 60-х годов",49:"слушать увертюры Баха",50:"планировать, каким спортом займётесь в этом месяце",51:"слушать любимый трек",52:"смотреть подборку интересных вещей для дома",53:"представлять, каким будет отпуск мечты",54:"выбирать студию массажа",55:"планировать долгую прогулку на свежем воздухе",56:"запоминать новые английские слова",57:"делиться с друзьями смешными картинками",58:"рассматривать свои лучшие фотографии",59:"записывать названия интересных сериалов"},stations:{"А":"в течение всего пути","Б":"в начале пути","В":"каждые 10 минут","Г":"пока стучат колёса","Д":"во время остановок","Е":"пока объявляют следующую остановку","Ё":"пока поезд подъезжает к вашей остановке","Ж":"спустя 5 минут, как тронулся поезд","З":"за 20 минут до прибытия","И":"при въезде в туннель","Й":"при выезде из туннеля","К":"пока все смотрят в телефоны","Л":"под разговоры соседей","М":"пока несётся поезд","Н":"в середине пути","О":"в конце пути","П":"и чувствовать ритм поезда","Р":"и улыбаться","С":"когда в вагон входит новая волна пассажиров","Т":"и смотреть на небо","У":"пока проверяют билеты","Ф":"и чувствовать, как поднимается настроение","Х":"во время посадки","Ц":"на каждой остановке","Ч":"пока держитесь за поручень","Ш":"если светит солнце","Щ":"пока за окном дождь","Э":"пока поезд стремится к остановке","Ю":"пока за окном мелькают деревья","Я":"как будто уже дома","Ы":"error","Ь":"error","Ъ":"error"},showModalResolve:!1,showModalReject:!1,isHourHide:!0,isMinuteHide:!0,isStationHide:!0}},computed:{hourCompare(){return this.hours[this.hour]},minuteCompare(){return this.minutes[this.minute]},stationCompare(){let t=this.station.toUpperCase();return this.stations[t]},wishMessage(){return`${this.hourCompare} ${this.minuteCompare} ${this.stationCompare}`}},methods:{onSubmit(){this.wishMessage,this.poehaloMetrika(),this.wishMessage.toUpperCase().includes("ERROR")?(this.rejectMessage="Станции на эту букву нет. Пожалуйста, попробуйте ещё раз.",this.showModalReject=!0):this.wishMessage.toUpperCase().includes("UNDEFINED")?(this.rejectMessage="Кажется, вы ввели не все значения. Пожалуйста, попробуйте ещё раз.",this.showModalReject=!0):this.showModalResolve=!0},closeModalResolveWindow(){this.showModalResolve=!1},closeModalRejectWindow(){this.showModalReject=!1},validationHour(t){"deleteContentBackward"!==t.inputType&&(this.hour=this.hour.replace(/[^\d]/g,""),this.isHourHide=!0,this.hour||(this.isHourHide=!1))},validationMinute(t){"deleteContentBackward"!==t.inputType&&(this.minute=this.minute.replace(/[^\d]/g,""),this.isMinuteHide=!0,this.minute||(this.isMinuteHide=!1))},validationStation(t){"deleteContentBackward"!==t.inputType&&(this.station=this.station.replace(/[^а-яё\s]/gi,""),this.isStationHide=!0,this.station||(this.isStationHide=!1))},poehaloMetrika(){this.$metrika.reachGoal("poehalo_button")},insertMinuteMetrika(){this.$metrika.reachGoal("insert_minute_field")},insertHourMetrika(){this.$metrika.reachGoal("insert_hour_field")},insertStationMetrika(){this.$metrika.reachGoal("insert_station_field")}}},j=B,I=(0,p.Z)(j,l,c,!1,null,null,null),S=I.exports,Q=function(){var t=this;t._self._c;return t._m(0)},N=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-animation"},[e("span",{staticClass:"marquee"},[t._v("Кешбэк 2% на категорию Транспорт")])])}],P={name:"v-animation",components:{},props:{},data(){return{}},computed:{},methods:{},watch:{}},L=P,Z=(0,p.Z)(L,Q,N,!1,null,null,null),U=Z.exports,Y=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-card"},[e("div",{staticClass:"container"},[e("div",{staticClass:"card__image__hook"},[t._m(0),t.showCardModalWindow?e("v-card-modal-window",{on:{onCloseCardModalWindow:t.onCloseCardModalWindow}}):t._e(),e("div",{staticClass:"card"},[t._m(1),t._m(2),t._m(3),e("div",{staticClass:"card__items"},[e("div",{staticClass:"card__item"},[e("span",[t._v("-")]),e("p",[e("button",{staticClass:"card__item__link",on:{click:t.onShowCardModalWindow}},[t._v("Кешбэк*")]),t._v(" до 30% за покупки у партнёров банка")])]),e("div",{staticClass:"card__item"},[e("span",[t._v("-")]),e("p",[e("button",{staticClass:"card__item__link",on:{click:t.onShowCardModalWindow}},[t._v("Кешбэк 2%*")]),t._v(" в самых популярных категориях:"),e("br"),t._v(" транспорт, супермаркеты и рестораны")])]),t._m(4),t._m(5)])])],1)])])},D=[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card__image"},[e("img",{attrs:{src:s(82),alt:"card"}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card__title"},[e("h2",[t._v("Решения от ВТБ"),e("br"),t._v(" на каждый день")])])},function(){var t=this,e=t._self._c;return e("div",[e("h3",[t._v("Карта ВТБ подойдёт для любых трат, будь то покупка"),e("br"),t._v(" билетов на электричку или любимого кофе")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card__image__mobile"},[e("img",{attrs:{src:s(962),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card__item"},[e("span",[t._v("-")]),e("p",[t._v("Возможность переводить накопленный кешбэк в рубли,"),e("br"),t._v(" тратить на путешествия или другие товары в программе"),e("br"),t._v(" лояльности «Мультибонус»")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card__item"},[e("span",[t._v("-")]),e("p",[t._v("Бесплатное обслуживание — и никаких комиссий за оплату"),e("br"),t._v(" ЖКУ и переводы в другие банки")])])}],T=function(){var t=this,e=t._self._c;return e("div",{staticClass:"container"},[e("div",{staticClass:"v-card-modal-window"},[e("img",{staticClass:"v-card-modal-window__close",attrs:{src:s(674),alt:"close"},on:{click:t.onCloseCardModalWindow}}),e("p",[t._v("Кешбэк начисляется мультибонусами, которые можно: конвертировать в рубли по курсу 1 мультибонус = 0,85 рублей или обменять на товары, путешествия, сертификаты и многое другое в каталоге программы «Мультибонус». Максимальная сумма кешбэка в месяц – 2 000 мультибонусов. Максимальная сумма кешбэка за покупки у партнеров Банка не ограничена.")])])])},W=[],J={name:"v-card-modal-window",methods:{onCloseCardModalWindow(){this.$emit("onCloseCardModalWindow")}}},G=J,q=(0,p.Z)(G,T,W,!1,null,null,null),E=q.exports,F={name:"v-card",components:{vCardModalWindow:E},props:{},data(){return{showCardModalWindow:!1}},computed:{},methods:{onShowCardModalWindow(){this.showCardModalWindow=!0},onCloseCardModalWindow(){this.showCardModalWindow=!1}}},O=F,z=(0,p.Z)(O,Y,D,!1,null,null,null),X=z.exports,K=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-offer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"offer"},[t._m(0),e("h3",{staticClass:"offer__description"},[t._v("Чтобы каждый день получать выгоду:")]),t._m(1),t._m(2),e("a",{staticClass:"offer__card-issue__btn",attrs:{href:"https://www.vtb.promo/daily?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_button_issue_card_cpc_rf_p1_feb_apr"},on:{click:t.cardIssueMetrika}},[t._v("Оформить")]),e("div",{staticClass:"offer__card-issue__description"},[t._v(" Выпуск и обслуживание дебетовой карты — 0 ₽. Кешбэк – возврат части стоимости покупки в виде мультибонусов на бонусный счет участника программы лояльности «Мультибонус». Мультибонусы могут быть конвертированы в рубли из расчета 1 мультибонус = 0,85 рубля. 2% кешбэка начисляются за покупки по карте в категориях «Рестораны», «Транспорт», «Супермаркеты». Максимальная сумма кешбэка в месяц – 2 000 мультибонусов. Дополнительно к вознаграждению от Банка участник программы лояльности «Мультибонус» может получить до 30% кешбэка за покупки у партнёров программы на бонусный счет. Максимальная сумма кешбэка за покупки у партнеров Банка не ограничена. Комиссия за платежи через ВТБ Онлайн не взимается банком. Возможно списание комиссии со стороны Поставщика Услуг или Агрегатора. Бесплатные переводы по номеру телефона на сумму до 100 000 руб. в месяц с использованием Системы быстрых платежей в ВТБ Онлайн. Подробную информацию о программе лояльности, начислении и выплате кешбэка, условиях предоставления продуктов банка и о тарифах вы можете получить на официальном сайте vtb.ru, а также по первому требованию во всех подразделениях банка. Банк ВТБ (ПАО). Генеральная лицензия ЦБ РФ №1000. ")])])])])},V=[function(){var t=this,e=t._self._c;return e("h2",[t._v("Оформите карту"),e("br"),t._v(" всего за 3 шага")])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"envelope"},[e("img",{attrs:{src:s(476),alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"offer__items"},[e("div",{staticClass:"offer__item"},[e("span",[t._v("1")]),e("p",[t._v("Заполните "),e("a",{staticClass:"offer__item__link",attrs:{href:"https://online.vtb.ru/debit-card/step1/multicard-ready?code=media_rasp_yandex_dbdk&utm_source=rasp_yandex&utm_medium=media&utm_campaign=media_dbdk_rasp_yandex_link_text_online_application_cpc_rf_p1_feb_apr"}},[t._v("онлайн-заявку")]),t._v(" —"),e("br"),t._v(" это займёт не больше минуты.")])]),e("div",{staticClass:"offer__item"},[e("span",[t._v("2")]),e("p",[t._v("Выберите способ получения:"),e("br"),t._v(" самостоятельно в отделении ВТБ"),e("br"),t._v(" или бесплатно курьером.")])]),e("div",{staticClass:"offer__item offer__item3"},[e("span",[t._v("3")]),e("p",[t._v("Подключите программу лояльности"),e("br"),t._v(" «Мультибонус» и получайте кешбэк"),e("br"),t._v(" от покупок.")])])])}],$={name:"v-offer",components:{},props:{},data(){return{}},computed:{},methods:{cardIssueMetrika(){this.$metrika.reachGoal("card_issue_button")}},watch:{}},tt=$,et=(0,p.Z)(tt,K,V,!1,null,null,null),st=et.exports,at=function(){var t=this,e=t._self._c;return e("div",{staticClass:"v-footer"},[e("div",{staticClass:"container"},[e("div",{staticClass:"footer"},[e("v-logo"),t._m(0)],1)])])},it=[function(){var t=this,e=t._self._c;return e("nav",{staticClass:"footer__nav"},[e("div",{staticClass:"footer__nav__link"},[e("a",{attrs:{href:"https://yandex.ru/support/rasp"}},[t._v("Есть вопросы?")])]),e("div",{staticClass:"footer__nav__link"},[e("a",{attrs:{href:"https://yandex.ru/support/rasp/troubleshooting.html"}},[t._v("Обратная связь")])])])}],ot={name:"v-footer",components:{vLogo:h},props:{},data(){return{}},computed:{},methods:{},watch:{}},nt=ot,rt=(0,p.Z)(nt,at,it,!1,null,null,null),lt=rt.exports,ct={name:"v-app-wrapper",components:{vWelcome:S,vAnimation:U,vCard:X,vOffer:st,vFooter:lt},props:{},data(){return{}},computed:{},methods:{},watch:{},mounted(){}},dt=ct,ut=(0,p.Z)(dt,n,r,!1,null,null,null),vt=ut.exports,mt={name:"App",components:{vAppWrapper:vt},mounted(){}},pt=mt,_t=(0,p.Z)(pt,i,o,!1,null,null,null),ht=_t.exports,ft=s(849),gt=s.n(ft);a.ZP.config.productionTip=!1,new a.ZP({render:t=>t(ht)}).$mount("#app"),a.ZP.use(gt(),{id:92639836,env:"production",clickmap:!0,trackLinks:!0,accurateTrackBounce:!0})},674:function(t,e,s){t.exports=s.p+"img/close.ed98b482.svg"},204:function(t,e,s){t.exports=s.p+"img/validation.28c90e34.svg"},962:function(t,e,s){t.exports=s.p+"img/cardmobile.e524a037.png"},82:function(t,e,s){t.exports=s.p+"img/cart.bdd856d2.png"},476:function(t,e,s){t.exports=s.p+"img/envelope.d3807805.png"},379:function(t){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFQAAAAfCAYAAAB59OpuAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAKuSURBVHgB7ZnRcZtAEIZ/mLxHqSCnyeTdqcCkgqgDS2kg6SBKBbYbiOQK7A5EKgguIAOpIOQ90WXXgI3hsE6w6GDkb2YlOI7Tsrrb3Vs8mPj28wKe/wlyTLGYJjgCfGOr53+AHNGxGJOpG3QVB/SpIIX2L3BE1A2q9RySeNvveOaZtniPzlbxhD4nkOKIfGfBi0dnWlN0984gQ0ryynRBa72kry/YTZLL2vO8q8oYG/oKIMMUWdzYoB0J6cdjlHzoKlaCxmRu0B2FzGhrMmBMoiBPSMZI0I2wOCgFpX8BRPl7BVkUyaYHo67RnftnfVjy2g/IoyaQIcXibQh5FMnnXKTomoXwcg/hEvahuk5Q6aNIrg39fluMH1fuiS3uCQy/NceeZDN0gNGd/Ro90AKZDy3rNmFjC/i9XiiW/A/I7Y4SZFGzM2S0lIwXQS6a945Ps/MEklvN7fYS/ZIOdXYyPjkPSQdPI/oS6dIdeUQPKs1i4/dBseRDSKC3t/j4JkE7ZpWU6DXq0Twh+YrDcUY6nVba/pBwkLt1Ht0LGqL8LmJtmYNquShvo9OsPI6P8XA5QN+pSDi1u19JYzLoOSm+0f1sP7vCunFwrxRH3MLpUVo6V6hnHwHJNck7HIY16jupgMRU8zgneQ8XaIudUt5P6bo/ZJY7xo+FfOh8j77MZNBLPveZC8OlUzgkj+6h4ZIagw+NDG0ncM8vQ9uwZ+gTyNUd2vPS1DgGg84MbSkckmcaplWSDtqgeaAyvSqJ4Ig8PeJMQ1UucV00GlLaxAlydeaphr5rHAbOL8t/6FNlzruq/ZAMaluTTaov7HpkH52WfDC2oMRL3U3y3EyIkk5DmqFNsBtgQ97QLOi71mpLoVPt9bYHB/COApapT5uCiDbs923G0XZ1Ai5wN2YZ/wEYwxfEfRM91wAAAABJRU5ErkJggg=="},766:function(t){t.exports="data:image/png;base64,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"},500:function(t,e,s){t.exports=s.p+"img/train.933e65a9.png"}},e={};function s(a){var i=e[a];if(void 0!==i)return i.exports;var o=e[a]={exports:{}};return t[a].call(o.exports,o,o.exports,s),o.exports}s.m=t,function(){var t=[];s.O=function(e,a,i,o){if(!a){var n=1/0;for(d=0;d<t.length;d++){a=t[d][0],i=t[d][1],o=t[d][2];for(var r=!0,l=0;l<a.length;l++)(!1&o||n>=o)&&Object.keys(s.O).every((function(t){return s.O[t](a[l])}))?a.splice(l--,1):(r=!1,o<n&&(n=o));if(r){t.splice(d--,1);var c=i();void 0!==c&&(e=c)}}return e}o=o||0;for(var d=t.length;d>0&&t[d-1][2]>o;d--)t[d]=t[d-1];t[d]=[a,i,o]}}(),function(){s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,{a:e}),e}}(),function(){s.d=function(t,e){for(var a in e)s.o(e,a)&&!s.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})}}(),function(){s.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){s.p="/vtb-project/"}(),function(){var t={143:0};s.O.j=function(e){return 0===t[e]};var e=function(e,a){var i,o,n=a[0],r=a[1],l=a[2],c=0;if(n.some((function(e){return 0!==t[e]}))){for(i in r)s.o(r,i)&&(s.m[i]=r[i]);if(l)var d=l(s)}for(e&&e(a);c<n.length;c++)o=n[c],s.o(t,o)&&t[o]&&t[o][0](),t[o]=0;return s.O(d)},a=self["webpackChunkvtb_project"]=self["webpackChunkvtb_project"]||[];a.forEach(e.bind(null,0)),a.push=e.bind(null,a.push.bind(a))}();var a=s.O(void 0,[998],(function(){return s(966)}));a=s.O(a)})();
//# sourceMappingURL=app.798db442.js.map