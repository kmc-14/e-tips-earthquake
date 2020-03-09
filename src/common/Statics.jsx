import React from 'react';
import { call, notifications, help, medkit, people, home, paper, alert, hand, business } from 'ionicons/icons';
import { IonIcon, IonGrid, IonRow, IonCol } from '@ionic/react';

import ContactInfo from '../pages/ContactInfo/ContactInfo';
import GetInformed from '../pages/GetInformed/GetInformed';
import AskQuestion from '../pages/AskQuestion/AskQuestion';
import AboutUs from '../pages/AboutUs/AboutUs';
import FirstAid from '../pages/FirstAid/FirstAid';

import planning from '../assets/header-pics/planning.png';
import warning from '../assets/header-pics/warning.png';
import earthquake from '../assets/header-pics/earthquake.png';
import earthquakeDrill from '../assets/header-pics/earthquake-drill.png';
import duckCover from '../assets/icon-pics/duck-cover.png';

import water from '../assets/header-pics/bottled-water.png';
import food from '../assets/header-pics/canned-food.png';
import flashlight from '../assets/header-pics/flashlight.png';
import phone from '../assets/header-pics/phone.png';
import whitsle from '../assets/header-pics/whistle.png';
import tool from '../assets/header-pics/swiss.png';
import radio from '../assets/header-pics/radio.png';
import medicalKit from '../assets/header-pics/medkit.png';

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
                component: <FirstAid />,
                hasOwnHeader: false
            },
            {
                icon: people,
                label: "About Us",
                component: <AboutUs />,
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
    },
    firstAid: {
        mustHaves: [
            {
                label: "Water",
                description: "One-three gallons per person a day, enough for 3-5 days",
                img: water
            },
            {
                label: "Flashlight",
                description: "Don't forget to pack in extra batteries",
                img: flashlight
            },
            {
                label: "Mobile Phone",
                description: "Preferrably with removable battery, which can be placed only when needed to save battery life",
                img: phone
            },
            {
                label: "Food",
                description: "Non-perishable food (e.g canned goods), enough for 3-5 days",
                img: food
            },
            {
                label: "Whistle",
                description: "Signal for help",
                img: whitsle
            },
            {
                label: "Multi-purpose Pocket Tool",
                description: "Different tools such as small knife, can opener, scissors and more",
                img: tool
            },
            {
                label: "Radio",
                description: "For up-to-date news and information. Keep extra batteries",
                img: radio
            },
            {
                label: "Medical Kit",
                description: "Must include bandages, band-aids, antiseptic wipes, thermometer, safety pins, tapes, gloves, etc.",
                img: medicalKit
            }
        ]
    }
}

export default Statics;