'use strict';

describe('myApp.why-we-exist module', function() {

  beforeEach(module('myApp.why-we-exist'));

  describe('why-we-exist controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var whyWeExistCtrl = $controller('WhyWeExistCtrl');
      expect(whyWeExistCtrl).toBeDefined();
    }));

  });
});
