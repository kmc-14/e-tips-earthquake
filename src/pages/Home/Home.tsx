import React, { Component } from 'react';
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
import Statics from "../../common/Statics";
import './Home.css'


interface MyState { selectedContentIndex: number };

class Home extends Component<{}, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {
            selectedContentIndex: 0
        }

        console.log(props);
    }

    handleMenuClick = (index: number) => {
        console.log(index);

        this.setState({
            selectedContentIndex: index
        });
    }

    getContent = () => {
        return Statics.home.menuItems[this.state.selectedContentIndex].component;
    }

    getTitle = () => {
        return Statics.home.menuItems[this.state.selectedContentIndex].label;
    }

    render() {
        return (
            <div>
                <IonMenu menuId={Statics.home.menuId} contentId="content" type="overlay">
                    <IonHeader>
                        <IonToolbar color="tertiary">
                            <IonTitle>Menu</IonTitle>
                        </IonToolbar>
                    </IonHeader>
                    <IonContent id="content">
                        <IonList>
                            {Statics.home.menuItems.map((item, index) => (
                                <IonMenuToggle key={index} >
                                    <IonItem onClick={() => this.handleMenuClick(index)}>
                                        <IonIcon icon={item.icon}></IonIcon>
                                        <IonLabel className="ion-padding">{item.label}</IonLabel>
                                    </IonItem>
                                </IonMenuToggle>
                            ))}
                        </IonList>
                    </IonContent>
                </IonMenu>

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonMenuButton menu={Statics.home.menuId}></IonMenuButton>
                        </IonButtons>
                        <IonTitle>{this.getTitle()}</IonTitle>
                    </IonToolbar>
                </IonHeader>

                <div>
                    {this.getContent()}
                </div>

            </div>
        )
    }
}

export default Home;
