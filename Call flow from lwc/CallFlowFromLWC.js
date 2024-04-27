import { LightningElement } from 'lwc';

export default class CallFlowFromLWC extends LightningElement {

    firstName;
    lastName;
    flowVariables = [];

    isFlowFlagged = false;

    clicked(){
        this.firstName = this.template.querySelector('lightning-input[data-name="firstName"]').value;
        this.lastName = this.template.querySelector('lightning-input[data-name="lastName"]').value;
        this.isFlowFlagged = true;

        this.flowVariables = [
            {
                name : "firstName",
                type : "String",
                value : this.firstName
            },
            {
                name : "lastName",
                type : "String",
                value : this.lastName
            }
        ]
        console.log('From clicked method');
    }

    handleFlowStatusChange(event) {
        if (event.detail.status?.toLowerCase() == 'finished') {
            this.isShowFlow = false;
            this.template.querySelector('lightning-input[data-name="firstName"]').value = '';
            this.template.querySelector('lightning-input[data-name="lastName"]').value = '';
        }
    }
}
