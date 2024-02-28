import { LightningElement, api } from "lwc";

export default class ChildComponentForApiDecorator extends LightningElement {
  @api display;
}
