import Block from '../../utils/Block'
import template from './registration.hbs'

export class RegistrationPage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}