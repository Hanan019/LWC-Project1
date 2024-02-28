import { LightningElement, track } from "lwc";

export default class ReactivePrimiveProperties extends LightningElement {
  greeting = "Hello";
  @track welcome = "Primitive properties are to be tested.";

  clickHandler() {
    this.greeting = "Hello there !";
    this.welcome = "value is changes.";
  }
}
