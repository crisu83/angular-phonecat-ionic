import * as angular from 'angular';
import { PhoneModule } from '../core/phone/phone.module';
import { PhoneListComponent } from './phone-list.component';

// Define the `phoneList` module
export const PhoneListModule = angular.module('phoneList', [PhoneModule.name]);

PhoneListModule.component('phoneList', PhoneListComponent);
