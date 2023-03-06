import Block from '../../../utils/Block'
import template from './input-message.hbs'

interface InputProps {
  id: string
  type?: string
}

export default  class InputMessage extends Block<InputProps> {
  constructor(props: InputProps) {
    super({ type: 'input', ...props })
  }

  setValue(value: string) {
    return ((this.element as HTMLInputElement).value = value)
  }

  getName() {
    return (this.element as HTMLInputElement).name
  }

  getValue() {
    return (this.element as HTMLInputElement).value
  }

  render() {
    return this.compile(template, { ...this.props })
  }
}
