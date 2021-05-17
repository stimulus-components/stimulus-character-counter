import { Controller } from 'stimulus'

export default class extends Controller {
  counterTarget: HTMLElement
  inputTarget: HTMLInputElement

  static targets = ['input', 'counter']

  initialize (): void {
    this.update = this.update.bind(this)
  }

  connect (): void {
    this.update()
    this.inputTarget.addEventListener('input', this.update)
  }

  disconnect (): void {
    this.inputTarget.removeEventListener('input', this.update)
  }

  update (): void {
    this.counterTarget.innerHTML = this.count.toString()
  }

  get count (): Number {
    return this.inputTarget.value.length
  }
}
