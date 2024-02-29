import { LightningElement } from "lwc";

export default class Day20fullNameGenerator extends LightningElement {
  firstName = "";
  middleName = "";
  lastName = "";
  //let first define an event on name change to get them into the variables.
  nameHandle(event) {
    let fieldName = event.target.name;
    let fieldValue = event.target.value;
    if (fieldName === "firstName") {
      this.firstName = fieldValue; //Assign the value after checking if enterd in the Fist Name
    } else if (fieldName === "middleName") {
      this.middleName = fieldValue;
    } else if (fieldName === "lastName") {
      this.lastName = fieldValue;
    }
  }
  get fullName() {
    return `${this.firstName} ${this.middleName} ${this.lastName}`.trim();
  }
  get salutationOptions() {
    return [
      { label: "Mr.", value: "Mr." },
      { label: "Ms.", value: "Ms." }
    ];
  }
}
