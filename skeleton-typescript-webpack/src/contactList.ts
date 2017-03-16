/**
 * Created by jeevan on 15/3/17.
 */

import {WebAPI} from './WebAPI';
import {autoinject} from 'aurelia-framework';

@autoinject
export class ContactList{

  webApi:WebAPI;
  contactList;
  selectedId:number;

  constructor(webApi:WebAPI){
    this.webApi = webApi;
    this.contactList = [];
  }

  created(){
    this.webApi.getContactList().then((contacts) => this.contactList = contacts);
  }

  selectContact(contact) {
    this.selectedId = contact.id;
    return true;
  }

}
