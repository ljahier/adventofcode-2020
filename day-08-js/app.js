import { readFileSync } from "fs";

class Day08 {
  constructor() {
    this.accumulator = 0;
    this.instructions = readFileSync("./input.txt").toString().split("\n");
    this.currentInstruction = 0;
    this.it = 0;
    this.history = [];
  }

  accFunc(nbr) {
    this.accumulator += parseInt(nbr);
  }

  jmpFunc(value) {
    this.currentInstruction += parseInt(value);
  }

  async core() {
    for (; ; this.it++) {
      const current = this.instructions[this.currentInstruction].split(" ");
      const currentOp = current[0];
      const currentOpValue = current[1];

      if (this.history.find((elem) => this.currentInstruction === elem) !== undefined) {
          console.log('answer is ', this.accumulator);
          return;
      }
      this.history.push(this.currentInstruction);
      switch (currentOp) {
        case "nop":
          this.currentInstruction++;
          break;
        case "acc":
          this.accFunc(currentOpValue);
          this.currentInstruction++;
          break;
        case "jmp":
          this.jmpFunc(currentOpValue);
          break;
      }
    }
  }
}

new Day08().core();
