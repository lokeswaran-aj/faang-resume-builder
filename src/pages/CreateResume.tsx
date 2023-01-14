import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

type Props = {};

const CreateResume = (props: Props) => {
    let { company } = useParams();
    return (
        <>
            <Navbar />
            <div>{company}</div>
        </>
    );
};

export default CreateResume;
