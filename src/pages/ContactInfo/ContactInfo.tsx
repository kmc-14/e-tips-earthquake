import React, { Component } from 'react';
import {
    IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonAvatar, IonLabel, IonList, IonMenuToggle, IonIcon
} from '@ionic/react';
import Statics from '../../common/Statics';
import Home from '../Home/Home';
import './ContactInfo.css';
import { call, mail } from 'ionicons/icons';


interface MyState { contacts: any };

class ContactInfo extends Component<{}, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {
            contacts: [
                {
                    firstName: "Juan",
                    lastName: "Dela Cruz",
                    numbers: ["+63 9156705473"],
                    emails: ["juan.dela.cruz@gmail.com"]
                }
            ]
        };
    }



    render() {
        return (
            <div>
                <IonContent scrollEvents={true} className="content">
                    {
                        this.state.contacts.map((contact: any, key: number) => (

                            <IonCard>

                                <IonCardHeader className="contact-card">
                                    <IonCardSubtitle>{contact.lastName}</IonCardSubtitle>
                                    <IonCardTitle>{contact.firstName}</IonCardTitle>
                                    <IonAvatar className="contact-avatar">
                                        <img src="https://tinyurl.com/uzrrje7" />
                                    </IonAvatar>
                                </IonCardHeader>

                                <IonCardContent>
                                    <IonList>
                                        {
                                            contact.numbers.map((number: number, key: number) => (
                                                <IonItem key={key}>
                                                    <IonIcon icon={call}></IonIcon>
                                                    <IonLabel className="ion-padding">{number}</IonLabel>
                                                </IonItem>
                                            ))
                                        }
                                        {
                                            contact.emails.map((email: number, key: number) => (
                                                <IonItem key={key}>
                                                    <IonIcon icon={mail}></IonIcon>
                                                    <IonLabel className="ion-padding">{email}</IonLabel>
                                                </IonItem>
                                            ))
                                        }



                                    </IonList>
                                </IonCardContent>
                            </IonCard>
                        ))
                    }

                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <div>
                                Keep close to Nature's heart... and break clear away, once in awhile,
                                and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </div>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <div>
                                Keep close to Nature's heart... and break clear away, once in awhile,
                                and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </div>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <div>
                                Keep close to Nature's heart... and break clear away, once in awhile,
                                and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </div>
                        </IonCardContent>
                    </IonCard>
                    <IonCard>
                        <IonCardHeader>
                            <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
                            <IonCardTitle>Card Title</IonCardTitle>
                        </IonCardHeader>

                        <IonCardContent>
                            <div>
                                Keep close to Nature's heart... and break clear away, once in awhile,
                                and climb a mountain or spend a week in the woods. Wash your spirit clean.
                        </div>
                        </IonCardContent>
                    </IonCard>
                </IonContent>
            </div>
        )
    }
}

export default ContactInfo;
