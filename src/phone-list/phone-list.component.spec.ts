import * as angular from 'angular';
import 'angular-mocks';
import { createAngularJSTestingModule } from '@angular/upgrade/static/testing';
import { PhoneListModule } from './phone-list.module';
import { Ng2AppModule } from 'src/app/app.module';

describe('phoneList', function () {
  beforeEach(angular.mock.module(createAngularJSTestingModule([Ng2AppModule])));

  // Load the module that contains the `phoneList` component before each test
  beforeEach(angular.mock.module(PhoneListModule.name));

  // Test the controller
  describe('PhoneListController', function () {
    var $httpBackend, ctrl;

    beforeEach(
      angular.mock.inject(function ($componentController, _$httpBackend_) {
        $httpBackend = _$httpBackend_;
        $httpBackend.expectGET('phones/phones.json').respond([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);

        ctrl = $componentController('phoneList');
      })
    );

    // it('should create a `phones` property with 2 phones fetched with `$http`', function () {
    //   jasmine.addCustomEqualityTester(angular.equals);

    //   expect(ctrl.phones).toEqual([]);

    //   $httpBackend.flush();
    //   expect(ctrl.phones).toEqual([{ name: 'Nexus S' }, { name: 'Motorola DROID' }]);
    // });

    it('should set a default value for the `orderProp` property', function () {
      expect(ctrl.orderProp).toBe('age');
    });
  });
});
