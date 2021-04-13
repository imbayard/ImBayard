import React, { Component } from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import CAIcon from './timeline_photos/CA.png';
import BUEng from './timeline_photos/BUENG.png';
import BBn from './timeline_photos/BBN.png';
import { IoIosBriefcase, IoIosSchool } from "react-icons/io";

const CA = <img style={{height: '15vh', marginTop: '5px'}} src={CAIcon} alt='Curriculum Associates Logo' />
const BU = <img style={{height: '15vh', marginTop: '5px'}} src={BUEng} alt='Boston U Logo' />
const BBN = <img style={{height: '15vh', marginTop: '5px'}} src={BBn} alt='BB&N Logo' />

export default class Timeline extends Component {
    render() {
        return(
            <VerticalTimeline>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: 'black' }}
                    date="2020 - 2021"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<IoIosBriefcase />}
                >
                    <h3 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-title">Co-op Full Stack Engineer</h3>
                    <h4 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-subtitle">Curriculum Associates</h4>
                    {CA}
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Skills Used: </strong>JSON-RPC APIs, Puppeteer, React, Redux, Agile</p>
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Notable: </strong>Hackathon First Place - The Versioner</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: 'black'}}
                    date="2018 - 2020"
                    iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    icon={<IoIosBriefcase />}
                >
                    <h3 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-title">Teaching Assistant</h3>
                    <h4 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-subtitle">Boston University</h4>
                    {BU}
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Skills Used: </strong>Teaching, matlab, C</p>
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Notable: </strong>Led weekly discussion sections and held office hours</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: 'black' }}
                    date="2017 - 2021"
                    iconStyle={{ background: 'green', color: '#fff' }}
                    icon={<IoIosSchool />}
                >
                    <h3 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-title">B.S. Computer Engineering</h3>
                    <h4 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-subtitle">Boston University</h4>
                    {BU}
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Relevant Courses: </strong>Machine Learning, Web Development, Operating Systems, Cyber Security, Networking, Strategy and Innovation</p>
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Languages: </strong>C, C++, Matlab, JavaScript, Python, Swift</p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: 'black' }}
                    date="2013 - 2017"
                    iconStyle={{ background: 'green', color: '#fff' }}
                    icon={<IoIosSchool />}
                >
                    <h3 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-title">High School</h3>
                    <h4 style={{backgroundColor: 'rgb(33, 150, 243)', color: '#fff'}} className="vertical-timeline-element-subtitle">Buckingham Browne and Nichols</h4>
                    {BBN}
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Activities: </strong>Varsity football, Varsity wrestling, pottery, peer-counseling</p>
                    <p style={{color: 'rgb(33, 150, 243)'}}><strong>Awards: </strong>Outstanding Profile (writing), Barrett-Hoyt (leadership, kindness)</p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        )
    }
}