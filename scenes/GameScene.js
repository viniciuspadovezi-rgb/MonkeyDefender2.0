import Player from "../systems/Player.js";
import PC from "../systems/PC.js";
import Rounds from "../systems/Rounds.js";

//==================================================
// GAME SCENE
//==================================================

export default class GameScene extends Phaser.Scene {

    constructor() {

        super("GameScene");

    }

    //==================================================
    // CREATE
    //==================================================

    create() {

        console.log("Monkey Defender iniciado!");

        //==============================================
        // TAMANHO DA TELA
        //==============================================

        this.screenWidth = this.scale.width;
        this.screenHeight = this.scale.height;

        //==============================================
        // MAPA
        //==============================================

        this.createMap();

        //==============================================
        // SISTEMAS
        //==============================================

        this.player = new Player(this);

        this.pc = new PC(this);

        this.rounds = new Rounds(this);

        //==============================================
        // TEXTO DE TESTE
        //==============================================

        this.createInterface();

    }

    //==================================================
    // MAPA
    //==================================================

    createMap() {

        const width = this.scale.width;
        const height = this.scale.height;

        // Fundo do mapa
        this.add.rectangle(
            width / 2,
            height / 2,
            width,
            height,
            0x202020
        );

        // Área principal
        this.add.rectangle(
            width / 2,
            height / 2,
            width - 100,
            height - 100,
            0x303030
        );

        // Bordas
        this.add.rectangle(
            width / 2,
            50,
            width - 100,
            10,
            0x111111
        );

        this.add.rectangle(
            width / 2,
            height - 50,
            width - 100,
            10,
            0x111111
        );

        this.add.rectangle(
            50,
            height / 2,
            10,
            height - 100,
            0x111111
        );

        this.add.rectangle(
            width - 50,
            height / 2,
            10,
            height - 100,
            0x111111
        );

    }

    //==================================================
    // INTERFACE
    //==================================================

    createInterface() {

        this.add.text(
            70,
            65,
            "MONKEY DEFENDER",
            {
                fontFamily: "Arial",
                fontSize: "28px",
                color: "#ffffff"
            }
        );

        this.add.text(
            70,
            105,
            "PASSO 1 - ESTRUTURA INICIAL",
            {
                fontFamily: "Arial",
                fontSize: "18px",
                color: "#aaaaaa"
            }
        );

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        if (this.player) {

            this.player.update(time, delta);

        }

        if (this.pc) {

            this.pc.update(time, delta);

        }

        if (this.rounds) {

            this.rounds.update(time, delta);

        }

    }

}