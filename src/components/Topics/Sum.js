import React, {Component} from 'react';

    class Sum extends Component{
        constructor(){
            super()

            this.state={
                number1: 0,
                number2: 0,
                sum: null
            }
        }

        handleChange1(val){
            this.setState({number1: parseInt(val)})
        }
        handleChange2(val){
            this.setState({number2: parseInt(val)})
        }

        total(number1,number2){
            let add = number1+number2
            this.setState({sum: add})
        }
        render(){
            return(
                <div className='puzzleBox SumPB'>
                    <h4>Sum</h4>
                    <input 
                        className='inputLine'
                        onChange={(e)=>this.handleChange1(e.target.value)}
                    ></input>
                    <input 
                        className='inputLine'
                        onChange={(e)=>this.handleChange2(e.target.value)}
                    ></input>
                    <button 
                        className='confirmationButton'
                        onClick={()=>this.total(this.state.number1, this.state.number2)}
                    >Add</button>
                    <span className='resultsBox'>
                        Sum:{JSON.stringify(this.state.sum)}
                    </span>
                </div>
            )
        }
    }

export default Sum;