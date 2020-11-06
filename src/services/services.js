import AddBusiness from "../components/AddBusiness";
 
let businesses = [
    {id : 0 , active : true,name:"Panda Express",
    address:"1303 E University Blvd",city: "Tucson",state: "AZ", zip: "85719",
    phone:"(520)626-3750"},
    {id : 1 ,active : true,name:"Chipotle Mexican Grill",
    address:"905 E University Blvd Ste 149", city: "Tucson", state: "AZ", zip: "85719",
    phone:"(520)628-7967"},
    {id : 2,active : true,name:"Burger King",
    address:"454 W Grant Rd", city:"Tucson", state:"AZ", zip:"85705",
    phone:"(520) 622-2752"}
]
function strinc (str,inc){
    return (
    str.toLowerCase().includes(inc.toLowerCase())
    )
}
const services = {
    findbusinesses:(text,city,state) => {
        if (text == ""){
            return []
        }
        let x = businesses.filter(b => strinc(b.name,text) && strinc(b.city,city) && strinc(b.state,state))
        if (x){
            return x
        }
        else{
            return []
        }
    
   // return(
   //     businesses.slice(0,text.length)
   // )
    },
    addbusiness:(business) => {
        business.active = true
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
       return businesses 
    }

}
export default services;