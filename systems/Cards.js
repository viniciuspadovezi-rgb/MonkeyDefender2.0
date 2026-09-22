//==================================================
// CARDS
//==================================================

export default class Cards {

    constructor(scene) {

        this.scene = scene;

        this.playerCards = [];

    }

    //==================================================
    // ADICIONAR CARTA
    //==================================================

    addCard(card) {

        this.playerCards.push(card);

        console.log(

            "Carta adicionada:",

            card

        );

    }

    //==================================================
    // MELHORAR CARTA
    //==================================================

    upgradeCard(card) {

        // Sistema de níveis será implementado
        // posteriormente.

    }

}