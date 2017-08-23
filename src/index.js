let crypto =  require('crypto');


function encode (namespace, name) {
  var hexNm = namespace.replace(/[{}\-]/g, '');
  var bytesNm = new Buffer(hexNm, 'hex');
  var bytesName = new Buffer(name, 'utf8');
  var hash = crypto.createHash('sha1')
      .update(bytesNm).update(bytesName)
      .digest('hex');
  return hash.substr(0,8) + '-' +
      hash.substr(8,4) + '-' +
      (5 + hash.substr(13,3)) + '-' +
      ((parseInt(hash.substr(16, 2), 16) | 0x80) & 0xBF).toString(16) + hash.substr(18,2) + '-' +
      hash.substr(20,12);
}

export { encode }
