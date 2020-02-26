import React, { Component } from 'react';
import { RouteProps } from 'react-router';
import {
    IonToolbar, IonButtons, IonBackButton, IonHeader, IonContent
} from '@ionic/react';
import Statics from '../../../common/Statics';
import './InfoCardContent.scss';

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

                <IonHeader>
                    <IonToolbar>
                        <IonButtons slot="start">
                            <IonBackButton defaultHref="/home/1" />
                        </IonButtons>
                    </IonToolbar>
                </IonHeader>
                <IonContent scrollEvents={true} className="content">
                    <div className="info-card-content-body">
                        {content}
                    </div>
                </IonContent>

            </div>
        )
    }
}

export default InfoCardContent;
