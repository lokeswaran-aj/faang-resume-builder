import React from "react";
import useModal from "../hooks/useModal";
import Modal from "./Modal";
import ResumePreview from "./ResumePreview";
import Card from "./ResumeCard";

type Props = {
    image: string;
    header: string;
};

const TemplateCard: React.FC<Props> = ({ image, header }) => {
    const { isOpen, toggle } = useModal();
    return (
        <>
            <Card image={image} header={header} toggle={toggle} />
            <Modal isOpen={isOpen} toggle={toggle}>
                <ResumePreview image={image} toggle={toggle} />
            </Modal>
        </>
    );
};

export default TemplateCard;
