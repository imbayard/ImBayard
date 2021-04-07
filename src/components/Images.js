import React, { Component } from 'react';
import MaskedBayard from './IMG_1539.JPG';

export default class Images extends Component {
    render() {
        return(
            <div className='header'>
                <h1 className='title'>Hey there, I'm Bayard.</h1>
                <img 
                    src={MaskedBayard}
                    style={{margin:'auto', marginTop: '5vh', borderRadius:'80px', width:'25vw'}}
                />
            </div>
        )
    }
}