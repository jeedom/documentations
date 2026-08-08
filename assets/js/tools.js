function getCookie(name) {
  const cookies = document.cookie.split(';')
  for (const i in cookies) {
    const csplit = cookies[i].split('=')
    if (name.trim() == csplit[0].trim()) {
      return csplit[1]
    }
  }
  return ''
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date()
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000))
  const expires = "expires=" + d.toUTCString()
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;samesite=Lax;secure"
}

function getUrlVars(_key) {
  const vars = []
  let hash
  let nbVars = 0
  const hashes = window.location.search.replace('?', '').split('&')
  for (let i = 0; i < hashes.length; i++) {
    if (hashes[i] !== "" && hashes[i] !== "?") {
      hash = hashes[i].split('=')
      nbVars++
      vars[hash[0]] = hash[1]
      if (_key && _key == hash[0]) {
        return hash[1]
      }
    }
  }
  if (!_key) {
    return false
  }
  vars.length = nbVars
  return vars
}
