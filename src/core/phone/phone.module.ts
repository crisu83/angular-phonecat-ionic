import * as angular from 'angular';
import { PhoneService } from './phone.service';
import { downgradeInjectable } from '@angular/upgrade/static';

// Define the `core.phone` module
export const PhoneModule = angular.module('core.phone', []);

PhoneModule.service('phoneService', downgradeInjectable(PhoneService));
