class Typescript {
  version: string;
  constructor(version: string) {
    this.version = version;
  }
  info(name: string) {
    return `[${name}]: typescript version is ${this.version}`;
  }
}

class Car {
  readonly model: string;
  readonly numberOfWheels: number = 4;

  constructor(theModel: string) {
    this.model = theModel;
  }
}

class NewCar {
  readonly numberOfWheels: number = 4;
  constructor(readonly model: string) {}
}

//modificators

class Animal {
  protected voice: string = "";
  public color: string = "black";
  private go() {
    console.log("Go");
  }
}

class Cat extends Animal {
  public setVoice(voice: string): void {
    this.voice = voice;
  }
}

const cat = new Cat();
cat.setVoice("test");

console.log(cat.color);

//==============
//abstract class and method
abstract class Component {
  abstract render(): void;
  abstract info(): string;
}

class AppComponent extends Component {
  render(): void {
    console.log("asdasdasdasdas");
  }
}
