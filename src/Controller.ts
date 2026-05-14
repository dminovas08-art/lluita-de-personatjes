import type { Game } from "./Game";
import { View } from "./View";

export class Controller {
    private _game: Game;
    private _view: View;

    constructor(game: Game, view: View) {
        this._game = game;
        this._view = view;
        this.bindEvent();
    }
    public init(): void {
        this._game.reparit();
        this._view.render(this._game);
    }
    private bindEvent(): void {
        this._view._attack.addEventListener("click", () => this.fightCharacter())
    }

    private fightCharacter(): void {
        const malJugador1 = this._game.player1.team.characters[0].attack;
        const defJugador1 = this._game.player1.team.characters[0].defense;
        const vidJugador1 = this._game.player1.team.characters[0].health;
        const malJugador2 = this._game.player2.team.characters[0].attack;
        const defJugador2 = this._game.player2.team.characters[0].defense;
        const vidJugador2 = this._game.player2.team.characters[0].health;
    }






}