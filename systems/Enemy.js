//==================================================
// ENEMY
//==================================================

export default class Enemy {

    constructor(scene, x, y) {

        this.scene = scene;

        //==============================================
        // ATRIBUTOS
        //==============================================

        this.x = x;

        this.y = y;

        this.speed = 100;

        this.hp = 3;

        this.damage = 1;

        this.size = 30;

        //==============================================
        // SPRITE TEMPORÁRIO
        //==============================================

        this.sprite = scene.add.rectangle(

            this.x,

            this.y,

            this.size,

            this.size,

            0xe53935

        );

        this.sprite.setDepth(3);

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        // Futuramente:
        // seguir o PC
        // atacar o PC
        // receber colisão
        // morrer

    }

    //==================================================
    // RECEBER DANO
    //==================================================

    takeDamage(amount) {

        this.hp -= amount;

        if (this.hp <= 0) {

            this.destroy();

        }

    }

    //==================================================
    // DESTRUIR
    //==================================================

    destroy() {

        if (this.sprite) {

            this.sprite.destroy();

        }

    }

}