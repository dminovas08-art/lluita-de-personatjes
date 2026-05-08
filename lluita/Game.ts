import { Player } from "./Player";
import { Team } from "./Team";
import { Character } from "./Character";

export class Game {
    private _player1: Player;
    private _player2: Player;
    private _team: Team;

    constructor(player1: string, player2: string) {
        this._team = new Team();
        this._player1 = new Player(this._team, player1);
        this._player2 = new Player(this._team, player2);

        this._team.generarPersonatges();
    }

    get player1(): Player {
        return this._player1;
    }

    set player1(p: Player) {
        this._player1 = p;
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

    private reparitCharacters(player: Player): void {
        const character = this._team.repartir();
        if (character) {
            player.team.addCharacter(character);
        }
    }
    
    public reparit(): void {
        while (this._team.characters.length > 0) {
            this.reparitCharacters(this._player1);
            if (this._team.characters.length > 0) {
                this.reparitCharacters(this._player2);
            }
        }
    }
}




