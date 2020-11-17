import * as angular from 'angular';
import 'angular-mocks';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController, TestRequest } from '@angular/common/http/testing';
import { PhoneService, PhoneData } from './phone.service';

describe('PhoneService', () => {
  let httpBackend: HttpTestingController;
  let phoneService: PhoneService;
  let phonesData: PhoneData[] = [{ name: 'Phone X' }, { name: 'Phone Y' }, { name: 'Phone Z' }];

  // Add a custom equality tester before each test
  beforeEach(() => {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [PhoneService],
    });

    httpBackend = TestBed.get(HttpTestingController);
    phoneService = TestBed.get(PhoneService);
  });

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(() => {
    httpBackend.verify();
  });

  it('should fetch the phones data from `/phones/phones.json`', async () => {
    let phones: PhoneData[] = [];
    let request: TestRequest;

    phoneService.query().subscribe((data) => {
      phones = data;
    });

    request = httpBackend.expectOne('./phones/phones.json');

    expect(phones).toEqual([]);

    request.flush(phonesData);

    expect(phones).toEqual(phonesData);
  });
});
