import React, {Component} from 'react';

class Home extends Component{
    constructor(props){
        super(props);
        this.state = {
            "titulo":"Instruções"
        }
    }

    render(){
        return(
            <div>{this.state.titulo}</div>
        )
    }
}
export default Home;