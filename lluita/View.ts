import type { Game } from "./Game";
import type { Team } from "./Team";
import { Character } from "./Character";

export class View {

    private _divPlayer1: HTMLDivElement;
    private _divPlayer2: HTMLDivElement;

    constructor() {

        this._divPlayer1 = document.getElementById("player1") as HTMLDivElement;
        this._divPlayer2 = document.getElementById("player2") as HTMLDivElement;
    }

    public render(game: Game): void {
        this.renderTeam(game.player1.team, this._divPlayer1);
        this.renderTeam(game.player2.team, this._divPlayer2);
    }

    private renderTeam(team: Team, container: HTMLDivElement): void {
        container.innerHTML = "";

        for (const character of team.characters) {
            const el = this.renderCharacter(character);
            container.appendChild(el);
        }
    }

    public renderCharacter(character: Character): HTMLElement {
        const el = document.createElement("div");
        el.classList.add("character");
        el.innerHTML = `
        <div class="card-top-left">${character.name}</div>
        <div class="card-bottom-left">${character.health}</div>
        <div class="card-bottom-center">${character.defense}</div>
        <div class="card-bottom-right">${character.attack}</div>

    `;

        return el;
    }

}