import React, { Component } from 'react';
import {
    IonContent,
    IonLabel,
    IonIcon,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonAvatar,
    IonCardContent,
    IonList,
    IonItem,
    IonToolbar,
    IonSegment,
    IonSegmentButton
} from '@ionic/react';
import './ContactInfo.scss';
import { call, mail } from 'ionicons/icons';
import avatar from '../../assets/avatar/avatar 1.png';

interface MyState {
    contacts: any,
    selectedSegment: any
};

class ContactInfo extends Component<{}, MyState> {
    CONTACT_TYPES: any = ["relatives", "agencies", "hospitals"];
    IonContentElementRef: HTMLIonContentElement | any;

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
                agencies: [
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
            },
            selectedSegment: this.CONTACT_TYPES[0]
        };
    }

    getContactTypes = () => {
        return Object.keys(this.state.contacts);
    }

    handleSegmentSelect = (event: any) => {
        let selectedSegment = event.detail.value;

        this.setState({
            selectedSegment: selectedSegment
        });
    }

    getSegmentContent = () => {
        this.scrollIonContentToTop();

        return (<ContactInfoTab contacts={this.state.contacts} type={this.state.selectedSegment} />);
    }

    scrollIonContentToTop = () => {
        this.IonContentElementRef = document.querySelector("#contanct-info-ion-content");

        if (this.IonContentElementRef) {
            this.IonContentElementRef.scrollToTop();
        }
    }

    render() {
        const { selectedSegment } = this.state;
        return (
            <div className="contanct-info">
                <IonToolbar>
                    <IonSegment onIonChange={event => { this.handleSegmentSelect(event) }}>
                        {
                            this.getContactTypes().map((type, key) => (
                                <IonSegmentButton key={key} value={type} checked={selectedSegment === type}>
                                    <IonLabel>{type}</IonLabel>
                                </IonSegmentButton>
                            ))
                        }
                    </IonSegment>
                </IonToolbar>

                <IonContent id="contanct-info-ion-content" scrollEvents={true} className="content">
                    {this.getSegmentContent()}
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