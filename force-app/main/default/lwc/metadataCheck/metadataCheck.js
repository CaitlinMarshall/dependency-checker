import { LightningElement, wire } from 'lwc';
import {
    APPLICATION_SCOPE,
    createMessageContext,
    MessageContext,
    publish,
    releaseMessageContext,
    subscribe,
    unsubscribe,
} from 'lightning/messageService';

import dependencyChannel from '@salesforce/messageChannel/dependencyChannel__c';

const columns = [
    { label: 'Component Type', fieldName: 'MetadataComponentType', type: 'text' },
    { label: 'Component Name', fieldName: 'MetadataComponentName', type: 'text' },
    { label: 'Component Id', fieldName: 'MetadataComponentId', type: 'text' },
    { label: 'Dependency Name', fieldName: 'RefMetadataComponentName', type: 'text' },
    { label: 'Dependency Type', fieldName: 'RefMetadataComponentType', type: 'text' },

];

export default class MetadataCheck extends LightningElement {

    @wire(MessageContext)
    messageContext;

    handleClick(event) {
        const payload = {};
        publish(this.messageContext, dependencyChannel, payload);
    }

}