import './layouts'
import './blocks'

import { renderDOM } from './renderDOM'

// import './assets/styles/global.scss'

window.addEventListener('DOMContentLoaded', () => {
  // const context = { user };
  renderDOM('profile')
})
