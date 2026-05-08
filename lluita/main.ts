import { Team } from "./Team";
import { Player } from "./Player";
import { Game } from "./Game";
import { View } from "./View";
import { Controller } from "./Controller";

const team1 = new Team();
team1.generarPersonatges();

const team2 = new Team();
team2.generarPersonatges();

const p1 = new Player(team1, 'Jugador 1');
const p2 = new Player(team2, 'Jugador 2');

const game = new Game(p1, p2);
const view = new View();

const controller = new Controller(game,view);
controller.init();

view.render(game);
