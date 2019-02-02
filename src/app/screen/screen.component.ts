import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// import { Personal } from '../data/formData.model';
import { FormDataService } from '../data/formData.service';

@Component({
    selector: 'mt-wizard-screen'
    , templateUrl: './screen.component.html'
})

export class ScreenComponent implements OnInit {
    title = 'How big do you want your screen to be?';
    screen: string;
    form: any;

    constructor(private router: Router, private formDataService: FormDataService) {
    }

    ngOnInit() {
        this.screen = this.formDataService.getScreen();
        console.log('Screen feature loaded!');
    }

    save(form: any): boolean {
        if (!form.valid) {
            return false;
        }

        this.formDataService.setScreen(this.screen);
        return true;
    }

    goToNext(form: any) {
        if (this.save(form)) {
            // Navigate to the work page
            this.router.navigate(['/storage']);
        }
    }
}
