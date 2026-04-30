export type nom_personatge = "Humano" | "Elfo" | "Enano" | "Orco" | "Goblin";


export class Character {
    private _name: nom_personatge;
    private _health: number;
    private _attack: number;
    private _defense: number;


    constructor(name: nom_personatge, health: number, attack: number, defense: number) {
        this._name = name;
        this._health = health;
        this._attack = attack;
        this._defense = defense;

    }
}