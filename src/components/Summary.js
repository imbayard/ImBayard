import React, { Component } from 'react';

export default class Summary extends Component {
    render() {
        return(
            <div className='summary'>
                <h2 className='abt-me'>About Me</h2>
                <span className='abt-me-p-wrap'>
                    <p className='abt-me-p'>
                        This is a paragraph about me.
                    </p>
                    <p className='abt-me-p'>
                        This is another paragraph about me.
                    </p>
                </span>
            </div>
        )
    }
}