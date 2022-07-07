import { useContext } from "react";
import { ProgressContext } from "../components/playArea";
import { UserContext } from "../routing";

const userContextValues = useContext(UserContext);
const progressContextValues = useContext(ProgressContext);


export {userContextValues,
        progressContextValues};