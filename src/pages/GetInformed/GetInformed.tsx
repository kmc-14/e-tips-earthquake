import React, { Component } from 'react';
import {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon
} from '@ionic/react';
import Statics from '../../common/Statics';
import location from '../../assets/icon-svg/location.svg';
import "./GetInformed.scss";

interface MyState { };

class GetInformed extends Component<{}, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className="get-informed">
                <IonContent scrollEvents={true} className="content">
                    {
                        Statics.getInformed.infoCards.map((infoCard: any, key: any) => (
                            <IonCard key={key} routerLink={`/info-card/${infoCard.id}`}>
                                <div className="info-card-img">
                                    <img src={infoCard.image} alt="" />
                                </div>

                                <IonCardHeader>
                                    <IonCardTitle>{infoCard.title}</IonCardTitle>
                                    <IonCardSubtitle>{infoCard.subtitle}</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCard>
                        ))
                    }

                    {
                        Statics.getInformed.programCards.map((program: any, key: any) => (
                            <IonCard key={key}>
                                <div className="info-card-img">
                                    <img src={program.image} alt="" />
                                </div>

                                <IonGrid>
                                    <IonRow >
                                        <IonCol>
                                            <IonCardHeader>
                                                <IonCardSubtitle>{program.schedule}</IonCardSubtitle>
                                                <IonCardTitle>{program.title}</IonCardTitle>
                                                <IonCardSubtitle>{program.location}</IonCardSubtitle>
                                            </IonCardHeader>
                                        </IonCol>
                                        <IonCol className="icon-col" size="3">
                                            <IonIcon class="xx-large-font" icon={location} />
                                        </IonCol>
                                    </IonRow>
                                </IonGrid>
                            </IonCard>
                        ))
                    }
                </IonContent>
            </div>
        )
    }
}

export default GetInformed;
