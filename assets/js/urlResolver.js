function nextSegment(path) {
  const slash = path.indexOf('/', 1)
  return slash === -1 ? [path.slice(1), ''] : [path.slice(1, slash), path.slice(slash)]
}

function localizeHref(href) {
  const [section, rest] = nextSegment(href)

  if (section === 'core') {
    const [maybeVersion, afterVersion] = nextSegment(rest)
    if (CORE_VERSIONS.includes(maybeVersion) || /^\d+\.\d+$/.test(maybeVersion)) {
      const resolvedVersion = CORE_VERSIONS.includes(maybeVersion) ? maybeVersion : _jeedomVersion
      const [maybeLang, afterLang] = nextSegment(afterVersion)
      const pageRest = LANGUAGE_CODES.includes(maybeLang) ? afterLang : afterVersion
      return '/' + section + '/' + resolvedVersion + '/' + _lang + pageRest
    }
    return '/' + section + '/' + _jeedomVersion + '/' + _lang + rest
  }

  if (section === 'plugins' || section === 'plugins_contributor') {
    const [category, catRest] = nextSegment(rest)
    const [maybeCategoryLang] = nextSegment(catRest || '/')
    if (catRest === '' || catRest === '/' || LANGUAGE_CODES.includes(maybeCategoryLang)) {
      return '/' + section + '/' + category + '/' + _lang + '/'
    }
    const [plugin, pluginRest] = nextSegment(catRest)
    const [maybeBeta, afterBeta] = nextSegment(pluginRest)
    const betaPrefix = maybeBeta === 'beta' ? '/beta' : ''
    const pageRest = maybeBeta === 'beta' ? afterBeta : pluginRest
    const [maybeLang, afterLang] = nextSegment(pageRest)
    const finalRest = LANGUAGE_CODES.includes(maybeLang) ? afterLang : pageRest
    return '/' + section + '/' + category + '/' + plugin + betaPrefix + '/' + _lang + (finalRest === '' ? '/' : finalRest)
  }

  if (section === 'phpdoc') {
    const [maybeVersion, afterVersion] = nextSegment(rest)
    if (CORE_VERSIONS.includes(maybeVersion)) {
      return '/' + section + rest
    }
    const pageRest = /^\d+\.\d+$/.test(maybeVersion) ? afterVersion : rest
    return '/' + section + '/' + _jeedomVersion + (pageRest === '' ? '/' : pageRest)
  }

  if (!GENERAL_SECTIONS.includes(section)) {
    return href
  }

  const [maybeLang, afterLang] = nextSegment(rest)
  const pageRest = LANGUAGE_CODES.includes(maybeLang) ? afterLang : rest
  return '/' + section + '/' + _lang + (pageRest === '' ? '/' : pageRest)
}

function resolveLink(link) {
  if (link === SITE_ORIGIN || link.indexOf(SITE_ORIGIN + '/') === 0) {
    return localizeHref(link.slice(SITE_ORIGIN.length))
  }
  return link.charAt(0) === '/' ? localizeHref(link) : link
}
