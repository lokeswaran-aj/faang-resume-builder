import React, { ReactNode } from "react";

interface ModalType {
    children?: ReactNode;
    isOpen: boolean;
    toggle: () => void;
}

export default function Modal(props: ModalType) {
    return <>{props.isOpen && props.children}</>;
}
