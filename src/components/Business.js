import React from 'react';
import services from "../services/services"
export default class Business extends React.Component{
    constructor(props){
        super(props)
        console.log("business ctor,props",props)
        this.state = {ids: props.location.state.bs, reviewinp: null, reviewtext: "" }

    }
    reviewclick = (event) =>{
        console.log("event:", event,"bussiness:",event.target.getAttribute("business") )
        this.setState({reviewinp: event.target.getAttribute("business")})
        console.log("review click:",this.state) 
    }
    onSubmit = (event) => {
        console.log("sumbit review:",this.state.reviewinp)
        services.addreview(this.state.reviewinp,this.state.reviewtext)
        this.setState({reviewinp: null})
        event.preventDefault();
        this.forceUpdate()
    }
    reviewchange = (event) => {
        const value = event.target.value;
        this.setState({reviewtext: value})
    }
    render(){
        const bs = this.state.ids.map(services.businessbyid)
        const divs =[] 
        for (let i = 0; i < bs.length ; i++){
            const b = bs[i]
            let rdivs = []
            if (b.reviews.length == 0){
                rdivs.push(<div>Be the first to review!</div>)
            }
            else{ 
                rdivs.push(<div>Reviews</div>)
                rdivs= rdivs.concat(b.reviews.map((r) => <div> <span  style= {{
                    background: "white", border: "1"
                }}>"{r}"</span> </div>))
            }
            
            divs.push(<div>{b.name},{b.address}<br/>{rdivs}<button onClick={this.reviewclick}  business= {b.id}>Review</button></div>)
            
        }
        //const review_divs = bs.map(b) <div></div>
        return (
            <div>
            {divs}
            {this.state.reviewinp ? <form onSubmit= {this.onSubmit}> <input onChange= {this.reviewchange} type = "text" /> <button type ="submit"> Post Review</button> </form> : "" }
            </div>
            
        

        )
    }}
