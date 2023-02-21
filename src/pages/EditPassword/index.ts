import Block from '../../utils/Block'
import template from './edit-password.hbs'

export class EditPasswordPage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}