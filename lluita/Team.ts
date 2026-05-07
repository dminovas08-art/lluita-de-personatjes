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







}