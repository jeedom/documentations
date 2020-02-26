var docMenu = [
  {
    fr_FR : "Introduction",
    en_US : "Introduction",
    submenu : {
      presentation: {link : "",fr_FR : "Présentation",en_US:"Presentation"},
      installation: {link : "",fr_FR : "Installation",en_US:"Installation"},
      start_smart: {link : "",fr_FR : "Démarrage Jeedom smart",en_US:"Jeedom smart start"},
      start_pro: {link : "",fr_FR : "Démarrage Jeedom pro",en_US:"Jeedom pro start"},
      first_step: {link : "",fr_FR : "Premiers pas",en_US:"First step"},
    }
  },{
    fr_FR : "Services",
    en_US : "Service",
    submenu:{
      cloud_backup : {link : "",fr_FR : "Sauvegarde",en_US:"Backup"},
      voice_assist : {link : "",fr_FR : "Assistant vocaux",en_US:"Voice assistant"},
      cloud_monitoring : {link : "",fr_FR : "Monitoring",en_US:"Monitoring"},
      remote_access : {link : "",fr_FR : "Accès distance",en_US:"Remote access"}
    },
  },{
    divider : true
  },{
    fr_FR:'Jeedom v3.3',
    en_US : "Jeedom v3.3",
  },{
    fr_FR : "Manuel d'utilisation",
    en_US : "User manual",
    submenu:[
      {link : "",fr_FR : "Dashboard",en_US:"Dashboard"},
      {link : "",fr_FR : "Vues",en_US:"View"},
      {link : "",fr_FR : "Design",en_US:"Design"},
      {link : "",fr_FR : "Design 3D",en_US:"Design 3D"}
    ]
  },{
    fr_FR : "Manuel de configuration",
    en_US : "Configuration manual",
    submenu:[
      {link:"",fr_FR:"Administration",en_US:"Administration"},
      {link:"",fr_FR:"Sauvegarde",en_US:"Backup"},
      {link:"",fr_FR:"Mise à jour",en_US:"Update"},
    ]
  },{
    fr_FR:'Jeedom v4.0',
    en_US : "Jeedom v4.0",
  },{
    fr_FR : "Manuel d'utilisation",
    en_US : "User manual",
    submenu:[
      {link : "",fr_FR : "Dashboard",en_US:"Dashboard"},
      {link : "",fr_FR : "Vues",en_US:"View"},
      {link : "",fr_FR : "Design",en_US:"Design"},
      {link : "",fr_FR : "Design 3D",en_US:"Design 3D"}
    ]
  },{
    fr_FR : "Manuel de configuration",
    en_US : "Configuration manual",
    submenu:[
      {link:"",fr_FR:"Administration",en_US:"Administration"},
      {link:"",fr_FR:"Sauvegarde",en_US:"Backup"},
      {link:"",fr_FR:"Mise à jour",en_US:"Update"},
    ]
  },{
    fr_FR:'Jeedom v4.1',
    en_US : "Jeedom v4.1",
  },{
    fr_FR : "Manuel d'utilisation",
    en_US : "User manual",
    submenu:[
      {link : "",fr_FR : "Dashboard",en_US:"Dashboard"},
      {link : "",fr_FR : "Vues",en_US:"View"},
      {link : "",fr_FR : "Design",en_US:"Design"},
      {link : "",fr_FR : "Design 3D",en_US:"Design 3D"}
    ]
  },{
    fr_FR : "Manuel de configuration",
    en_US : "Configuration manual",
    submenu:[
      {link:"",fr_FR:"Administration",en_US:"Administration"},
      {link:"",fr_FR:"Sauvegarde",en_US:"Backup"},
      {link:"",fr_FR:"Mise à jour",en_US:"Update"},
    ]
  },{
    divider : true
  },{
    fr_FR : "Plugins",
    en_US : "Plugins",
    submenu:[
      {link:"",icon:"fas fa-lock",fr_FR:"Sécurité",en_US:"Security"},
      {link:"",icon:"fas fa-rss",fr_FR:"Protocole domotique",en_US:"Security"},
      {link:"",icon:"fas fa-asterisk",fr_FR:"Passerelle domotique",en_US:"Security"},
      {link:"",icon:"fas fa-code",fr_FR:"Programmation",en_US:"Security"},
      {link:"",icon:"fas fa-calendar-alt",fr_FR:"Organisation",en_US:"Security"},
      {link:"",icon:"fas fa-sun",fr_FR:"Météo",en_US:"Security"},
      {link:"",icon:"fas fa-comment",fr_FR:"Communication",en_US:"Security"},
      {link:"",icon:"fas fa-language",fr_FR:"Objets connectés",en_US:"Security"},
      {link:"",icon:"fas fa-sliders-h",fr_FR:"Multimédia",en_US:"Security"},
      {link:"",icon:"fas fa-user",fr_FR:"Confort",en_US:"Security"},
      {link:"",icon:"fas fa-tachometer-alt",fr_FR:"Monitoring",en_US:"Security"},
      {link:"",icon:"fas fa-heartbeat",fr_FR:"Santé",en_US:"Security"},
      {link:"",icon:"fab fa-pagelines",fr_FR:"Nature",en_US:"Security"},
      {link:"",icon:"fas fa-magic",fr_FR:"Automatisme",en_US:"Security"},
      {link:"",icon:"fas fa-bolt",fr_FR:"Energie",en_US:"Security"},
      {link:"",icon:"fas fa-bars",fr_FR:"Autre",en_US:"Security"},
    ]
  },{
    divider : true
  },{
    fr_FR:"Assitance et bug",
    en_US : "Bug and assistance",
    link:""
  }
]

$('#ul_menu').empty();
var html = '';
var lang = getCookie('lang');
if(!lang){
  lang = 'fr_FR'
}else{
  $('#sel_lang').val(lang);
}
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
      html += '<li><a href="'+submenu.link+'">'+genText(submenu,lang)+'</a></li>';
    }
    html += '</ul>';
    html += '</div>';
    html += '</li>';
  }else{
    if(menu.link){
      html += '<li><strong style="margin-left:5px;" href="'+menu.link+'">'+genText(menu,lang)+'</strong></li>';
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
  var title = '{{site.github.project_title}}';
  title = title.replace('plugin-','');
  document.title = 'Documentation Jeedom | '+ title[0].toUpperCase() + title.substring(1)
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.dropdown-trigger').dropdown();
  $('.collapsible').collapsible();
  $('select').formSelect();
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
    var url = window.location.href;
    window.location.href = url.replace('fr-FR',$(this).val()).replace('en_US',$(this).val()).replace('es-ES',$(this).val()).replace('de-DE',$(this).val());
  })
});


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
