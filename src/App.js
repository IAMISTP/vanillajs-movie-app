import { Component } from "./core/heropy";
import TheHeader from "./components/TheHeader";

export default class App extends Component {
  render() {
    const routerView = document.createElement("router-view");
    this.el.append(new TheHeader().el, routerView);
  }
}
// export default class App{
//     constructor() {
//         this.el = document.createElement('div');
//         this.el.textContent = 'hello world'

//     }

// }
// import { Component } from "./core/heropy";

// export default class App extends Component {
//   constructor(props) {
//     super({
//       tagName: "h1",
//     });
//   }

//   render() {
//     this.el.textContent = "Hello world!!";
//   }
// }
// import { Component } from "./core/heropy";

// export default class App extends Component {
//   constructor() {
//     super({
//       state: {
//         inputText: "",
//       },
//     });
//   }
//   render() {
//     this.el.classList.add("search");
//     this.el.innerHTML = /*html*/ `
//     <input />
//     <button>Click</button>
//     `;

//     const inputEl = this.el.querySelector("input");
//     inputEl.oninput = () => {
//       this.state.inputText = inputEl.value;
//     };

//     const buttonEl = this.el.querySelector("button");
//     buttonEl.addEventListener("click", () => {
//       console.log(this.state.inputText );
//     });
//   }
// }
