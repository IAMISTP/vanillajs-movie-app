import { Component } from "./core/heropy";

export default class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: "Apple", price: 1000 },
          { name: "Banana", price: 2000 },
          { name: "Cherry", price: 3000 },
        ],
      },
    });
  }
  render() {
    console.log(this.state.fruits);

    this.el.innerHTML = /*html*/ `
        <h1>Fruits</h1>
        <ul>
            ${this.state.fruits
              .filter((fruit) => fruit.price < 3000)
              .map((fruit) => `<li>${fruit.name}</li>`)
              .join("")}
        </ul>
    `;
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
