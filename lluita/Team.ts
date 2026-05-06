import { Character } from "./Character";

export class Team {
    private _characters: Character[];
    constructor(characters: Character[]) {
        this._characters = characters;
    }
    public addCharacter(character: Character): void {
        this._characters.push(character);
    }
    get charecters(): Character[] {
        return this._characters;
    }

    public remove(): void {
        this._characters = [];
    }







}