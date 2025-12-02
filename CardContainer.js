import { html } from "preact";
import Card from "./Card.js"

function CardContainer({cardNum}){
    return html`
        <section id="main">
            ${Array(cardNum).fill(0).map((s,i) => html`<${Card} index=${i}/>`)}
        </section>`
}

export default CardContainer