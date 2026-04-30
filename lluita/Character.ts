export type nom_personatge = "Humano" | "Elfo" | "Enano" | "Orco" | "Goblin";
export type poder_personatges = 1 | 2 | 3 | 4 | 5 | 10;

export class Character {
    private _name: nom_personatge;
    private _health: poder_personatges;
    private _attack: poder_personatges;
    private _defense: poder_personatges;


    constructor(name: nom_personatge, health: poder_personatges, attack: poder_personatges, defense: poder_personatges) {
        this._name = name;
        this._health = health;
        this._attack = attack;
        this._defense = defense;

    }
}