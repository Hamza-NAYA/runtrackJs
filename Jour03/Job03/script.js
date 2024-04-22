$(document).ready(function() {
    const carreaux = $('.carreau');
    const message = $('#message');
    const recommencerButton = $('#recommencer');


    initialiserJeu();

    carreaux.click(function() {
        deplacerCarreau($(this));
        verifierVictoire();
    });

    recommencerButton.click(initialiserJeu);

    function initialiserJeu() {

        let carreauxMelanges = carreaux.toArray().sort(() => Math.random() - 0.5);
        carreauxMelanges.forEach((carreau, index) => {
            $(carreau).css('order', index + 1);
        });
        message.text('');
    }

    function deplacerCarreau(carreau) {
        const carreauVide = $('.vide');
        const carreauAdjacent = estAdjacent(carreau, carreauVide);
        if (carreauAdjacent) {
            const ordreCarreau = carreau.css('order');
            carreau.css('order', carreauVide.css('order'));
            carreauVide.css('order', ordreCarreau);
        }
    }

    function estAdjacent(carreau1, carreau2) {
        const indexCarreau1 = parseInt(carreau1.css('order'));
        const indexCarreau2 = parseInt(carreau2.css('order'));
        const difference = Math.abs(indexCarreau1 - indexCarreau2);

        return difference === 1 || difference === 3;
    }

    function verifierVictoire() {
        const carreauxOrdres = carreaux.toArray().map(carreau => parseInt($(carreau).css('order')));
        const carreauxDansLeBonOrdre = carreauxOrdres.every((ordre, index) => ordre === index + 1);
        if (carreauxDansLeBonOrdre) {
            message.text('Vous avez gagné !');
        }
    }
});
