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

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        // Futuramente:
        // - seguir o PC
        // - colisão
        // - ataque
        // - morte

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