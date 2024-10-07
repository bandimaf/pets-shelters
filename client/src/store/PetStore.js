import { makeAutoObservable } from "mobx"

export default class PetStore {
    constructor() {
        this._pet = [
        // {id: 1, name: "Фиалка", at_the_shelters: true, age: 5, arrival_date: '', departure_date: '', reason_departure: '', about: '', health_feature: '', need_treatment: false, main_image: 'https://cs12.pikabu.ru/post_img/big/2021/08/01/6/1627811881184572334.jpg', gender: 'Жен', type: ''},
        // {id: 2, name: "Барс", at_the_shelters: true, age: 3, arrival_date: '2024-03-27', departure_date: null, reason_departure: null, about: 'Сначала он может быть осторожным, но быстро привыкает и позволяет гладить своё мягенькое пузо. Он спокойный, ласковый и готов поиграть с вами или просто быть рядом. Если вы ищете верного друга, дайте Барсику шанс — он ждет новую семью!', health_feature: 'Кастрирован', need_treatment: false, main_image: 'https://vetandlife.ru/wp-content/uploads/2022/04/DSC06108.jpg', gender: 'Муж', type: 'Кошки'},
        // {id: 3, name: "Алиса", at_the_shelters: true, age: 6, arrival_date: '2024-05-28', departure_date: null, reason_departure: null, about: 'Очень добрая и ласковая', health_feature: 'Стерилизована', need_treatment: false, main_image: 'https://icdn.lenta.ru/images/2023/04/26/11/20230426112440991/square_320_f21a3065e72d86c1d9d5e30105caa69f.jpg', gender: 'Жен', type: 'Кошки'},
        // {id: 4, name: "Фунтик", at_the_shelters: true, age: 5, arrival_date: '', departure_date: '', reason_departure: '', about: '', health_feature: '', need_treatment: false, main_image: 'https://na-zapade-mos.ru/files/data/user/AiF/olga.k/files/2020/2020.11.23-1606146476.9038_dsc-0827.jpg', gender: 'Жен', type: ''},
        // {id: 5, name: "Лейла", at_the_shelters: true, age: 3, arrival_date: '2024-03-27', departure_date: null, reason_departure: null, about: 'Сначала он может быть осторожным, но быстро привыкает и позволяет гладить своё мягенькое пузо. Он спокойный, ласковый и готов поиграть с вами или просто быть рядом. Если вы ищете верного друга, дайте Барсику шанс — он ждет новую семью!', health_feature: 'Кастрирован', need_treatment: false, main_image: 'https://www.friendforpet.ru/api/sites/default/files/2020-07/shutterstock_372160105.png', gender: 'Муж', type: 'Кошки'},
        // {id: 6, name: "Лунтик", at_the_shelters: true, age: 6, arrival_date: '2024-05-28', departure_date: null, reason_departure: null, about: 'Очень добрая и ласковая', health_feature: 'Стерилизована', need_treatment: false, main_image: 'https://cdnn21.img.ria.ru/images/07e6/01/12/1768409751_0:160:3072:1888_1920x0_80_0_0_a6866fcd2202df7b982e12f1fde5a213.jpg', gender: 'Жен', type: ''},
        // {id: 7, name: "Пыжик", at_the_shelters: true, age: 6, arrival_date: '2024-05-28', departure_date: null, reason_departure: null, about: 'Очень добрая и ласковая', health_feature: 'Стерилизована', need_treatment: false, main_image: 'https://komiinform.ru/content/news/images/145077/k1(1).jpg', gender: 'Жен', type: 'Кошки'},
        // {id: 8, name: "Сара", at_the_shelters: true, age: 6, arrival_date: '2024-05-28', departure_date: null, reason_departure: null, about: 'Очень добрая и ласковая', health_feature: 'Стерилизована', need_treatment: false, main_image: 'https://lh3.googleusercontent.com/proxy/K48vYd7hkJwZoPNOlpdURwvHHbbIv3edqzu7NoqM9AszUyL9T_Pof7U7sMmiCvN7iedJbCCANDQbY214RI2iRRemzUubSgICgPjj8brHRBr1KZfraEQZo6WdVkt2uVmNKv5Kw2MWdk5He0OZXT_Acyu8PpywySXreL1d', gender: 'Жен', type: 'Кошки'},
        ]
        // this._page = 1
        // this._totalCount = 0
        // this._limit = 3
        makeAutoObservable(this);
    }

    setPet(pet) {
        this._pet = pet;
        console.log(this._pet)
    }

    get pet() {
        return this._pet;
    }
}