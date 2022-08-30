const contacts = [
    {
        name: 'Michele',
        avatar: '_1',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 3,
                date: '10/01/2020 16:15:22',
                message: 'Tutto fatto!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Sofia',
        avatar: '_2',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 2,
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 3,
                date: '20/03/2020 16:35:00',
                message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                status: 'sent',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Samuele',
        avatar: '_3',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 2,
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 3,
                date: '28/03/2020 16:15:22',
                message: 'Ah scusa!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Alessandro B.',
        avatar: '_4',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Si, ma preferirei andare al cinema',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Alessandro L.',
        avatar: '_5',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Va bene, stasera la sento',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Claudia',
        avatar: '_6',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 3,
                date: '10/01/2020 15:51:00',
                message: 'Nessuna nuova, buona nuova',
                status: 'sent',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Federico',
        avatar: '_7',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'Grazie per avermelo ricordato, le scrivo subito!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Davide',
        avatar: '_8',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 3,
                date: '27/08/2022 15:30:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Luca',
        avatar: '_1',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 3,
                date: '20/08/2022 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Enrico',
        avatar: '_3',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 3,
                date: '21/08/2022 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Alex',
        avatar: '_4',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 3,
                date: '26/08/2022 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Cristian',
        avatar: '_5',        
        showMessageTime: false,
        messages: [
            {
                id: 1,
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                id: 2,
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                id: 3,
                date: '24/08/2022 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
];

const app = new Vue({
    el: '#app',
    data: {
        name: 'Boolzapp',
        myProfile: {
            name: 'Marco',
            avatar: './img/avatar_io.jpg',
        },
        contacts,
        contactSelected: undefined,
        lastContactSent: undefined,
        myMessage: '',
        contactsSearchString: '',
        messagesSearchString: '',
        searchFocus: false,
        searchFocusMessages: false,
        lastMessagesDate: undefined,
        showedSearchMessages: false,
    },
    computed: {
        contactsSearchStringIsVoid() {
            return !this.contactsSearchString == true;
        },
        messagesSearchStringIsVoid() {
            return !this.messagesSearchString == true;
        },
        dateTimeOrderedContacts() {
            this.contacts.sort((contact1,contact2) => {
                const lastMessage1 = this.getLastMessage(contact1);
                const lastMessage2 = this.getLastMessage(contact2);
                let [date1, time1] = lastMessage1.date.split(' ');
                timeArray1 = time1.split(':');
                dateArray1 = date1.split('/');
                date1 = dayjs(`${dateArray1[2]}/${dateArray1[1]}/${dateArray1[0]}`).set('hour', timeArray1[0]).set('minute', timeArray1[1]).set('second', timeArray1[2]);
                let [date2, time2] = lastMessage2.date.split(' ');
                timeArray2 = time2.split(':');
                dateArray2 = date2.split('/');
                date2 = dayjs(`${dateArray2[2]}/${dateArray2[1]}/${dateArray2[0]}`).set('hour', timeArray2[0]).set('minute', timeArray2[1]).set('second', timeArray2[2]);;
                const diff = date1.diff(date2);
                return diff > 0 ? -1 : diff < 0 ? 1 : 0;
            });
        },
        contactsSearched() {
            if ( this.contactsSearchString !== '' ) {
                return this.contacts.filter((contact) => {
                    return contact.name.toLowerCase().includes(this.contactsSearchString.toLowerCase().trim());
                });
            } else {
                return this.contacts;
            }
        },
        messagesSearched() {
            if ( this.messagesSearchString !== '' ) {
                return this.contactSelected.messages.filter((message) => {
                    return message.message.toLowerCase().includes(this.messagesSearchString.toLowerCase().trim());
                });
            } else {
                return '';
            }
        },
        lastOnlineTime() {
            let [date, time] = this.getLastMessage(this.contactSelected).date.split(' ');
            timeArray = time.split(':');
            dateArray = date.split('/');
            date = dayjs(`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);
            const diff = date.diff(dayjs(), 'day');
            if ( diff >= -6 ) {
                if ( diff === -1 )
                    return `ieri alle ${this.formatTimeFromArray(timeArray)}`;
                else if ( diff === 0 ) {
                    return `oggi alle ${this.formatTimeFromArray(timeArray)}`;
                } else {
                    let day = date.format('dddd');
                    day = this.translatedDay(day);
                    return `${day} alle ${this.formatTimeFromArray(timeArray)}`;
                }
            }
            return `il ${this.formatDateFromArray(dateArray)} alle ${this.formatTimeFromArray(timeArray)}`;
        },
    },
    methods: {
        formatTimeFromArray(timeArray) {
            return `${timeArray[0]}:${timeArray[1]}`;
        },
        formatDateFromArray(dateArray) {
            return `${dateArray[0]}/${dateArray[1]}/${dateArray[2]}`;
        },
        getLastMessage(contact) {
            return contact.messages[contact.messages.length - 1];
        },
        selectContact(contact) {
            if ( contact !== this.contactSelected ) {
                this.contactSelected = contact;
                this.checkMessagesDate(contact.messages);
            } else {
                this.contactSelected = undefined;
            }
        },
        getMessageId(message) {
            return message.id;
        },
        cleanMessage() {
            this.myMessage = this.myMessage.trim();
        },
        sendMessage() {
            this.cleanMessage();
            if ( this.myMessage !== '' ) {
                const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
                const id = this.contactSelected.messages.length + 1;
                const message = {
                    id: id,
                    date: now,
                    message: `${this.myMessage}`,
                    status: 'sent',
                    optionVisible: false,
                };
                this.contactSelected.messages.push(message);
                this.myMessage = '';
                this.lastContactSent = this.contactSelected;
                this.dateTimeOrderedContacts;
                this.checkMessagesDate(this.lastContactSent.messages);
                setTimeout(() => {
                    const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
                    const message = {
                        id: id + 1,
                        date: now,
                        message: 'Ok!',
                        status: 'received',
                        optionVisible: false,
                    };
                    this.lastContactSent.messages.push(message);
                    this.dateTimeOrderedContacts;
                    this.checkMessagesDate(this.lastContactSent.messages);
                }, 1000);
            }
        },
        toggleMessageOptions(message) {
            message.optionVisible = !message.optionVisible;
        },
        deleteMessage(message) {
            if ( this.contactSelected.messages.includes(message) ) {
                this.contactSelected.messages.splice(this.contactSelected.messages.indexOf(message));
            }
        },
        toggleMessageTime(message) {
            this.contactSelected.showMessageTime = !this.contactSelected.showMessageTime;
        },
        translatedDay(day) {
            switch (day) {
                case 'Monday':
                    day = 'Lunedì';
                    break;
                case 'Thuesday':
                    day = 'Martedì';
                    break;
                case 'Wednesday':
                    day = 'Mercoledì';
                    break;
                case 'Thursday':
                    day = 'Giovedì';
                    break;
                case 'Friday':
                    day = 'Venerdì';
                    break;
                case 'Saturday':
                    day = 'Sabato';
                    break;
                case 'Sunday':
                    day = 'Domenica';
                    break;
            }
            return day;
        },
        showDateTime(message) {
            let [date, time] = message.date.split(' ');
            const timeArray = time.split(':');
            const dateArray = date.split('/');        
            date = dayjs(`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);
            const diff = date.diff(dayjs(), 'day');
            if ( diff >= -6 ) {
                if ( diff === -1 )
                    return `ieri`;
                else if ( diff === 0 ) {
                    return this.formatTimeFromArray(timeArray);
                } else {
                    let day = date.format('dddd');
                    return this.translatedDay(day);
                }
            }
            return this.formatDateFromArray(dateArray);
        },
        showDate(message) {
            let date = message.date.split(' ')[0];
            const dateArray = date.split('/');        
            date = dayjs(`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);
            const diff = date.diff(dayjs(), 'day');
            date = this.checkDateDiff(diff, date, dateArray);
            return date;
        },
        showTime(message) {
            let time = message.date.split(' ')[1];
            const timeArray = time.split(':');
            return this.formatTimeFromArray(timeArray);
        },
        checkDateDiff(diff, date, dateArray) {
            if ( diff >= -6 ) {
                if ( diff === -1 )
                    date = `Ieri`.toUpperCase();
                else if ( diff === 0 ) {
                    date = 'Oggi'.toUpperCase();
                } else {
                    let day = date.format('dddd');
                    date = this.translatedDay(day).toUpperCase();
                }
            } else {
                date =  this.formatDateFromArray(dateArray);
            }
            return date;
        },
        checkMessagesDate(messages) {
            this.lastMessagesDate = undefined;
            messages.forEach(message => {
                let date = message.date.split(' ')[0];
                const dateArray = date.split('/');        
                date = dayjs(`${dateArray[2]}/${dateArray[1]}/${dateArray[0]}`);
                const diff = date.diff(dayjs(), 'day');
                date = this.checkDateDiff(diff, date, dateArray);
                if ( date !== this.lastMessagesDate ) {
                    this.lastMessagesDate = date;
                    message.visualizeDate = true;
                } else {
                    message.visualizeDate = false;
                }
            });
        },
        onSearchFocus() {
            this.searchFocus = true;
        },
        onSearchBlur() {
            setTimeout(() => {
                this.searchFocus = false;                
            }, 150);
        },
        removeFocus() {
            this.$refs.search__input.blur();
            this.contactsSearchString = '';
        },
        onSearchFocusMessages() {
            this.searchFocusMessages = true;
        },
        onSearchBlurMessages() {
            setTimeout(() => {
                this.searchFocusMessages = false;
            }, 150);
        },
        setFocus() {
            const searchInput = this.$refs.search__input;
            if ( !this.searchFocus ) {
                searchInput.focus();
            } else if ( !this.contactsSearchStringIsVoid ) {
                this.contactsSearchString = '';
            }
        },
        setFocusMessages() {
            const searchInput = this.$refs.search__input__messages;
            if ( !this.searchFocusMessages ) {
                searchInput.focus();
            } else if ( !this.messagesSearchStringIsVoid ) {
                this.messagesSearchString = '';
            }
        },
        removeFocusMessages() {
            this.$refs.search__input__messages.blur();
            this.messagesSearchString = '';
        },
        showSearchMessages() {
            this.showedSearchMessages = true;
        },
        hideSearchMessages() {
            this.showedSearchMessages = false;
        },
    },
    mounted() {
        this.dateTimeOrderedContacts;
    },
    updated() {
        const chat = document.querySelector('.contact-chat__messages');
        if ( chat != null ) {
            chat.scrollTop = chat.scrollHeight;
        }
    },
});