import * as angular from 'angular';
import 'angular-mocks';
import { CoreModule } from '../core.module';

describe('checkmark', () => {
  beforeEach(angular.mock.module(CoreModule.name));

  it('should convert boolean values to unicode checkmark or cross', inject((checkmarkFilter) => {
    expect(checkmarkFilter(true)).toBe('\u2713');
    expect(checkmarkFilter(false)).toBe('\u2718');
  }));
});
