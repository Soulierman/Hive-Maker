import { html } from "preact";
import { useState } from "preact";
import Submission from "./Submission.js";

function AdminPage({setPage, userSubmission}){
  let saveData = localStorage.getItem("saveData");
  if(saveData === null){
    saveData = {submissions:[]};
  }
  else{
    saveData = JSON.parse(saveData);
  }
  if(userSubmission != null && !checkDuplicates(userSubmission,saveData)){
    saveData.submissions.unshift(userSubmission);
  }
  let stringifiedData = JSON.stringify(saveData);
  localStorage.setItem("saveData", stringifiedData);
  const [currSubmission, setCurrSubmission] = useState(0);
  return html`<section id=adminPage>
    <button id="submitButton" onClick=${() => setPage(0)} >Back to User View</button>
    <h1 id=adminTitle>Submissions</h1>
      <section id=submissionCarousel>
        <button type="button" id="prevButton" onClick=${currSubmission === 0 ? () => setCurrSubmission(saveData.submissions.length-1): () => setCurrSubmission(c => c - 1)}>⬅️</button>
          ${saveData.submissions.length !== 0 ? html `<${Submission} data=${saveData.submissions[currSubmission]}/>` : html `<h2>NO SUBMISSIONS</h2>`}
        <button type="button" id="nextButton" onClick=${() => setCurrSubmission(c => (c + 1) % saveData.submissions.length)}>➡️</button>
      </section>
    </section>`;
}
function checkDuplicates(submission,saveData){
  return saveData.submissions.find(s => JSON.stringify(s) === JSON.stringify(submission));
}
export default AdminPage;