import { createI18n } from 'vue-i18n'

import Cookie from '@/utils/Cookie'

import enLocale from './en/index'
import zhLocale from './zh/index'

const messages = {
  en: enLocale,
  zh: zhLocale
}
const i18n = createI18n({
  // legacy: false,
  // globalInjection: true,
  locale: Cookie.getCookie('language') || 'zh',
  messages
})

  export default i18n