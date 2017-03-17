/**
 * Created by jeevan on 15/3/17.
 */

import {autoinject} from 'aurelia-framework';
import {DataService} from './serviceLayer';

@autoinject
export class ContactDetail {
  contactDetail;
  dataService: DataService;

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  activate(params) {
    this.contactDetail = this.dataService.getContactDetails(params.id);
    console.log(this.contactDetail);
  }

}
