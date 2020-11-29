import React from "react";
import { PageProps } from "./Layout";
import styles from "../../styles/Home.module.css";

/**
 * Menu & trail
 * @param props
 */
export default function Menu(props : Readonly<PageProps>) {
    //console.log("Menu");

    return <header className={styles.header}>
                <div>
                    <div className={styles.logo}>
                        <img src="./logo.svg" alt="logo" width="64"/>
                    </div>
                    <div className={styles.title}>
                        <h1>Path finder</h1>
                    </div>
                </div>
                <div className={styles.trail}>
                    <a href={props.href}>{props.trail}</a>
                </div>
            </header>
}

