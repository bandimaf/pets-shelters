import {makeAutoObservable} from "mobx"

export default class FundStore {
    constructor() {
        this._fund = [
            {id: 1, title: "Спасите Леопольда", date: '2024-04-18', description: 'Дорогие друзья! Недавно нашего милого кота Леопольда сбила машина. Он получил серьезные травмы и сейчас находится в ветеринарной клинике. Леопольду нужна операция и долгосрочное лечение, чтобы вернуться к нам. Очень переживаем за него и просим помощи', main_image: 'https://cdn.musavat.com/news/thumbnails/ef90657ca96bbe54140096c3c439d7a5.jpg', required_amount: '10000', collected_amount: '0', goal: 'Подопечный', reports: ''},
        ];
        makeAutoObservable(this);
    }

    setFund(fund) {
        this._fund = fund;
    }

    get fund() {
        return this._fund;
    }
}