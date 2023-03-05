import { Button, Input, ModalWindowBack } from '../..'

import Block from '../../../utils/Block'
import template from './modal-user-remove.hbs'

interface ModalUserRemoveProps {
  type?: string
  state: boolean
  callbackRemove?: () => void
}

export default class ModalUserRemove extends Block<ModalUserRemoveProps> {
  constructor(props: ModalUserRemoveProps) {
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
      label: 'Удалить',
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
    if (this.props.callbackRemove) this.props.callbackRemove()
  }

  onClose() {
    let value = (this.children.Login as Input).setValue('')
    if (this.props.callbackRemove) this.props.callbackRemove()
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
