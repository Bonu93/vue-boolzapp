/*
Milestone 1

Le icone non hanno funzionalità ma sono solo presentazionali.

Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto


Milestone 2

Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione

Click sul contatto mostra la conversazione del contatto cliccato


Milestone 3

Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde

Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.
*/



const app = new Vue({

    el: '#app',

    data: {

        activeContact: 0,

        userMessage: '',

        dateNow: 'get date',

        contacts: [
            {
                name: 'Michele',
                avatar: '_1',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Hai portato a spasso il cane?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Ricordati di dargli da mangiare',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 16:15:22',
                        text: 'Tutto fatto!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Fabio',
                avatar: '_2',
                visible: true,
                messages: [
                    {
                        date: '20/03/2020 16:30:00',
                        text: 'Ciao come stai?',
                        status: 'sent'
                    },
                    {
                        date: '20/03/2020 16:30:55',
                        text: 'Bene grazie! Stasera ci vediamo?',
                        status: 'received'
                    },
                    {
                        date: '20/03/2020 16:35:00',
                        text: 'Mi piacerebbe ma devo andare a fare la spesa.',
                        status: 'sent'
                    }
                ],
            },    
            {
                name: 'Samuele',
                avatar: '_3',
                visible: true,
                messages: [
                    {
                        date: '28/03/2020 10:10:40',
                        text: 'La Marianna va in campagna',
                        status: 'received'
                    },
                    {
                        date: '28/03/2020 10:20:10',
                        text: 'Sicuro di non aver sbagliato chat?',
                        status: 'sent'
                    },
                    {
                        date: '28/03/2020 16:15:22',
                        text: 'Ah scusa!',
                        status: 'received'
                    }
                ],
            },
            {
                name: 'Luisa',
                avatar: '_4',
                visible: true,
                messages: [
                    {
                        date: '10/01/2020 15:30:55',
                        text: 'Lo sai che ha aperto una nuova pizzeria?',
                        status: 'sent'
                    },
                    {
                        date: '10/01/2020 15:50:00',
                        text: 'Si, ma preferirei andare al cinema',
                        status: 'received'
                    }
                ],
            },
        ],
        
    },

    methods: {

        //switch active contact
        setActiveContact(index) {
            this.activeContact = index;

            this.$refs.messageInput.focus();
        },

        newMessage() {

            // pick date 
            this.getDate();

            // generate new message obj 
            if (this.userMessage.length !== 0) {
                this.contacts[this.activeContact].messages.push({
                    date: this.dateNow,
                    text: this.userMessage,
                    status: 'sent'
                });
                // clear input 
                this.userMessage = '';
    
    
                // after 1 sec generates bot message 
                setTimeout( () => {
    
                    this.getDate();
    
                    this.contacts[this.activeContact].messages.push({
                        date: this.dateNow,
                        text: 'Ok',
                        status: 'received'
                    });
                }, 1000);
            }

        },

        getDate() {
            const now = dayjs();
            this.dateNow = now.format('DD/MM/YYYY HH:mm:ss');
        },
    },
})