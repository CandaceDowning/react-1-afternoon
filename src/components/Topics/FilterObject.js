import React, {Component} from 'react';


    class FilterObject extends Component{
        constructor(){
            super()

            this.state = {
                unFilteredArray : [
                    {
                        name: 'Candace',
                        position: 'Coder',
                        age: 34,
                    },
                    {
                        name: 'Sam',
                        age: 34,
                        rate: 30
                    },
                    {
                        name: 'Sarah',
                        position: 'The Boss',
                        rate: 250
                    },
                    {
                        name: 'Travis',
                        experience: 'none',
                        senority:'none'
                    },
                ], 
                userInput: '',
                filteredArray: []
            }
        }
        handleChange(val){
            this.setState({userInput:val})
        }

        filter(userInput){
            let rawArr = this.state.unFilteredArray;
            let filtered = [];
        
            for(let i=0; i<rawArr.length; i++){
                if(rawArr[i].hasOwnProperty(userInput)){
                    filtered.push(rawArr[i])
                }
                else{this.setState({filteredArray: rawArr})}
            }
            this.setState({filteredArray: filtered})
        }
        
        render(){
            return(
                <div className="puzzleBox filterObjectPb">
                    <h4>Filter Object</h4>
                    <span className="puzzleText">{JSON.stringify(this.state.unFilteredArray)}</span>
                    <input 
                        className="inputLine"
                        onChange={(e)=>this.handleChange(e.target.value)}
                    ></input>
                    <button 
                        className="confirmationButton"
                        onClick={()=>this.filter(this.state.userInput)}
                    >Filter</button>
                    <span className="resultsBox filterObjectRB">Filtered Names:{JSON.stringify(this.state.filteredArray)}</span>
                </div>
            )
        }
    }

export default FilterObject;