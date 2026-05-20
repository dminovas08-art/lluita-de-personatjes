import { Game } from "./Game";
import { View } from "./View";
import { Controller } from "./Controller";

const game = new Game('player1', 'player2');
const view = new View();
const controller = new Controller(game, view);

controller.init();
