//let variable
out = console.log;
let favoriteCityId = ['paris', 'rome'];
favoriteCityId.forEach(element => out(element));

//using const 
const citiesId = ['paris', 'nyc', 'rome', 'rio-de-janeiro'];
out(citiesId);
citiesId.push('Tokyo');
out(citiesId);

//using  objets
function getWeather(cityId) {
    let city = cityId.toUpperCase();
    let temperature = 20;
    return { city, temperature };
}

const weather = getWeather('paris');
out(weather);


//Affectation destructree
let { city, temperature } = getWeather('paris');
out(city);
out(temperature);


//Rest operator
let [parisId, nycId, ...othersCitiesId] = citiesId;
out(parisId);
out(nycId);
out(othersCitiesId.length);


//classes
class Trip {
    constructor(id, name, imageUrl) {
        this.id = id;
        this.name = name;
        this.imageUrl = imageUrl;

    }
    toString() {
        return this.id + ' ' + this.name + ' ' + this.imageUrl + ' ' + this.price;
    }
    get price() {
        return this._price;
    }

    set price(newPrice) {
        this._price = newPrice;
    }

    // création d'une méthode static
    static getDefaultTrip() {
        return new Trip('rio-de-janeiro', 'Rio de Janeiro', 'img/rio-de-janeiro.jpg');
    }
}


let parisTrip = new Trip('paris', 'Paris', 'img/paris.jpg');
parisTrip.price = 100;
out(parisTrip.toString());
out(parisTrip.name);
const defaultTrip = Trip.getDefaultTrip();
out(defaultTrip.toString());

class FreeTrip extends Trip {
    constructor(id, name, imageUrl) {
        super(id, name, imageUrl);
        this._price = 0;
    }

    toString() {
        return super.toString();
    }
}

let freetrip = new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
out(freetrip.toString());

class TripService {

    constructor() {
        this.TripSet = new Set();
        this.TripSet.add(new Trip('paris', 'Paris', 'img/paris.jpg'));
        this.TripSet.add(new Trip('nantes',  'Nantes',  'img/nantes.jpg' ));
        this.TripSet.add(new Trip('rio-de-janeiro', 'Rio-de-janeiro', 'img/rio-de-janeiro.jpg' ));

    }

    findByName(tripName) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
                this.TripSet.forEach(trip => {
                    if (trip.name == tripName) {
                        resolve(trip);
                    }
                   
                })
                  reject("the name does not exist",tripName);

            }, 2000)
    });
}
}

class PriceService {

    constructor() {
        // TODO Map of 2 trips
        // 'paris' --> price = 100
        // 'rio-de-janeiro' --> price = 800)
        // no price for 'nantes'
        this.priceService = new Map([
            ['paris', 100],
            ['rio-de-janeiro', 800],
            ['nantes',0]
        ]);

    }

    findPriceByTripId(tripId) {

        return new Promise((resolve, reject) => {

            setTimeout(() => {
                // ici l'exécution du code est asynchrone

                // TODO utiliser resolve et reject en fonction du résultat de la recherche
               
                for(var key of this.priceService.keys()) {
                    if (key == tripId) {

                        resolve(this.priceService.get(key));
                    }
                    
                }
                reject("the price does not exist");
            }, 2000)
        });
    }
}
let serviceTrip=new TripService();
let servicePrice=new PriceService();
serviceTrip.findByName('Paris')
.then(trip=>servicePrice.findPriceByTripId(trip.id))
.then(price => console.log("price found", price))
.catch(err=>console.log(err));

serviceTrip.findByName('Toulouse')
.then(trip=>servicePrice.findPriceByTripId(trip.id))
.then(price => console.log("price found", price))
.catch(err=>console.log(err));

serviceTrip.findByName('Rio-de-janeiro')
.then(trip=>servicePrice.findPriceByTripId(trip.id))
.then(price => console.log("price found", price))
.catch(err=>console.log(err));
