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
  faEnvelope,
  faFileAlt,
  faUserTie,
  faBuilding,
  faGraduationCap
} from '@fortawesome/free-solid-svg-icons'

import {
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
  faFileAlt,
  faGithub,
  faGithubAlt,
  faLinkedin,
  faCodepen,
  faTelegram,
  faTelegram,
  faUserTie,
  faBuilding,
  faGraduationCap
)

Vue.component('fa', FontAwesomeIcon)
