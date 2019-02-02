export class FormData {
    budget: string = '';
    work: string = '';
    touchscreen: string = '';
    screen: string = '';
    storage: string = '';
    battery: string = '';

    clear() {
        this.budget = '';
        this.work = '';
        this.touchscreen = '';
        this.screen = '';
        this.storage = '';
        this.battery = '';
    }
}

export class Personal {
    budget: string = '';
}

export class Address {
    touchscreen: string = '';
}