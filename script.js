import { html, render } from "preact";
import { useState } from "preact";
import Card from "./Card.js";
import CardContainer from "./CardContainer.js"
import KeeperForm from "./KeeperForm.js";
import UserPage from "./UserPage.js";
import AdminPage from "./AdminPage.js";


function App() {
    const [page, setPage] = useState(0);
    const [userSubmission, setUserSubmission] = useState(null);
    return html`<main>
        ${ page === 0 ? html`<${UserPage} setPage=${setPage} setUserSubmission=${setUserSubmission} />` : html`<${AdminPage} setPage=${setPage} userSubmission=${userSubmission}/>`}
    </main>`;
}

render(html`<${App} />`, document.body);