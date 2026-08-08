const LANGUAGES = { fr_FR: 'Français', en_US: 'English', es_ES: 'Español', de_DE: 'Deutsch' }
const LANGUAGE_CODES = Object.keys(LANGUAGES)
const CORE_VERSIONS = ['4.3', '4.4', '4.5', '4.6']
const SITE_ORIGIN = 'https://doc.jeedom.com'
const GENERAL_SECTIONS = ['presentation', 'concept', 'howto', 'howtoadvance', 'installation', 'compatibility', 'premiers-pas', 'mobile', 'contribute', 'dev', 'legal_notice', 'home']

let _lang = getCookie('lang')
if (!_lang) {
  const userLang = (navigator.language || navigator.userLanguage).toLowerCase()
  _lang = LANGUAGE_CODES.find(function(l) { return userLang.indexOf(l.slice(0, 2)) !== -1 })
  if (!_lang) {
    _lang = LANGUAGE_CODES.find(function(l) { return window.location.href.indexOf('/' + l) !== -1 }) || 'fr_FR'
  }
  setCookie('lang', _lang, 7)
}

let _jeedomVersion = CORE_VERSIONS.find(function(v) { return window.location.href.indexOf('/' + v) !== -1 }) || getCookie('jeedomVersion') || CORE_VERSIONS[CORE_VERSIONS.length - 1]
if (getCookie('jeedomVersion') != _jeedomVersion) {
  setCookie('jeedomVersion', _jeedomVersion, 7)
}
