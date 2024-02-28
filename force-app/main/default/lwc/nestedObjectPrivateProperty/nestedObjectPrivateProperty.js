import { LightningElement } from "lwc";

export default class NestedObjectPrivateProperty extends LightningElement {
  myObjectTest = { First: "Hanan", Last: "Maqbol" };
  /*without @track decorator the function will work but will not render the value on the UI.*/
  handleClick() {
    this.myObjectTest.First = "Iqbal";
    this.myObjectTest.Last = "Khan";
  }

  NewTask = ["Song", "Trap", "world"];
  addTaskHandler() {
    this.NewTask.push("Go On");
  }
  refreshHandler() {
    //resetting the object value name to default
    this.myObjectTest = { First: "Hanan", Last: "Maqbol" };
    //now when we are resetting the the object or array completely ,
    //we can remove the we can remove the @track as well.
    this.NewTask = [...this.NewTask, "Up Ahead"];
  }
}
