import { LightningElement, api } from "lwc";

export default class ChildComponentForApiDecorator extends LightningElement {
  @api display;
  @api displayGreetings; //c/lightningComponent1
  @api userData;
  @api isUserAvailable = "false"; //necessary to declate to let LWC decide if its boolean.
}
