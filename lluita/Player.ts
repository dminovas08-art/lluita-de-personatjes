import { Team } from "./Team.ts";


export class Player {
    private _name: string;
    private _team: Team;

    constructor(team: Team, name: string) {
        this._team = team;
        this._name = name;
    }

    get name(): string {
        return this._name;
    }

    set name(newName: string) {
        this._name = newName;
    }

    get team(): Team {
        return this._team;
    }

    public removeTeam(): void {
        this._team.remove();
    }
}