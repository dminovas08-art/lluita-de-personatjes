import { Character, type nom_personatge, type poder_personatges } from "./Character";
const NOM_PERSONATGE: nom_personatge[] = ["Humano", "Elfo", "Enano", "Orco", "Goblin", "Pato"];
const PODER_PERSONATGES: poder_personatges[] = [1, 2, 3, 4, 5, 6, 10]

export class Team {
    private _characters: Character[] = [];

    get characters(): Character[] {
        return this._characters;
    }

    public generarPersonatges(): void {
        for (const nom of NOM_PERSONATGE) {
            const poderAleatori = PODER_PERSONATGES[Math.floor(Math.random() * PODER_PERSONATGES.length)];
            const personatge = new Character(nom, poderAleatori, poderAleatori, poderAleatori)

            this._characters.push(personatge)
        }
    }

    

    public inizialitzarTeam(): void {
        for (const razes of NOM_PERSONATGE) {
            for (const numero of PODER_PERSONATGES) {
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