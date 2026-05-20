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
        this._game.start();
        this._view.render(this._game);
    }
    private bindEvent(): void {

        this._view._attack.addEventListener("click", () => this.fightCharacter());

    }

    private fightCharacter(): void {

        const lluitadorJugador1 = this._game.player1.team.characters[0];

        const lluitadorJugador2 = this._game.player2.team.characters[0];

        //Atacka Jugador2

        //El Jugador1 es defensa
        if (lluitadorJugador1.defense >= lluitadorJugador2.attack) {
            lluitadorJugador1.setHealth = lluitadorJugador1.health - 1;
        } else {
            //El Jugador1 no té prou defenfe
            lluitadorJugador1.setHealth = lluitadorJugador1.health - (lluitadorJugador2.attack - lluitadorJugador1.defense);
        }
        this.estaViu();
        if (lluitadorJugador2.defense >= lluitadorJugador1.attack) {
            lluitadorJugador2.setHealth = lluitadorJugador2.health - 1;

        } else {
            lluitadorJugador2.setHealth = lluitadorJugador2.health - (lluitadorJugador1.attack - lluitadorJugador2.defense);
        }
        this.estaViu();
        this._view.render(this._game);

    }
    private estaViu(): void {
        if (this._game.player1.team.characters[0].health <= 0) {
            this._game.player1.team.pop();
        }

        if (this._game.player2.team.characters[0].health <= 0) {
            this._game.player2.team.pop();
        }
    }






}