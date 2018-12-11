parcelRequire=function(e,r,n,t){var i="function"==typeof parcelRequire&&parcelRequire,o="function"==typeof require&&require;function u(n,t){if(!r[n]){if(!e[n]){var f="function"==typeof parcelRequire&&parcelRequire;if(!t&&f)return f(n,!0);if(i)return i(n,!0);if(o&&"string"==typeof n)return o(n);var c=new Error("Cannot find module '"+n+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[n][1][r]||r},p.cache={};var l=r[n]=new u.Module(n);e[n][0].call(l.exports,p,l,l.exports,this)}return r[n].exports;function p(e){return u(p.resolve(e))}}u.isParcelRequire=!0,u.Module=function(e){this.id=e,this.bundle=u,this.exports={}},u.modules=e,u.cache=r,u.parent=i,u.register=function(r,n){e[r]=[function(e,r){r.exports=n},{}]};for(var f=0;f<n.length;f++)u(n[f]);if(n.length){var c=u(n[n.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=c:"function"==typeof define&&define.amd?define(function(){return c}):t&&(this[t]=c)}return u}({"TYUR":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.decodeBytes=t,exports.prefix=void 0;var e={block_hash:new Uint8Array([1,52]),operation_hash:new Uint8Array([5,116]),operation_list_hash:new Uint8Array([133,233]),operation_list_list_hash:new Uint8Array([29,159,109]),protocol_hash:new Uint8Array([2,170]),context_hash:new Uint8Array([79,199]),ed25519_public_key_hash:new Uint8Array([6,161,159]),secp256k1_public_key_hash:new Uint8Array([6,161,161]),p256_public_key_hash:new Uint8Array([6,161,164]),cryptobox_public_key_hash:new Uint8Array([153,103]),ed25519_seed:new Uint8Array([13,15,58,7]),ed25519_public_key:new Uint8Array([13,15,37,217]),secp256k1_secret_key:new Uint8Array([17,162,224,201]),p256_secret_key:new Uint8Array([16,81,238,189]),ed25519_encrypted_seed:new Uint8Array([7,90,60,179,41]),secp256k1_encrypted_secret_key:new Uint8Array([9,237,241,174,150]),p256_encrypted_secret_key:new Uint8Array([9,48,57,115,171]),secp256k1_public_key:new Uint8Array([3,254,226,86]),p256_public_key:new Uint8Array([3,178,139,127]),secp256k1_scalar:new Uint8Array([38,248,136]),secp256k1_element:new Uint8Array([5,92,0]),ed25519_secret_key:new Uint8Array([43,246,78,7]),ed25519_signature:new Uint8Array([9,245,205,134,18]),secp256k1_signature:new Uint8Array([13,115,101,19,63]),p256_signature:new Uint8Array([54,240,44,52]),generic_signature:new Uint8Array([4,130,43]),chain_id:new Uint8Array([7,82,0])};exports.prefix=e;var r={"00":"parameter","01":"storage","02":"code","03":"False","04":"Elt","05":"Left","06":"None","07":"Pair","08":"Right","09":"Some","0A":"True","0B":"Unit","0C":"PACK","0D":"UNPACK","0E":"BLAKE2B","0F":"SHA256",10:"SHA512",11:"ABS",12:"ADD",13:"AMOUNT",14:"AND",15:"BALANCE",16:"CAR",17:"CDR",18:"CHECK_SIGNATURE",19:"COMPARE","1A":"CONCAT","1B":"CONS","1C":"CREATE_ACCOUNT","1D":"CREATE_CONTRACT","1E":"IMPLICIT_ACCOUNT","1F":"DIP",20:"DROP",21:"DUP",22:"EDIV",23:"EMPTY_MAP",24:"EMPTY_SET",25:"EQ",26:"EXEC",27:"FAILWITH",28:"GE",29:"GET","2A":"GT","2B":"HASH_KEY","2C":"IF","2D":"IF_CONS","2E":"IF_LEFT","2F":"IF_NONE",30:"INT",31:"LAMBDA",32:"LE",33:"LEFT",34:"LOOP",35:"LSL",36:"LSR",37:"LT",38:"MAP",39:"MEM","3A":"MUL","3B":"NEG","3C":"NEQ","3D":"NIL","3E":"NONE","3F":"NOT",40:"NOW",41:"OR",42:"PAIR",43:"PUSH",44:"RIGHT",45:"SIZE",46:"SOME",47:"SOURCE",48:"SENDER",49:"SELF","4A":"STEPS_TO_QUOTA","4B":"SUB","4C":"SWAP","4D":"TRANSFER_TOKENS","4E":"SET_DELEGATE","4F":"UNIT",50:"UPDATE",51:"XOR",52:"ITER",53:"LOOP_LEFT",54:"ADDRESS",55:"CONTRACT",56:"ISNAT",57:"CAST",58:"RENAME",59:"bool","5A":"contract","5B":"int","5C":"key","5D":"key_hash","5E":"lambda","5F":"list",60:"map",61:"big_map",62:"nat",63:"option",64:"or",65:"pair",66:"set",67:"signature",68:"string",69:"bytes","6A":"mutez","6B":"timestamp","6C":"unit","6D":"operation","6E":"address","6F":"SLICE"},n={"00":"int","01":"string","02":"seq","03":{name:"prim",len:0,annot:!1},"04":{name:"prim",len:0,annot:!0},"05":{name:"prim",len:1,annot:!1},"06":{name:"prim",len:1,annot:!0},"07":{name:"prim",len:2,annot:!1},"08":{name:"prim",len:2,annot:!0},"09":{name:"prim",len:3,annot:!0},"0A":"bytes"};function t(e){e=e.toUpperCase();var t=0,a=function(r){return e.slice(t,t+r)};return function e(){var i=a(2),A=n[i];if(A instanceof Object){t+=2;var s=r[a(2)];return t+=2,{prim:s,args:Array.apply(null,new Array(A.len)).map(function(){return e()})}}if("0A"===i){t+=2;var _=a(8);t+=8;var p=2*parseInt(_,16),o=a(p);return t+=p,{bytes:o}}if("01"===i){t+=2;var y=a(8);t+=8;var E=2*parseInt(y,16),c=a(E);t+=E;var U=c.match(/[\dA-F]{2}/g);if(U instanceof Array){var T=new Uint8Array(U.map(function(e){return parseInt(e,16)}));return{string:new TextDecoder("utf-8").decode(T)}}throw"Input bytes error"}if("00"===i){t+=2;var u=parseInt(a(2),16).toString(2).padStart(8,"0");t+=2,u[1];for(var l=[u.slice(2)],C="1"===u[0];C;){var S=parseInt(a(2),16).toString(2).padStart(8,"0");t+=2,l.push(S.slice(1)),C="1"===S[0]}return{int:parseInt(l.reverse().join(""),2).toString()}}if("02"===i){t+=2;var w=a(8);t+=8;for(var I=2*parseInt(w,16),N=(a(I),t+I),h=[];N>t;)h.push(e());return h}}()}
},{}],"Focm":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var e=require("./codec"),d={codec:{decodeBytes:e.decodeBytes}};exports.default=d;
},{"./codec":"TYUR"}]},{},["Focm"], null)
//# sourceMappingURL=/index.map