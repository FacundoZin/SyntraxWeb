import './assets/main.css'

import { createPinia } from 'pinia'
import { createApp } from 'vue'

import App from './App.vue'
import router from './router'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import {
  faClock,
  faEnvelope,
  faLocationDot,
  faPhone,
  faArrowRight,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faLinkedin, faInstagram, faEnvelope, faLocationDot, faPhone, faClock, faArrowRight)
const app = createApp(App)

app.component('font-awesome-icon', FontAwesomeIcon)

app.use(createPinia())
app.use(router)

app.mount('#app')
