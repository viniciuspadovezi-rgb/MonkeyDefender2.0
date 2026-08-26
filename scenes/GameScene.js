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
    // PRELOAD
    //==================================================

    preload() {

        this.load.image(

            "mapa-principal",

            "assets/map/mapa-principal.png"

        );

    }

    //==================================================
    // CREATE
    //==================================================

    create() {

        console.log(

            "Monkey Defender iniciado!"

        );

        //==============================================
        // TAMANHO DO MAPA
        //==============================================

        this.mapWidth = 1448;

        this.mapHeight = 1086;

        //==============================================
        // MAPA
        //==============================================

        this.createMap();

        //==============================================
        // ÁREA JOGÁVEL
        //==============================================

        this.createWalkableArea();

        //==============================================
        // PC
        //==============================================

        this.pc = new PC(this);

        //==============================================
        // PLAYER
        //==============================================

        this.player = new Player(this);

        //==============================================
        // ROUNDS
        //==============================================

        this.rounds = new Rounds(this);

        //==============================================
        // INTERFACE
        //==============================================

        this.createInterface();

    }

    //==================================================
    // MAPA
    //==================================================

    createMap() {

        this.map = this.add.image(

            this.mapWidth / 2,

            this.mapHeight / 2,

            "mapa-principal"

        );

        this.map.setDisplaySize(

            this.mapWidth,

            this.mapHeight

        );

        this.map.setDepth(0);

    }

    //==================================================
    // ÁREA JOGÁVEL
    //==================================================

    createWalkableArea() {

        this.walkableArea = [

            345, 300,

            405, 300,

            405, 225,

            500, 225,

            500, 270,

            948, 270,

            948, 225,

            1043, 225,

            1043, 300,

            1103, 300,

            1103, 690,

            1043, 690,

            1043, 785,

            948, 785,

            948, 835,

            500, 835,

            500, 785,

            405, 785,

            405, 690,

            345, 690

        ];

        //==============================================
        // POLÍGONO
        //==============================================

        this.walkablePolygon =

            new Phaser.Geom.Polygon(

                this.walkableArea

            );

        //==============================================
        // DEBUG
        //==============================================

        this.debugGraphics =

            this.add.graphics();

        this.debugGraphics.setDepth(10);

    }

    //==================================================
    // VERIFICAR ÁREA JOGÁVEL
    //==================================================

    isPositionWalkable(

        x,

        y,

        size = 40

    ) {

        const halfSize = size / 2;

        const points = [

            {

                x: x - halfSize,

                y: y - halfSize

            },

            {

                x: x + halfSize,

                y: y - halfSize

            },

            {

                x: x - halfSize,

                y: y + halfSize

            },

            {

                x: x + halfSize,

                y: y + halfSize

            }

        ];

        for (const point of points) {

            if (

                !Phaser.Geom.Polygon.Contains(

                    this.walkablePolygon,

                    point.x,

                    point.y

                )

            ) {

                return false;

            }

        }

        return true;

    }

    //==================================================
    // INTERFACE
    //==================================================

    createInterface() {

        this.add.text(

            25,

            20,

            "MONKEY DEFENDER",

            {

                fontFamily: "Arial",

                fontSize: "24px",

                color: "#ffffff",

                stroke: "#000000",

                strokeThickness: 4

            }

        )
        .setScrollFactor(0)
        .setDepth(20);

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        if (this.player) {

            this.player.update(

                time,

                delta

            );

        }

        if (this.pc) {

            this.pc.update(

                time,

                delta

            );

        }

        if (this.rounds) {

            this.rounds.update(

                time,

                delta

            );

        }

    }

}