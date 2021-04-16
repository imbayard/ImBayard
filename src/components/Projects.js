import React, { Component } from 'react';
import ContextCheckLogo from './1truecontext.png';

export default class Projects extends Component {
    render() {
        return(
            <div className='header'>
                <h1 className='project-title'>Projects</h1>
                <span className='project-card-wrap'>
                    <span className='project'>
                        <img src={ContextCheckLogo} alt='ContextCheck' width='250'/>
                        <h3>ContextCheck</h3>
                        <p>Text about ContextCheck</p>
                    </span>
                </span>
            </div>
        )
    }
}