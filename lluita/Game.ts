import { Player } from "./Player";

export class Game {
    private _player1: Player;
    private _player2: Player;

    constructor(player1: Player, player2: Player) {
        this._player1 = player1;
        this._player2 = player2;
    }

    get player1(): Player {
        return this._player1;
    }

    set player1(p: Player) {
        this.player1 = p;
    }

    get player2(): Player {
        return this._player2;
    }

    set player2(p: Player) {

        this._player2 = p;
    }
}

