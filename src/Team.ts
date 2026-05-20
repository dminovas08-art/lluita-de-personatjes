import { Character, type nom_personatge, type poder_personatges } from "./Character";
const NOM_PERSONATGE: nom_personatge[] = ["Humano", "Elfo", "Enano", "Orco", "Goblin", "Pato"];
const PODER_PERSONATGES: poder_personatges[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export class Team {


    private _characters: Character[] = [];


    get characters(): Character[] {
        return this._characters;
    }

    public generarPersonatges(): void {
        for (const nom of NOM_PERSONATGE) {

            const _vida = PODER_PERSONATGES[Math.floor(Math.random() * PODER_PERSONATGES.length)];
            const _attack = PODER_PERSONATGES[Math.floor(Math.random() * PODER_PERSONATGES.length)];
            const _defense = PODER_PERSONATGES[Math.floor(Math.random() * PODER_PERSONATGES.length)];

            const personatge = new Character(nom, _vida, _attack, _defense);        
            this._characters.push(personatge);


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
    public pop(): Character | undefined {
        return this._characters.pop();
    }
}