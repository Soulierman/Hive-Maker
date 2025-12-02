import { html } from "preact";
import InputWithLabel from "./Inputs.js";
import { useState } from "preact";
import { updateCardBackground } from "./Resolving.js";

function Card({ index }) {
    const [beeName, setBeeName] = useState("");
    const [beeLvl, setBeeLvl] = useState(0);
    return html`<section id=card${index} class="card" style="background-image:${updateCardBackground(beeName)}">
                    <${BeeImage} name=${beeName} lvl=${beeLvl}/>
                    <${NameInput} setBeeName=${setBeeName} beeName=${beeName} index=${index}/>
                    <${LvlInput} beeLvl=${beeLvl} setBeeLvl=${setBeeLvl} index=${index}/>
                    <${GiftedCheck} index=${index}/>
                    <${BeeRatingInputs} index=${index}>
                        <${RatingInput} name="Great" index=${index}/>
                        <${RatingInput} name="Good" index=${index}/>
                        <${RatingInput} name="Meh" index=${index}/>
                        <${RatingInput} name="Bad" index=${index}/>
                    </${BeeRatingInputs}>
                </section>`
}
function BeeImage({ name, lvl }){
    return html `<img src="assets/bees/${name.toLowerCase().split(" ")[0]}.png" onError=${e => e.target.setAttribute("src","assets/bees/basic.png")}
    style="border:${lvl >= 10 ? "5px #f70909ff solid" : ""}"/>`
}
function NameInput({ setBeeName, beeName, index}){
    return html `<${InputWithLabel} id="name${index}" clas=cardNameInput labelText=Name type=text name=beeName onChange=${e => setBeeName(e.target.value)}
    value=${beeName} required=required/>`
}
function LvlInput({beeLvl, setBeeLvl,index}){
    return html `<${InputWithLabel} id="level${index}" clas=cardLevelInput labelText=Level type=number name=beeLevel min=0 max=15
    onInput=${e => setBeeLvl(e.target.value)} value=${beeLvl} required=required/>`
}
function GiftedCheck({index}){
    return html `<${InputWithLabel} id="gifted${index}" clas=cardGiftedInput labelText=Gifted? type=checkbox name=giftedcheck 
    onInput=${e => {e.target.checked ? e.target.parentElement.style.border = "10px #ffff14 solid" : e.target.parentElement.style.border = "2px black solid"}}/>`
}
function BeeRatingInputs({index, children}){
    return html `<div class="rating">
                        <p>How do you like them?</p>
                        <div class="buttons${index}">
                          ${children}
                        </div>
                    </div>`
}
function RatingInput({ name, index }){
    return html `<${InputWithLabel} clas=${name} labelText=${name} type=radio name="rating${index}" value=${name} required=required/>`
}


export default Card;