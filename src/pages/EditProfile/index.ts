import Block from '../../utils/Block'
import { ButtonBack } from '../../components'
import { EditProfile } from '../../blocks'
import { renderDOM } from '../../renderDOM'
import template from './edit-profile.hbs'

export class EditProfilePage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.ButtonBack = new ButtonBack({
      events: {
        click: () => renderDOM('profile'),
      },
    })
    this.children.EditProfile = new EditProfile()
  }

  render() {
    return this.compile(template, this.props)
  }
}
