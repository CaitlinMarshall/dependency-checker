import { LightningElement, wire } from 'lwc';
import getDependencies from '@salesforce/apex/DependencyController.getDependencies';

const columns = [
    { label: 'Component Type', fieldName: 'MetadataComponentType', type: 'text' },
    { label: 'Component Name', fieldName: 'MetadataComponentName', type: 'text' },
    { label: 'Component Id', fieldName: 'MetadataComponentId', type: 'text' },
    { label: 'Dependency Name', fieldName: 'RefMetadataComponentName', type: 'text' },
    { label: 'Dependency Type', fieldName: 'RefMetadataComponentType', type: 'text' },

];

export default class MetadataCheck extends LightningElement {
    dependencies;
    error;


    handleGetDependencies() {
        getDependencies()
            .then(result => {
                this.dependencies = result;
            })
            .catch(error => {
                this.error = error;
            })
    }

}

