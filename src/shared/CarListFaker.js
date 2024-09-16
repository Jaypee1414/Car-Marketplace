import { faker } from "@faker-js/faker";

function RandomCarList(){
    return{
        name: faker.vehicle.vehicle(),
        image: 'https://stellantis3.dam-broadcast.com/medias/domain12808/media102593/777964-36lfcybw0c-whr.jpg',
        type: faker.vehicle.type(),
        model: faker.vehicle.model(),
        fuel: faker.vehicle.fuel(),
        gearType: 'Automatic',
        miles: 1000,
        price: faker.finance.amount({min: 10, max: 51})
    }
}

const carList = faker.helpers.multiple(RandomCarList,{
    count: 12
})

export default{
    carList
}