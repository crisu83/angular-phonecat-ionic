import { PhoneService, PhoneData } from '../core/phone/phone.service';

class PhoneListController {
  phones: PhoneData[];
  orderProp: string;

  constructor(private phoneService: PhoneService) {
    phoneService.query().subscribe((phones) => {
      this.phones = phones;
    });
    this.orderProp = 'age';
  }
}

export const PhoneListComponent = {
  template: `
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-2">
        <!--Sidebar content-->

        <p>
          Search:
          <input ng-model="$ctrl.query" />
        </p>

        <p>
          Sort by:
          <select ng-model="$ctrl.orderProp">
            <option value="name">Alphabetical</option>
            <option value="age">Newest</option>
          </select>
        </p>

      </div>
      <div class="col-md-10">
        <!--Body content-->

        <ul class="phones">
          <li ng-repeat="phone in $ctrl.phones | filter:$ctrl.query | orderBy:$ctrl.orderProp"
              class="thumbnail phone-list-item">
            <a href="#!/phones/{{phone.id}}" class="thumb">
              <img ng-src="{{phone.imageUrl}}" alt="{{phone.name}}" />
            </a>
            <a href="#!/phones/{{phone.id}}">{{phone.name}}</a>
            <p>{{phone.snippet}}</p>
          </li>
        </ul>

      </div>
    </div>
  </div>
  `,
  controller: PhoneListController,
};
