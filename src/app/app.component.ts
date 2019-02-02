import { Component, OnInit, Input } from '@angular/core';

import { FormDataService } from './data/formData.service';

@Component({
    selector: 'multi-step-wizard-app'
    , templateUrl: './app.component.html'
})

export class AppComponent implements OnInit {
    title = 'Multi-Step Wizard';
    @Input() formData;
    afterEmail = false;

    constructor(private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        console.log(this.title + ' loaded!');
    }

    setAfterEmail() {
        this.afterEmail = true;
    }
}