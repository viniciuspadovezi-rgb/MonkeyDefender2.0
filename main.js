import GameScene from "./scenes/GameScene.js";

//==================================================
// CONFIGURAÇÃO DO PHASER
//==================================================

const config = {

    type: Phaser.AUTO,

    width: 1448,

    height: 1086,

    parent: "game",

    backgroundColor: "#000000",

    scale: {

        mode: Phaser.Scale.FIT,

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