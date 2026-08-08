(function () {
  const pathname = window.location.pathname
  const [section, rest] = nextSegment(pathname)
  const [secondSegment] = nextSegment(rest || '/')

  let target
  if (section === 'dev' && secondSegment === 'phpdoc') {
    // phpdoc lived under /dev/phpdoc/<version>/... before the rework (never localized, just moved).
    target = localizeHref(rest)
  } else if (LANGUAGE_CODES.includes(section)) {
    // the old scheme had the language as the first path segment everywhere else.
    target = localizeHref(rest || '/')
  } else {
    // anything else localizeHref actually recognizes: bare categories with no language segment,
    // retired core/phpdoc versions, etc. It returns the href unchanged for anything it doesn't
    // recognize, so comparing before redirecting also protects against ever looping back here.
    target = localizeHref(pathname)
  }

  if (target !== pathname) {
    window.location.replace(target + window.location.search + window.location.hash)
  }
})()
