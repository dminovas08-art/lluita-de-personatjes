import { Team } from "./Team.ts";


export class Player {
    private _team: Team;
    constructor(team: Team) {
        this._team = team;
    }
    get team(): Team {
        return this._team;
    }
}