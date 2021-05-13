import { LightningElement, track } from 'lwc';
import getDependencies from '@salesforce/apex/DependencyController.getDependencies';

const columns = [
    { label: 'Component Id', fieldName: 'MetadataComponentId', type: 'text' },
    { label: 'Component Name', fieldName: 'MetadataComponentName', type: 'text' },
    { label: 'Component Type', fieldName: 'MetadataComponentType', type: 'text' },
    { label: 'Dependency Name', fieldName: 'RefMetadataComponentName', type: 'text' },
    { label: 'Dependency Type', fieldName: 'RefMetadataComponentType', type: 'text' },

];

export default class MetadataCheck extends LightningElement {
    @track data;
    @track error;
    columns = columns;


    handleGetDependencies() {
        alert("Button clicked!");
        getDependencies()
            .then(result => {
                this.data = JSON.parse(result).records;
                console.log(this.data);

            })
            .catch(error => {
                this.error = error;
                console.log(this.error);
            })
    }

}

