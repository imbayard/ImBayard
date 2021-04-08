import React, { Component } from 'react';
import MaskedBayard from './IMG_1539.JPG';

export default class Images extends Component {
    render() {
        return(
            <div className='header'>
                <h1 className='title'>Bayard Eton</h1>
                <img 
                    className='propic'
                    src={MaskedBayard}
                />
                <p className='caption'>Full-Stack Engineer</p>
            </div>
        )
    }
}