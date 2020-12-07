import AddBusiness from "../components/AddBusiness";
 
let businesses = [
   
]
function strinc (str,inc){
    return (
    str.toLowerCase().includes(inc.toLowerCase())
    )
}
const services = {
    findbusinesses:(text,city,state) => {
        const api = `http://localhost:3000/search/${text}/${city},${state}`
        console.log('api',api)
        //fetch(api).then(x => x.json()).then(y => {this.setState({quiz: y});
        //    console.log("quiz",y)}).catch(e => console.log("Fetch quiz error",e))
        return fetch(api)
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
        const api = `http://localhost:3000/place`
        fetch(api,{
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(business)}
        ).catch(e => console.log("Error",e))
    },
    updatebusiness:(business) => {
        business.update = true
        console.log("updatebus####:",business)
        services.addbusiness(business)
    },
    deletebusiness:(id) => {
        businesses[id].active = false
    }
    ,
    allbusinesses:() => {
        //const api = `https://cjgroff-imagequiz.herokuapp.com/quiz/${this.state.quiznum}`
        const api = "http://localhost:3000/places"
        console.log('api',api)
        //fetch(api).then(x => x.json()).then(y => {this.setState({quiz: y});
        //    console.log("quiz",y)}).catch(e => console.log("Fetch quiz error",e))
        return fetch(api)
        //This fetch return promise on which we can call then()
       
    },
    businessbyid:(id) => {
        //return businesses.filter((b) => b.id == id)[0]
        return businesses[id]
    },
    addreview:(id,review) => {
        console.log("addreview",id,review)
        const b = businesses[id]
        b.reviews.push(review)

    },
    get_reviews:(bs) => {
        const api = `http://localhost:3000/reviews/${bs.join(",")}`
        console.log('api',api)
        return fetch(api)
    }
    

}
export default services;