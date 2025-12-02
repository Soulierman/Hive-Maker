import { html } from "preact";
import { updateCardBackground } from "./Resolving.js";

function AdminCard({cardData}){
  return html`<section class="adminCard card" style="background-image:${updateCardBackground(cardData.name)};border:${cardData.gifted ? "10px #ffff14 solid" : ""}">
        <${BeeImage} name="${cardData.name}" level="${cardData.level}"/>
        <${NameField} name="${cardData.name}"/>
        <${LevelField} lvl="${cardData.level}"/>
        <${GiftedField} gifted="${cardData.gifted}"/>
        <${RatingField} rating="${cardData.rating}"/>
    </section>`;
}
function BeeImage({name, level}){
    return html `<img src="assets/bees/${name.toLowerCase().split(" ")[0]}.png" onError=${e => e.target.setAttribute("src","assets/bees/basic.png")} style="border:${level >= 10 ? "5px #f70909ff solid" : ""}"/>`
}
function NameField({name}){
    return html `<p>Name: ${name}</p>`
}
function LevelField({lvl}){
    return html `<p>Level: ${lvl}</p>`
}
function GiftedField({gifted}){
    return html `<p>Gifted: ${gifted ? "Yes" : "No" }</p>`
}
function RatingField({rating}){
    return html `<p>Rating: ${rating}</p>`
}
export default AdminCard;