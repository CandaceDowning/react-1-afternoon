import React, {Component} from 'react';
import EvenAndOdd from '../Topics/EvenAndOdd';
import FilterObjects from '../Topics/FilterObject';
import FilterString from '../Topics/FilterString';
import Palindrome from '../Topics/Palindrome';
import Sum from '../Topics/Sum';


    class TopicBrowser extends Component{
        constructor(){
            super()
        }
        render(){
            return (
                <div>
                    <div>
                        <EvenAndOdd/>
                        <FilterObjects/>
                        <FilterString/>
                        <Palindrome/>
                        <Sum/>
                    </div>
                </div>
                
            )
        }
    }



export default TopicBrowser