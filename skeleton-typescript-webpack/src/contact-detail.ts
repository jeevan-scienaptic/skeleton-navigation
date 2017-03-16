/**
 * Created by jeevan on 15/3/17.
 */

import {autoinject} from 'aurelia-framework';
import {WebAPI} from './WebAPI'

@autoinject
export class ContactDetail {

  webApi: WebAPI;
  contactDetail;

  constructor(webApi:WebAPI){

    this.webApi = webApi;

  }

  activate(params){

    this.webApi.getContactDetails(params.id).then( (contact) => {
      this.contactDetail = contact;
    } );


  }

}
