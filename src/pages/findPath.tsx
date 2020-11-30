import useSWR from 'swr';
import React from "react"
import styles from "../../styles/Home.module.css"
import Layout from "../components/Layout"
import { FindPathParameters } from '../domain/interfaces/FindPathParameters';
import { NextPageContext } from 'next';
import Graph, { GraphProps } from '../components/Graph';
import { ByEcoPath, ByFastestPath } from '../domain/Graph';

const fetcher = (url : string) => fetch(url).then((res) => res.json());

export interface PathProps {
    queryParameters : string,
}
/**
 * Find path in graph result page
 * @param props 
 */
export default function findPath(props : Readonly<PathProps>) {
    //console.log("findPath");

    const {data, error} = useSWR(`/api/find?${props.queryParameters}`, fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>
    
    const graphProps : GraphProps = {
      verticesFromTo : data.verticesFromTo,
      metrics : [ ByFastestPath, ByEcoPath ],
      vertices : data.vertices,
      edges : data.edges
    }

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

                <Graph {...graphProps}></Graph>

        </Layout>
}

findPath.getInitialProps = async (context: NextPageContext) => {
    // console.log(appContext.query);

    const params : FindPathParameters = {
        from : +context.query.from,
        to : +context.query.to,
        by : context.query.by as string 
    };
    const queryParameters = `from=${params.from}&to=${params.to}&by=${params.by}`;
    return { queryParameters };
}
