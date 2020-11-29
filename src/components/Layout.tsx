import Head from "next/head"
import styles from "../../styles/Home.module.css"
import React from "react";
import Menu from "./Menu";

export interface PageProps {
    trail : string;
    href : string;
    children : any;
}
/**
 * Pages layout
 * @param props
 */
export default function Layout(props : Readonly<PageProps>) {
    //console.log("Layout");

    return <>
            <Head>
                <meta charSet="UTF-8" />
                <title>Next path finder</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div>
                <Menu {...props}/>
                <br/>
                <div className={styles.container}>
                    {props.children}
                </div>

                <footer className={styles.footer}>
                    (c) 2020 - Frédéric Diaz - Simple web app NextJs
                </footer>

            </div>
        </>

}