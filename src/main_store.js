

const {makeAutoObservable} = require("mobx");

class MainStore {
    constructor() {
        makeAutoObservable(this)
    }
    current_page = 0
    pizza = [
        {
            id: 1,
            title: 'Pepperoni',
            price: 6.99,
            image_url: 'https://iamafoodblog.com/wp-content/uploads/2015/10/meatlovers-pizza-8w.jpg',
            quantity: 0
        },
        
        {
            id: 2,
            title: 'Cheese',
            price: 8.99,
            image_url: 'http://www.htveir.is/wp-content/uploads/2014/09/chesse-pizza.jpg',
            quantity: 0
        },
        {
            id: 3,
            title: 'Pineapple',
            price: 4.50,
            image_url: 'https://www.chfusa.com/blog/wp-content/uploads/2019/08/Hawaiian-Pizza-4-1024x683.jpg',
            quantity: 0
        },
        {
            id: 4,
            title: 'Barbecue chicken',
            price: 1.50,
            image_url: 'https://aestheticbeats.com/wp-content/uploads/2020/02/Barbecue-Chicken-Pizza-1024x576.jpg',
            quantity: 0
        }
    ]
}

export const main_store = window.main_store = new MainStore()