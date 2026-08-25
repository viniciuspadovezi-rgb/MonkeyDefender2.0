//==================================================
// PLAYER
//==================================================

export default class Player {

    constructor(scene) {

        this.scene = scene;

        //==============================================
        // CONFIGURAÇÕES
        //==============================================

        this.speed = 250;

        this.size = 40;

        //==============================================
        // POSIÇÃO INICIAL
        //==============================================

        this.x = scene.scale.width / 2;

        this.y = scene.scale.height / 2;

        //==============================================
        // SPRITE TEMPORÁRIO
        //==============================================

        this.sprite = scene.add.rectangle(
            this.x,
            this.y,
            this.size,
            this.size,
            0x8b5a2b
        );

        //==============================================
        // CONTROLES
        //==============================================

        this.keys = scene.input.keyboard.addKeys({

            W: Phaser.Input.Keyboard.KeyCodes.W,

            A: Phaser.Input.Keyboard.KeyCodes.A,

            S: Phaser.Input.Keyboard.KeyCodes.S,

            D: Phaser.Input.Keyboard.KeyCodes.D

        });

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        const seconds = delta / 1000;

        let velocityX = 0;

        let velocityY = 0;

        //==============================================
        // MOVIMENTO
        //==============================================

        if (this.keys.W.isDown) {

            velocityY -= 1;

        }

        if (this.keys.S.isDown) {

            velocityY += 1;

        }

        if (this.keys.A.isDown) {

            velocityX -= 1;

        }

        if (this.keys.D.isDown) {

            velocityX += 1;

        }

        //==============================================
        // NORMALIZAÇÃO
        //==============================================

        if (velocityX !== 0 || velocityY !== 0) {

            const length = Math.sqrt(
                velocityX * velocityX +
                velocityY * velocityY
            );

            velocityX /= length;

            velocityY /= length;

        }

        //==============================================
        // MOVIMENTO
        //==============================================

        this.x += velocityX * this.speed * seconds;

        this.y += velocityY * this.speed * seconds;

        //==============================================
        // LIMITES DO MAPA
        //==============================================

        const margin = 75;

        this.x = Phaser.Math.Clamp(
            this.x,
            margin,
            this.scene.scale.width - margin
        );

        this.y = Phaser.Math.Clamp(
            this.y,
            margin,
            this.scene.scale.height - margin
        );

        //==============================================
        // ATUALIZA SPRITE
        //==============================================

        this.sprite.setPosition(
            this.x,
            this.y
        );

    }

}