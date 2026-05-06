import type { Game } from "./Game";
import type { Team } from "./Team";
import type { Character } from "./Character";

export class View {
    private _j1Name: HTMLDivElement;
    private _j1Heal: HTMLDivElement;
    private _j1Attack: HTMLDivElement;
    private _j1Defens: HTMLDivElement;
    private _j2Name: HTMLDivElement;
    private _j2Heal: HTMLDivElement;
    private _j2Attack: HTMLDivElement;
    private _j2Defens: HTMLDivElement;

    constructor() {
        this._j1Name = document.getElementById("j1-name") as HTMLDivElement;
        this._j1Heal = document.getElementById("j1-hp") as HTMLDivElement;
        this._j1Attack = document.getElementById("j1-attack") as HTMLDivElement;
        this._j1Defens = document.getElementById("j1-defense") as HTMLDivElement;
        this._j2Name = document.getElementById("j2-name") as HTMLDivElement;
        this._j2Heal = document.getElementById("j2-hp") as HTMLDivElement;
        this._j2Attack = document.getElementById("j2-attack") as HTMLDivElement;
        this._j2Defens = document.getElementById("j2-defense") as HTMLDivElement;
    }

    public render(game: Game): void {

    }


}