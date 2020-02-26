import React from 'react';
import { call, notifications, help, medkit, people, home, paper } from 'ionicons/icons'
import ContactInfo from '../pages/ContactInfo/ContactInfo';
import GetInformed from '../pages/GetInformed/GetInformed';
import planning from '../assets/header-pics/planning.png';
import { IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';

const Statics = {
    home: {
        menuId: "app-menu",
        menuItems: [
            {
                icon: call,
                label: "Contact Info",
                component: <ContactInfo />
            },
            {
                icon: notifications,
                label: "Get Informed",
                component: <GetInformed />
            },
            {
                icon: help,
                label: "Ask a Question",
                component: <div>ask question</div>
            },
            {
                icon: medkit,
                label: "First Aid",
                component: <div>first aid</div>
            },
            {
                icon: people,
                label: "About Us",
                component: <div>About us</div>
            }
        ]
    },
    getInformed: {
        infoCards: [
            {
                id: 0,
                title: "What to do before an earthquake?",
                subtitle: "Preparation",
                image: planning,
                content: (
                    <div>
                        <img src={planning} alt="" />
                        <div className="content-title x-large-font">What to do <strong>before</strong> an earthquake?</div>
                        <div className="content-paragraph medium-font">
                            <IonGrid>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={paper} />
                                    </IonCol>
                                    <IonCol>
                                        <span>Make an emergency plan</span>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={home} />
                                    </IonCol>
                                    <IonCol>
                                        <span>Set up a meeting place for your family</span>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={medkit} />
                                    </IonCol>
                                    <IonCol>
                                        <span>Make an emergency stockpile and first-aid kit</span>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </div>
                )
            }
        ]
    }
}

export default Statics;