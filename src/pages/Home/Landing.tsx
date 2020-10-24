import React, { Component } from 'react';
import { RouteComponentProps, RouteProps, withRouter } from 'react-router';
import {
    IonIcon,
    IonButton
} from '@ionic/react';
import arrowDownCircleOutline from '../../assets/icon-svg/arrow-down-circle-outline.svg';
import arrowForwardCircleOutline from '../../assets/icon-svg/arrow-forward-circle-outline.svg';

import LandingLogo from '../../assets/icon-svg/LandingLogo.svg'

import './Landing.scss'

interface IRouteProps extends RouteProps {
    match: any
}

interface MyState { isPreludeShown: boolean };

class Landing extends Component<IRouteProps & RouteComponentProps, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {
            isPreludeShown: false
        }
    }

    handleShowMore = () => {
        this.setState({
            isPreludeShown: true
        })
    }

    handleProceed = () => {
        this.props.history.push("/home/0")
    }

    render() {
        return (
            <div className="landing">
                <IonIcon className="landing-logo" icon={LandingLogo} />

                <div className="landing-title">e-tips: Earthquake</div>
                <IonIcon className="xx-large-font proceed-btn" icon={arrowDownCircleOutline}
                    onClick={this.handleShowMore}
                />

                <div className={`app-prelude ${this.state.isPreludeShown ? 'fade-in' : ''}`}>
                    <p>
                        Earthquake preparedness is a set of measures taken at the individual, organisational and
                        societal level to minimise the effects of an earthquake.
                    </p>

                    <p>
                        This app will help you to learn more about preparedness and awareness on earthquake disaster.
                        To give an updated information on the said disaster.
                        To assist everyone in terms of disaster location, evacuation places and agencies to contact.
                    </p>

                    <IonButton fill="clear" style={{ float: 'right' }}
                        onClick={this.handleProceed}
                    >
                        Proceed
                        <IonIcon slot="end" icon={arrowForwardCircleOutline} />
                    </IonButton>
                </div>
            </div>
        )
    }
}

export default withRouter(Landing);
