import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'counter']

  initialize () {
    this.update = this.update.bind(this)
  }

  connect () {
    this.update()
    this.inputTarget.addEventListener('input', this.update)
  }

  disconnect () {
    this.inputTarget.removeEventListener('input', this.update)
  }

  update () {
    this.counterTarget.innerHTML = this.count
  }

  get count () {
    return this.inputTarget.value.length
  }
}
