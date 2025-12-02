import { html } from "preact";
import { updateBearBackground } from "./Resolving.js";


function KeeperInfo({keeperData}){
  return html`<section class=keeper id=adminKeeper style="background-image:${updateBearBackground(keeperData.bear)}">
        <div class=keeperTitle>
            <${NameField} name="${keeperData.name}"/>
        </div>
        <div>
            <${AgeField} age="${keeperData.age}"/>
            <${BearImage} src="${keeperData.bear}"/>
            <${HiveField} hiveType="${keeperData.hiveTeam}"/>
        </div>
    </section>`;
}
function NameField({name}){
    return html `<p>Name: ${name}</p>`
}
function AgeField({age}){
    return html `<p>Age: ${age}</p>`
}
function BearImage({src}){
    return html `<img src=${src} onError=${e => e.target.setAttribute("src","assets/bears/01.png")}/>`
}
function HiveField({hiveType}){
    return html `<p>Hive: ${hiveType}</p>`
}
function BeeNumField({num}){
    return html `<p>Bees: ${num}</p>`
}
export default KeeperInfo;