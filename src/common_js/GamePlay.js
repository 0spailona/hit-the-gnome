import {findNewPosition, generatorRandomNumber} from "./utilits";

export default class GamePlay {
  constructor(boardSize) {
    this.boardSize = boardSize;

  }

  drawField(root) {
    const boardContainerEl = document.createElement('div');
    boardContainerEl.classList.add('board-container');
    root.appendChild(boardContainerEl)

    const boardEl = document.createElement('div');
    boardEl.classList.add('board');
    boardContainerEl.appendChild(boardEl)

    for (let y = 0; y < this.boardSize; y++) {
      const rowEl = document.createElement('div');
      rowEl.classList.add('row');
      boardEl.appendChild(rowEl);

      for (let x = 0; x < this.boardSize; x++) {
        const cellEl = document.createElement('div');
        cellEl.classList.add('cell', `X${x}Y${y}`);
        rowEl.appendChild(cellEl);
      }
    }

    this.showGnome();
    setInterval(() => this.showGnome(), 1000)
  }

  showGnome() {
    if (document.querySelector('.gnome')) {
      document.querySelector('.gnome').classList.remove('gnome');
    }
    if (!this.gnomeElCoordinates) {
      const x = generatorRandomNumber(0, this.boardSize - 1);
      const y = generatorRandomNumber(0, this.boardSize - 1);
      this.gnomeElCoordinates = {x, y}
    } else {
      this.gnomeElCoordinates = findNewPosition(this.boardSize, this.gnomeElCoordinates.x, this.gnomeElCoordinates.y);
    }
    const classEl = `.X${this.gnomeElCoordinates.x}Y${this.gnomeElCoordinates.y}`;
    const cell = document.querySelector(classEl);
    cell.classList.add('gnome');
  }

}
