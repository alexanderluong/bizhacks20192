import {
    Component,
    OnInit,
    Input
} from '@angular/core';
import { DataService } from '../data.service';
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
    title = 'Thanks for waiting!';
    @Input() formData: FormData;
    isFormValid: boolean = false;
    msg = '';
    countUnknown = 0;

    constructor(private formDataService: FormDataService, private data: DataService) { }
    filteredProducts: any = [];
    ngOnInit() {
        this.formData = this.formDataService.getFormData();
        this.isFormValid = this.formDataService.isFormValid();
        
        Object.keys(this.formData).forEach((item : any) => {
            if (this.formData[item] == "0"){
                this.countUnknown + 1
            }
        })

        if(this.countUnknown < 3) {
            this.msg = "Here is a list of laptops that fit your daily needs:"
            this.filterProducts();
        } else {
            this.msg = "Please contact our customer service representative on site for more assistance. For more information, please contact us at 1-800-BEST-BUY."
        }
    }

    filterProducts() {
        console.log("filtering");
        this.data.Search().map((response) => response.json()
        ).subscribe((data: any) => {
            let products = data.searchApi.documents;
            products.forEach(prod => {
                let skuId = prod.skuId
                this.data.filterProduct(skuId).map((response) => response.json()
                ).subscribe(async (spec: any) => {
                    // if (this.fitsNeeds(spec) === true) {
                    //     this.filteredProducts.push(spec);
                    // }
                    // let flag: boolean = false;
                    console.log("inside FitsNeed")
                    let prod = spec.overview.specifications;
                    let price = spec.overview.priceBlock.itemPrice.currentPrice;
                    if (price > parseInt(this.formData.budget, 10)) {
                        // console.log(price);
                        // console.log('budget incorrect');
                        // flag = true;
                        return;
                    }
                    console.log(this.formData);
                    prod.forEach(sp => {
                        // console.log("sp", sp);
                        if (sp.displayName === 'Touchscreen Display' && sp.value !== this.formData.touchscreen) {
                            // console.log(this.formData.touchscreen);
                            console.log("didn't meet the touch screen spec");
                            // flag = true;
                            return;
                        }
                        // console.log("sp value: " + sp.displayName + sp.value);
                        if (sp.displayName === 'Screen Size' && parseFloat(sp.value.split(' ')[0]) > parseFloat(this.formData.screen)) {
                            // if (sp.displayName === 'Screen Size') {
                            // console.log("HELLO");
                            console.log(sp.value);
                            console.log("screen size is wrong");
                            // flag = true;
                            return;
                        }

                        if (sp.displayName === "Battery - Capacity" && sp.value.split(' ')[0] > 20) {
                            console.log("battery size is wrong");
                            // flag = true;
                            return;
                        }
                    });

                    // console.log(prod);
                    // console.log(price);
                    // if (!flag) {
                    console.log(spec.overview.specifications);
                    if (this.filteredProducts.length < 3) {
                        this.filteredProducts.push(spec);
                    }
                        await this.pushFilteredComponents(this.filteredProducts);
                    // }
                });
            });
        });
    }

    pushFilteredComponents(products: any) {
        console.log("pushFilteredComponents: " + products);
    }

    fitsNeeds(spec: any) {
        console.log("inside FitsNeed")
        let prod = spec.overview.specifications;
        let price = spec.overview.priceBlock.itemPrice.currentPrice;
        if (price > parseInt(this.formData.budget, 10)) {
            return false;
        }

        console.log(this.formData);
        prod.forEach(sp => {
            // console.log("sp", sp);
            if (sp.displayName === 'Touchscreen Display' && sp.value !== this.formData.touchscreen) {
                return false;
            }
            if (sp.displayName === 'Screen Size' && parseFloat(sp.value.split(' ')[0]) > parseFloat(this.formData.screen)) {
                console.log(sp.value);
                console.log("screen size is wrong");
                return false;
            }
        });
        return true;

    }

    submit() {
        // alert('Excellent Job!');
        console.log(this.formData);
        window.location.replace('/');


        this.formData = this.formDataService.resetFormData();
        this.isFormValid = false;
    }
}
