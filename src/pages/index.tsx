import useSWR from 'swr';
import React from "react"
import Layout from "../components/Layout"
import styles from "../../styles/Home.module.css"
import Graph, { GraphProps } from '../components/Graph';
import { ByEcoPath, ByFastestPath } from '../domain/Graph';

const fetcher = (url : string) => fetch(url).then((res) => res.json());
/**
 * Home page
 */
export default function index() {
    //console.log("Menu");

    const { data, error } = useSWR(`/api/graphInfos`, fetcher);
    if (error) return <div>Failed to load</div>
    if (!data) return <div>Loading...</div>

    const graphProps : GraphProps = {
      verticesFromTo : [],
      metrics : [ ByFastestPath, ByEcoPath ],
      vertices : data.vertices,
      edges : data.edges
    }

    return  <Layout trail="Find path from 0 to 4 by km" href="/findPath?from=0&to=4&by=km">

          <div className={styles.layout} >
              <form action="findPath" method="get">
                  Test : Find a path 

                  <label>form vertex id </label>
                  <input type="number" id="from" name="from" required
                      min={data.minVertexId} max={data.maxVertexId}
                      defaultValue={data.minVertexId} />

                  <label> to id </label>
                  <input type="number" id="to" name="to" required
                      min={data.minVertexId} max={data.maxVertexId}
                      defaultValue={data.maxVertexId} />

                  <label> by (km, co) </label>
                  <input type="text" id="by" name="by" required 
                      defaultValue="km" size={4}/>
                  {' '}
                  <button type="submit" id="go">
                      Go
                  </button>
                  <br/>
                  Maximum: {data.maxVertexId} and minimum: {data.minVertexId} are border values for vertex id.
              </form>
            </div>

            <Graph {...graphProps}></Graph>

          </Layout>
}

