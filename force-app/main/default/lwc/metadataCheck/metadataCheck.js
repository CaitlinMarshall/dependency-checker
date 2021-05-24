import { LightningElement, track, wire } from 'lwc';
import getDependencies from '@salesforce/apex/DependencyController.getDependencies';
import getNamespaces from '@salesforce/apex/DependencyController.getNamespaces';
import UserPreferencesCacheDiagnostics from '@salesforce/schema/User.UserPreferencesCacheDiagnostics';

const columns = [
    { label: 'Component Id', fieldName: 'MetadataComponentId', type: 'text' },
    { label: 'Component Name', fieldName: 'MetadataComponentName', type: 'text' },
    { label: 'Component Type', fieldName: 'MetadataComponentType', type: 'text' },
    { label: 'Dependency Name (in Package)', fieldName: 'RefMetadataComponentName', type: 'text' },
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
                    const allNamespaces = [...this.options, option];
                    this.options = allNamespaces.filter(option => option.value != 'sf_com_apps');

                }

                //this.value = this.options[0].value;

            })
            .catch(error => {
                this.error = error;
                console.log('Error : ' + JSON.stringify(this.error));
            })

    }

    handleChange(event) {
        this.value = event.detail.value;
    }


    @wire(getDependencies, { namespace: '$value' })
    //alert("Button clicked!");
    wiredDependencies({ error, data }) {
        if (data) {
            this.data = JSON.parse(data).records;
            this.error = undefined;
            console.log(this.data);
        } else if (error) {
            this.error = error;
            this.data = undefined;
            console.log(this.error);
        }
    }

}

