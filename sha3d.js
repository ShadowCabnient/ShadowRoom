/*
shapr3d解锁全部功能
使用方法：开启脚本，进入软件即可

***************************
QuantumultX:

[rewrite_local]
^https:\/\/prod\.api\.shapr3d\.com\/user-management\/profile-with-device url script-response-body https://raw.githubusercontent.com/ShadowCabnient/ShadowRoom/main/sha3d.js

[mitm]
hostname = prod.api.shapr3d.com

***************************
Surge4 or Loon:

[Script]
http-response ^https:\/\/prod\.api\.shapr3d\.com\/user-management\/profile-with-device requires-body=1,max-size=0,script-path= https://raw.githubusercontent.com/ShadowCabnient/ShadowRoom/main/sha3d.js

[MITM]
hostname = prod.api.shapr3d.com

**************************/

var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxef363=["\x6A\x73\x6A\x69\x61\x6D\x69\x2E\x63\x6F\x6D","\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C","\x62\x6F\x64\x79","\x70\x61\x72\x73\x65","\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x54\x79\x70\x65","\x70\x72\x6F","\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x73","\x61\x70\x70\x73\x74\x6F\x72\x65","\x79\x65\x61\x72\x6C\x79","\x32\x30\x32\x32\x2D\x30\x34\x2D\x32\x31\x54\x30\x33\x3A\x30\x31\x3A\x31\x35\x2E\x33\x30\x32\x5A","\x32\x30\x39\x38\x2D\x38\x2D\x38\x54\x30\x33\x3A\x30\x31\x3A\x31\x35\x2E\x33\x30\x32\x5A","\x73\x75\x62\x73\x63\x72\x69\x70\x74\x69\x6F\x6E\x45\x78\x70\x69\x72\x65\x73","\x69\x73\x54\x72\x69\x61\x6C\x45\x6C\x69\x67\x69\x62\x6C\x65","\x70\x61\x64\x64\x6C\x65\x2E\x6C\x69\x74\x65\x2E\x6D\x6F\x6E\x74\x68\x6C\x79","\x70\x6C\x61\x6E\x73","\x70\x61\x64\x64\x6C\x65\x2E\x6C\x69\x74\x65\x2E\x79\x65\x61\x72\x6C\x79","\x73\x74\x72\x69\x6E\x67\x69\x66\x79","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];var __encode=__Oxef363[0x0],_a={},_0xb483=[__Oxef363[0x1],__Oxef363[0x2]];(function(_0xd732x4){_0xd732x4[_0xb483[0x0]]= _0xb483[0x1]})(_a);var __Oxef362=[__Oxef363[0x3],__Oxef363[0x4],__Oxef363[0x5],__Oxef363[0x6],__Oxef363[0x7],__Oxef363[0x8],__Oxef363[0x9],__Oxef363[0xa],__Oxef363[0xb],__Oxef363[0xc],__Oxef363[0xd],__Oxef363[0xe],__Oxef363[0xf],__Oxef363[0x10],__Oxef363[0x11],__Oxef363[0x12],__Oxef363[0x13],__Oxef363[0x14],__Oxef363[0x15],__Oxef363[0x16],__Oxef363[0x17],__Oxef363[0x18],__Oxef363[0x19]];var body=$response[__Oxef362[0x0]];var obj=JSON[__Oxef362[0x1]](body);obj[__Oxef362[0x2]]= __Oxef362[0x3];obj[__Oxef362[0x4]]= [{"\x69\x64":999,"\x74\x79\x70\x65":__Oxef362[0x5],"\x74\x69\x65\x72":__Oxef362[0x3],"\x65\x66\x66\x65\x63\x74\x69\x76\x65\x46\x65\x61\x74\x75\x72\x65\x53\x65\x74":__Oxef362[0x3],"\x70\x65\x72\x69\x6F\x64":__Oxef362[0x6],"\x70\x75\x72\x63\x68\x61\x73\x65\x44\x61\x74\x65":__Oxef362[0x7],"\x65\x78\x70\x69\x72\x61\x74\x69\x6F\x6E\x44\x61\x74\x65":__Oxef362[0x8],"\x61\x75\x74\x6F\x52\x65\x6E\x65\x77\x53\x74\x61\x74\x75\x73":false,"\x69\x73\x54\x72\x69\x61\x6C":false}];obj[__Oxef362[0x9]]= __Oxef362[0x8];obj[__Oxef362[0xc]][__Oxef362[0xb]][__Oxef362[0xa]]= true;obj[__Oxef362[0xc]][__Oxef362[0xd]][__Oxef362[0xa]]= true;body= JSON[__Oxef362[0xe]](obj);$done({body});;;;;(function(_0xd732x8,_0xd732x9,_0xd732xa,_0xd732xb,_0xd732xc,_0xd732xd){_0xd732xd= __Oxef362[0xf];_0xd732xb= function(_0xd732xe){if( typeof alert!== _0xd732xd){alert(_0xd732xe)};if( typeof console!== _0xd732xd){console[__Oxef362[0x10]](_0xd732xe)}};_0xd732xa= function(_0xd732xf,_0xd732x8){return _0xd732xf+ _0xd732x8};_0xd732xc= _0xd732xa(__Oxef362[0x11],_0xd732xa(_0xd732xa(__Oxef362[0x12],__Oxef362[0x13]),__Oxef362[0x14]));try{_0xd732x8= __encode;if(!( typeof _0xd732x8!== _0xd732xd&& _0xd732x8=== _0xd732xa(__Oxef362[0x15],__Oxef362[0x16]))){_0xd732xb(_0xd732xc)}}catch(e){_0xd732xb(_0xd732xc)}})({});(function(_0xd732x10,_0xd732x11,_0xd732x12,_0xd732x13,_0xd732x14,_0xd732x15){_0xd732x15= __Oxef363[0x12];_0xd732x13= function(_0xd732x16){if( typeof alert!== _0xd732x15){alert(_0xd732x16)};if( typeof console!== _0xd732x15){console[__Oxef363[0x13]](_0xd732x16)}};_0xd732x12= function(_0xd732x17,_0xd732x10){return _0xd732x17+ _0xd732x10};_0xd732x14= _0xd732x12(__Oxef363[0x14],_0xd732x12(_0xd732x12(__Oxef363[0x15],__Oxef363[0x16]),__Oxef363[0x17]));try{_0xd732x10= __encode;if(!( typeof _0xd732x10!== _0xd732x15&& _0xd732x10=== _0xd732x12(__Oxef363[0x18],__Oxef363[0x19]))){_0xd732x13(_0xd732x14)}}catch(e){_0xd732x13(_0xd732x14)}})({})
