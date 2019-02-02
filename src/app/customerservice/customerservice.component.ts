import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
    selector: 'mt-wizard-customerservice'
    , templateUrl: './customerservice.component.html'
})

export class CustomerserviceComponent implements OnInit {
    title = 'Hello';
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        // this.personal = this.formDataService.getPersonal();
        // console.log('Personal feature loaded!');
    }

    // save(form: any): boolean {
    //     if (!form.valid) {
    //         return false;
    //     }

    //     this.formDataService.setPersonal(this.personal);
    //     return true;
    // }

    goToNext(form: any) {
      this.router.navigate(['/']);
    }
}
