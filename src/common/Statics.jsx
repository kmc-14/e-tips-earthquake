import React from 'react';
import { call, notifications, help, medkit, people, home, paper, alert, hand, business } from 'ionicons/icons';
import { IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';

import ContactInfo from '../pages/ContactInfo/ContactInfo';
import GetInformed from '../pages/GetInformed/GetInformed';
import AskQuestion from '../pages/AskQuestion/AskQuestion';

import planning from '../assets/header-pics/planning.png';
import warning from '../assets/header-pics/warning.png';
import earthquake from '../assets/header-pics/earthquake.png';
import earthquakeDrill from '../assets/header-pics/earthquake-drill.png';
import duckCover from '../assets/icon-pics/duck-cover.png';

const Statics = {
    home: {
        menuId: "app-menu",
        menuItems: [
            {
                icon: call,
                label: "Contact Info",
                component: <ContactInfo />,
                hasOwnHeader: false
            },
            {
                icon: notifications,
                label: "Get Informed",
                component: <GetInformed />,
                hasOwnHeader: false
            },
            {
                icon: help,
                label: "Ask a Question",
                component: <AskQuestion />,
                hasOwnHeader: false
            },
            {
                icon: medkit,
                label: "First Aid",
                component: <div>first aid</div>,
                hasOwnHeader: false
            },
            {
                icon: people,
                label: "About Us",
                component: <div>About us</div>,
                hasOwnHeader: false
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
            },
            {
                id: 1,
                title: "What to do during an earthquake?",
                subtitle: "Calmness",
                image: warning,
                content: (
                    <div>
                        <img src={warning} alt="" />
                        <div className="content-title x-large-font">What to do <strong>during</strong> an earthquake?</div>
                        <div className="content-paragraph medium-font">
                            <IonGrid>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={alert} />
                                    </IonCol>
                                    <IonCol>
                                        <span><strong>DROP</strong> to the ground</span>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={home} />
                                    </IonCol>
                                    <IonCol>
                                        <span><strong>COVER</strong> by getting under sturdy desk or table</span>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={hand} />
                                    </IonCol>
                                    <IonCol>
                                        <span><strong>HOLD</strong> on to it until the shaking stops</span>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                            <div>
                                <p><strong>If you're outside:</strong></p>
                                <p>
                                    Find a clear area and drop to the ground. Stay there until the shaking stops,
                                    then move indoors when it's safe.
                                </p>
                            </div>
                            <div>
                                <p><strong>If you're in a car:</strong></p>
                                <p>
                                    Pull over to a clear location right away. Don't drive and stay inside until the shaking stops.
                                </p>
                            </div>
                        </div>
                    </div>
                )
            },
            {
                id: 2,
                title: "What to do after an earthquake?",
                subtitle: "Vigilance",
                image: earthquake,
                content: (
                    <div>
                        <img src={earthquake} alt="" />
                        <div className="content-title x-large-font">What to do <strong>after</strong> an earthquake?</div>
                        <div className="content-paragraph medium-font">
                            <IonGrid>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <img src={duckCover} alt="" />
                                    </IonCol>
                                    <IonCol>
                                        <span>When you feel an aftershock, DROP, COVER and HOLD!</span>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={business} />
                                    </IonCol>
                                    <IonCol>
                                        <span>Make sure buildings are safe before entering them</span>
                                    </IonCol>
                                </IonRow>
                                <IonRow className="margin-20-0">
                                    <IonCol size={3}>
                                        <IonIcon class="xx-large-font" icon={paper} />
                                    </IonCol>
                                    <IonCol>
                                        <span>Listen for news and updates on the situation</span>
                                    </IonCol>
                                </IonRow>
                            </IonGrid>
                        </div>
                    </div>
                )
            }
        ],
        programCards: [
            {
                title: "Earthquake Drill",
                location: "Manila",
                image: earthquakeDrill,
                schedule: "1 March 2020 | 10:00 am"
            },
            {
                title: "Earthquake Drill",
                location: "Makati",
                image: earthquakeDrill,
                schedule: "12 April 2020 | 10:00 am"
            },
            {
                title: "Earthquake Drill",
                location: "Muntinlupa",
                image: earthquakeDrill,
                schedule: "16 May 2020 | 10:00 am"
            },
            {
                title: "Earthquake Drill",
                location: "Manila",
                image: earthquakeDrill,
                schedule: "23 May 2020 | 10:00 am"
            }
        ]
    },
    askQuestion: {
        userId: "user_13cdCjPf4oIqwHMA6Utul"
    }
}

export default Statics;