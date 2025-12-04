import { html } from "preact";
import { useState } from "preact";
import InputWithLabel from "./Inputs.js";

function validate(){
    const submissionForm = document.getElementById("SubmissionForm");
    if(submissionForm.checkValidity()){
      return true;
    }else{
      submissionForm.reportValidity();
      return null;
    }
}
function submitAndMoveToAdmin( setUserSubmission,setPage ){
    setUserSubmission(createSubmission());
    setPage(1);
}
//Assumes you are on the userPage and that all data has been input (form validation in KeeperForm)
function createSubmission(){
    let submission = {keeperInfo : {}, cards:[]}
    let keeperData = {name:"",bear:"",age:"",hiveTeam:"",beeNum:""}
    keeperData.name = document.getElementById("name").value;
    keeperData.bear = document.getElementById("bearImg").getAttribute("src");
    keeperData.age = document.getElementById("age").value;
    keeperData.hiveTeam = document.querySelector('input[name="team"]:checked').getAttribute("id");
    let cardNum = document.getElementById("beeNum").value;
    keeperData.beeNum = cardNum;
    submission.keeperInfo = keeperData;
    //Card creation
    for(let i = 0; i < cardNum; i++){
        let newCard = {name:"", level: "", gifted: "", rating: ""}
        newCard.name = document.getElementById("name"+i).value;
        newCard.level = document.getElementById("level"+i).value;
        newCard.gifted = document.getElementById("gifted"+i).checked;
        newCard.rating = document.querySelector(`input[name="rating${i}"]:checked`).value;
        submission.cards.push(newCard);
    }
    return submission;
}

function KeeperForm({cardNum,setCardNum,setPage,setUserSubmission}){
    return html`<section class="keeper">
                <h3>Beekeeper Info</h3>
                    <${KeeperNameInput}/>
                    <${BearSelector}/>
                    <${KeeperAgeInput}/>
                    <${HiveTypeSelector}/>
                    <${BeeNumInput} cardNum=${cardNum} setCardNum=${setCardNum}/>
                <button id="submitButton" onClick=${() => validate() === true ? submitAndMoveToAdmin(setUserSubmission,setPage) : null} >Submit Hive</button>
            </section>`
}
function KeeperNameInput(){
    const [name,setName] = useState("");
    return html `<div>
        <${InputWithLabel} id=name labelText=Name type=text name=name required=required value=${name} onInput=${e => setName(e.target.value)}/>
    </div>`
}
function BearSelector(){
    const [bearIndex, setBearIndex] = useState(1);
    return html `<div>
                        <p>Select your bear!</p>
                        <div id="bearSelector">
                            <button type="button" id="prevButton" onClick=${bearIndex > 0 ? ()=>setBearIndex(c => c - 1): setBearIndex(7)}>prev</button>
                            <${BearImg} index=${bearIndex}/>
                            <button type="button" id="nextButton" onClick=${bearIndex <= 7 ? ()=>setBearIndex(c => c + 1): setBearIndex(1)}>next</button>
                        </div>
                    </div>`
}
function BearImg({ index }){
    return html `<img src="assets/bears/0${index}.png" id="bearImg" />`
}
function KeeperAgeInput(){
    const [age,setAge] = useState(0);
    return html `<div>
        <${InputWithLabel} id=age labelText=Age type=number name=age min=0 max=120 required=required value=${age} onInput=${e => setAge(e.target.value)}/>
    </div>`
}
function HiveTypeSelector(){
    return html `<div id="continents">
                        <h4>What team is your hive in?</h4>
                        <div id="hiveTeam">
                            <${HiveTypeRadio} name=Red/>
                            <${HiveTypeRadio} name=Blue/>
                            <${HiveTypeRadio} name=White/>
                            <${HiveTypeRadio} name=Mixed/>
                        </div>
                    </div>`
}
function HiveTypeRadio({name}){
    return html `<${InputWithLabel} id=${name} labelText=${name} type=radio name=team required=required/>`
}
function BeeNumInput({cardNum, setCardNum}){
    return html `<${InputWithLabel} id=beeNum labelText="How many bees do you have?"
    type=number name=beeNumber min=1 max=10 onInput=${e => e.target.value >= 0 && e.target.value <= 10 ? setCardNum(Number(e.target.value)) : ""}
    value=${cardNum}/>`
}
export default KeeperForm;