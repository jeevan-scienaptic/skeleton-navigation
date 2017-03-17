/**
 * Created by jeevz on 16/03/17.
 */
import {inject} from 'aurelia-framework';
import {Endpoint} from 'aurelia-api';
import 'whatwg-fetch';

@inject(Endpoint.of('localJson'))
export class DataService {

  contactsList;
  localJsonEndPoint:Endpoint;

  constructor(localJsonEndPoint:Endpoint) {
    this.localJsonEndPoint = localJsonEndPoint;
    this.contactsList = [];
  }


  async getContactList() {
    return this.contactsList = await this.localJsonEndPoint.find('');
  }

  getContactDetails(id) {
    return this.contactsList.filter((contactEntity) => contactEntity.id == id)[0];
  }

}
