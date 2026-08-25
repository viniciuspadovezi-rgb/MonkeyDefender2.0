//==================================================
// BULLET
//==================================================

export default class Bullet {

    constructor(scene, x, y, angle) {

        this.scene = scene;

        //==============================================
        // ATRIBUTOS
        //==============================================

        this.x = x;

        this.y = y;

        this.angle = angle;

        this.speed = 500;

        this.damage = 1;

        this.size = 8;

        //==============================================
        // SPRITE TEMPORÁRIO
        //==============================================

        this.sprite = scene.add.rectangle(
            this.x,
            this.y,
            this.size,
            this.size,
            0xffffff
        );

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        const seconds = delta / 1000;

        this.x += Math.cos(this.angle)
            * this.speed
            * seconds;

        this.y += Math.sin(this.angle)
            * this.speed
            * seconds;

        this.sprite.setPosition(
            this.x,
            this.y
        );

    }

}