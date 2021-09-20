import Game from "./game";

let rows: number = 3;
let columns: number = 3;
let step: number;
let setup: { [x: string]: Array<number> } = {
    0: [0],
    1: [1, 2],
    2: [],
};
let finalSetup: { [x: string]: Array<number> } = {
    0: [],
    1: [],
    2: [],
};

function transform (game: any) {
    let games = [game[0][0], game[0][1]];
    game.shift();
    games = [...games, ...game];
    return games
}

describe('game class initiation', () => {
    const game: Game = new Game(rows, columns, step = 1, setup, finalSetup);
    const gameStarted = transform(game.init());

	test('ascertain that no steps has been taken', () => {
		expect(game.step).toBe(1);
	});

	test('ascertain that game board has desired number of cells', () => {
		const noOfCellsInFirstRow = gameStarted[0][0].length;
		expect(gameStarted[0].length * noOfCellsInFirstRow).toEqual(rows * columns);
	});

	test('acertain an empty game', () => {
		const emptyBoard = [
            [ false, false, false ],
            [ false, false, false ],
            [ false, false, false ],
        ];

		expect(game.createBoard(finalSetup)).toEqual(emptyBoard);
	});


	test('acertain a non empty game', () => {
		const expectedState = [
            [ true, false, false ],
            [ false, true, true ],
            [ false, false, false ],
        ];

		expect(gameStarted[0]).toEqual(expectedState);
	});

});

describe('game board after first step', () => {
    let setup: { [x: string]: Array<number> } = {
        0: [0, 1],
        1: [1, 2],
        2: [0, 2],
    };
    
	const game: Game = new Game(rows, columns, step = 1, setup, finalSetup);
    const gameStarted = transform(game.init());

	test('ascertain that steps has increased by one', () => {
		expect(game.step).toBe(1);
	});

	test('overpopulated cell dies', () => {
		expect(gameStarted[1][1][1]).toEqual(false);
	});

	test('empty cell with 3 neighbors is populated', () => {
		expect(gameStarted[1][0][2]).toEqual(true);
	});

	test('cell in solitude dies', () => {
		expect(gameStarted[1][2][0]).toEqual(false);
	});

	test('cell with 2/3 neighbors survives', () => {
		expect(gameStarted[1][0][1]).toEqual(true);
	});

});

describe('game board after two step', () => {
	let setup: { [x: string]: Array<number> } = {
        0: [0, 1],
        1: [1, 2],
        2: [0, 2],
    };
    
	const game: Game = new Game(rows, columns, step = 2, setup, finalSetup);
    const gameStarted = transform(game.init());

	test('ascertain that two steps have been taken', () => {
		expect(game.step).toBe(2);
		expect(gameStarted[2][0][0]).toEqual(false);
		expect(gameStarted[2][0][2]).toEqual(true);
		expect(gameStarted[2][1][1]).toEqual(false);

		expect(gameStarted[2][2][0]).toEqual(false);
		expect(gameStarted[2][2][1]).toEqual(false);
		expect(gameStarted[2][2][2]).toEqual(false);
	});

});