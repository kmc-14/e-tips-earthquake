import React, { Component } from 'react';
import {
    IonIcon,
    IonLabel,
    IonContent,
    IonItem,
    IonInput,
    IonTextarea,
    IonButton,
    IonLoading,
    IonAlert
} from '@ionic/react';
import Statics from '../../common/Statics';
import { RouteProps } from 'react-router';
import './AskQuestion.scss';
import { send } from 'ionicons/icons';
import emailjs from 'emailjs-com';

interface IRouteProps extends RouteProps {
    match: any
}

interface MyState {
    from: string,
    subject: string,
    body: string,
    isLoadModalOpen: boolean,
    isAlertModalOpen: boolean,
    alertModalMessage: any
    [x: number]: any;
};

class AskQuestion extends Component<IRouteProps, MyState> {
    constructor(props: any) {
        super(props);

        this.state = {
            from: "",
            subject: "",
            body: "",
            isLoadModalOpen: false,
            isAlertModalOpen: false,
            alertModalMessage: ""
        }
    }

    handleSend = () => {
        // email Js
        let templateParams = {
            "subject": this.state.subject,
            "from": this.state.from,
            "body": this.state.body
        };
        let serviceId = "default_service";
        let templateId = "e_tips_earthquake";

        this.toggleLoadModal();

        emailjs.send(serviceId, templateId, templateParams, Statics.askQuestion.userId)
            .then(res => {
                this.toggleLoadModal();
                this.toggleAlertModal("Email sent!");
            })
            .catch(err => {
                this.toggleLoadModal();
                this.toggleAlertModal("Sending failed. Please check your connection");
            });

        // SmtpJS.com
        // emailHelper.sendEmail(this.state.subject, "kenneth.carolino142@gmail.com", this.state.from, this.state.body)
        //     .then(response => {
        //         this.toggleLoadModal();
        //         this.toggleAlertModal("Email sent!");
        //     }, err => {
        //         console.log("ERr", err);
        //     });
    }

    toggleLoadModal = () => {
        this.setState({
            isLoadModalOpen: !this.state.isLoadModalOpen
        });
    }

    toggleAlertModal = (message: string) => {
        this.setState({
            isAlertModalOpen: !this.state.isAlertModalOpen,
            alertModalMessage: message
        });
    }

    handleFieldChange = (field: any, event: any) => {
        let value = event.target.value;

        this.setState({
            [field]: value
        })
    }

    isSendValid = () => {
        const { from, subject, body } = this.state;
        let isValid = true;

        isValid = isValid && from.length > 0;
        isValid = isValid && subject.length > 0;
        isValid = isValid && body.length > 0;

        return isValid;
    }

    render() {
        return (
            <div className="ask-question">
                <IonContent scrollEvents={true} className="content">
                    <IonItem class="margin-20-0 medium-font">
                        <IonLabel position="floating">From:</IonLabel>
                        <IonInput
                            type="text"
                            size={20}
                            onIonChange={(event) => this.handleFieldChange("from", event)}
                            value={this.state.from}
                        />
                    </IonItem>

                    <IonItem class="margin-20-0 medium-font">
                        <IonLabel position="floating">Subject:</IonLabel>
                        <IonInput
                            type="text"
                            size={20}
                            onIonChange={(event) => this.handleFieldChange("subject", event)}
                            value={this.state.subject}
                        />
                    </IonItem>

                    <IonItem>
                        <IonTextarea
                            autoGrow
                            placeholder="Enter your question here."
                            onIonChange={(event) => this.handleFieldChange("body", event)}
                            value={this.state.body}
                        />
                    </IonItem>

                    <div className="button-container">
                        <IonButton shape="round" fill="solid" className="half-width"
                            onClick={this.handleSend}
                            disabled={!this.isSendValid()}
                        >
                            <IonIcon slot="start" icon={send} />
                            Send
                        </IonButton>
                    </div>

                    <IonLoading isOpen={this.state.isLoadModalOpen} message={"Sending email"} />

                    <IonAlert
                        isOpen={this.state.isAlertModalOpen}
                        message={this.state.alertModalMessage}
                        buttons={[{ text: 'Okay' }]}
                    />
                </IonContent>
            </div>
        )
    }
}

export default AskQuestion;
