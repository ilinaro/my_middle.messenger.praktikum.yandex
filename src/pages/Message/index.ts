import Block from '../../utils/Block'
import template from './message.hbs'

export class MessagePage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}