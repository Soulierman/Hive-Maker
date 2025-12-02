import { html } from "preact";
import KeeperInfo from "./KeeperInfo.js";
import AdminCardContainer from "./AdminCardContainer.js";
import { updateSubmissionBackground } from "./Resolving.js";

function Submission({data}){
    //Contains a map render of cards
  return html`<section class=submission style="${updateSubmissionBackground(data.keeperInfo.hiveTeam)}">
        <${KeeperInfo} keeperData=${data.keeperInfo}/>
        <${AdminCardContainer} cardData=${data.cards}/>
    </section>`;
}
export default Submission;