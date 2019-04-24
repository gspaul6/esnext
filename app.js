//let variable
out=console.log;
let favoriteCityId=['paris','rome'];
favoriteCityId.forEach(element=>out(element));

//using const 
const citiesId=['paris','nyc','rome','rio-de-janeiro'];
out(citiesId);
citiesId.push('Tokyo');
out(citiesId);

//using  objets
function getWeather(cityId){
    let city=cityId.toUpperCase();
    let temperature =20;
    return { city, temperature};
} 

const weather=getWeather('paris');
out(weather);


//Affectation destructree
let {city,temperature}=getWeather('paris');
out(city);
out(temperature);


//Rest operator
let[parisId,nycId,...othersCitiesId]=citiesId;
out(parisId);
out(nycId);
out(othersCitiesId.length);


//classes
class Trip{
    constructor(id,name,imageUrl){
        this.id=id;
        this.name=name;
        this.imageUrl=imageUrl;
        
    }
     toString(){
        return this.id+ ' '+ this.name+' '+this.imageUrl+' '+this.price;
    }
    get price(){
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


let parisTrip = new Trip('paris','Paris','img/paris.jpg');
parisTrip.price=100;
out(parisTrip.toString());
out(parisTrip.name);
const defaultTrip=Trip.getDefaultTrip();
out(defaultTrip.toString());

class FreeTrip extends Trip{
    constructor(id,name,imageUrl){
        super(id,name,imageUrl);
         this._price=0;
    }
 
    toString(){
        return super.toString();
    }
}

let freetrip=new FreeTrip('nantes', 'Nantes', 'img/nantes.jpg');
out(freetrip.toString());