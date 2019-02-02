import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
    selector: 'mt-wizard-battery'
    , templateUrl: './battery.component.html'
})

export class BatteryComponent implements OnInit {
    title = 'How much will you use your laptop in one day?';
    battery: string;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.battery = this.formDataService.getBattery();
        console.log('Battery feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setBattery(this.battery);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/result']);
        }
    }
}
