import { LightningElement } from "lwc";

export default class Calculator extends LightningElement {
  // Define properties to store two inputs from the user and the result.
  numberone = "";
  numbertwo = "";
  result = 0;
  displayResult = false;

  // Handles input changes in the text fields.
  changeHandler(event) {
    let namee = event.target.name;
    let valuee = event.target.value;
    if (namee === "Number1") {
      this.numberone = valuee;
      console.log("New number 1", this.numberone);
    } else if (namee === "Number2") {
      this.numbertwo = valuee;
      console.log("New number 2", this.numbertwo);
    }
  }

  calculateInput(event) {
    this.displayResult = true;
    let labelElement = event.target.label;
    if (labelElement === "Add") {
      this.result = parseInt(this.numberone, 10) + parseInt(this.numbertwo, 10);
    } else if (labelElement === "Subtract") {
      this.result = parseInt(this.numberone, 10) - parseInt(this.numbertwo, 10);
    } else if (labelElement === "Multiply") {
      this.result = parseInt(this.numberone, 10) * parseInt(this.numbertwo, 10);
    } else if (labelElement === "Divide") {
      this.result = parseInt(this.numberone, 10) / parseInt(this.numbertwo, 10);
    }

    this.numberone = "";
    this.numbertwo = "";
  }
  resetResultHandler() {
    this.result = "";
  }
}
//   // Performs addition.
//   addHandler() {
//     this.result = parseInt(this.numberone, 10) + parseInt(this.numbertwo, 10);
//   }

//   // Performs subtraction.
//   subtractHandler() {
//     this.result = this.numberone - this.numbertwo;
//   }

//   // Performs multiplication.
//   multiplicationHandler() {
//     this.result = this.numberone * this.numbertwo;
//   }

//   // Performs division.
//   divisionHandler() {
//     if (this.numbertwo !== 0) {
//       this.result = this.numberone / this.numbertwo;
//     } else {
//       console.error("Division by zero error!");
//     }
//   }

// Resets the result and input fields.
