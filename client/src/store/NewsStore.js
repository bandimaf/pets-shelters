import {makeAutoObservable} from "mobx"

export default class NewsStore {
    constructor() {
        this._news = [
            // {id: 1, title: 'Встреча волонтёров', date: '2024-04-26', description: 'Ребята сегодня отлично поработали . Вольер Цезаря и Клепы привели в порядок, все выдолбили и вывезли за территорию приюта. Хорошо поработав, попили сока с тортиком.', main_image: 'https://er.ru/media/news/December2020/6tf9Jb1LKgJtt9DRPwQa.jpeg'},
        ];
        makeAutoObservable(this);
    }

    setNews(news) {
        this._news = news;
    }

    get news() {
        return this._news;
    }
}