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
        document.getElementById('email').textContent = 'Email valida';
    } else {
        document.getElementById('email').textContent = 'Email non trovata';
    }
}

const mailUtente = prompt('Inserisci la tua email')
validazioneEmail(mailUtente)