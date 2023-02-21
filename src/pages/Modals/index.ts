import Block from '../../utils/Block'
import template from './modals.hbs'

export class ModalsPage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}