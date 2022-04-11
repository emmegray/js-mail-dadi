// JS mail 
// 1 - chiedere email all'utente
// 2 - controllare che sia nella lista di chi può accedere (creare lista utenti autorizzati)
// 3 - stampare messaggio sull'esito del controllo

const emailValide = ['coso@gmail.com','pippo@libero.it','lisa@outlook'];

function validazioneEmail(inputText) {
    const emailTrovata = emailValide.find(
        function (email) {
            return email === inputText
        }
    );

    if (emailTrovata) {
        document.getElementById('email').textContent = 'Email valida :D';
    } else {
        document.getElementById('email').textContent = 'Email non trovata :(';
    }
}

const mailUtente = prompt('Inserisci la tua email')
validazioneEmail(mailUtente)

// JS dadi 
// 1 - generare numero casuale da 1 a 6 sia per giocatore che computer
// 2 - stabilire il vincitore in base al punteggio più alto

function tiraDado () { 
    return Math.ceil(Math.random() * 6)
}

const computerTiroDisplay = document.getElementById('computerTiro')
const giocatoreTiroDisplay = document.getElementById('giocatoreTiro')
const risultato = document.getElementById('risultato')
const dado = document.getElementById('dado')

dado.addEventListener('click', function () {
    const tiroComputer = tiraDado()
    const tiroGiocatore = tiraDado()

    computerTiroDisplay.textContent = tiroComputer
    giocatoreTiroDisplay.textContent = tiroGiocatore

    if (tiroGiocatore > tiroComputer) risultato.textContent = 'Hai vinto'
    if (tiroGiocatore < tiroComputer) risultato.textContent = 'Hai perso'
    if (tiroGiocatore === tiroComputer) risultato.textContent = 'Pari'
})