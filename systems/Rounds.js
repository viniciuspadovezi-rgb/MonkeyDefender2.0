//==================================================
// ROUNDS
//==================================================

export default class Rounds {

    constructor(scene) {

        this.scene = scene;

        //==============================================
        // RODADA
        //==============================================

        this.currentRound = 1;

        //==============================================
        // ONDA
        //==============================================

        this.currentWave = 1;

        this.totalWaves = 3;

        //==============================================
        // ESTADO
        //==============================================

        this.running = false;

    }

    //==================================================
    // INICIAR RODADA
    //==================================================

    startRound() {

        this.running = true;

        console.log(
            `Rodada ${this.currentRound} iniciada`
        );

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        // Futuramente:
        // - controlar ondas
        // - controlar rodadas
        // - spawn dos inimigos
        // - intervalo entre ondas
        // - boss

    }

}