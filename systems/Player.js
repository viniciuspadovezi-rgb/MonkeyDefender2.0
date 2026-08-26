//==================================================
// PLAYER
//==================================================

import Bullet from "./Bullet.js";

export default class Player {

    constructor(scene) {

        this.scene = scene;

        //==================================================
        // IDENTIFICAÇÃO
        //==================================================

        this.name = "Monkey";

        //==================================================
        // ATRIBUTOS BASE
        //==================================================

        this.maxHp = 100;

        this.hp = this.maxHp;

        this.speed = 250;

        this.damage = 1;

        this.size = 40;

        //==================================================
        // POSIÇÃO INICIAL
        //==================================================

        this.x = scene.scale.width / 2;

        this.y = scene.scale.height / 2 + 100;

        //==================================================
        // DIREÇÃO
        //==================================================

        this.facingX = 1;

        this.facingY = 0;

        //==================================================
        // ESTADO
        //==================================================

        this.alive = true;

        //==================================================
        // CONTROLES
        //==================================================

        this.keys = scene.input.keyboard.addKeys({

            W: Phaser.Input.Keyboard.KeyCodes.W,

            A: Phaser.Input.Keyboard.KeyCodes.A,

            S: Phaser.Input.Keyboard.KeyCodes.S,

            D: Phaser.Input.Keyboard.KeyCodes.D

        });

        //==================================================
        // TIRO
        //==================================================

        this.shooting = false;

        this.shootDelay = 333;

        this.lastShotTime = 0;

        this.bullets = [];

        //==================================================
        // MOUSE
        //==================================================

        scene.input.on(

            "pointerdown",

            () => {

                this.shooting = true;

            }

        );

        scene.input.on(

            "pointerup",

            () => {

                this.shooting = false;

            }

        );

        scene.input.on(

            "pointerout",

            () => {

                this.shooting = false;

            }

        );

        //==================================================
        // SPRITE TEMPORÁRIO
        //==================================================

        this.sprite = scene.add.rectangle(

            this.x,

            this.y,

            this.size,

            this.size,

            0x8b5a2b

        );

        this.sprite.setDepth(5);

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        if (!this.alive) {

            return;

        }

        //==============================================
        // MOVIMENTO
        //==============================================

        this.updateMovement(delta);

        //==============================================
        // TIRO
        //==============================================

        this.updateShooting(time);

        //==============================================
        // PROJÉTEIS
        //==============================================

        this.updateBullets(time, delta);

    }

    //==================================================
    // MOVIMENTO
    //==================================================

    updateMovement(delta) {

        const seconds = delta / 1000;

        let directionX = 0;

        let directionY = 0;

        //==============================================
        // W
        //==============================================

        if (this.keys.W.isDown) {

            directionY -= 1;

        }

        //==============================================
        // S
        //==============================================

        if (this.keys.S.isDown) {

            directionY += 1;

        }

        //==============================================
        // A
        //==============================================

        if (this.keys.A.isDown) {

            directionX -= 1;

        }

        //==============================================
        // D
        //==============================================

        if (this.keys.D.isDown) {

            directionX += 1;

        }

        //==============================================
        // SEM MOVIMENTO
        //==============================================

        if (

            directionX === 0 &&

            directionY === 0

        ) {

            return;

        }

        //==============================================
        // NORMALIZAR
        //==============================================

        const magnitude = Math.sqrt(

            directionX * directionX +

            directionY * directionY

        );

        directionX /= magnitude;

        directionY /= magnitude;

        //==============================================
        // DIREÇÃO ATUAL
        //==============================================

        this.facingX = directionX;

        this.facingY = directionY;

        //==============================================
        // PRÓXIMA POSIÇÃO
        //==============================================

        const movementX =

            directionX *

            this.speed *

            seconds;

        const movementY =

            directionY *

            this.speed *

            seconds;

        const nextX =

            this.x +

            movementX;

        const nextY =

            this.y +

            movementY;

        //==============================================
        // MOVIMENTO HORIZONTAL
        //==============================================

        if (

            this.scene.isPositionWalkable(

                nextX,

                this.y,

                this.size

            )

        ) {

            this.x = nextX;

        }

        //==============================================
        // MOVIMENTO VERTICAL
        //==============================================

        if (

            this.scene.isPositionWalkable(

                this.x,

                nextY,

                this.size

            )

        ) {

            this.y = nextY;

        }

        //==============================================
        // ATUALIZAR SPRITE
        //==============================================

        this.sprite.setPosition(

            this.x,

            this.y

        );

    }

    //==================================================
    // SISTEMA DE TIRO
    //==================================================

    updateShooting(time) {

        if (!this.shooting) {

            return;

        }

        //==============================================
        // VERIFICAR INTERVALO
        //==============================================

        if (

            time - this.lastShotTime <

            this.shootDelay

        ) {

            return;

        }

        //==============================================
        // ATIRAR
        //==============================================

        this.shoot();

        this.lastShotTime = time;

    }

    //==================================================
    // ATIRAR
    //==================================================

    shoot() {

        //==============================================
        // POSIÇÃO DO MOUSE
        //==============================================

        const pointer =

            this.scene.input.activePointer;

        //==============================================
        // ÂNGULO
        //==============================================

        const angle =

            Phaser.Math.Angle.Between(

                this.x,

                this.y,

                pointer.worldX,

                pointer.worldY

            );

        //==============================================
        // POSIÇÃO INICIAL DO PROJÉTIL
        //==============================================

        const offset = this.size / 2 + 5;

        const bulletX =

            this.x +

            Math.cos(angle) *

            offset;

        const bulletY =

            this.y +

            Math.sin(angle) *

            offset;

        //==============================================
        // CRIAR PROJÉTIL
        //==============================================

        const bullet = new Bullet(

            this.scene,

            bulletX,

            bulletY,

            angle,

            this.damage

        );

        //==============================================
        // ADICIONAR À LISTA
        //==============================================

        this.bullets.push(

            bullet

        );

    }

    //==================================================
    // ATUALIZAR PROJÉTEIS
    //==================================================

    updateBullets(time, delta) {

        for (

            let i = this.bullets.length - 1;

            i >= 0;

            i--

        ) {

            const bullet = this.bullets[i];

            bullet.update(

                time,

                delta

            );

            //==========================================
            // REMOVER PROJÉTIL MORTO
            //==========================================

            if (!bullet.alive) {

                this.bullets.splice(

                    i,

                    1

                );

            }

        }

    }

    //==================================================
    // ALTERAR POSIÇÃO
    //==================================================

    setPosition(x, y) {

        this.x = x;

        this.y = y;

        this.sprite.setPosition(

            this.x,

            this.y

        );

    }

}