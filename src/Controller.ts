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
        this._view._btnReset.addEventListener("click", () => this.resetGame());

    }

    private resetGame(): void {
        this._game.victoria = null;
        this._game.restart();
        this._view.render(this._game);
    }

    private fightCharacter(): void {

        if (this._game.victoria) {
            return;
        }

        const lluitadorJugador1 = this._game.player1.team.characters[0];
        const lluitadorJugador2 = this._game.player2.team.characters[0];

        if (this._game.tornJugador == 1) {
            // Ataca jugador 1
            if (lluitadorJugador2.defense >= lluitadorJugador1.attack) {
                lluitadorJugador2.setHealth = lluitadorJugador2.health - 1;
            } else {
                lluitadorJugador2.setHealth = lluitadorJugador2.health - (lluitadorJugador1.attack - lluitadorJugador2.defense);
            }

        } else {
            // Ataca jugador 2
            if (lluitadorJugador1.defense >= lluitadorJugador2.attack) {
                lluitadorJugador1.setHealth = lluitadorJugador1.health - 1;
            } else {
                lluitadorJugador1.setHealth = lluitadorJugador1.health - (lluitadorJugador2.attack - lluitadorJugador1.defense);
            }
        }

        this.estaViu();

        if (this._game.player1.team.characters.length === 0) {
            this._game.victoria = "jugador 2 ha guanyat";
        } else if (this._game.player2.team.characters.length === 0) {
            this._game.victoria = "jugador 1 ha guanyat";
        }

        // Canvi de torn
        this._game.tornJugador = this._game.tornJugador === 1 ? 2 : 1;

        this._view.render(this._game);
    }
    private estaViu(): void {
        if (this._game.player1.team.characters[0].health <= 0) {
            this._game.player1.team.shift();
        }

        if (this._game.player2.team.characters[0].health <= 0) {
            this._game.player2.team.shift();
        }
    }






}