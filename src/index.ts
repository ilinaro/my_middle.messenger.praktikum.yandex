import './layouts'
import './blocks'
import './components'
import './components/svg'
import './assets/styles/global.scss'

import { renderDOM } from './renderDOM';

window.addEventListener('DOMContentLoaded', () => {
  // const context = { user };
  renderDOM('login')
})
