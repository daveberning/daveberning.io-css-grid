import Vue from 'vue'
import { library, config } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { fas } from '@fortawesome/free-solid-svg-icons'
import brands from '@fortawesome/fontawesome-free-brands'

config.autoAddCss = false

library.add(fas)
library.add(brands)

// Register the component globally
Vue.component('font-awesome-icon', FontAwesomeIcon)