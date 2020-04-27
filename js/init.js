var docMenu = [
  {
    fr_FR : "Introduction",
    en_US : "Introduction",
    es_ES : "Introduccion",
    de_DE : "Introduction",
    pt_PT : "",
    link : ""
  },{
    fr_FR:'Assistance et bug',
    en_US : 'Assistance and bug',
    es_ES : "Asistencia y error",
    de_DE : "Hilfe und Fehler",
    pt_PT : "",
    link : "/documentations/#LANG#/howto/remonter_un_bug"
  },{
    fr_FR : "Utiliser Jeedom",
    en_US : "Use Jeedom",
    es_ES : "Use Jeedom",
    de_DE : "Benutze Jeedom",
    pt_PT : "",
    submenu : [
      {link : "/documentations/#LANG#/presentation/index",fr_FR : "Présentation",en_US:"Presentation",es_ES:"Presentación",de_DE:"Presentation",pt_PT:""},
      {link : "/documentations/#LANG#/installation/index",fr_FR : "Installation",en_US:"Installation",es_ES:"Instalación",de_DE:"Installation",pt_PT:""},
      {link : "/documentations/#LANG#/compatibility/index",fr_FR : "Compatibilité matériel et logiciel",en_US:"Compatibilité hardware and software",es_ES:"Compatibilidad de hardware y software.",de_DE:"Hardware- und Softwarekompatibilität",pt_PT:""},
      {link : "/documentations/#LANG#/premiers-pas/index",fr_FR : "Premiers pas",en_US:"First step",es_ES:"Empezando",de_DE:"Erste Schritte",pt_PT:""},
    ]
  },{
    fr_FR : "Box Jeedom",
    en_US : "Jeedom's box",
    es_ES : "Box Jeedom",
    de_DE : "Jeedom Box",
    pt_PT : "",
    submenu : [
      {link : "",fr_FR : "Démarrage Jeedom smart",en_US:"Jeedom smart start",es_ES:"Bota  Jeedom Smart",de_DE:"Erste Schritte Jeedom Smart",pt_PT:""},
      {link : "",fr_FR : "Démarrage Jeedom pro",en_US:"Jeedom pro start",es_ES:"Bota Jeedom pro",de_DE:"Erste Schritte Jeedom Pro",pt_PT:""},
    ]
  },{
    fr_FR : "Services",
    en_US : "Service",
    es_ES : "Servicios",
    de_DE : "Service",
    pt_PT : "",
    submenu:[
      {link : "",fr_FR : "Market",en_US:"Market"},
      {link : "/documentations/#LANG#/howto/assistant_vocaux_cloud",fr_FR : "Assistant vocaux",en_US:"Voice assistant",es_ES:"Asistente de voz",de_DE:"Sprachassistent",pt_PT:""},
      {link : "/documentations/#LANG#/howto/backup_cloud",fr_FR : "Sauvegarde",en_US:"Backup",es_ES:"Copia de seguridad",de_DE:"Backup",pt_PT:""},
      {link : "/documentations/#LANG#/howto/mise_en_place_dns_jeedom",fr_FR : "Accès distance",en_US:"Remote access",es_ES:"Acceso remoto",de_DE:"Fernzugriff",pt_PT:""},
      {link : "/documentations/#LANG#/howto/monitoring_cloud",fr_FR : "Monitoring",en_US:"Monitoring",es_ES:"Supervisión",de_DE:"Überwachung",pt_PT:""},
      {link : "/documentations/#LANG#/howto/sms_cloud",fr_FR : "SMS, Appels",en_US:"SMS and call",es_ES:"SMS, manzanas",de_DE:"SMS, Anrufe",pt_PT:""},
    ]
  },{
    divider : true
  },{
    fr_FR:'Jeedom v3.3',
    en_US : "Jeedom v3.3",
    es_ES : "Jeedom v3.3",
    de_DE : "Jeedom v3.3",
    pt_PT : "Jeedom v3.3",
  },{
    fr_FR : "Manuel d'utilisation",
    en_US : "User manual",
    es_ES : "Manual del usuario",
    de_DE : "Benutzerhandbuch",
    pt_PT : "",
    submenu:[
      {link : "/documentations/#LANG#/core/3.3/dashboard",fr_FR : "Dashboard",en_US:"Dashboard",es_ES:"Tablero",de_DE:"Dashboard",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/view",fr_FR : "Vues",en_US:"Views",es_ES:"Vistas",de_DE:"Vues",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/design",fr_FR : "Design",en_US:"Design",es_ES:"Diseño",de_DE:"Design",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/design3d",fr_FR : "Design 3D",en_US:"Design 3D",es_ES:"Diseño 3D",de_DE:"Design 3D",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/log",fr_FR : "Log",en_US:"Log",es_ES:"Log",de_DE:"",pt_PT:""},
      {link : "",fr_FR : "Temps reel",en_US:"Real time",es_ES:"Tiempo real",de_DE:"Echtzeit",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/eqAnalyse",fr_FR : "Analyse",en_US:"Analyse",es_ES:"Análisis",de_DE:"Analyse",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/display",fr_FR : "Résumé Domotique",en_US:"Summary",es_ES:"Resumen de automatización del hogar",de_DE:"Zusammenfassung der Hausautomation",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/history",fr_FR : "Historique",en_US:"History",es_ES:"Historia",de_DE:"Historique",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/report",fr_FR : "Rapport",en_US:"Report",es_ES:"Relación",de_DE:"Bericht",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/health",fr_FR : "Santé",en_US:"Health",es_ES:"Salud",de_DE:"Gesundheit",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/object",fr_FR : "Objet",en_US:"Object",es_ES:"Asunto",de_DE:"Betreff",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/scenario",fr_FR : "Scénario",en_US:"Scenario",es_ES:"Escenario",de_DE:"Szenario",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/interact",fr_FR : "Intéractions",en_US:"Interactions",es_ES:"Interacciones",de_DE:"Interaktionen",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/widgets",fr_FR : "Widget",en_US:"Widget",es_ES:"Widget",de_DE:"Widget",pt_PT:""},
      {link : "",fr_FR : "Notes",en_US:"Notes",es_ES:"Notas",de_DE:"Anmerkungen",pt_PT:""},
      {link : "",fr_FR : "Testeur d'expression",en_US:"Expression tester",es_ES:"Probador de expresión",de_DE:"Expressionstester",pt_PT:""},
      {link : "",fr_FR : "Variables",en_US:"Variables",es_ES:"Variables",de_DE:"Variables",pt_PT:""},
      {link : "/documentations/#LANG#/core/3.3/plugin",fr_FR : "Plugin",en_US:"Plugin",es_ES:"Plugin",de_DE:"Plugin",pt_PT:""},
      {link:"/documentations/#LANG#/core/3.3/faq",fr_FR:"FAQ",en_US:"FAQ",es_ES:"FAQ",de_DE:"FAQ",pt_PT:"FAQ"}
    ]
  },{
    fr_FR : "Manuel de configuration",
    en_US : "Configuration manual",
    es_ES : "Manual de configuración",
    de_DE : "Konfigurationshandbuch",
    pt_PT : "",
    submenu:[
      {link:"/documentations/#LANG#/core/3.3/administration",fr_FR:"Administration",en_US:"Administration",es_ES:"Administration",de_DE:"Verwaltung",pt_PT:""},
      {link:"/documentations/#LANG#/core/3.3/backup",fr_FR:"Sauvegarde",en_US:"Save",es_ES:"Sauvegarde",de_DE:"Backup",pt_PT:""},
      {link:"/documentations/#LANG#/core/3.3/update",fr_FR:"Mise à jour",en_US:"Update",es_ES:"Mise à jour",de_DE:"Mise à jour",pt_PT:""},
      {link:"",fr_FR:"Restauration Image",en_US:"Image restoration",es_ES:"Restauración de imagen",de_DE:"Bildwiederherstellung",pt_PT:""},
      {link:"/documentations/#LANG#/core/3.3/cron",fr_FR:"Moteur de tâche",en_US:"Cron",es_ES:"Motor de tareas",de_DE:"Task-Engine",pt_PT:""},
      {link:"/documentations/#LANG#/core/3.3/custom",fr_FR:"Personalisation",en_US:"Personalisation",es_ES:"Personalizacion",de_DE:"Personalisierung",pt_PT:""},
      {link:"/documentations/#LANG#/core/3.3/user",fr_FR:"Utilisateur",en_US:"Users",es_ES:"Usuario",de_DE:"Benutzer",pt_PT:""},
      {link:"#",fr_FR:"Eteindre/Redémarrer",en_US:"Shutdown / Restart",es_ES:"Apagar / reiniciar",de_DE:"Herunterfahren / Neustart",pt_PT:""},
      {link:"/documentations/#LANG#/core/3.3/profils",fr_FR:"Profils",en_US:"Profils",es_ES:"Perfiles",de_DE:"Profile",pt_PT:""},
      {link:"#",fr_FR:"Version mobile",en_US:"Mobile version",es_ES:"Versión móvil",de_DE:"Mobile Version",pt_PT:""}
    ]
  },{
    fr_FR:'Jeedom v4.0',
    en_US : "Jeedom v4.0",
    es_ES : "Jeedom v4.0",
    de_DE : "Jeedom v4.0",
    pt_PT : "Jeedom v4.0",
  },{
    fr_FR : "Manuel d'utilisation",
    en_US : "User manual",
    es_ES : "Manual del usuario",
    de_DE : "Benutzerhandbuch",
    pt_PT : "",
    submenu:[
      {link : "/documentations/#LANG#/core/4.0/dashboard",fr_FR : "Dashboard",en_US:"Dashboard",es_ES:"Tablero",de_DE:"Dashboard",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/view",fr_FR : "Vues",en_US:"Views",es_ES:"Vistas",de_DE:"Vues",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/design",fr_FR : "Design",en_US:"Design",es_ES:"Diseño",de_DE:"Design",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/design3d",fr_FR : "Design 3D",en_US:"Design 3D",es_ES:"Diseño 3D",de_DE:"Design 3D",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/log",fr_FR : "Log",en_US:"Log",es_ES:"Log",de_DE:"",pt_PT:""},
      {link : "",fr_FR : "Temps reel",en_US:"Real time",es_ES:"Tiempo real",de_DE:"Echtzeit",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/eqAnalyse",fr_FR : "Analyse",en_US:"Analyse",es_ES:"Análisis",de_DE:"Analyse",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/display",fr_FR : "Résumé Domotique",en_US:"Summary",es_ES:"Resumen de automatización del hogar",de_DE:"Zusammenfassung der Hausautomation",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/history",fr_FR : "Historique",en_US:"History",es_ES:"Historia",de_DE:"Historique",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/report",fr_FR : "Rapport",en_US:"Report",es_ES:"Relación",de_DE:"Bericht",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/health",fr_FR : "Santé",en_US:"Health",es_ES:"Salud",de_DE:"Gesundheit",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/object",fr_FR : "Objet",en_US:"Object",es_ES:"Asunto",de_DE:"Betreff",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/scenario",fr_FR : "Scénario",en_US:"Scenario",es_ES:"Escenario",de_DE:"Szenario",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/interact",fr_FR : "Intéractions",en_US:"Interactions",es_ES:"Interacciones",de_DE:"Interaktionen",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/widgets",fr_FR : "Widget",en_US:"Widget",es_ES:"Widget",de_DE:"Widget",pt_PT:""},
      {link : "",fr_FR : "Notes",en_US:"Notes",es_ES:"Notas",de_DE:"Anmerkungen",pt_PT:""},
      {link : "",fr_FR : "Testeur d'expression",en_US:"Expression tester",es_ES:"Probador de expresión",de_DE:"Expressionstester",pt_PT:""},
      {link : "",fr_FR : "Variables",en_US:"Variables",es_ES:"Variables",de_DE:"Variables",pt_PT:""},
      {link : "/documentations/#LANG#/core/4.0/plugin",fr_FR : "Plugin",en_US:"Plugin",es_ES:"Plugin",de_DE:"Plugin",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/faq",fr_FR:"FAQ",en_US:"FAQ",es_ES:"FAQ",de_DE:"FAQ",pt_PT:"FAQ"}
    ]
  },{
    fr_FR : "Manuel de configuration",
    en_US : "Configuration manual",
    es_ES : "Manual de configuración",
    de_DE : "Konfigurationshandbuch",
    pt_PT : "",
    submenu:[
      {link:"/documentations/#LANG#/core/4.0/administration",fr_FR:"Administration",en_US:"Administration",es_ES:"Administration",de_DE:"Verwaltung",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/backup",fr_FR:"Sauvegarde",en_US:"Save",es_ES:"Sauvegarde",de_DE:"Backup",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/update",fr_FR:"Mise à jour",en_US:"Update",es_ES:"Mise à jour",de_DE:"Mise à jour",pt_PT:""},
      {link:"",fr_FR:"Restauration Image",en_US:"Image restoration",es_ES:"Restauración de imagen",de_DE:"Bildwiederherstellung",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/cron",fr_FR:"Moteur de tâche",en_US:"Cron",es_ES:"Motor de tareas",de_DE:"Task-Engine",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/custom",fr_FR:"Personalisation",en_US:"Personalisation",es_ES:"Personalizacion",de_DE:"Personalisierung",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/user",fr_FR:"Utilisateur",en_US:"Users",es_ES:"Usuario",de_DE:"Benutzer",pt_PT:""},
      {link:"#",fr_FR:"Eteindre/Redémarrer",en_US:"Shutdown / Restart",es_ES:"Apagar / reiniciar",de_DE:"Herunterfahren / Neustart",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/profils",fr_FR:"Profils",en_US:"Profils",es_ES:"Perfiles",de_DE:"Profile",pt_PT:""},
      {link:"#",fr_FR:"Version mobile",en_US:"Mobile version",es_ES:"Versión móvil",de_DE:"Mobile Version",pt_PT:""}
    ]
  },{
    divider : true
  },{
    fr_FR : "Plugins",
    en_US : "Plugins",
    es_ES : "Plugins",
    de_DE : "Plugins",
    pt_PT : "Plugins",
    submenu:[
      {link:"/documentations/#LANG#/plugins/security/",icon:"fas fa-lock",fr_FR:"Sécurité",en_US:"Security",es_ES:"Sécurité",de_DE:"",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/automation%20protocol/",icon:"fas fa-rss",fr_FR:"Protocole domotique",en_US:"Home protocol",es_ES:"Protocolo de domótica",de_DE:"Hausautomationsprotokoll",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/home%20automation%20protocol/",icon:"fas fa-asterisk",fr_FR:"Passerelle domotique",en_US:"Home gateway",es_ES:"Pasarela domótica",de_DE:"Hausautomations-Gateway",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/programming/",icon:"fas fa-code",fr_FR:"Programmation",en_US:"Programming",es_ES:"Programmation",de_DE:"Programmierung",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/organization/",icon:"fas fa-calendar-alt",fr_FR:"Organisation",en_US:"Organize",es_ES:"Organisation",de_DE:"Organisation",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/weather/",icon:"fas fa-sun",fr_FR:"Météo",en_US:"Weather",es_ES:"Météo",de_DE:"Wettervorhersage",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/communication/",icon:"fas fa-comment",fr_FR:"Communication",en_US:"Communication",es_ES:"Comunicación",de_DE:"Kommunikation",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/devicecommunication/",icon:"fas fa-language",fr_FR:"Objets connectés",en_US:"Connected object",es_ES:"Objets connectés",de_DE:"Verbundene Objekte",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/multimedia/",icon:"fas fa-sliders-h",fr_FR:"Multimédia",en_US:"Multimedia",es_ES:"Multimédia",de_DE:"Multimedia",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/wellness/",icon:"fas fa-user",fr_FR:"Confort",en_US:"Wellness",es_ES:"Confort",de_DE:"Komfort",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/monitoring/",icon:"fas fa-tachometer-alt",fr_FR:"Monitoring",en_US:"Monitoring",es_ES:"Monitoreo",de_DE:"Überwachung",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/health/",icon:"fas fa-heartbeat",fr_FR:"Santé",en_US:"Health",es_ES:"Salud",de_DE:"Santé",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/nature/",icon:"fab fa-pagelines",fr_FR:"Nature",en_US:"Nature",es_ES:"Nature",de_DE:"Natur",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/automatisation/",icon:"fas fa-magic",fr_FR:"Automatisme",en_US:"Automation",es_ES:"Automatisme",de_DE:"Automatisierung",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/energy/",icon:"fas fa-bolt",fr_FR:"Energie",en_US:"Energy",es_ES:"Energía",de_DE:"Energie",pt_PT:""},
      {link:"/documentations/#LANG#/plugins/other/",icon:"fas fa-bars",fr_FR:"Autre",en_US:"Other",es_ES:"Otros",de_DE:"Andere",pt_PT:""},
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
      {link:"/documentations/#LANG#/howto/",fr_FR:"Tutoriaux",en_US:"Tutorials",es_ES:"Tutoriales",de_DE:"Tutorials",pt_PT:""},
      {link:"/documentations/#LANG#/howtoadvance/",fr_FR:"Tutoriaux avancés",en_US:"Advanced tutorials",es_ES:"Tutoriales avanzados",de_DE:"Erweiterte Tutorials",pt_PT:""}
    ]
  },{
    fr_FR:'Développer sur Jeedom',
    en_US : 'Developpe on Jeedom',
    es_ES : "Desarrollar en Jeedom",
    de_DE : "Entwickle auf Jeedom",
    pt_PT : "",
    submenu:[
      {link:"/dev/#LANG#/tutorial_plugin",fr_FR:"Présentation",en_US:"Presentation",es_ES:"Présentation",de_DE:"Einführung",pt_PT:""},
      {link:"/documentations/#LANG#/core/4.0/api_http",fr_FR:"Api HTTP",en_US:"Api HTTP",es_ES:"Api HTTP",de_DE:"Api HTTP",pt_PT:"Api HTTP"},
      {link:"/documentations/#LANG#/core/4.0/jsonrpc_api",fr_FR:"API JsonRPC",en_US:"API JsonRPC",es_ES:"API JsonRPC",de_DE:"API JsonRPC",pt_PT:"API JsonRPC"},
      {link:"/documentations/#LANG#/dev/",fr_FR:"Développez pour Jeedom",en_US:"Develop for Jeedom",es_ES:"Desarrollar para Jeedom",de_DE:"Entwickle für Jeedom",pt_PT:""},
    ]
  }
]

$('#ul_menu').empty();
var html = '';
var lang = getCookie('lang');
if(!lang){
  lang = 'fr_FR'
}
if(window.location.href.indexOf(lang) == -1){
  var url = window.location.href.replace('fr_FR',lang).replace('en_US',lang).replace('es_ES',lang).replace('de_DE',lang);
  window.location.href = url;
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
      html += '<li><a href="'+submenu.link.replace('#LANG#',lang)+'">'+genText(submenu,lang)+'</a></li>';
    }
    html += '</ul>';
    html += '</div>';
    html += '</li>';
  }else{
    if(menu.link){
      if(menu.link == ''){
        continue;
      }
      html += '<li><a href="'+menu.link.replace('#LANG#',lang)+'"><strong style="margin-left:5px;">'+genText(menu,lang)+'</strong></a></li>';
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
      $('#div_summary ul').append('<li><a href="#tocAnchor-'+i+'" class="tocAnchor">'+$(this).text()+'</a></li>')
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
  
  setTheme();
  
  $('select').formSelect();
  $('img').addClass('responsive-img')
  cookiesPolicyBar();
});

function setTheme(){
  if(getCookie('theme') == 'dark'){
    $('body').addClass('dark')
    if($('#sel_theme').val() != 'dark'){
      $('#sel_theme').val('dark');
    }
  }else{
    $('body').removeClass('dark')
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
