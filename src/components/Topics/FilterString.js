import React, {Component} from 'react';

    class FilterString extends Component{
        constructor(){
            super()

            this.state = {
                creatures: ['Unicorn','Manticore','Dragon','Mermaid','Cyclops','Centaur'],
                userInput: '',
                filteredArray: []
            }
        }
        handleChange(val){
            this.setState({userInput:val})
        }
        filter(userInput){
            let all=this.state.creatures.filter(e=>e.includes(userInput)); 
            this.setState({filteredArray: all})
        }    
        
        render(){
            return(
                <div className='puzzleBox filterStringPB'>
                    <h4>Filter String</h4>
                    <span className='puzzleText'>Creatures: {JSON.stringify(this.state.creatures)}</span>
                    <input 
                        className='inputLine'
                        onChange={(e)=>this.handleChange(e.target.value)}></input>
                    <button 
                        className='confirmationButton'
                        onClick={()=>this.filter(this.state.userInput)}>Find</button>
                    <span className="resultsBox filterStringRB">Found Creatures:{JSON.stringify(this.state.filteredArray)}</span>
                </div>
            )
        }
    }

export default FilterString;