import { Character, type nom_personatge, type poder_personatges } from "./Character";
const nom_personatge: nom_personatge[] = ["Humano", "Elfo", "Enano", "Orco", "Goblin"];
const poder_personatges: poder_personatges[] = [1, 2, 3, 4, 5, 10]

export class Team {
    private _characters: Character[];
    static characters: any;

    constructor() {
        this._characters = [];
    }

    get characters(): Character[] {
        return this._characters;
    }

    public inizialitzarTeam(): void {
        for (const razes of nom_personatge) {
            for (const numero of poder_personatges) {
                let personatge = new Character(razes, numero, numero, numero);
                this._characters.push(personatge);
            }
        }
    }

    public addCharacter(character: Character): void {
        this._characters.push(character);
    }


    public remove(): void {
        this._characters = [];
    }

    public shuffle(): void {
        for (let i = this._characters.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this._characters[i], this._characters[j]] = [this._characters[j], this._characters[i]];
        }
    }

    public repartir(): Character | undefined {
        return this._characters.pop();
    }

    public push(character: Character): void {
        this._characters.push(character);
    }



}