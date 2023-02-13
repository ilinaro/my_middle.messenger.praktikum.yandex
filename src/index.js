import './layouts'
import './components'

import login from './pages/login.hbs'
import profile from './pages/profile.hbs'
import registration from './pages/registration.hbs'
import styles from './assets/styles/global.scss'

function render(html) {
  const app = document.querySelector('#app')
  app.innerHTML = html
}

const ROUTES = {
  login: login,
  profile: profile,
  registration: registration,
}

window.goToPage = function (name) {
  const page = ROUTES[name]
  render(page())
}

window.addEventListener('DOMContentLoaded', () => {
  const context = { styles }
  render(ROUTES.profile(context))
})
