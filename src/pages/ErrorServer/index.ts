import Block from '../../utils/Block'
import template from './500.hbs'

export class ErrorServerPage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}