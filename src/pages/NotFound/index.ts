import Block from '../../utils/Block'
import template from './404.hbs'

export class NotFoundPage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}