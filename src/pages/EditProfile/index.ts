import Block from '../../utils/Block'
import template from './edit-profile.hbs'

export class EditProfilePage extends Block {
    constructor() {
        super({});
      }

  render() {
    return this.compile(template, this.props)
  }
}