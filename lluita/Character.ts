export class Character {
    private _name: string;
    private _health: number;
    private _attack: number;
    private _defense: number;

    constructor(name: string, health: number, attack: number, defense: number) {
        this._name = name;
        this._health = health;
        this._attack = attack;
        this._defense = defense;
    }
}