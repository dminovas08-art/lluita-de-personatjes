import { Team } from "./Team.ts";


export class Player {
    private _name: String;
    private _team: Team;

    constructor(team: Team, name: String) {
        this._team = team;
        this._name = name;
    }

    get name(): String {
        return this._name;
    }

    set name(newName: String) {
        this._name = newName;
    }

    get team(): Team {
        return this._team;
    }

    public removeTeam(): void {
        this._team.remove();
    }
}