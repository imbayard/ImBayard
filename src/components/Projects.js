import React, { Component } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import ContextCheckLogo from './1truecontext.png';

export default class Projects extends Component {
    render() {
        return(
            <div className='header'>
                <h1 className='project-title'>Projects</h1>
                <span className='project-card-wrap'>
                    <Card style={{ width: '18rem', padding: '5px'}}>
                        <Card.Img variant="top" src={ContextCheckLogo} />
                        <Card.Body>
                            <Card.Title>ContextCheck</Card.Title>
                            <Card.Text>
                                My year-long senior design project features a bias detecting algorithm wrapped in a React / Flask application.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', padding: '5px'}}>
                        <Card.Img variant="top" src={ContextCheckLogo} />
                        <Card.Body>
                            <Card.Title>ContextCheck</Card.Title>
                            <Card.Text>
                                My year-long senior design project features a bias detecting algorithm wrapped in a React / Flask application.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card style={{ width: '18rem', padding: '5px'}}>
                        <Card.Img variant="top" src={ContextCheckLogo} />
                        <Card.Body>
                            <Card.Title>ContextCheck</Card.Title>
                            <Card.Text>
                                My year-long senior design project features a bias detecting algorithm wrapped in a React / Flask application.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </span>
            </div>
        )
    }
}