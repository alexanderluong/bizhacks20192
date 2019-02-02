import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import {DataService} from '../data.service';
import 'rxjs/add/operator/map';

import {
    FormData
} from '../data/formData.model';
import {
    FormDataService
} from '../data/formData.service';

@Component({
    selector: 'mt-wizard-result',
    templateUrl: './result.component.html',
    providers: [DataService]
})

export class ResultComponent implements OnInit {
    title = 'Thanks for staying tuned!';
    @Input() formData: FormData;
    isFormValid: boolean = false;

    constructor(private formDataService: FormDataService, private data: DataService) { }
    filteredProducts: any  = [];
    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        this.data.Search().map((response) => response.json()
        ).subscribe((data: any) => {
            let products = data.searchApi.documents; 
            products.forEach(prod => {
                let skuId = prod.skuId 
                this.data.filterProduct(skuId).map((response) => response.json()
                ).subscribe((spec: any) => {
                    if(this.fitsNeeds(spec) === true) {
                        this.filteredProducts.push(spec);
                    }
                } )
              })
          })
    }

    fitsNeeds(spec: any){
        console.log("inside FitsNeed")
        let prod = spec.overview.specifications
        let price = spec.overview.priceBlock.itemPrice.currentPrice
        if(price > parseInt(this.formData.budget)){
            return false;
        }
        prod.forEach(sp => {
            console.log("sp",sp)
            if (sp.displayName === "Touchscreen Display" && sp.value !== this.formData.touchscreen){
                return false;

            }
        })

        console.log(prod);
        console.log(price);
        return true; 

    }

    submit() {
        // alert('Excellent Job!');
        console.log(this.formData);
        window.location.reload();


        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
}
