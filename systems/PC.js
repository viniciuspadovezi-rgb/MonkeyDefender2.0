//==================================================
// PC
//==================================================

export default class PC {

    constructor(scene) {

        this.scene = scene;

        //==============================================
        // VIDA
        //==============================================

        this.maxHp = 100;

        this.hp = this.maxHp;

        //==============================================
        // TAMANHO
        //==============================================

        this.width = 80;

        this.height = 60;

        //==============================================
        // POSIÇÃO
        //==============================================

        this.x = scene.scale.width / 2;

        this.y = scene.scale.height / 2;

        //==============================================
        // SPRITE TEMPORÁRIO
        //==============================================

        this.sprite = scene.add.rectangle(
            this.x,
            this.y,
            this.width,
            this.height,
            0x35c759
        );

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        // Futuramente:
        // - movimentação do PC
        // - troca de lado
        // - cooldown
        // - dano
        // - morte
        // - habilidades

    }

    //==================================================
    // RECEBER DANO
    //==================================================

    takeDamage(amount) {

        this.hp -= amount;

        this.hp = Math.max(
            this.hp,
            0
        );

        console.log(
            `PC recebeu ${amount} de dano. Vida: ${this.hp}`
        );

    }

}