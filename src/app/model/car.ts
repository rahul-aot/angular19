export class Car {
    carId: number;
    brand: string;
    model: string;
    year: number;
    color: string;
    regNo: string;
    dailyRate: number;
    carImage: string;
    constructor() {
        this.carId = 0;
        this.brand = '';
        this.model = '';
        this.year = 0;
        this.color = '';
        this.regNo = '';
        this.dailyRate = 0;
        this.carImage = '';
    }

}

export interface IcarList{
    carId: number,
    brand: string,
    model: string,
    year: number,
    color: string,
    regNo: string,
    dailyRate: number,
    carImage: string,
}