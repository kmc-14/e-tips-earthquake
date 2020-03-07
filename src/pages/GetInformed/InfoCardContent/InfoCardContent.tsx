import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import {
    IonToolbar, IonButtons, IonBackButton, IonHeader, IonContent, IonFab, IonFabButton, IonIcon
} from '@ionic/react';
import Statics from '../../../common/Statics';
import './InfoCardContent.scss';
import { backspace, arrowBack } from 'ionicons/icons';

interface MyState {
    content: any
};

interface IRouteProps extends RouteProps {
    match: any
}

class InfoCardContent extends Component<IRouteProps, MyState> {
    constructor(props: any) {
        super(props);

        const parentId = this.props.match.params.id;

        console.log(this.props)
        this.state = {
            content: Statics.getInformed.infoCards[parentId].content
        };
    }

    getContentBody = () => {

        return ("");
    }

    render() {
        const { content } = this.state;

        return (
            <div>
                <IonFab vertical="top" horizontal="start" slot="fixed">
                    <IonFabButton color="light" routerLink="/home/1">
                        <IonIcon icon={arrowBack} />
                    </IonFabButton>
                </IonFab>
                <IonContent scrollEvents={true}>
                    <div className="info-card-content-body">
                        {content}
                    </div>
                </IonContent>
            </div>
        )
    }
}

export default InfoCardContent;
