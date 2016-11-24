'use strict';

describe('myApp.who-we-are module', function() {

  beforeEach(module('myApp.who-we-are'));

  describe('who-we-are controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var whoWeAreCtrl = $controller('WhoWeAreCtrl');
      expect(whoWeAreCtrl).toBeDefined();
    }));

  });
});
