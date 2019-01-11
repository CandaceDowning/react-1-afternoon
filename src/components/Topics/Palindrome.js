import React, {Component} from 'react';

    class Palindrome extends Component{
        constructor(){
            super()
            this.state ={
                userInput: '',
                palindrome: ''
            }
        }
        handleChange(val){
            this.setState({userInput: val})
        }
        putMyThingDownFlipItAndReverseIt(userInput){
            let thing = userInput
            let gniht = userInput.split("").reverse().join("")
            if(thing===gniht){
                this.setState({palindrome:' True'})
            } else {this.setState({palindrome:' False'})}
        }
        render(){
            return(
                <div className='puzzleBox filterStringPB'>
                    <h4>Palindrome</h4>
                    <input 
                        className='inputLine'
                        onChange={(e)=>this.handleChange(e.target.value)}
                    ></input>
                    <button 
                        className='confirmationButton'
                        onClick={()=>this.putMyThingDownFlipItAndReverseIt(this.state.userInput)}    
                    >Check</button>
                    <span className='resultsBox'>Palindrome:{this.state.palindrome}</span>
                </div>
            )
        }
    }

export default Palindrome;