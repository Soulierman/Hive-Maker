import { html } from "preact";
import AdminCard from "./AdminCard.js";

function AdminCardContainer({cardData}){
    return html`
        <section id="cardContainer">
            ${Array(cardData.length).fill(0).map((s,i) => html`<${AdminCard} cardData=${cardData[i]}/>`)}
        </section>`
}

export default AdminCardContainer;