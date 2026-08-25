import GameScene from "./scenes/GameScene.js";

//==================================================
// CONFIGURAÇÃO DO PHASER
//==================================================

const config = {

    type: Phaser.AUTO,

    width: window.innerWidth,

    height: window.innerHeight,

    parent: "game",

    backgroundColor: "#202020",

    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },

    scene: [
        GameScene
    ]

};

//==================================================
// INICIALIZAÇÃO DO JOGO
//==================================================

const game = new Phaser.Game(config);