import React, { Component, useState } from 'react';
import { call, mail, logoFacebook, logoTwitter, add, arrowBack, save } from 'ionicons/icons';
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
    IonSegmentButton,
    IonFab,
    IonFabButton,
    IonModal,
    IonHeader,
    IonButtons,
    IonTitle,
    IonButton,
    IonInput,
    IonListHeader
} from '@ionic/react';


import avatar from '../../assets/avatar/avatar 1.png';
import hospital from '../../assets/icon-pics/hospital.png';

import './ContactInfo.scss';

interface MyState {
    contacts: any,
    selectedSegment: any,
    showAddContactModal: boolean
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
                        firstName: "PHIVOLCS",
                        lastName: "U.P. Diliman, Quezon City",
                        numbers: ["+632 426-1468"],
                        emails: [],
                        fb: ["www.facebook.com/PHIVOLCS"],
                        twitter: [],
                        type: "government"
                    },
                    {
                        firstName: "NDRRMC",
                        lastName: "Camp Aguinaldo, Quezon City",
                        numbers: ["(02) 911-5061 to 65"],
                        emails: [],
                        fb: ["www.facebook.com/NDRRMC"],
                        twitter: ["@NDRRMC_OpCen"],
                        type: "government"
                    },
                    {
                        firstName: "Philippine Red Cross",
                        lastName: "Victoria St, Intramuros, Manila",
                        numbers: ["(02) 790-2300"],
                        emails: [],
                        fb: ["www.facebook.com/phredcross"],
                        twitter: ["@philredcross"],
                        type: "government"
                    },
                    {
                        firstName: "Bureau of Fire Protection",
                        lastName: "Makat Bpp Central, Ayala Ave, San Antonio, Makati",
                        numbers: ["(02) 426-0236", "(02) 426-0219"],
                        emails: [],
                        fb: ["www.facebook.com/bureauoffireprotection911"],
                        twitter: [],
                        type: "government"
                    },
                    {
                        firstName: "Philippine National Police",
                        lastName: "Quezon City",
                        numbers: ["117", "911", "(02) 723-0401"],
                        emails: [],
                        fb: ["www.facebook.com/pnp.pio1"],
                        twitter: ["@pnppio"],
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
                    },
                    {
                        firstName: "Philippine General Hospital",
                        lastName: "Taft Ave, Ermita",
                        numbers: ["(02) 8554 8400"],
                        emails: [],
                        type: "hospital"
                    },
                    {
                        firstName: "Manila Doctor's Hospital",
                        lastName: "UN Ave, Ermita",
                        numbers: ["(02) 8558 0888"],
                        emails: [],
                        type: "hospital"
                    },
                    {
                        firstName: "Caloocan City Medical Center",
                        lastName: "450 A Mabini St., Poblacion",
                        numbers: ["(02) 8288 7077"],
                        emails: [],
                        type: "hospital"
                    },
                    {
                        firstName: "Valenzuela City Gen Hospital",
                        lastName: "Padrigal St, Valenzuela",
                        numbers: ["(02) 8294 6711"],
                        emails: [],
                        type: "hospital"
                    },
                    {
                        firstName: "Navotas City Hospital",
                        lastName: "M. Naval St, Navotas",
                        numbers: ["(02) 8374 0135"],
                        emails: [],
                        type: "hospital"
                    },
                    {
                        firstName: "Malabon City Hospital",
                        lastName: "Longos, Malabon",
                        numbers: ["(02) 8285 2898"],
                        emails: [],
                        type: "hospital"
                    }
                ]
            },
            selectedSegment: this.CONTACT_TYPES[0],
            showAddContactModal: false
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

    handleAddContact = () => {
        this.setState({ showAddContactModal: true })
    }

    handleSaveContact = (field: any) => {
        let contacts = Object.assign({}, this.state.contacts, {
            relatives: [...this.state.contacts.relatives, field]
        });

        this.setState({
            contacts: contacts,
            showAddContactModal: false
        })
    }

    render() {
        const { selectedSegment, showAddContactModal } = this.state;
        return (
            <div className="contanct-info">
                <IonToolbar>
                    <IonSegment onIonChange={event => { this.handleSegmentSelect(event) }}>
                        {
                            this.getContactTypes().map((type, key) => (
                                <IonSegmentButton key={key} value={type} checked={selectedSegment === type}>
                                    <IonLabel>{type === "relatives" ? "Contact Persons" : type}</IonLabel>
                                </IonSegmentButton>
                            ))
                        }
                    </IonSegment>
                </IonToolbar>

                <IonContent id="contanct-info-ion-content" scrollEvents={true} className="content with-segment">
                    {this.getSegmentContent()}

                    {
                        selectedSegment === this.CONTACT_TYPES[0] &&
                        <IonFab vertical="bottom" horizontal="end" slot="fixed">
                            <IonFabButton onClick={this.handleAddContact}>
                                <IonIcon icon={add} />
                            </IonFabButton>
                        </IonFab>
                    }
                </IonContent>

                <IonModal
                    isOpen={showAddContactModal}
                    cssClass='add-contact-modal'
                >
                    <AddContactModalContent
                        onClose={() => this.setState({ showAddContactModal: false })}
                        onSave={(field: any) => { this.handleSaveContact(field) }}
                    />
                </IonModal>
            </div>
        )
    }
}

export default ContactInfo;

//#region ContactInfoTab

const ContactInfoTab = (props: any) => {
    const { contacts, type } = props;

    return contacts[type].map((contact: any, key: number) => (
        <IonCard key={key}>
            <IonCardHeader className="contact-card">
                <IonCardSubtitle>{contact.lastName}</IonCardSubtitle>
                <IonCardTitle>{contact.firstName}</IonCardTitle>
                <IonAvatar className="contact-avatar">
                    <img src={type === "hospitals" ? hospital : avatar} alt="" />
                </IonAvatar>
            </IonCardHeader>

            <IonCardContent>
                <IonList>
                    {
                        contact.numbers.map((number: number, key: number) => (
                            <IonItem key={key} className="no-padding">
                                <IonIcon icon={call}></IonIcon>
                                <IonLabel className="ion-padding">{number}</IonLabel>
                            </IonItem>
                        ))
                    }
                    {
                        contact.emails.map((email: number, key: number) => (
                            <IonItem key={key} className="no-padding">
                                <IonIcon icon={mail}></IonIcon>
                                <IonLabel className="ion-padding">{email}</IonLabel>
                            </IonItem>
                        ))
                    }
                    {
                        contact.fb ? contact.fb.map((email: number, key: number) => (
                            <IonItem key={key} className="no-padding">
                                <IonIcon icon={logoFacebook}></IonIcon>
                                <IonLabel className="ion-padding">{email}</IonLabel>
                            </IonItem>
                        )) : ""
                    }
                    {
                        contact.twitter ? contact.twitter.map((email: number, key: number) => (
                            <IonItem key={key} className="no-padding">
                                <IonIcon icon={logoTwitter}></IonIcon>
                                <IonLabel className="ion-padding">{email}</IonLabel>
                            </IonItem>
                        )) : ""
                    }
                </IonList>
            </IonCardContent>
        </IonCard>
    ))
}

//#endregion

//#region 

const AddContactModalContent = (props: any) => {
    const [field, setField]: any = useState({
        firstName: "",
        lastName: "",
        numbers: [],
        emails: [],
        type: "relative"
    })

    const handleFieldChange = (fieldName: string, value: any) => {
        setField({ ...field, [fieldName]: value })
    }

    const handleAddArrayField = (fieldName: string) => {
        let fieldItems: string[] = [...field[fieldName]]

        if (!fieldItems.length || fieldItems[fieldItems.length - 1]) {
            fieldItems.push("")
            handleFieldChange(fieldName, fieldItems)
        }
    }

    const handleArrayFieldChange = (fieldName: string, value: string, index: number) => {
        let fieldItems: string[] = Object.assign(field[fieldName], {
            [index]: value
        })

        handleFieldChange(fieldName, fieldItems)
    }

    const handleSave = () => {
        if (isValid()) {
            props.onSave(field)
        }
    }

    const isValid = () => {
        return field.firstName && field.lastName && field.numbers.length && field.numbers[field.numbers.length - 1]
    }

    return (
        <div className="add-contact-modal-content">
            <IonHeader>
                <IonToolbar>
                    <IonButtons slot="start" >
                        <IonButton onClick={props.onClose} >
                            <IonIcon slot="icon-only" icon={arrowBack} />
                        </IonButton>
                    </IonButtons>
                    <IonTitle>Add Contact</IonTitle>
                </IonToolbar>
            </IonHeader>

            <IonContent>
                <IonItem class="margin-20-0 medium-font">
                    <IonLabel position="floating">Last Name</IonLabel>
                    <IonInput
                        type="text"
                        size={255}
                        onIonChange={(event: any) => handleFieldChange("lastName", event.target.value)}
                        value={field.lastName}
                    />
                </IonItem>

                <IonItem class="margin-20-0 medium-font">
                    <IonLabel position="floating">First Name</IonLabel>
                    <IonInput
                        type="text"
                        size={255}
                        onIonChange={(event: any) => handleFieldChange("firstName", event.target.value)}
                        value={field.firstName}
                    />
                </IonItem>

                <IonListHeader>
                    <IonLabel>Phone Numbers</IonLabel>
                </IonListHeader>
                {
                    field.numbers.map((number: string, index: number) => (
                        <IonItem class="medium-font" style={{ marginBottom: '10px' }}>
                            <IonInput
                                type="text"
                                size={13}
                                onIonChange={(event: any) =>
                                    handleArrayFieldChange("numbers", event.target.value, index)
                                }
                                value={number}
                                placeholder="Input phone number here"
                            />
                        </IonItem>
                    ))

                }
                <IonButton onClick={() => handleAddArrayField("numbers")} size="small" shape="round">
                    Add number
                    <IonIcon slot="icon-only" icon={add} />
                </IonButton>

                <IonListHeader>
                    <IonLabel>Emails</IonLabel>
                </IonListHeader>
                {
                    field.emails.map((email: string, index: number) => (
                        <IonItem class="medium-font" style={{ marginBottom: '10px' }}>
                            <IonInput
                                type="email"
                                size={255}
                                onIonChange={(event: any) => handleArrayFieldChange("emails", event.target.value, index)}
                                value={email}
                                placeholder="Input email here"
                            />
                        </IonItem>
                    ))

                }
                <IonButton onClick={() => handleAddArrayField("emails")} size="small" shape="round">
                    Add email
                    <IonIcon slot="icon-only" icon={add} />
                </IonButton>

                <IonButton
                    onClick={() => handleSave()}
                    style={{ float: 'right', margin: '50px 10px 10px 10px' }}
                    disabled={!isValid()}
                >
                    Save
                    <IonIcon slot="end" icon={save} />
                </IonButton>
            </IonContent>
        </div>

    )
}
//#endregion