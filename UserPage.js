import { html } from "preact";
import { useState } from "preact";
import CardContainer from "./CardContainer.js"
import KeeperForm from "./KeeperForm.js"

function UserPage({ setPage, setUserSubmission}){
    setUserSubmission(null);
    const [cardNum, setCardNum] = useState(3);
  return html`<section>
    <header>
        <section id="header">
        <button id="submitButton" onClick=${() => setPage(1)} >Admin View</button>
        <h1>Hive Maker</h1>
        <h3>Create your own hive of special bees!</h3>
        <p>(Hint: try to add bees from the <a href="https://bee-swarm-simulator.fandom.com/wiki/Bees#Bee_Stats_Table" target="_blank">Bee Swarm Simulator Universe)</a></p>
        </section>
    </header>
    <main>
        <form id="SubmissionForm" onSubmit=${e => e.preventDefault()}>
            <${CardContainer} cardNum=${cardNum}/>
            <${KeeperForm} cardNum=${cardNum} setCardNum=${setCardNum} setPage=${setPage} setUserSubmission=${setUserSubmission}/>
        </form>
    </main>
    </section>`;
}
export default UserPage;