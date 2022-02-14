const str: string = "Hello";
console.log(str);

const isFetching: boolean = true;
const isLoading: boolean = false;

const int: number = 42;
const float: number = 4.2;
const num: number = 3e10;

const message: string = "Hello TS";

const numberArray: number[] = [1, 1, 2, 3, 5, 8, 13];
const numberArray2: Array<number> = [1, 1, 2, 3, 5, 8, 13];

const words: string[] = ["Hello", "TS"];

//Tuple
const contact: [string, number] = ["Boris", 1234567890];

//Any
let variable: any = 42;
variable = "new string";
variable = [];

// ===
function sayMyName(name: string): void {
  console.log(name);
}

sayMyName("Борька");

//never

function throwError(message: string): never {
  for (let i = 0; i < 10; i++) {
    if (i === 5) {
      throw new Error(message);
    }
  }
}
