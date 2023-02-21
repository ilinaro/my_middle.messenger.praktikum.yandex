import Block from '../../utils/Block'
import { Button } from '../../components/buttons/Button'
import template from './login.hbs'

// export class LoginPage extends Block {
//   constructor(props: any) {
//     super('div')
//   }

//   init() {
//     this.children.loginButton = new Button({
//       label: 'Login',
//       events: {
//         click: ()=>console.log('Login')
//       }
//     })
//   }

//   render() {
//     return this.compile(template, this.props)
//   }
// }

// import Block from '../../utils/Block';
// import template from './login.hbs';
// import { Button } from '../../components/Button';
// import { Input } from '../../components/Input/input';
// import styles from './styles.module.pcss';
// import { Link } from '../../components/Link';
// import { SignupData } from '../../api/AuthAPI';
// import AuthController from '../../controllers/AuthController';

export class LoginPage extends Block {
  constructor() {
    super({});
  }

  init() {
    this.children.button = new Button({
      label: 'Авторизоваться',
      events: {
        click: () => this.onSubmit()
      },
    });
  }

  onSubmit() {
    console.log("Clicks")
  }

  render() {
    return this.compile(template, {...this.props});
  }
}
