import { Component } from "../core/heropy";
import messageStore from "../store/message";

export default class Title extends Component {
  constructor() {
    super({
      tagName: "h1",
    });
    messageStore.subscribe("message", () => {
      //messageStore 에 message 상태가 변경이 될때마다 뒤에 있는 callback 함수가 실행될것이다.

      this.render();
    });
  }
  render() {
    this.el.textContent = `Title ${messageStore.state.message}`;
  }
}
