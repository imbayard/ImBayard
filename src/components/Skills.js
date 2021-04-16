import React, { Component } from 'react';
import { Icon, InlineIcon} from '@iconify/react';
import firefoxIcon from '@iconify/icons-logos/firefox';
import html5 from '@iconify/icons-logos/html-5';
import js from '@iconify/icons-logos/javascript';
import python from '@iconify/icons-logos/python';
import cpp from '@iconify/icons-logos/c-plusplus';
import c from '@iconify/icons-logos/c';
import java from '@iconify/icons-logos/java';

export default class Skills extends Component {
    render() {
        return(
                <span className='skills-wrapper'>
                    <span className='skill'>
                        <p className='language'>HTML5</p>
                        <span className='skill-logo'>
                            <InlineIcon icon={html5} width='50px' inline='true'/>
                        </span>
                        <p className='skill-level'>Fluent</p>
                    </span>
                    <span className='skill'>
                        <p className='language'>JavaScript</p>
                        <span className='skill-logo'>
                            <InlineIcon icon={js} width='50px' inline='true'/>
                        </span>
                        <p className='skill-level'>Advanced</p>
                    </span>
                    <span className='skill'>
                        <p className='language'>Python</p>
                        <span className='skill-logo'>
                            <InlineIcon icon={python} width='50px' inline='true'/>
                        </span>
                        <p className='skill-level'>Intermediate</p>
                    </span>
                    <span className='skill'>
                        <p className='language'>C++</p>
                        <span className='skill-logo'>
                            <InlineIcon icon={cpp} width='50px' inline='true'/>
                        </span>
                        <p className='skill-level'>Intermediate</p>
                    </span>
                    <span className='skill'>
                        <p className='language'>C</p>
                        <span className='skill-logo'>
                            <InlineIcon icon={c} width='50px' inline='true'/>
                        </span>
                        <p className='skill-level'>Intermediate</p>
                    </span>
                    <span className='skill'>
                        <p className='language'>Java</p>
                        <span className='skill-logo'>
                            <InlineIcon icon={java} width='50px' inline='true'/>
                        </span>
                        <p className='skill-level'>Intermediate</p>
                    </span>
                </span>
        )
    }
}