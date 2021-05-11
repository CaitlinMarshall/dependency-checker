import { LightningElement } from 'lwc';

const columns = [
    { label: 'Component Type', fieldName: 'MetadataComponentType', type: 'text' },
    { label: 'Component Name', fieldName: 'MetadataComponentName', type: 'text' },
    { label: 'Component Id', fieldName: 'MetadataComponentId', type: 'text' },
    { label: 'Dependency Name', fieldName: 'RefMetadataComponentName', type: 'text' },
    { label: 'Dependency Type', fieldName: 'RefMetadataComponentType', type: 'text' },

];

export default class MetadataCheck extends LightningElement { }