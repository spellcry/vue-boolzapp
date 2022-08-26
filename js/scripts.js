const contacts = [
    {
        name: 'Michele',
        avatar: '_1',
        lastOnline: '12:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Hai portato a spasso il cane?',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Ricordati di stendere i panni',
                status: 'sent',
                optionVisible: false,
            },
            {
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
        lastOnline: '13:00',
        showMessageTime: false,
        messages: [
            {
                date: '20/03/2020 16:30:00',
                message: 'Ciao come stai?',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '20/03/2020 16:30:55',
                message: 'Bene grazie! Stasera ci vediamo?',
                status: 'received',
                optionVisible: false,
            },
            {
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
        lastOnline: '14:00',
        showMessageTime: false,
        messages: [
            {
                date: '28/03/2020 10:10:40',
                message: 'La Marianna va in campagna',
                status: 'received',
                optionVisible: false,
            },
            {
                date: '28/03/2020 10:20:10',
                message: 'Sicuro di non aver sbagliato chat?',
                status: 'sent',
                optionVisible: false,
            },
            {
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
        lastOnline: '15:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Lo sai che ha aperto una nuova pizzeria?',
                status: 'sent',
                optionVisible: false,
            },
            {
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
        lastOnline: '16:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ricordati di chiamare la nonna',
                status: 'sent',
                optionVisible: false,
            },
            {
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
        lastOnline: '17:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao Claudia, hai novità?',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'Non ancora',
                status: 'received',
                optionVisible: false,
            },
            {
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
        lastOnline: '18:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Fai gli auguri a Martina che è il suo compleanno!',
                status: 'sent',
                optionVisible: false,
            },
            {
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
        lastOnline: '19:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Luca',
        avatar: '_1',
        lastOnline: '20:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Enrico',
        avatar: '_3',
        lastOnline: '21:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Alex',
        avatar: '_4',
        lastOnline: '22:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:51:00',
                message: 'OK!!',
                status: 'received',
                optionVisible: false,
            }
        ],
    },
    {
        name: 'Cristian',
        avatar: '_5',
        lastOnline: '23:00',
        showMessageTime: false,
        messages: [
            {
                date: '10/01/2020 15:30:55',
                message: 'Ciao, andiamo a mangiare la pizza stasera?',
                status: 'received',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:50:00',
                message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                status: 'sent',
                optionVisible: false,
            },
            {
                date: '10/01/2020 15:51:00',
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
    },
    computed: {
        contactsSearched() {
            if ( this.contactsSearchString !== '' ) {
                return this.contacts.filter((contact) => {
                    return contact.name.toLowerCase().includes(this.contactsSearchString.toLowerCase().trim());
                });
            } else {
                return this.contacts;
            }
        },
    },
    methods: {
        getLastMessage(contact) {
            return contact.messages[contact.messages.length - 1].message;
        },
        selectContact(contact) {
            if ( contact !== this.contactSelected ) {
                this.contactSelected = contact;
            } else {
                this.contactSelected = undefined;
            }
        },
        sendMessage() {
            if ( this.myMessage !== '' ) {
                const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
                const message = {
                    date: now,
                    message: `${this.myMessage}`,
                    statys: 'sent',
                };
                this.contactSelected.messages.push(message);
                this.myMessage = '';
                this.lastContactSent = this.contactSelected;
                setTimeout(() => {
                    const now = dayjs().format('DD/MM/YYYY HH:mm:ss');
                    const message = {
                        date: now,
                        message: 'Ok!',
                        status: 'received',
                    };
                    this.lastContactSent.messages.push(message);
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
            this.toggleMessageOptions(message);
        },
        showTime(message) {
            const hoursMinutesSecondsArray = message.date.split(' ')[1].split(':');
            return `${hoursMinutesSecondsArray[0]}:${hoursMinutesSecondsArray[1]}`;
        }
    }
});