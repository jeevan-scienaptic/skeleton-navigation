/**
 * Created by jeevan on 15/3/17.
 */
import {autoinject} from 'aurelia-framework';
import 'whatwg-fetch';
import {HttpClient} from 'aurelia-fetch-client';
import {DataService} from './serviceLayer';

@autoinject
export class ContactList {

  contactList;
  selectedId: number;
  dataService: DataService;


  constructor(httpClient: HttpClient, dataService : DataService) {
    this.httpClient = httpClient;
    this.dataService = dataService;
    this.contactList = [];
  }

  created() {
    this.fetchData().then((response) => {this.contactList = response; console.log(this.contactList)});

  }

  async fetchData(){
    let temp = await this.dataService.getContactList();
    console.log(temp);
    return temp;
  }

  selectContact(contact) {
    this.selectedId = contact.id;
    return true;
  }

}
