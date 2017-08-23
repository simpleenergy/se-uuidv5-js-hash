const expect = require('chai').expect,
  uuidV5 = require('../dist/index');

  /*
  MOCK DATA
  multipleRollup[0] = 31 days
  multipleRollup[2] = 30 days
  peak_amount 10am - 1pm
  net_amount = 1.0192837, production_amount = 1.04938473,
  */


  describe('uuid version 5 hashe returns expected outputs', function() {

    it('outputs are based on web results', function() {
      expect(uuidV5.encode('32c6342e-a4b5-4055-9be9-5ce227b337eb', '77')).to.equal('0dd50e0d-80b2-59e7-a364-3f48b783ab0b')

    });

  });
