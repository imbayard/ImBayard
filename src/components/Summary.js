import React, { Component } from 'react';
import Skills from './Skills';

export default class Summary extends Component {
    render() {
        return(
            <div className='summary'>
                <h2 className='abt-me'>About Me</h2>
                <span className='abt-me-p-wrap'>
                    <p className='abt-me-p'>
                        Bayard is graduating this May with a B.S. in Computer Engineering from Boston University. He has 1 year of experience as a full-stack software engineer.
                    </p>
                    <p className='abt-me-p'>
                        He is planning on pursuing a higher degree in the next 2-3 years and is excited to start a software company within the next 5.
                    </p>
                </span>
                <Skills />
            </div>
        )
    }
}