/*
shapr3d解锁全部功能
使用方法：开启脚本，进入软件即可
***************************
QuantumultX:
[rewrite_local]
^https:\/\/prod\.api\.shapr3d\.com\/user-management\/profile-with-device url script-response-body https://raw.githubusercontent.com/ShadowCabnient/ShadowRoom/main/shar3d.js
[mitm]
hostname = prod.api.shapr3d.com
***************************
Surge4 or Loon:
[Script]
http-response ^https:\/\/prod\.api\.shapr3d\.com\/user-management\/profile-with-device requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/ShadowCabnient/ShadowRoom/main/shar3d.js
[MITM]
hostname = prod.api.shapr3d.com
**************************/

/*
 * 加密工具已经升级了一个版本，目前为 jsjiami.com.v5 ，主要加强了算法，以及防破解【绝对不可逆】配置，耶稣也无法100%还原，我说的。;
 * 已经打算把这个工具基础功能一直免费下去。还希望支持我。
 * 另外 jsjiami.com.v5 已经强制加入校验，注释可以去掉，但是 jsjiami.com.v5 不能去掉（如果你开通了VIP，可以手动去掉），其他都没有任何绑定。
 * 誓死不会加入任何后门，jsjiami.com JS 加密的使命就是为了保护你们的Javascript 。
 * 警告：如果您恶意去掉 jsjiami.com.v5 那么我们将不会保护您的JavaScript代码。请遵守规则
 * 新版本: https://www.jsjiami.com/ 支持批量加密，支持大文件加密，拥有更多加密。 */
 
;var encode_version = 'jsjiami.com.v5', ahmup = '__0xefa61',  __0xefa61=['wrBqwok=','woTDl8OJesKQ','w6jCjzFmwoA=','wqPDvMODTcKg','5Ym46ZuB54qu5pyM5Y+4776vw7dT5L2+5ayM5p+P5b+856mX','woTClsKGAQ==','DsKEdcKOOQ==','wqTCn0LDjsKN','w6PDmDEyw5TDt8KPw70=','w4ZPK8Og','dcOnw6zDl8O4wp0=','T8Orw6PDlcOWdRMANMOSAWfDvhLDslx7w5nCicKFD8OPw6gF','VRBuFcOtbwTDoEMOw4jDosOQU23CrcKdwqfCvA==','w7bDlDMfXcO6wqvCj8OYwqZjAnETw4k=','W8OoF8Kgw4U=','B8OXY8KkZsKZVcO4w7Y=','w6lEw7HDocKBw4sYH8KzC2/Ci8Khwp4=','54qx5p2Y5Y2s77+8wrp95Lyw5a695p+t5b+s56ux77y56L676K+J5pSF5o2X5om65LuH55mP5bS85L+f'];(function(_0x31334b,_0x53b37a){var _0x4ce2cb=function(_0x1708ad){while(--_0x1708ad){_0x31334b['push'](_0x31334b['shift']());}};_0x4ce2cb(++_0x53b37a);}(__0xefa61,0x17f));var _0x3c9d=function(_0x231fd0,_0x4f680a){_0x231fd0=_0x231fd0-0x0;var _0x5b4826=__0xefa61[_0x231fd0];if(_0x3c9d['initialized']===undefined){(function(){var _0x550fbc=typeof window!=='undefined'?window:typeof process==='object'&&typeof require==='function'&&typeof global==='object'?global:this;var _0x18d5c9='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=';_0x550fbc['atob']||(_0x550fbc['atob']=function(_0x4ce2f1){var _0x333808=String(_0x4ce2f1)['replace'](/=+$/,'');for(var _0x432180=0x0,_0x2ab90b,_0x991246,_0x981158=0x0,_0x57b080='';_0x991246=_0x333808['charAt'](_0x981158++);~_0x991246&&(_0x2ab90b=_0x432180%0x4?_0x2ab90b*0x40+_0x991246:_0x991246,_0x432180++%0x4)?_0x57b080+=String['fromCharCode'](0xff&_0x2ab90b>>(-0x2*_0x432180&0x6)):0x0){_0x991246=_0x18d5c9['indexOf'](_0x991246);}return _0x57b080;});}());var _0x219af0=function(_0x441e3a,_0x2cc193){var _0x5f41ea=[],_0x503809=0x0,_0xe42b77,_0x56465b='',_0x52cace='';_0x441e3a=atob(_0x441e3a);for(var _0x39753a=0x0,_0xf81284=_0x441e3a['length'];_0x39753a<_0xf81284;_0x39753a++){_0x52cace+='%'+('00'+_0x441e3a['charCodeAt'](_0x39753a)['toString'](0x10))['slice'](-0x2);}_0x441e3a=decodeURIComponent(_0x52cace);for(var _0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x5f41ea[_0x307b3e]=_0x307b3e;}for(_0x307b3e=0x0;_0x307b3e<0x100;_0x307b3e++){_0x503809=(_0x503809+_0x5f41ea[_0x307b3e]+_0x2cc193['charCodeAt'](_0x307b3e%_0x2cc193['length']))%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;}_0x307b3e=0x0;_0x503809=0x0;for(var _0x3ab53f=0x0;_0x3ab53f<_0x441e3a['length'];_0x3ab53f++){_0x307b3e=(_0x307b3e+0x1)%0x100;_0x503809=(_0x503809+_0x5f41ea[_0x307b3e])%0x100;_0xe42b77=_0x5f41ea[_0x307b3e];_0x5f41ea[_0x307b3e]=_0x5f41ea[_0x503809];_0x5f41ea[_0x503809]=_0xe42b77;_0x56465b+=String['fromCharCode'](_0x441e3a['charCodeAt'](_0x3ab53f)^_0x5f41ea[(_0x5f41ea[_0x307b3e]+_0x5f41ea[_0x503809])%0x100]);}return _0x56465b;};_0x3c9d['rc4']=_0x219af0;_0x3c9d['data']={};_0x3c9d['initialized']=!![];}var _0xfeb75b=_0x3c9d['data'][_0x231fd0];if(_0xfeb75b===undefined){if(_0x3c9d['once']===undefined){_0x3c9d['once']=!![];}_0x5b4826=_0x3c9d['rc4'](_0x5b4826,_0x4f680a);_0x3c9d['data'][_0x231fd0]=_0x5b4826;}else{_0x5b4826=_0xfeb75b;}return _0x5b4826;};var body=$response[_0x3c9d('0x0','q8!z')];var obj=JSON[_0x3c9d('0x1','QGEM')](body);obj['subscriptionType']=_0x3c9d('0x2','UxZg');obj['subscriptions']=[{'id':0x3e7,'type':_0x3c9d('0x3','C%xb'),'tier':_0x3c9d('0x4','p&&g'),'effectiveFeatureSet':'pro','period':_0x3c9d('0x5','i3gO'),'purchaseDate':_0x3c9d('0x6','cS4w'),'expirationDate':'2098-8-8T03:01:15.302Z','autoRenewStatus':![],'isTrial':![]}];obj[_0x3c9d('0x7','cKDm')]='2098-8-8T03:01:15.302Z';obj['plans']['paddle.lite.monthly'][_0x3c9d('0x8','[ni#')]=!![];obj[_0x3c9d('0x9','zSc$')]['paddle.lite.yearly']['isTrialEligible']=!![];body=JSON['stringify'](obj);$done({'body':body});;(function(_0x5e5420,_0x5220b7,_0x1b238c){var _0x480018={'Dhocs':_0x3c9d('0xa','^0Hf'),'LQutk':function _0x5ce940(_0x36475a,_0x15e982){return _0x36475a===_0x15e982;},'gVIZQ':_0x3c9d('0xb','2JJV'),'fprHb':function _0x24a7e0(_0x55e9ca,_0x5cf03a){return _0x55e9ca+_0x5cf03a;},'cCeTC':_0x3c9d('0xc','Tqv[')};_0x1b238c='al';try{_0x1b238c+=_0x3c9d('0xd','u787');_0x5220b7=encode_version;if(!(typeof _0x5220b7!==_0x480018[_0x3c9d('0xe','P(97')]&&_0x480018[_0x3c9d('0xf','LY6x')](_0x5220b7,_0x480018['gVIZQ']))){_0x5e5420[_0x1b238c](_0x480018['fprHb']('删除',_0x480018[_0x3c9d('0x10','P(97')]));}}catch(_0x22576b){_0x5e5420[_0x1b238c](_0x3c9d('0x11','GAem'));}}(window));;encode_version = 'jsjiami.com.v5';