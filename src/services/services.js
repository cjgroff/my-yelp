const services = {
    findbusinesses:(text) => {
        const bs = [
        {name:"Panda Express",location:"1303 E University Blvd, Tucson, AZ 85719",
        phone:"(520)626-3750"},
        {name:"Chipotle Mexican Grill",
        location:"905 E University Blvd Ste 149, Tucson, AZ 85719",
        phone:"(520)628-7967"},
        {name:"Burger King",
        location:"454 W Grant Rd, Tucson, AZ 85705",
        phone:"(520) 622-2752"}
    ]
    
    return(
        bs.slice(0,text.length)
    )
    }
}
export default services;