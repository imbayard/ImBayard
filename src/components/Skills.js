import React, { Component } from 'react';
import Pll from 'react-pll';

export default class Skills extends Component {
    render() {
        return(
            <div className='summary'>
                <span className='skills-wrapper'>
                    <Pll
                        alt="Python Logo"
                        height={70}
                        language="python"
                        style={{marginRight:'50px'}}
                    />
                    <Pll
                        alt="C++ Logo"
                        height={70}
                        language="cpp"
                        style={{marginRight:'50px'}}
                    />
                    <Pll
                        alt="C Logo"
                        height={70}
                        language="c"
                        style={{marginRight:'50px'}}
                    />
                    <Pll
                        alt="JS Logo"
                        height={70}
                        language="javascript"
                        style={{marginRight:'50px'}}
                    />
                    <Pll
                        alt="Java Logo"
                        height={70}
                        language="java"
                        style={{marginRight:'50px'}}
                    />
                    <Pll
                        alt="HTML Logo"
                        height={70}
                        language="html"
                        style={{marginRight:'50px'}}
                    />
                </span>
            </div>
        )
    }
}