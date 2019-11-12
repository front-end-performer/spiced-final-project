import React, { Component } from 'react';
import { Card, CardBody, Col } from 'reactstrap';

class TimeDate extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0,
            date: '',
            time: ''
        };
    }

    componentDidMount() {
        let tempDate = new Date();
        let date = tempDate.getDate() + '-' + (tempDate.getMonth() + 1) + '-' + tempDate.getFullYear();
        let time = tempDate.getHours() + ':' + tempDate.getMinutes();
        this.setState({
            date: date,
            time: time
        });
    }

    render() {
        return (
            <Col md={12} xl={2} lg={2} xs={12}>
                <Card>
                    <CardBody className="dashboard__card-widget">
                        <div className="card__title">
                            <h5 className="bold-text">Today's Date</h5>
                        </div>
                        <div className="dashboard__total">
                            <p className='dashboard__total-stat'>{this.state.date}</p>
                            <p>{this.state.time}</p>
                        </div>
                    </CardBody>
                </Card>
            </Col>
        );
    }
}

export default TimeDate;
