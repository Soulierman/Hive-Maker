import { html } from "preact";

function InputWithLabel({id, clas="",labelText , type , name, min="", max="",required=null,onInput="", value="", onChange=""}){
    return html `<label for="${id}">${labelText}</label>
    <input type="${type}" name="${name}" id=${id} class=${clas} value=${value}
    min=${min} max=${max} required=${required} onInput=${onInput} onChange=${onChange}/>`
}
export default InputWithLabel;