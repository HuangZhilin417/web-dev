import React from "react";
import '../../vendors/bootstrap/css/bootstrap.min.css';
import '../../vendors/bootstrap/bootstrap.min.css';
import '../../vendors/fontawesome/css/all.min.css';
import {Link} from "react-router-dom";
import Classes from "./Classes";
import Styles from "../Styles";
import ConditionalOutput from "./ConditionalOutput";
import TodoList from "./Todo/TodoList";
import ReduxExamples from "./redux-examples";
const Labs = () => {
    return(
        <div>
            <h1>Labs</h1>
            <Link to="/hello">
                Hello
            </Link> |
            <Link to="/tuiter">
                Tuiter
            </Link>
            <TodoList/>
            <ConditionalOutput/>
            <Styles/>
            <Classes/>
            <ReduxExamples/>
        </div>
    )
};

export default Labs;
