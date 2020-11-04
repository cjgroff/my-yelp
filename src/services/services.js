import AddBusiness from "../components/AddBusiness";
 
let businesses = [
    {id : 0 , active : true,name:"Panda Express",location:"1303 E University Blvd, Tucson, AZ 85719",
    phone:"(520)626-3750"},
    {id : 1 ,active : true,name:"Chipotle Mexican Grill",
    location:"905 E University Blvd Ste 149, Tucson, AZ 85719",
    phone:"(520)628-7967"},
    {id : 2,active : true,name:"Burger King",
    location:"454 W Grant Rd, Tucson, AZ 85705",
    phone:"(520) 622-2752"}
]
const services = {
    findbusinesses:(text) => {
        
    
    return(
        businesses.slice(0,text.length)
    )
    },
    addbusiness:(business) => {
        business.id = businesses.length
        businesses.push(business)
    },
    updatebusiness:(business) => {
        //replace element of choice with business
        businesses[business.id] = business
        console.log("update:",business)
        console.log("update:",businesses)
        
    },
    deletebusiness:(id) => {
        businesses[id].active = false
    }
    ,
    allbusinesses:() => {
       return(businesses) 
    }
}
export default services;