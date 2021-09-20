import BusinessRules from "../rules/rules";

class Games {
  private rows: number;
  private columns: number;
  private step: number;
  private setup: { [x: string]: Array<number> } = {};
  private finalSetup: { [x: string]: Array<number> } = {};
  private finalBoard: multiDimension;
  private tempBoard: multiDimension;

  constructor(
    rows: number,
    columns: number,
    step: number,
    setup: { [x: string]: Array<number> },
    finalSetup: { [x: string]: Array<number> }
  ) {
    this.rows = rows;
    this.columns = columns;
    this.step = step;
    this.setup = setup;
    this.finalSetup = finalSetup;
    this.finalBoard = this.createBoard(this.finalSetup);
    this.tempBoard = this.createBoard(this.finalSetup);
  }

  protected getNeighbours(
    x: number,
    y: number,
    board: multiDimension
  ): {
    diagonals: object;
    opposites: object;
    all: {
      [x: number]: Array<number>;
    };
  } {
    let rowsNeg = x - 1;
    let rowsPos = x + 1;
    let columnsNeg = y - 1;
    let columnsPos = y + 1;

    const check = this.confirmPosition(board);

    const diagonals = {
      d0: check(rowsNeg, columnsNeg),
      d1: check(rowsNeg, columnsPos),
      d2: check(rowsPos, columnsNeg),
      d3: check(rowsPos, columnsPos),
    };

    const opposites = {
      p0: check(rowsNeg, y),
      p1: check(rowsPos, y),
      p2: check(x, columnsNeg),
      p3: check(x, columnsPos),
    };

    return {
      diagonals,
      opposites,
      all: { ...diagonals, ...opposites },
    };
  }

  protected confirmPosition(
    board: multiDimension
  ): (x: number, y: number) => Array<number> | null {
    return (x: number, y: number) => {
      if (x === -1 || y === -1 || x >= this.rows || y >= this.columns)
        return null;
      if (board[x][y]) return [x, y];
      return null;
    };
  }

  protected checkCellStatus = (x: number, y: number, value: number) => {
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.finalBoard[i][j] = this.tempBoard[i][j];
      }
    }

    const newboard =
      value === 0 ? this.createBoard(this.setup) : this.finalBoard;

    const neighbors = this.getNeighbours(x, y, newboard);

    let count = 0;

    for (let i in neighbors.all) {
      if (neighbors.all[i] !== null) count++;
    }

    const businessRules = new BusinessRules(count);

    if (newboard[x][y]) {
      if (businessRules.caseOne || businessRules.caseTwo)
        newboard[x][y] = false;
    } else {
      if (businessRules.caseFour) newboard[x][y] = true;
    }

    return newboard;
  };

  public createBoard(setup: { [x: string]: Array<number> }) {
    let x = new Array(this.rows);

    for (let counter = 0; counter < x.length; counter++) {
      x[counter] = new Array(this.columns);
    }

    Object.keys(setup).forEach((value: string, index: number): void => {
      for (let i = 0; i < this.rows; i++) {
        setup[index].includes(i) ? (x[index][i] = true) : (x[index][i] = false);
      }
    });

    return x;
  }

  protected runGame(value: number) {
    let boardToCheck;
    let finalBoard = this.createBoard(this.finalSetup);
    console.log(finalBoard);
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        boardToCheck = this.checkCellStatus(i, j, value);
        finalBoard[i][j] = boardToCheck[i][j];
      }
    }
    for (let i = 0; i < this.rows; i++) {
      for (let j = 0; j < this.columns; j++) {
        this.finalBoard[i][j] = finalBoard[i][j];
        this.tempBoard[i][j] = this.finalBoard[i][j];
      }
    }
    this.finalBoard[0][0] = true;
    console.log(finalBoard, this.finalBoard);
    if (value === 0) return [boardToCheck, finalBoard];
    return finalBoard;
  }

  public init() {
    let array = [];
    for (let i = 0; i < this.step; i++) {
      array.push(this.runGame(i));
    }

    return array;
  }
}

export default Games;
