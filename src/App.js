import { Component } from "./core/heropy"
export default class App extends Component {
  constructor() {
    super({
      state: {
        inputText: ''
      }
    })
  }
  render() {
    this.el.classList.add('search')
    // innerHTML 작성 시 컬러링 되어 코드를 읽기 쉽게 해주는 확장 프로그램
    // Comment tagged templates
    // 백틱기호 앞에 /* html */ 입력 시 동작
    this.el.innerHTML = /* html */ `
    <input />
    <button>Click!</button>
    `

    const inputEl = this.el.querySelector('input')
    inputEl.addEventListener('input', () => {
      this.state.inputText = inputEl.value
    })

    const buttonEl = this.el.querySelector('button')
    buttonEl.addEventListener('click', () => {
      console.log(this.state.inputText)
    })
  }
}