import React, { Component } from 'react';
import {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
} from '@ionic/react';
import Statics from '../../common/Statics';

interface MyState { };

class GetInformed extends Component<{}, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div>
                <IonContent scrollEvents={true} className="content">
                    {
                        Statics.getInformed.infoCards.map((infoCard: any, key: any) => (
                            <IonCard key={key} routerLink={`/info-card/${infoCard.id}`}>
                                <img src={infoCard.image} alt="" />

                                <IonCardHeader>
                                    <IonCardTitle>{infoCard.title}</IonCardTitle>
                                    <IonCardSubtitle>{infoCard.subtitle}</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        ))
                    }
                </IonContent>
            </div>
        )
    }
}

export default GetInformed;
