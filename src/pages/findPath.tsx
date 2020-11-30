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

export default function findPath(props : Readonly<PathProps>) {
    //console.log("findPath");

    const path = useSWR(`/api/find?${props.queryParameters}`, fetcher);
    if (path.error) return <div>Failed to load</div>
    if (!path.data) return <div>Loading...</div>
    
    const graph = useSWR(`/api/graphInfos`, fetcher);
    if (graph.error) return <div>Failed to load</div>
    if (!graph.data) return <div>Loading...</div>

    const graphProps : GraphProps = {
      verticesFromTo : path.data.verticesFromTo,
      metrics : [ ByFastestPath, ByEcoPath ],
      vertices : graph.data.vertices,
      edges : graph.data.edges
    }

    return <Layout trail="Home" href="/">

                <div className={styles.layout} >
                    Shorter path from vertex id:{path.data.fromVertexId}
                    to vertex id:{path.data.toVertexId}
                    using the metric 
                    <b> {path.data.metricUsed}</b> is :<br/> 
                    <ul>
                        <li id="path">{path.data.verticesFromTo.join(" => ")}</li>
                        <li>for a total "lenght" of {path.data.totalWeight}</li>
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
    console.log(queryParameters);
    return { queryParameters };
}
