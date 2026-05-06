export type nom_personatge = "Humano" | "Elfo" | "Enano" | "Orco" | "Goblin";
export type poder_personatges = 1 | 2 | 3 | 4 | 5 | 10;

export class Character {
    private _name: nom_personatge;
    private _health: number;
    private _attack: poder_personatges;
    private _defense: poder_personatges;


    constructor(name: nom_personatge, health: poder_personatges, attack: poder_personatges, defense: poder_personatges) {
        this._name = name;
        this._health = health;
        this._attack = attack;
        this._defense = defense;

    }

    get name(): nom_personatge {
        return this._name;
    }

    get health(): number {
        return this._health;
    }

    get attack(): poder_personatges {
        return this._attack;
    }

    get defense(): poder_personatges {
        return this._defense;
    }

    public comprovarVida(): boolean {
        return this._health > 0;
    }

}