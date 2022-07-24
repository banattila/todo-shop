import React from "react";
import Lists from "../components/Lists";

const Page = (props) => {
    
    return (
        <main className="page-content">
            <h4 className="page-title">{props.title} listája és hozzáadása</h4>
            <Lists component={props.componentName} items={props.items} />
        </main>
    );
}

export default Page;