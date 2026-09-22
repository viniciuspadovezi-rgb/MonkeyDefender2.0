//==================================================
// PC
//==================================================

export default class PC {

    constructor(scene) {

        this.scene = scene;

        //==================================================
        // IDENTIFICAÇÃO
        //==================================================

        this.name = "PC";

        //==================================================
        // VIDA
        //==================================================

        this.maxHp = 100;

        this.hp = this.maxHp;

        //==================================================
        // TAMANHO
        //==================================================

        this.width = 80;

        this.height = 60;

        //==================================================
        // POSIÇÃO INICIAL
        //==================================================

        this.x = scene.scale.width / 2;

        this.y = scene.scale.height / 2;

        //==================================================
        // ESTADOS
        //==================================================

        this.alive = true;

        this.isBeingCarried = false;

        this.invulnerable = false;

        //==================================================
        // SPRITE TEMPORÁRIO
        //==================================================

        this.sprite = scene.add.rectangle(

            this.x,

            this.y,

            this.width,

            this.height,

            0x35c759

        );

        this.sprite.setDepth(4);

    }

    //==================================================
    // UPDATE
    //==================================================

    update(time, delta) {

        /*
        Futuramente serão adicionados aqui:

        - interação com o jogador;
        - carregar o PC;
        - reposicionar;
        - contagem dos 3 segundos;
        - queda do PC;
        - comportamento durante transporte.
        */

    }

    //==================================================
    // RECEBER DANO
    //==================================================

    takeDamage(amount) {

        //==============================================
        // VERIFICAR SE PODE RECEBER DANO
        //==============================================

        if (!this.alive) {

            return;

        }

        if (this.invulnerable) {

            return;

        }

        //==============================================
        // APLICAR DANO
        //==============================================

        this.hp -= amount;

        //==============================================
        // IMPEDIR VIDA NEGATIVA
        //==============================================

        this.hp = Math.max(

            this.hp,

            0

        );

        //==============================================
        // VERIFICAR MORTE
        //==============================================

        if (this.hp <= 0) {

            this.hp = 0;

            this.alive = false;

            this.onDeath();

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

    //==================================================
    // CURAR
    //==================================================

    heal(amount) {

        if (!this.alive) {

            return;

        }

        this.hp += amount;

        this.hp = Math.min(

            this.hp,

            this.maxHp

        );

    }

    //==================================================
    // MORTE
    //==================================================

    onDeath() {

        console.log(

            "O PC foi destruído!"

        );

    }

}