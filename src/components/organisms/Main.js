import React, {Component} from "react"
import FirstStep from "../molecules/FirstStep"
import SecondStep from "../molecules/SecondStep"
import ThirdStep from "../molecules/ThirdStep"
import ButtonsBlock from "../molecules/ButtonsBlock"
import ButtonsBlockSt1 from "../molecules/ButtonsBlockSt1"
import { render } from "react-dom"



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {step: 0};


        this.prevStep = this.prevStep.bind(this);
        this.nextStepSave = this.nextStepSave.bind(this);
        this.nextStepSkip = this.nextStepSkip.bind(this);
        this.cancel = this.cancel.bind(this);
    }
   
    prevStep(){
        this.setState({step: this.state.step - 1});
    }

    nextStepSave() {
        this.setState({step: this.state.step + 1});
    }

    nextStepSkip() {
        this.setState({step: this.state.step + 1});
    }

    cancel(){

    }

    render(){
        let step = this.state.step;
        let stepRender;
        let buttonsBlock;
        if (step === 0){
            stepRender = <FirstStep />;
            buttonsBlock = <ButtonsBlockSt1 name1="Cancel" click1={this.cancel} name2="Next Step" click2={this.nextStepSave} />;
        }else if (step === 1){
            stepRender = <SecondStep />;
            buttonsBlock = <ButtonsBlock name1="Skip for now" click1={this.nextStepSkip} name2="Save" click2={this.nextStepSave}
            name3="Back to previous step" click3={this.prevStep}/>;
        }else if (step === 2){
            stepRender = <ThirdStep />;
            buttonsBlock = <ButtonsBlock name1="Skip for now" click1={this.nextStepSkip} name2="Save" click2={this.nextStepSave}
            name3="Back to previous step" click3={this.prevStep}/>;
        }
        return (
            <main>
                <section className="steps">
                    <form>
                       {stepRender}                                              
                    </form>
                   {buttonsBlock}                
                </section>
            </main>
        ) 
    }
  
}

export default Main