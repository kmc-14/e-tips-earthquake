import React, { Component } from 'react';
import {
    IonContent,
    IonCard,
    IonGrid,
    IonRow,
    IonCol,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonIcon
} from '@ionic/react';

import Statics from '../../common/Statics';
import alert from '../../assets/icon-svg/alert.svg'

import "./FirstAid.scss";

interface MyState {
};

class FirstAid extends Component<{}, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="first-aid">
                <IonContent scrollEvents={true} className="content">
                    <IonGrid className="margin-20">
                        <IonRow>
                            <IonCol size="12" className="centered">
                                <IonIcon class="xx-large-font encircle" icon={alert} />
                            </IonCol>
                            <IonCol className="centered">
                                <div className="medium-font">
                                    Make sure to prepare these essential items before an event of a disaster.
                                    Place them in an area you can easily access.
                                </div>
                            </IonCol>
                        </IonRow>
                    </IonGrid>

                    <IonGrid>
                        <IonRow>
                            {
                                Statics.firstAid.mustHaves.map((item, index) => (
                                    <React.Fragment key={index}>
                                        <IonCol size="6">
                                            <IonCard key={index} className="first-aid-cards" >
                                                <div className="first-aid-img">
                                                    <img src={item.img} alt="" />
                                                </div>
                                                <IonCardHeader>
                                                    <IonCardTitle>{item.label}</IonCardTitle>
                                                    <IonCardSubtitle>{item.description}</IonCardSubtitle>
                                                </IonCardHeader>
                                            </IonCard>
                                        </IonCol>
                                        {index % 1 === 1 ? <IonCol size="12"></IonCol> : ""}
                                    </React.Fragment>
                                ))
                            }
                        </IonRow>
                    </IonGrid>
                </IonContent>
            </div >
        )
    }
}

export default FirstAid;