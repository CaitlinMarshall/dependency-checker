import { LightningElement, track } from 'lwc';
import getDependencies from '@salesforce/apex/DependencyController.getDependencies';
import getNamespaces from '@salesforce/apex/DependencyController.getNamespaces';

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
    @track value;
    @track options = [];

    connectedCallback(event) {

        getNamespaces()
            .then(result => {
                console.log(result);
                for (var i = 0; i < result.length; i++) {
                    const option = {
                        label: result[i].NamespacePrefix,
                        value: result[i].NamespacePrefix
                    };
                    this.options = [...this.options, option];

                }

                //this.value = this.options[0].value;

            })
            .catch(error => {
                this.error = error;
                console.log('Error : ' + JSON.stringify(this.error));
            })

    }


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

