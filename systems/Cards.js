//==================================================
// CARDS
//==================================================

export default class Cards {

    constructor(scene) {

        this.scene = scene;

        //==============================================
        // CARTAS DO JOGADOR
        //==============================================

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

        // Futuramente:
        // sistema de níveis das cartas

    }

}