import type { Game } from "./Game";
import type { Team } from "./Team";
import { Character } from "./Character";

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

    // public render(game: Game): void {
    //     let player1Charecters: Team = game.player1.team;
    //     this.renderCharacter(player1Charecters.charecters);

    //     let player2Charecters: Team = game.player2.team;
    //     this.renderCharacter(player2Charecters.charecters);
    // }

    // public renderCharacter(character: Character): HTMLElement{
    //     const el = document.createElement("div");
    //     el.classList.add("character");
    //     el.innerHTML = `
    //     <div class="card-top-left">${Character.name}</div>
    //     <div class="card-bottom-left">${Character.health}</div>
    //     <div class="card-bottom-center">${Character.health}</div>
    //     <div class="card-bottom-right">${Character.value}</div>

    // `;

    //     return el;
    // }

}