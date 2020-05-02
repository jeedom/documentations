var docMenu = [
  {
    fr_FR : "Introduction",
    en_US : "Introduction",
    es_ES : "Introduccion",
    de_DE : "Introduction",
    pt_PT : "",
    link : "/#LANG#/presentation/index"
  },{
    fr_FR:'Assistance et bug',
    en_US : 'Assistance and bug',
    es_ES : "Asistencia y error",
    de_DE : "Hilfe und Fehler",
    pt_PT : "",
    link : "/#LANG#/howto/remonter_un_bug"
  },{
    divider : true
  },{
    fr_FR : "Installer Jeedom",
    en_US : "Install Jeedom",
    es_ES : "Instalar Jeedom",
    de_DE : "Installeer Jeedom",
    pt_PT : "Instale o Jeedom",
    submenu : [
      {link : "/#LANG#/installation/",fr_FR : "Installation",en_US:"Installation",es_ES:"Instalación",de_DE:"Installation",pt_PT:""},
      {link : "/#LANG#/compatibility/",fr_FR : "Compatibilité matériel et logiciel",en_US:"Compatibilité hardware and software",es_ES:"Compatibilidad de hardware y software.",de_DE:"Hardware- und Softwarekompatibilität",pt_PT:""},
      {link : "/#LANG#/premiers-pas/",fr_FR : "Premiers pas",en_US:"First step",es_ES:"Empezando",de_DE:"Erste Schritte",pt_PT:""},
    ]
  },{
    fr_FR : "Services",
    en_US : "Service",
    es_ES : "Servicios",
    de_DE : "Service",
    pt_PT : "",
    submenu:[
      {link : "",fr_FR : "Market",en_US:"Market"},
      {link : "/#LANG#/howto/assistant_vocaux_cloud",fr_FR : "Assistant vocaux",en_US:"Voice assistant",es_ES:"Asistente de voz",de_DE:"Sprachassistent",pt_PT:""},
      {link : "/#LANG#/howto/backup_cloud",fr_FR : "Sauvegarde",en_US:"Backup",es_ES:"Copia de seguridad",de_DE:"Backup",pt_PT:""},
      {link : "/#LANG#/howto/mise_en_place_dns_jeedom",fr_FR : "Accès distance",en_US:"Remote access",es_ES:"Acceso remoto",de_DE:"Fernzugriff",pt_PT:""},
      {link : "/#LANG#/howto/monitoring_cloud",fr_FR : "Monitoring",en_US:"Monitoring",es_ES:"Supervisión",de_DE:"Überwachung",pt_PT:""},
      {link : "/#LANG#/howto/sms_cloud",fr_FR : "SMS, Appels",en_US:"SMS and call",es_ES:"SMS, manzanas",de_DE:"SMS, Anrufe",pt_PT:""},
    ]
  },{
    divider : true
  },{
    fr_FR : "Manuel d'utilisation",
    en_US : "User manual",
    es_ES : "Manual del usuario",
    de_DE : "Benutzerhandbuch",
    pt_PT : "",
    submenu:[
      {link : "/#LANG#/core/#VERSION#/changelog",icon:"fas fa-clipboard-list",fr_FR : "Changelog",en_US:"Changelog",es_ES:"Changelog",de_DE:"Changelog",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/dashboard",icon:"fas fa-tachometer-alt",fr_FR : "Dashboard",en_US:"Dashboard",es_ES:"Tablero",de_DE:"Dashboard",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/view",icon:"far fa-image",fr_FR : "Vues",en_US:"Views",es_ES:"Vistas",de_DE:"Vues",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/design",icon:"fas fa-paint-brush",fr_FR : "Design",en_US:"Design",es_ES:"Diseño",de_DE:"Design",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/design3d",icon:"fas fa-cubes",fr_FR : "Design 3D",en_US:"Design 3D",es_ES:"Diseño 3D",de_DE:"Design 3D",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/log",icon:"far fa-file",fr_FR : "Logs",en_US:"Logs",es_ES:"Logs",de_DE:"",pt_PT:""},
      {link : "",icon:"fas fa-tachometer-alt",fr_FR : "Temps reel",en_US:"Real time",es_ES:"Tiempo real",de_DE:"Echtzeit",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/eqAnalyse",icon:"fas fa-battery-full",fr_FR : "Analyse équipements",en_US:"Equipments Analyse",es_ES:"Análisis",de_DE:"Analyse",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/display",icon:"fas fa-th",fr_FR : "Résumé Domotique",en_US:"Summary",es_ES:"Resumen de automatización del hogar",de_DE:"Zusammenfassung der Hausautomation",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/history",icon:"fas fa-chart-line",fr_FR : "Historique",en_US:"History",es_ES:"Historia",de_DE:"Historique",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/report",icon:"far fa-newspaper",fr_FR : "Rapport",en_US:"Report",es_ES:"Relación",de_DE:"Bericht",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/health",icon:"fas fa-medkit",fr_FR : "Santé",en_US:"Health",es_ES:"Salud",de_DE:"Gesundheit",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/object",icon:"far fa-object-group",fr_FR : "Objets",en_US:"Objects",es_ES:"Asuntos",de_DE:"Betreff",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/scenario",icon:"fas fa-cogs",fr_FR : "Scénarios",en_US:"Scenarios",es_ES:"Escenarios",de_DE:"Szenario",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/interact",icon:"far fa-comments",fr_FR : "Intéractions",en_US:"Interactions",es_ES:"Interacciones",de_DE:"Interaktionen",pt_PT:""},
      {version : ['4.0','4.1'],link : "/#LANG#/core/#VERSION#/widgets",icon:"fas fa-camera-retro",fr_FR : "Widgets",en_US:"Widgets",es_ES:"Widgets",de_DE:"Widgets",pt_PT:""},
      {link : "",icon:"fas fa-sticky-note",fr_FR : "Notes",en_US:"Notes",es_ES:"Notas",de_DE:"Anmerkungen",pt_PT:""},
      {link : "",icon:"fas fa-check",fr_FR : "Testeur d'expression",en_US:"Expression tester",es_ES:"Probador de expresión",de_DE:"Expressionstester",pt_PT:""},
      {link : "",icon:"fas fa-eye",fr_FR : "Variables",en_US:"Variables",es_ES:"Variables",de_DE:"Variables",pt_PT:""},
      {link : "/#LANG#/core/#VERSION#/plugin",icon:"fas fa-tags",fr_FR : "Plugins",en_US:"Plugins",es_ES:"Plugins",de_DE:"Plugins",pt_PT:"Plugins"},
      {link:"/#LANG#/mobile/index",icon:"fas fa-mobile",fr_FR:"Version mobile",en_US:"Mobile version",es_ES:"Versión móvil",de_DE:"Mobile Version",pt_PT:""},
      {link:"/#LANG#/core/#VERSION#/faq",icon:"fas fa-question-circle",fr_FR:"FAQ",en_US:"FAQ",es_ES:"FAQ",de_DE:"FAQ",pt_PT:"FAQ"}
    ]
  },{
    fr_FR : "Manuel de configuration",
    en_US : "Configuration manual",
    es_ES : "Manual de configuración",
    de_DE : "Konfigurationshandbuch",
    pt_PT : "",
    submenu:[
      {version : ['3.3'],link:"/#LANG#/core/#VERSION#/administration",icon:"fas fa-wrench",fr_FR:"Administration",en_US:"Administration",es_ES:"Administration",de_DE:"Verwaltung",pt_PT:""},
      {version : ['4.0','4.1'],link:"/#LANG#/core/#VERSION#/administration",icon:"fas fa-wrench",fr_FR:"Configuration",en_US:"Configuration",es_ES:"Configuracion",de_DE:"Konfiguration",pt_PT:"Configuração"},
      {link:"/#LANG#/core/#VERSION#/backup",icon:"fas fa-save",fr_FR:"Sauvegarde",en_US:"Save",es_ES:"Sauvegarde",de_DE:"Backup",pt_PT:""},
      {link:"",icon:"fas fa-save",fr_FR:"Restauration Image",en_US:"Image restoration",es_ES:"Restauración de imagen",de_DE:"Bildwiederherstellung",pt_PT:""},
      {link:"/#LANG#/core/#VERSION#/update",icon:"fas fa-sync-alt",fr_FR:"Mise à jour",en_US:"Update",es_ES:"Mise à jour",de_DE:"Mise à jour",pt_PT:""},
      {link:"/#LANG#/core/#VERSION#/cron",icon:"fas fa-tasks",fr_FR:"Moteur de tâche",en_US:"Cron",es_ES:"Motor de tareas",de_DE:"Task-Engine",pt_PT:""},
      {link:"/#LANG#/core/#VERSION#/custom",icon:"fas fa-pencil-alt",fr_FR:"Personalisation",en_US:"Personalisation",es_ES:"Personalizacion",de_DE:"Personalisierung",pt_PT:""},
      {link:"/#LANG#/core/#VERSION#/user",icon:"fas fa-users",fr_FR:"Utilisateur",en_US:"Users",es_ES:"Usuario",de_DE:"Benutzer",pt_PT:""},
      {link:"/#LANG#/core/#VERSION#/profils",icon:"fas fa-briefcase",fr_FR:"Profils",en_US:"Profils",es_ES:"Perfiles",de_DE:"Profile",pt_PT:""}
    ]
  },{
    divider : true
  },{
    fr_FR : "Plugins Officiels",
    en_US : "Official Plugins",
    es_ES : "Plugins Oficiales",
    de_DE : "Offizielle Plugins",
    pt_PT : "Plugins oficiais",
    submenu:[
      {link:"/#LANG#/plugins/security/",icon:"fas fa-lock",fr_FR:"Sécurité",en_US:"Security",es_ES:"Sécurité",de_DE:"",pt_PT:""},
      {link:"/#LANG#/plugins/automation%20protocol/",icon:"fas fa-rss",fr_FR:"Protocole domotique",en_US:"Home protocol",es_ES:"Protocolo de domótica",de_DE:"Hausautomationsprotokoll",pt_PT:""},
      {link:"/#LANG#/plugins/home%20automation%20protocol/",icon:"fas fa-asterisk",fr_FR:"Passerelle domotique",en_US:"Home gateway",es_ES:"Pasarela domótica",de_DE:"Hausautomations-Gateway",pt_PT:""},
      {link:"/#LANG#/plugins/programming/",icon:"fas fa-code",fr_FR:"Programmation",en_US:"Programming",es_ES:"Programmation",de_DE:"Programmierung",pt_PT:""},
      {link:"/#LANG#/plugins/organization/",icon:"fas fa-calendar-alt",fr_FR:"Organisation",en_US:"Organize",es_ES:"Organisation",de_DE:"Organisation",pt_PT:""},
      {link:"/#LANG#/plugins/weather/",icon:"fas fa-sun",fr_FR:"Météo",en_US:"Weather",es_ES:"Météo",de_DE:"Wettervorhersage",pt_PT:""},
      {link:"/#LANG#/plugins/communication/",icon:"fas fa-comment",fr_FR:"Communication",en_US:"Communication",es_ES:"Comunicación",de_DE:"Kommunikation",pt_PT:""},
      {link:"/#LANG#/plugins/devicecommunication/",icon:"fas fa-language",fr_FR:"Objets connectés",en_US:"Connected object",es_ES:"Objets connectés",de_DE:"Verbundene Objekte",pt_PT:""},
      {link:"/#LANG#/plugins/multimedia/",icon:"fas fa-sliders-h",fr_FR:"Multimédia",en_US:"Multimedia",es_ES:"Multimédia",de_DE:"Multimedia",pt_PT:""},
      {link:"/#LANG#/plugins/wellness/",icon:"fas fa-user",fr_FR:"Confort",en_US:"Wellness",es_ES:"Confort",de_DE:"Komfort",pt_PT:""},
      {link:"/#LANG#/plugins/monitoring/",icon:"fas fa-tachometer-alt",fr_FR:"Monitoring",en_US:"Monitoring",es_ES:"Monitoreo",de_DE:"Überwachung",pt_PT:""},
      {link:"/#LANG#/plugins/health/",icon:"fas fa-heartbeat",fr_FR:"Santé",en_US:"Health",es_ES:"Salud",de_DE:"Santé",pt_PT:""},
      {link:"/#LANG#/plugins/nature/",icon:"fab fa-pagelines",fr_FR:"Nature",en_US:"Nature",es_ES:"Nature",de_DE:"Natur",pt_PT:""},
      {link:"/#LANG#/plugins/automatisation/",icon:"fas fa-magic",fr_FR:"Automatisme",en_US:"Automation",es_ES:"Automatisme",de_DE:"Automatisierung",pt_PT:""},
      {link:"/#LANG#/plugins/energy/",icon:"fas fa-bolt",fr_FR:"Energie",en_US:"Energy",es_ES:"Energía",de_DE:"Energie",pt_PT:""},
      {link:"/#LANG#/plugins/other/",icon:"fas fa-bars",fr_FR:"Autre",en_US:"Other",es_ES:"Otros",de_DE:"Andere",pt_PT:""},
    ]
  },{
    divider : true
  },{
    fr_FR:'Guides',
    en_US : 'Guides',
    es_ES : "Guides",
    de_DE : "Anleitungen",
    pt_PT : "",
    submenu:[
      {link:"/#LANG#/howto/",fr_FR:"Tutoriaux",en_US:"Tutorials",es_ES:"Tutoriales",de_DE:"Tutorials",pt_PT:""},
      {link:"/#LANG#/howtoadvance/",fr_FR:"Tutoriaux avancés",en_US:"Advanced tutorials",es_ES:"Tutoriales avanzados",de_DE:"Erweiterte Tutorials",pt_PT:""}
    ]
  },{
    fr_FR:'Développer sur Jeedom',
    en_US : 'Developpe on Jeedom',
    es_ES : "Desarrollar en Jeedom",
    de_DE : "Entwickle auf Jeedom",
    pt_PT : "",
    submenu:[
      {link:"/#LANG#/dev/tutorial_plugin",fr_FR:"Présentation",en_US:"Presentation",es_ES:"Présentation",de_DE:"Einführung",pt_PT:""},
      {link:"/#LANG#/core/4.0/api_http",fr_FR:"Api HTTP",en_US:"Api HTTP",es_ES:"Api HTTP",de_DE:"Api HTTP",pt_PT:"Api HTTP"},
      {link:"/#LANG#/core/4.0/jsonrpc_api",fr_FR:"API JsonRPC",en_US:"API JsonRPC",es_ES:"API JsonRPC",de_DE:"API JsonRPC",pt_PT:"API JsonRPC"},
      {link:"/#LANG#/dev/",fr_FR:"Développez pour Jeedom",en_US:"Develop for Jeedom",es_ES:"Desarrollar para Jeedom",de_DE:"Entwickle für Jeedom",pt_PT:""},
    ]
  },{
    divider : true
  },{
    fr_FR : "Mentions légales",
    en_US : "Legal Notice",
    es_ES : "Notas legales",
    de_DE : "Introduction",
    pt_PT : "Rechtliche Hinweise",
    link : "/#LANG#/legal_notice"
  }

]

if(getUrlVars('theme') == 'light' || getUrlVars('theme') == 'dark'){
  setCookie('theme',getUrlVars('theme'),7)
}

setTheme();

$('#ul_menu').empty();
var html = '';
var lang = 'fr_FR' ;
if(window.location.href.indexOf('fr_FR') != -1){
  lang = 'fr_FR'
}else if(window.location.href.indexOf('en_US') != -1){
  lang = 'en_US'
}else if(window.location.href.indexOf('es_ES') != -1){
  lang = 'es_ES'
}else if(window.location.href.indexOf('de_DE') != -1){
  lang = 'de_DE'
}else if(getCookie('lang') != ''){
  lang = getCookie('lang');
}
if(getCookie('lang') != lang){
  setCookie('lang',lang,7)
}

$('#meta-lang').attr('content',lang)
var jeedomVersion = '3.3'
if(window.location.href.indexOf('3.3') != -1){
  jeedomVersion = '3.3'
}else if(window.location.href.indexOf('4.0') != -1){
  jeedomVersion = '4.0'
}else if(window.location.href.indexOf('4.1') != -1){
  jeedomVersion = '4.1'
}else if(getCookie('jeedomVersion') != ''){
  jeedomVersion = getCookie('jeedomVersion');
}
if(getCookie('jeedomVersion') != jeedomVersion){
  setCookie('jeedomVersion',jeedomVersion,7)
}
if($('#sel_jeedomVersion').val() != jeedomVersion){
  $('#sel_jeedomVersion').val(jeedomVersion);
}
$('#sel_lang').val(lang);
for(var i in docMenu){
  var menu = docMenu[i]
  if(menu.divider){
    html += '<li><div class="divider"></div></li>';
  }else if(menu.submenu){
    html += '<li>';
    html += '<div class="collapsible-header">'+genText(menu,lang)+'</div>';
    html += '<div class="collapsible-body">';
    html += '<ul>';
    for(var j in menu.submenu){
      var submenu = menu.submenu[j];
      if(submenu.link == ''){
        continue;
      }
      if(submenu.version && submenu.version.indexOf(jeedomVersion) == -1){
        continue;
      }
      html += '<li><a href="'+submenu.link.replace('#LANG#',lang).replace('#VERSION#',jeedomVersion)+'">'+genText(submenu,lang)+'</a></li>';
    }
    html += '</ul>';
    html += '</div>';
    html += '</li>';
  }else{
    if(menu.link){
      if(menu.link == ''){
        continue;
      }
      html += '<li><a href="'+menu.link.replace('#LANG#',lang).replace('#VERSION#',jeedomVersion)+'">'+genText(menu,lang)+'</a></li>';
    }else{
      html += '<li><strong style="margin-left:5px;" href="#!">'+genText(menu,lang)+'</strong></li>';
    }
  }
}
$('#ul_menu').empty().html(html);

function genText(_menu,_lang){
  if(_menu.icon){
    return '<i class="'+_menu.icon+'"></i>'+_menu[lang];
  }else{
    return _menu[lang];
  }
}

$(function(){
  document.title = 'Documentation Jeedom'
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.dropdown-trigger').dropdown();
  $('.collapsible').collapsible();

  $('#div_summary').empty().append('<ul></ul>');
  var i=0;
  $('#div_content h1,h2').each(function(){
    $(this).attr('id','tocAnchor-'+i)
    if($(this).is('h1')){
      $('#div_summary ul').append('<li><a href="#tocAnchor-'+i+'" class="tocAnchor">'+$(this).text()+'</a></li>')
    }
    if($(this).is('h2')){
      $('#div_summary ul').append('<li><a href="#tocAnchor-'+i+'" class="tocAnchor" style="margin-left:15px;">'+$(this).text()+'</a></li>')
    }
    $(this).addClass('scrollspy');
    i++;
  });
  $('.scrollspy').scrollSpy();

  setTimeout(function() {
    $('#div_summary').pushpin({top:$('nav').height(),offset:$('nav').height()+10})
  }, 100);

  $('#sel_lang').on('change',function(){
    setCookie('lang',$(this).val(),7)
    var url = window.location.href.replace('fr_FR',$(this).val()).replace('en_US',$(this).val()).replace('es_ES',$(this).val()).replace('de_DE',$(this).val());
    window.location.href = url;
  })

  $('#sel_theme').on('change',function(){
    setCookie('theme',$(this).val(),7)
    setTheme();
  })

  $('#sel_jeedomVersion').on('change',function(){
    setCookie('jeedomVersion',$(this).val(),7)
    var url = window.location.href;
    if(url.indexOf('/core/') != -1 && url.indexOf(getCookie('jeedomVersion')) == -1){
      window.location.href = url.replace('3.3',getCookie('jeedomVersion')).replace('4.0',getCookie('jeedomVersion')).replace('4.1',getCookie('jeedomVersion'))
      return;
    }
    window.location.reload();
  })

  $('select').formSelect();
  $('#div_content :not(td)>img').addClass('responsive-img')
  cookiesPolicyBar();
  setLeftMenu();
});

function setTheme(){
  if(getCookie('theme') == 'dark'){
    $('html').addClass('dark')
    if($('#sel_theme').val() != 'dark'){
      $('#sel_theme').val('dark');
    }
  }else{
    $('html').removeClass('dark')
  }
}

function getCookie(cname) {
  var name = cname + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i <ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays*24*60*60*1000));
  var expires = "expires="+ d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function cookiesPolicyBar(){
  if (getCookie('cookiePolicyAccept') != "active") $('#cookieAcceptBar').show();
  $('#cookieAcceptBarConfirm').on('click',function(){
    setCookie('cookiePolicyAccept', 'active', 30);
    $('#cookieAcceptBar').fadeOut();
  });
}

function setLeftMenu(){
  var url = window.location.href;
  $('#ul_menu a').each(function(){
    if($(this).attr('href') && url.indexOf($(this).attr('href')) != -1){
      $(this).closest('li').addClass('menu_active');
      if($(this).closest('li').closest('ul').closest('li')){
        $(this).closest('li').closest('ul').closest('li').find('.collapsible-header').click();
        return false;
      }
    }
  })
}

function getUrlVars(_key) {
  var vars = [], hash, nbVars = 0;
  var hashes = window.location.search.replace('?','').split('&');
  for (var i = 0; i < hashes.length; i++) {
    if (hashes[i] !== "" && hashes[i] !== "?") {
      hash = hashes[i].split('=');
      nbVars++;
      vars[hash[0]] = hash[1];
      if (_key && _key == hash[0]) {
        return hash[1];
      }
    }
  }
  if (!_key) {
    return false;
  }
  vars.length = nbVars;
  return vars;
}

if($('#div_searchBar')){
  var html = "<div>";
  html += "<script>";
  html += "(function() {";
  html += "var cx = '007992890294536312136:75s0-jhumye';";
  html += "var gcse = document.createElement('script');";
  html += "gcse.type = 'text/javascript';";
  html += "gcse.async = true;";
  html += "gcse.src = 'https://cse.google.com/cse.js?cx=' + cx;";
  html += "var s = document.getElementsByTagName('script')[0];";
  html += "s.parentNode.insertBefore(gcse, s);";
  html += "})();";
  html += "window.onload = function(){";
  html += "$('#gsc-i-id1').removeAttr( 'style' );";
  html += "$('#gsc-i-id1').attr('style','width: 100%; padding: 0px; border: none; margin: -0.0625em 0px 0px; height: 1.25em; outline: none; background-image: url(https://www.google.com/cse/static/images/1x/googlelogo_lightgrey_46x16dp.png); text-indent: 48px; background-position: left center; background-repeat: no-repeat no-repeat;');";
    html += "$('#gsc-i-id1').attr('placeholder','Rechercher sur la documentation');";
    html += "};";
    html += "</script>";
    html += "<gcse:search></gcse:search>";
    html += "</div>";
    $('#div_searchBar').empty().append(html);
  }
