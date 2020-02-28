import React, { Component } from 'react';
import {
    IonContent,
    IonLabel,
    IonIcon,
    IonTabs,
    IonTabBar,
    IonTabButton,
    IonRouterOutlet,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    IonCardContent,
    IonList,
    IonItem
} from '@ionic/react';
import './ContactInfo.scss';
import { call, mail, medical } from 'ionicons/icons';
import avatar from '../../assets/avatar/avatar 1.png';
import { capitalize } from '../../common/helpers/textHelper';
import { Redirect, Route } from 'react-router-dom';

import { IonReactRouter } from '@ionic/react-router';

interface MyState { contacts: any };

class ContactInfo extends Component<{}, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {
            contacts:
            {
                relatives: [
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "relative"
                    },
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "relative"
                    },
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "relative"
                    },
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "relative"
                    },
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "relative"
                    }
                ],
                government: [
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "government"
                    },
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "government"
                    },
                    {
                        firstName: "Juan",
                        lastName: "Dela Cruz",
                        numbers: ["+63 9156705473"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "government"
                    }
                ],
                hospitals: [
                    {
                        firstName: "San Lazaro Hospital",
                        lastName: "Tayuman",
                        numbers: ["+63 9156705473", "02 1922 230"],
                        emails: ["juan.dela.cruz@gmail.com"],
                        type: "hospital"
                    }
                ]
            }
        };
    }

    getContactTypes = () => {
        return Object.keys(this.state.contacts);
    }

    render() {
        return (
            <div className="contanct-info">
                <IonContent scrollEvents={true} className="content">
                    <IonReactRouter>
                        <IonTabs>
                            <IonRouterOutlet>
                                <IonContent>
                                    {
                                        this.getContactTypes().map((type, key) => (
                                            <Route key={key} exact path={`/home/0/tab/${type}`}
                                                component={() => <ContactInfoTab contacts={this.state.contacts} type={type} />}
                                            />
                                        ))
                                    }
                                    <Route exact path="/home/0" component={() => <Redirect to={`/home/0/tab/${this.getContactTypes()[0]}`} />} />
                                </IonContent>
                            </IonRouterOutlet>
                            <IonTabBar slot="bottom">
                                {
                                    this.getContactTypes().map((type, key) => (
                                        <IonTabButton key={key} tab={`tab${key}`} href={`/home/0/tab/${type}`}>
                                            <IonLabel>{capitalize(type, "all")}</IonLabel>
                                        </IonTabButton>
                                    ))
                                }
                            </IonTabBar>
                        </IonTabs>
                    </IonReactRouter>
                </IonContent>
            </div>
        )
    }
}

export default ContactInfo;

const ContactInfoTab = (props: any) => {
    const { contacts, type } = props;

    return contacts[type].map((contact: any, key: number) => (
        <IonCard key={key}>
            <IonCardHeader className="contact-card">
                <IonCardSubtitle>{contact.lastName}</IonCardSubtitle>
                <IonCardTitle>{contact.firstName}</IonCardTitle>
                <IonAvatar className="contact-avatar">
                    <img src={avatar} alt="" />
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