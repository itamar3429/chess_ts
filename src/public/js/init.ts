import { Board } from "./Board";
import { chessPiecesB, chessPiecesW } from "./chess-conf";
import { Events as ClickEvents } from "./Events";
import { boardComponent } from "./BoardComponent";

export let board = new Board(null);

class App {
	constructor() {}

	start() {
		boardComponent.render();

		//initializes the BoardPieces class and adds pieces to board
		board = new Board([chessPiecesB, chessPiecesW]);

		new ClickEvents(board, boardComponent);
	}
}

export const app = new App();
