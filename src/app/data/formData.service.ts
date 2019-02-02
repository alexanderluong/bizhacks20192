import { Injectable } from '@angular/core';

import { FormData, Personal, Address } from './formData.model';
import { WorkflowService } from '../workflow/workflow.service';
import { STEPS } from '../workflow/workflow.model';

@Injectable()
export class FormDataService {

    private formData: FormData = new FormData();
    private isPersonalFormValid: boolean = false;
    private isWorkFormValid: boolean = false;
    private isAddressFormValid: boolean = false;

    constructor(private workflowService: WorkflowService) {
    }

    getPersonal(): Personal {
        // Return the Personal data
        var personal: Personal = {
            budget: this.formData.budget
        };
        return personal;
    }

    setPersonal(data: Personal) {
        // Update the Personal data only when the Personal Form had been validated successfully
        this.isPersonalFormValid = true;
        this.formData.budget = data.budget;
        // Validate Personal Step in Workflow
        this.workflowService.validateStep(STEPS.personal);
    }

    getWork(): string {
        // Return the work type
        return this.formData.work;
    }

    setWork(data: string) {
        // Update the work type only when the Work Form had been validated successfully
        this.isWorkFormValid = true;
        this.formData.work = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.work);
    }

    getAddress(): Address {
        // Return the Address data
        var address: Address = {
            touchscreen: this.formData.touchscreen
        };
        return address;
    }

    setAddress(data: Address) {
        // Update the Address data only when the Address Form had been validated successfully
        this.isAddressFormValid = true;
        this.formData.touchscreen = data.touchscreen;
        // Validate Address Step in Workflow
        this.workflowService.validateStep(STEPS.address);
    }

    getScreen(): string {
        // Return the Address data
        return this.formData.screen;
    }

    setScreen(data: string) {
        // Update the Address data only when the Address Form had been validated successfully
        // this.isWorkFormValid = true;
        this.formData.screen = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.screen);
    }

    getStorage(): string {
        // Return the Address data
        return this.formData.storage;
    }

    setStorage(data: string) {
        // Update the Address data only when the Address Form had been validated successfully
        // this.isWorkFormValid = true;
        this.formData.storage = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.storage);
    }

    getBattery(): string {
        // Return the Address data
        return this.formData.battery;
    }

    setBattery(data: string) {
        // Update the Address data only when the Address Form had been validated successfully
        // this.isWorkFormValid = true;
        this.formData.battery = data;
        // Validate Work Step in Workflow
        this.workflowService.validateStep(STEPS.battery);
    }

    getFormData(): FormData {
        // Return the entire Form Data
        return this.formData;
    }

    resetFormData(): FormData {
        // Reset the workflow
        this.workflowService.resetSteps();
        // Return the form data after all this.* members had been reset
        this.formData.clear();
        this.isPersonalFormValid = this.isWorkFormValid = this.isAddressFormValid = false;
        return this.formData;
    }

    isFormValid() {
        // Return true if all forms had been validated successfully; otherwise, return false
        return this.isPersonalFormValid &&
            this.isWorkFormValid &&
            this.isAddressFormValid;
    }
}
