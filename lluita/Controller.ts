import type { Game } from "./Game";
import { View } from "./View";

export class Controller {
    private _game: Game;
    private _view: View;

    constructor(game: Game, view: View) {
        this._game = game;
        this._view = view;
    }
    public init(): void {
        this._game.repartirCaracter;
        this._view.render(this._game);
    }








}