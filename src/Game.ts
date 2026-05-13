import { Player } from "./Player";
import { Team } from "./Team";
import { Character } from "./Character";

export class Game {
    private _player1: Player;
    private _player2: Player;
    private _team: Team;

    constructor(player1: String, player2: String) {
        this._team = new Team();
        this._team.generarPersonatges();
        this._team.shuffle();

        this._player1 = new Player(new Team(), player1);
        this._player2 = new Player(new Team(), player2);

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


    public repartirCaracter(player: Player): void {
        let character: Character | undefined = this._team.repartir();

        if (character) {
            player.team.addCharacter(character);
        }
    }

    public reparit(): void {
        while (this._team.characters.length > 0) {
            this.repartirCaracter(this._player1);
            if (this._team.characters.length > 0) {
                this.repartirCaracter(this._player2);
            }
        }
    }


    public start(): void {
        this._team.shuffle
        this.repartirCaracter(this._player1);
        this.repartirCaracter(this._player2);
    }

    public restart(): void {
        this._player1.removeTeam();
        this._player2.removeTeam();
        this._team.remove();
        this._team.generarPersonatges;
        this.start();
    }
}




