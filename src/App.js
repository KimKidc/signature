import { Component } from "./core/heropy"
import FruitItem from "./components/FruitItem"

export default class App extends Component {
  constructor() {
    super({
      state: {
        fruits: [
          { name: 'Apple', price: 1000 },
          { name: 'Banana', price: 2000 },
          { name: 'Cherry', price: 3000 }
        ]
      }
    })
  }
  render() {
    console.log(this.state.fruits)
    // console.log(this.state.fruits.map((fruit) => {
    //   return `<li>${fruit.name}</li>`
    // }).join('')
    // )
    this.el.innerHTML = /* html */ `
      <h1>Fruits</h1>
      <ul></ul>      
    `
    const ulEl = this.el.querySelector('ul')
    ulEl.append(...this.state.fruits
      .map(fruit => new FruitItem({
        props: {
          name: fruit.name,
          price: fruit.price
        }
      }).el)
    )

    // 구버전 코드
    // <ul>
    // ${ this.state.fruits
    //   .filter(fruit => fruit.price < 3000)
    //   .map(fruit => `<li>${fruit.name}</li>`)
    //   .join('')
    // }
    // </ul>

  }
}