import { LightningElement, api } from "lwc";

export default class ChildComponentForApiDecorator extends LightningElement {
  @api display;
  @api displayGreetings; //c/lightningComponent1
  @api userdata;
}
