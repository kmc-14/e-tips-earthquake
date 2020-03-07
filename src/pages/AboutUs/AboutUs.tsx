import React, { Component } from 'react';
import {
    IonContent, IonGrid, IonRow, IonCol, IonIcon
} from '@ionic/react';
import Statics from '../../common/Statics';
import { RouteProps } from 'react-router';
import './AboutUs.scss';
import glassesOutline from '../../assets/icon-svg/glasses-outline.svg';
import bulbOutline from '../../assets/icon-svg/bulb-outline.svg';

interface IRouteProps extends RouteProps {
    match: any
}

interface MyState {

};

class AboutUs extends Component<IRouteProps, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="about-us">
                <IonContent scrollEvents={true} className="content">
                    <IonGrid className="margin-20">
                        <IonRow className="margin-20-0">
                            <IonCol size="12" className="centered">
                                <IonIcon class="xx-large-font encircle" icon={glassesOutline} />
                            </IonCol>
                            <IonCol className="centered">
                                <div className="xx-large-font">
                                    VISION
                               </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="margin-20">
                            <div className="line-height-2 medium-font justified">
                                To have effective plans, necessary resources through the fastest and efficient way of disaster
                                response. To maintain and improve the capability to successfully work together to mitigate
                                against, prepare for, respond to, and cover from all hazards related emergencies and disasters.
                            </div>
                        </IonRow>

                        <IonRow className="margin-20-0 mission-row">
                            <IonCol size="12" className="centered">
                                <IonIcon class="xx-large-font encircle" icon={bulbOutline} />
                            </IonCol>
                            <IonCol className="centered">
                                <div className="xx-large-font">
                                    MISSION
                               </div>
                            </IonCol>
                        </IonRow>
                        <IonRow className="margin-20">
                            <div className="line-height-2 medium-font justified">
                                The "Development of E-Tips: Mobile Application for Preparedness During Earthquake" will ensure
                                through the coordination with all the personnel (John Christopher M. Co and Joe Mari E. Diaz)
                                that the system and team itself are prepared to respond to and recover from all earthquake
                                emergencies. This system will provide support to reduce the loss of life through an all-hazards
                                emergency provided program of mitigation, preparedness, and response throughout the "Development
                                of E-Tips: Mobile Application for Preparedness During Earthquake."
                            </div>
                        </IonRow>

                    </IonGrid>
                </IonContent>
            </div>
        )
    }
}

export default AboutUs;
