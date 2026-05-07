import { Player } from "./Player";
import { Team } from "./Team";
import { Character } from "./Character";

export class Game {
    private _player1: Player;
    private _player2: Player;
    private _team: Team;

    constructor(player1: Player, player2: Player) {
        this._player1 = player1;
        this._player2 = player2;
        this._team = new Team();
        this._team.inizialitzarTeam();
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
    public start(): void {
        this._team.shuffle
    }
    public repartirCaracter(player: Player): void {
        let character: Character | undefined = this._team.repartir();
        if (character) {
            player.team.push(character);
        }
    }
}