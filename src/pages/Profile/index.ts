import Block from '../../utils/Block'
import { BodyProfile } from '../../blocks'
import { ButtonBack } from '../../components'
import { renderDOM } from '../../renderDOM'
import template from './profile.hbs'

export class ProfilePage extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.ButtonBack = new ButtonBack({
      events: {
        click: () => renderDOM('message'),
      },
    })

    this.children.BodyProfile = new BodyProfile({})
  }

  render() {
    return this.compile(template, this.props)
  }
}
