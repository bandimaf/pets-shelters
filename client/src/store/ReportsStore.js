import {makeAutoObservable} from "mobx"

export default class ReportsStore {
    constructor() {
        this._reports = [
            {id: 1, date: '2024-04-26', sum: 15000, name: 'Иван Иванович И.'},
            {id: 2, date: '2024-04-26', sum: 1700, name: 'Иван Иванович И.'},
            {id: 3, date: '2024-04-26', sum: 12000, name: 'Иван Иванович И.'},
            {id: 3, date: '2024-04-26', sum: 12000, name: 'Иван Иванович И.'},
        ];
        makeAutoObservable(this);
    }

    setReports(reports) {
        this._reports = reports;
    }

    get reports() {
        return this._reports;
    }
}