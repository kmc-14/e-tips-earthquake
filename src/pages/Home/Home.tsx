import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import { toInt } from '../../common/helpers/numberHelper';
import {
    IonIcon,
    IonLabel,
    IonMenu,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonButtons,
    IonMenuButton,
    IonMenuToggle
} from '@ionic/react';

import './Home.scss'

import Statics from '../../common/Statics';

interface IRouteProps extends RouteProps {
    match: any
}

interface MyState { selectedContentIndex: number };

class Home extends Component<IRouteProps, MyState> {
    constructor(props: any) {
        super(props);

        const contentIndex = this.props.match.params.contentIndex;

        this.state = {
            selectedContentIndex: contentIndex
        }
    }

    getContent = () => {
        return Statics.home.menuItems[this.state.selectedContentIndex].component;
    }

    getTitle = () => {
        return Statics.home.menuItems[this.state.selectedContentIndex].label;
    }

    hasOwnHeader = () => {
        return Statics.home.menuItems[this.state.selectedContentIndex].hasOwnHeader;
    }

    render() {
        return (
            <div className="home">
                <IonMenu menuId={Statics.home.menuId} contentId="content" type="overlay">
                    <IonContent id="content">
                        <IonList>
                            {Statics.home.menuItems.map((item, index) => (
                                <IonMenuToggle key={index} >
                                    <IonItem routerLink={item.redirect}
                                        className={`${toInt(index) === toInt(this.state.selectedContentIndex) ? "selected" : ""}`}
                                    >
                                        <IonIcon icon={item.icon}></IonIcon>
                                        <IonLabel className="ion-padding">{item.label}</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                            ))}
                        </IonList>
                    </IonContent>
                </IonMenu>

                {
                    !this.hasOwnHeader() ?
                        <IonHeader>
                            <IonToolbar>
                                <IonButtons slot="start">
                                    <IonMenuButton menu={Statics.home.menuId}></IonMenuButton>
                                </IonButtons>
                                <IonTitle>{this.getTitle()}</IonTitle>
                            </IonToolbar>
                        </IonHeader> : null
                }

                <div>
                    {this.getContent()}
                </div>

            </div>
        )
    }
}

export default Home;
