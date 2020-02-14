import React from 'react';
import { call, notifications, help, medkit, people } from "ionicons/icons"
import ContactInfo from "../pages/ContactInfo/ContactInfo";

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
                component: <div>get Informed</div>
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
    }
}

export default Statics;