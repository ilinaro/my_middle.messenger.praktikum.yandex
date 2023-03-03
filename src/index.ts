import './layouts'
import './blocks'
import './assets/styles/global.scss'

import { renderDOM } from './renderDOM'

window.addEventListener('DOMContentLoaded', () => {
  // const context = { user };
  renderDOM('profile')
})
