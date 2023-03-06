import { Button, InputProfile } from '../../ui'
import {
  СontrolEmail,
  СontrolLogin,
  СontrolName,
  СontrolPhone,
} from '../../lib'

import Block from '../../utils/Block'
import { renderDOM } from '../../renderDOM'
import template from './edit-profile.hbs'
import user from '../../mock/user.json'

export default class EditProfile extends Block {
  constructor() {
    super({})
  }

  init() {
    this.children.editEmail = new InputProfile({
      type: 'text',
      id: 'email',
      name: 'email',
      className: 'input_profile',
      maxLength: '40',
      placeholder: 'Почта',
      value: user.email,
      onBlur: (e: FocusEvent) => {
        СontrolEmail.check(
          (e.target as HTMLInputElement).value,
          this.children.editEmail as InputProfile,
        )
      },
    })
    this.children.editLogin = new InputProfile({
      type: 'text',
      id: 'login',
      name: 'login',
      placeholder: 'Логин',
      className: 'input_profile',
      maxLength: '40',
      value: user.login,
      onBlur: (e: FocusEvent) => {
        СontrolLogin.check(
          (e.target as HTMLInputElement).value,
          this.children.editLogin as InputProfile,
        )
      },
    })
    this.children.editFirstName = new InputProfile({
      type: 'text',
      id: 'first_name',
      name: 'first_name',
      placeholder: 'Имя',
      className: 'input_profile',
      maxLength: '40',
      value: user.first_name,
      onBlur: (e: FocusEvent) => {
        СontrolName.check(
          (e.target as HTMLInputElement).value,
          this.children.editFirstName as InputProfile,
        )
      },
    })
    this.children.editLastName = new InputProfile({
      type: 'text',
      id: 'second_name',
      name: 'second_name',
      placeholder: 'Фамилия',
      className: 'input_profile',
      maxLength: '40',
      value: user.second_name,
      onBlur: (e: FocusEvent) => {
        СontrolName.check(
          (e.target as HTMLInputElement).value,
          this.children.editLastName as InputProfile,
        )
      },
    })
    this.children.editDisplayName = new InputProfile({
      type: 'text',
      id: 'display_name',
      name: 'display_name',
      placeholder: 'Имя в чате',
      className: 'input_profile',
      maxLength: '40',
      value: user.display_name,
      onBlur: (e: FocusEvent) => {
        СontrolName.check(
          (e.target as HTMLInputElement).value,
          this.children.editDisplayName as InputProfile,
        )
      },
    })
    this.children.editPhone = new InputProfile({
      type: 'text',
      id: 'phone',
      name: 'phone',
      className: 'input_profile',
      maxLength: '40',
      placeholder: '+7(123)123-34-56',
      value: '+7(123)123-34-56',
      onBlur: (e: FocusEvent) => {
        СontrolPhone.check(
          (e.target as HTMLInputElement).value,
          this.children.editPhone as InputProfile,
        )
      },
    })

    this.children.ButtonProfile = new Button({
      label: 'Сохранить',
      className: 'button button_blue f-normal',
      events: {
        click: () => renderDOM('profile'),
      },
    })
  }

  render() {
    return this.compile(template, this.props)
  }
}
