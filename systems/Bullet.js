//==================================================
// BULLET
//==================================================

export default class Bullet {

    constructor(scene, x, y, angle, damage) {

        this.scene = scene;

        //==================================================
        // ATRIBUTOS
        //==================================================

        this.x = x;

        this.y = y;

        this.angle = angle;

        this.speed = 700;

        this.damage = damage;

        this.size = 8;

        this.alive = true;

        //==================================================
        // SPRITE TEMPORÁRIO
        //==================================================

        this.sprite = scene.add.rectangle(

            this.x,

            this.y,

            this.size,

            this.size,

            0xffdd44

        );

        this.sprite.setDepth(6);

        //==================================================
        // ROTAÇÃO
        //==================================================

        this.sprite.setRotation(

            this.angle

        );

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        if (!this.alive) {

            return;

        }

        const seconds = delta / 1000;

        //==============================================
        // MOVIMENTO
        //==============================================

        this.x +=

            Math.cos(this.angle) *
            this.speed *
            seconds;

        this.y +=

            Math.sin(this.angle) *
            this.speed *
            seconds;

        //==============================================
        // ATUALIZAR SPRITE
        //==============================================

        this.sprite.setPosition(

            this.x,

            this.y

        );

        //==============================================
        // VERIFICAR SE SAIU DO MAPA
        //==============================================

        if (

            this.x < 0 ||

            this.x > this.scene.mapWidth ||

            this.y < 0 ||

            this.y > this.scene.mapHeight

        ) {

            this.destroy();

        }

    }

    //==================================================
    // DESTRUIR
    //==================================================

    destroy() {

        if (!this.alive) {

            return;

        }

        this.alive = false;

        if (this.sprite) {

            this.sprite.destroy();

        }

    }

}