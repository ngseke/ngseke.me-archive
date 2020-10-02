import Vue from 'vue'

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import {
  faBars,
  faAngleDown,
  faBriefcase,
  faBook,
  faMapMarker,
  faGamepad,
  faFlag,
  faDownload,
  faEnvelope
} from '@fortawesome/free-solid-svg-icons'

import {
  faVuejs,
  faSass,
  faNpm,
  faGithub,
  faGithubAlt,
  faLinkedin,
  faCodepen,
  faTelegram
} from '@fortawesome/free-brands-svg-icons'

library.add(
  faBars,
  faAngleDown,
  faBriefcase,
  faBook,
  faMapMarker,
  faGamepad,
  faFlag,
  faDownload,
  faEnvelope,
  faVuejs,
  faSass,
  faNpm,
  faGithub,
  faGithubAlt,
  faLinkedin,
  faCodepen,
  faTelegram
)

Vue.component('fa', FontAwesomeIcon)
