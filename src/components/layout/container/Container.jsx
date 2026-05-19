import { ReactNode } from "react";
import styles from "./Container.module.css"

function Container({ children, customClass }) {
    const className = [styles.container, customClass ? styles[customClass] : '']
        .filter(Boolean)
        .join(' ');

    return (
        <div className={className}>
            {children}
        </div>
    );
}

export default Container;