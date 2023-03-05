import { Button, Input, ModalWindowBack } from '../../'

import Block from '../../../utils/Block'
import template from './modal-user-add.hbs'

interface ModalUserAddProps {
  type?: string
  state: boolean
  callbackAdd?: () => void
}

export default class ModalUserAdd extends Block<ModalUserAddProps> {
  constructor(props: ModalUserAddProps) {
    super({ type: 'div', ...props })
  }

  init() {
    this.children.ModalWindowBack = new ModalWindowBack({
      events: {
        click: () => {
          this.onCancel()
        },
      },
    })
    this.children.Login = new Input({
      id: 'login',
      name: 'login',
      type: 'text',
      maxLength: '50',
      placeholder: 'Логин',
    })
    this.children.Button = new Button({
      label: 'Добавить',
      className: 'button button_blue f-normal',
      type: 'submit',
      events: {
        click: () => {
          this.onClose()
        },
      },
    })
  }

  onCancel() {
    let value = (this.children.Login as Input).setValue('')
    if (this.props.callbackAdd) this.props.callbackAdd()
  }

  onClose() {
    let value = (this.children.Login as Input).setValue('')
    if (this.props.callbackAdd) this.props.callbackAdd()
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
