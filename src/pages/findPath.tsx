import type { AppContext } from 'next/app';
import React from "react"
import styles from "../../styles/Home.module.css"
import Layout from "../components/Layout"
import { Path } from '../views/interfaces/Path';

export interface PathProps extends Path {
}

export default function findPath(props : Readonly<PathProps>) {
    //console.log("Menu");
    //const verticesFromTo = [1,2,3];

    return <Layout trail="Home" href="/">

                <div className={styles.layout} >
                    Shorter path from vertex id:{props.fromVertexId}
                    to vertex id:{props.toVertexId}
                    using the metric 
                    <b> {props.metricUsed}</b> is :<br/> 
                    <ul>
                        <li id="path">{props.verticesFromTo.join(" => ")}</li>
                        <li>for a total "lenght" of {props.totalWeight}</li>
                    </ul>
                </div>

        </Layout>
}

findPath.getInitialProps = async (appContext: AppContext) => {
    return {
        metricUsed : "km",
        fromVertexId : 0,
        toVertexId : 4,
        verticesFromTo : [1,2,3],
        totalWeight : 18
    }
}
