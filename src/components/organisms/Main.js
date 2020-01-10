import React, {Component} from "react"
import FirstStep from "../molecules/FirstStep"
import SecondStep from "../molecules/SecondStep"
import ThirdStep from "../molecules/ThirdStep"
import ButtonsBlock from "../molecules/ButtonsBlock"
import ButtonsBlockSt1 from "../molecules/ButtonsBlockSt1"
import { render } from "react-dom"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"



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
        if (this.state.step > 0){
            this.setState({step: this.state.step - 1}); 
        }
    }

    nextStepSave() {
        if (this.state.step < 2){
            this.setState({step: this.state.step + 1}); 
        }
    }

    nextStepSkip() {
        if (this.state.step < 2){
           this.setState({step: this.state.step + 1}); 
        }   
    }

    cancel(){

    }

    render(){
        let step = this.state.step;
        let buttonsBlock;
        const buttons1 = {name1:"Cancel", 
                            stepNext:"/step2", 
                            click1:this.cancel,
                            name2:"Next Step", 
                            click2:this.nextStepSave}
        const buttons2 = {name1:"Skip for now",
                            click1:this.nextStepSkip, name2:"Save",
                            click2:this.nextStepSave,
                            stepNext:"/step3", 
                            stepPrev:"/step1",
                            name3:"Back to previous step", 
                            click3:this.prevStep}
        const buttons3 = {name1:"Skip for now", 
                            click1:this.nextStepSkip, name2:"Save", 
                            click2:this.nextStepSave,
                            stepNext:"/step3", stepPrev:"/step2",  
                            name3:"Back to previous step", 
                            click3:this.prevStep}
        /* if (step === 0){
            buttonsBlock = <ButtonsBlockSt1 name1="Cancel" stepNext="/step2" click1={this.cancel}
            name2="Next Step" click2={this.nextStepSave} />;
        }else if (step === 1){
            buttonsBlock = <ButtonsBlock name1="Skip for now" click1={this.nextStepSkip} name2="Save" click2={this.nextStepSave}
            stepNext="/step3" stepPrev="/step1" name3="Back to previous step" click3={this.prevStep}/>;
        }else if (step === 2){
            buttonsBlock = <ButtonsBlock name1="Skip for now" click1={this.nextStepSkip} name2="Save" click2={this.nextStepSave}
            stepNext="/step3" stepPrev="/step2"  name3="Back to previous step" click3={this.prevStep}/>;
        } */
        return (
            <main>
                <section className="steps">
                    <Router>                      
                        <form>
                            <Route path="/step1" exact component={FirstStep}/>
                            <Route path="/step2" exact component={SecondStep}/>
                            <Route path="/step3" exact component={ThirdStep}/>                                             
                        </form> 
                        <Switch>
                            <Route path="/step1" render={(props) => (<ButtonsBlockSt1 {...buttons1} />)}/>
                            <Route path="/step2" render={(props) => (<ButtonsBlock {...buttons2} />)}/>
                            <Route path="/step3" render={(props) => (<ButtonsBlock {...buttons3} />)}/>   
                        </Switch>    
                    </Router>
                               
                </section>
            </main>
        ) 
    }
  
}

export default Main