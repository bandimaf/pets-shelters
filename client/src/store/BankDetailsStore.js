import { makeAutoObservable } from "mobx"

export default class BankDetailsStore {
    constructor() {
        this._details = [
            // {id: 1, checking_account: '40703810064000001945', department: 'в отделении №8616 ПАО «Сбербанк России», г. Томск', BIK: '046902606', correspondent_account: '30101810800000000606', INN: '7017228221', OKPO: '88210751', KPP: '701701001', OGRN: '1087000001692', OKVED: 85.3, QR: 'https://animatika.ru/netcat_files/Image/content/glossary/qr-code.gif', additionally: 'Перевод с сообщением «Котик»'},
            // {id: 2, checking_account: '40703810064000001945', department: 'в отделении №8616 ПАО «Сбербанк России», г. Томск', BIK: '046902606', correspondent_account: '30101810800000000606', INN: '7017228221', OKPO: '88210751', KPP: '701701001', OGRN: '1087000001692', OKVED: 85.3, QR: 'https://animatika.ru/netcat_files/Image/content/glossary/qr-code.gif', additionally: ''},
        ];
        
        this._totalSum = this._details.forEach(obj => {
            this._totalSum += obj.sum;
        });

        makeAutoObservable(this);
    }

    setTotalSum(totalSum) {
        this._totalSum = totalSum;
    }

    get TotalSum() {
        return this._totalSum;
    }

    setDetails(details) {
        this._details = details;
    }

    get details() {
        return this._details;
    }
}