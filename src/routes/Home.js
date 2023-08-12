import Message from "../components/Message";
import TextField from "../components/TextField";
import { Component } from "../core/heropy";

export default class Home extends Component {
  render() {
    this.el.innerHTML = /* html */ `
            <h1>Home</h1>
        `;
    this.el.append(new TextField().el, new Message().el);
  }
}
