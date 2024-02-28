import { LightningElement, track } from "lwc";

export default class NestedObjectPrivateProperty extends LightningElement {
  @track myObjectTest = { First: "Hanan", Last: "Maqbol" };
  /*without @track decorator the function will work but will not render the value on the UI.*/
  handleClick() {
    this.myObjectTest.First = "Iqbal";
    this.myObjectTest.Last = "Khan";
  }

  @track NewTask = ["Song", "Trap", "world"];
  addTaskHandler() {
    this.NewTask.push("Go On");
  }
  refreshHandler() {
    //resetting the object value name to default
    this.myObjectTest = { First: "Hanan", Last: "Maqbol" };
    this.NewTask = [...this.NewTask, "Up Ahead"];
  }
}
