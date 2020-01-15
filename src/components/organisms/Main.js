import React, { Component, useState } from "react"
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
        this.state = {step: 0,
            data : {
                file: '',
                link: '', 
                title : '', 
                publication: { 
                        year: '',
                        month: '',
                        day: ''},
                authors: '',
                hubs: '',
                type : '',
                summary: '',
                results: '',
                significance: '',
                discussion: {title: '', question: ''},
                }
            };
    

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

    fistStepData(data){
        const link = document.getElementById('link').value;
        const file = document.getElementById('file').value;
        const title = document.getElementById('papertitle').value;
        const year = document.getElementById('year').value;
        const month = document.getElementById('month').value;
        const day = document.getElementById('day').value;
        const arr = [];
        const arr2=[];
        const hubs = document.querySelectorAll('.select__multi-value__label');
        hubs.forEach(el=> arr.push(el.innerHTML));
        let check = "";
        if (document.querySelector('input[type="radio"]:checked + label')){
            check = document.querySelector('input[type="radio"]:checked + label').innerHTML;
        }
        const authors = document.querySelectorAll('.author-card-bl-l');
        authors.forEach(el=> arr2.push(el.id));
        if(document.getElementById('authorself').checked){
            arr2.push(document.getElementById('authorself').id)
        }

        data.title = title;
        data.publication.year = year;
        data.publication.month = month;
        data.publication.day = day;
        data.hubs = arr;
        data.authors = arr2;
        data.type = check;
        data.file = file;
        data.link = link;
    }

    secondStepData(data){
        const summary = document.getElementById('s1').value;
        const results = document.getElementById('s2').value;
        const significance = document.getElementById('s3').value;

        data.summary = summary;
        data.significance = significance;
        data.results = results;
    }
    thirdStepData(data){
        const title= document.getElementById('discussiontitle').value;
        const question = document.getElementById('question').value;

        data.discussion.title = title;
        data.discussion.question = question;
    }

    nextStepSave() {
  
        let href = window.location.href;
        const regex = /.*(\d)/;
        const step = href.match(regex);
        if (step[1] == 1){
            this.fistStepData(this.state.data);
        }else if(step[1] == 2){
            this.secondStepData(this.state.data);
        }else if(step[1] == 3){
            this.thirdStepData(this.state.data);
        }
        let str = JSON.stringify(this.state.data);
        console.log(str);
       
        
    }

    nextStepSkip() {
        if (this.state.step < 2){
           this.setState({step: this.state.step + 1}); 
        }   
    }

    cancel(){

    }

    render(){

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
      
        return (
            <main>
                <section className="steps">
                    <Router>                      
                        <form>
                            <Route path="/step1" exact render={(props) => (<FirstStep {...this.state.data} />)}/>
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