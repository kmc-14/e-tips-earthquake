import React, { Component } from 'react';
import {
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonGrid,
    IonRow,
    IonCol,
    IonIcon,
    IonSegment,
    IonSegmentButton,
    IonLabel,
    IonToolbar,
    withIonLifeCycle
} from '@ionic/react';
import Statics from '../../common/Statics';
import location from '../../assets/icon-svg/location.svg';
import "./GetInformed.scss";

interface MyState {
    selectedSegment: any
};

class GetInformed extends Component<{}, MyState> {
    SEGMENT_VALUES: any = ["information", "program"];
    IonContentElementRef: HTMLIonContentElement | any;

    constructor(props: any) {
        super(props);

        this.state = {
            selectedSegment: this.SEGMENT_VALUES[0]
        };
    }

    handleSegmentSelect = (event: any) => {
        let selectedSegment = event.detail.value;

        this.setState({
            selectedSegment: selectedSegment
        });
    }

    getSegmentContent = () => {
        this.scrollIonContentToTop();

        switch (this.state.selectedSegment) {
            case this.SEGMENT_VALUES[0]:
                return <InfoSegment />;
            case this.SEGMENT_VALUES[1]:
                return <ProgramSegment />
            default:
                return null;
        }
    }

    scrollIonContentToTop = () => {
        this.IonContentElementRef = document.querySelector("#get-iformed-ion-content");

        if (this.IonContentElementRef) {
            this.IonContentElementRef.scrollToTop();
        }
    }

    render() {
        const { selectedSegment } = this.state
        return (
            <div className="get-informed">
                <IonToolbar>
                    <IonSegment onIonChange={event => { this.handleSegmentSelect(event) }}>
                        <IonSegmentButton value={this.SEGMENT_VALUES[0]} checked={selectedSegment === this.SEGMENT_VALUES[0]}>
                            <IonLabel>Information</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value={this.SEGMENT_VALUES[1]} checked={selectedSegment === this.SEGMENT_VALUES[1]}>
                            <IonLabel>Programs</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonToolbar>

                <IonContent id="get-iformed-ion-content" scrollEvents={true} className="content">
                    {this.getSegmentContent()}
                </IonContent>
            </div>
        )
    }
}

export default withIonLifeCycle(GetInformed);

const InfoSegment = () => {
    return (
        <React.Fragment>
            {Statics.getInformed.infoCards.map((infoCard: any, key: any) => (
                <IonCard key={key} routerLink={`/info-card/${infoCard.id}`}>
                    <div className="info-card-img">
                        <img src={infoCard.image} alt="" />
                    </div>

                    <IonCardHeader>
                        <IonCardTitle>{infoCard.title}</IonCardTitle>
                        <IonCardSubtitle>{infoCard.subtitle}</IonCardSubtitle>
                    </IonCardHeader>
                </IonCard>

            ))}
        </React.Fragment>
    )
};

const ProgramSegment = () => {
    return (
        <React.Fragment>
            {Statics.getInformed.programCards.map((program: any, key: any) => (
                <IonCard key={key}>
                    <div className="info-card-img">
                        <img src={program.image} alt="" />
                    </div>

                    <IonGrid>
                        <IonRow >
                            <IonCol>
                                <IonCardHeader>
                                    <IonCardSubtitle>{program.schedule}</IonCardSubtitle>
                                    <IonCardTitle>{program.title}</IonCardTitle>
                                    <IonCardSubtitle>{program.location}</IonCardSubtitle>
                                </IonCardHeader>
                            </IonCol>
                            <IonCol className="icon-col" size="3">
                                <IonIcon class="xx-large-font" icon={location} />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </IonCard>
            ))}
        </React.Fragment>
    )
};
