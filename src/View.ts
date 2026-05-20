import type { Game } from "./Game";
import type { Team } from "./Team";
import { Character } from "./Character";

export class View {

    private _divPlayer1: HTMLDivElement;
    private _divPlayer2: HTMLDivElement;

    constructor() {

        this._divPlayer1 = document.getElementById("player1") as HTMLDivElement;
        this._divPlayer2 = document.getElementById("player2") as HTMLDivElement;
    }

    public render(game: Game): void {
        this.renderTeam(game.player1.team, this._divPlayer1);
        this.renderTeam(game.player2.team, this._divPlayer2);
    }

    private renderTeam(team: Team, container: HTMLDivElement): void {
        container.innerHTML = "";
        container.classList.add('player-zone', 'team-container');

        for (const character of team.characters) {
            const el = this.renderCharacter(character);
            container.appendChild(el);
        }
    }

    public renderCharacter(character: Character): HTMLElement {

        const el = document.createElement("div");
        el.className = `character-card`;

        const iconPath = this.getCharacterIcon(character.name);

        el.innerHTML = `
        <div class="char-info">
        <span class="name-label">${character.name}</span>
        <span class="hp-count">HP: ${character.health}</span>
        </div class="character-card">
        <div>
        <img src="${iconPath}">
        </div>
        <div class="stats">
        <span>⚔️ ${character.attack}</span>
        <span>🛡️ ${character.defense}</span>
        </div>
        `;
        return el;
    }

    private getCharacterIcon(nom_personatge: string): string {
        const iconos: Record<string, string> = {
            'Humano': 'src/assets/img/images.jpg',
            'Elfo': 'src/assets/img/Elf.jpg',
            'Enano': 'src/assets/img/DWARF.jpg',
            'Orco': 'src/assets/img/orko.jpg',
            'Goblin': 'src/assets/img/piccolo.jpg',
            'Pato': 'src/assets/img/BREAD.jpg'
        };
        return iconos[nom_personatge] || '';
    }
} 