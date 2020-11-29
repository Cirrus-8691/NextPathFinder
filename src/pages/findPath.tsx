import useSWR from 'swr';
import type { AppContext } from 'next/app';
import React from "react"
import styles from "../../styles/Home.module.css"
import Layout from "../components/Layout"
import { FindPathParameters } from '../domain/interfaces/FindPathParameters';

const fetcher = (url : string) => fetch(url).then((res) => res.json())

export interface PathProps {
    queryParameters : string,
}

export default function findPath(props : Readonly<PathProps>) {
    console.log("findPath");

    const { data, error } = useSWR(`/api/find?${props.queryParameters}`, fetcher)
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    return <Layout trail="Home" href="/">

                <div className={styles.layout} >
                    Shorter path from vertex id:{data.fromVertexId}
                    to vertex id:{data.toVertexId}
                    using the metric 
                    <b> {data.metricUsed}</b> is :<br/> 
                    <ul>
                        <li id="path">{data.verticesFromTo.join(" => ")}</li>
                        <li>for a total "lenght" of {data.totalWeight}</li>
                    </ul>
                </div>

        </Layout>
}

findPath.getInitialProps = async (appContext: AppContext) => {
    const param : FindPathParameters = {
        from : 1,
        to : 2,
        by : "km"
    }
    return {
        queryParameters: `from=${param.from}&to=${param.to}&by=${param.by}`
    };
}
