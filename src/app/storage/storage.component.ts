import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { FormDataService } from '../data/formData.service';

@Component({
    selector: 'mt-wizard-storage'
    , templateUrl: './storage.component.html'
})

export class StorageComponent implements OnInit {
    title = 'Will you be saving a lot of videos/photos?';
    storage: string;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.storage = this.formDataService.getStorage();
        console.log('Screen feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setStorage(this.storage);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/result']);
        }
    }
}
