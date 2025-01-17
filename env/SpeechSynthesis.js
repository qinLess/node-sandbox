// 函数实现
// SpeechSynthesis
globalMy.SpeechSynthesis_getVoices = function () {
  if (!(this instanceof SpeechSynthesis)) {
    throw new TypeError("Illegal invocation");
  }
  var result;
  //这里写方法实体
  let track = [];
  let p = {};
  let obj_name;
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Microsoft Huihui - Chinese (Simplified, PRC)';
  globalMy.value[obj_name].name = 'Microsoft Huihui - Chinese (Simplified, PRC)';
  globalMy.value[obj_name].lang = 'zh-CN';
  globalMy.value[obj_name].localService = true;
  globalMy.value[obj_name].default = true;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Microsoft Kangkang - Chinese (Simplified, PRC)';
  globalMy.value[obj_name].name = 'Microsoft Kangkang - Chinese (Simplified, PRC)';
  globalMy.value[obj_name].lang = 'zh-CN';
  globalMy.value[obj_name].localService = true;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Microsoft Yaoyao - Chinese (Simplified, PRC)';
  globalMy.value[obj_name].name = 'Microsoft Yaoyao - Chinese (Simplified, PRC)';
  globalMy.value[obj_name].lang = 'zh-CN';
  globalMy.value[obj_name].localService = true;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google Deutsch';
  globalMy.value[obj_name].name = 'Google Deutsch';
  globalMy.value[obj_name].lang = 'de-DE';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google US English';
  globalMy.value[obj_name].name = 'Google US English';
  globalMy.value[obj_name].lang = 'en-US';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google UK English Female';
  globalMy.value[obj_name].name = 'Google UK English Female';
  globalMy.value[obj_name].lang = 'en-GB';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google UK English Male';
  globalMy.value[obj_name].name = 'Google UK English Male';
  globalMy.value[obj_name].lang = 'en-GB';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google español';
  globalMy.value[obj_name].name = 'Google español';
  globalMy.value[obj_name].lang = 'es-ES';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google español de Estados Unidos';
  globalMy.value[obj_name].name = 'Google español de Estados Unidos';
  globalMy.value[obj_name].lang = 'es-US';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google français';
  globalMy.value[obj_name].name = 'Google français';
  globalMy.value[obj_name].lang = 'fr-FR';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google हिन्दी';
  globalMy.value[obj_name].name = 'Google हिन्दी';
  globalMy.value[obj_name].lang = 'hi-IN';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google Bahasa Indonesia';
  globalMy.value[obj_name].name = 'Google Bahasa Indonesia';
  globalMy.value[obj_name].lang = 'id-ID';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google italiano';
  globalMy.value[obj_name].name = 'Google italiano';
  globalMy.value[obj_name].lang = 'it-IT';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google 日本語';
  globalMy.value[obj_name].name = 'Google 日本語';
  globalMy.value[obj_name].lang = 'ja-JP';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google 한국의';
  globalMy.value[obj_name].name = 'Google 한국의';
  globalMy.value[obj_name].lang = 'ko-KR';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google Nederlands';
  globalMy.value[obj_name].name = 'Google Nederlands';
  globalMy.value[obj_name].lang = 'nl-NL';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google polski';
  globalMy.value[obj_name].name = 'Google polski';
  globalMy.value[obj_name].lang = 'pl-PL';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google português do Brasil';
  globalMy.value[obj_name].name = 'Google português do Brasil';
  globalMy.value[obj_name].lang = 'pt-BR';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google русский';
  globalMy.value[obj_name].name = 'Google русский';
  globalMy.value[obj_name].lang = 'ru-RU';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google 普通话（中国大陆）';
  globalMy.value[obj_name].name = 'Google 普通话（中国大陆）';
  globalMy.value[obj_name].lang = 'zh-CN';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google 粤語（香港）';
  globalMy.value[obj_name].name = 'Google 粤語（香港）';
  globalMy.value[obj_name].lang = 'zh-HK';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  p = {};
  Object.setPrototypeOf(p, globalMy.SpeechSynthesisVoice.prototype);
  obj_name = globalMy.setfoundName(p);
  globalMy.value[obj_name].voiceURI = 'Google 國語（臺灣）';
  globalMy.value[obj_name].name = 'Google 國語（臺灣）';
  globalMy.value[obj_name].lang = 'zh-TW';
  globalMy.value[obj_name].localService = false;
  globalMy.value[obj_name].default = false;
  track.push(p);
  if (globalMy.is_log) {
    globalMy.console.log('[*]  调用了globalMy.SpeechSynthesis_getVoices, arguments => ', arguments, '  result => ' + track);
  }
  return track;
};

// IDBRequest