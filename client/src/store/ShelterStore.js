import {makeAutoObservable} from "mobx"

export default class ShelterStore {
    constructor() {
        this._shelter = [
            {id: 1, name: 'Приют «Рыжий хвост»', description: 'Описание', main_image: 'https://i.pinimg.com/736x/16/be/b1/16beb118865dd1034257576d9bd788a3.jpg'},
            {id: 2, name: 'Приют «Рыжий хвост»', description: 'Описание', main_image: 'https://i.pinimg.com/736x/16/be/b1/16beb118865dd1034257576d9bd788a3.jpg'},
            {id: 3, name: 'Приют «Рыжий хвост»', description: 'Описание', main_image: 'https://i.pinimg.com/736x/16/be/b1/16beb118865dd1034257576d9bd788a3.jpg'},
        ];
        makeAutoObservable(this);
    }

    setShelter(shelter) {
        this._shelter = shelter;
    }

    get shelter() {
        return this._shelter;
    }
}