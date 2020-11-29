import type { AppContext } from 'next/app';
import React from "react"
import Layout from "../components/Layout"

export interface Props {
  minVertexId : number;
  maxVertexId : number;
}

export default function index(props : Readonly<Props>) {
  //console.log("Menu");

  return  <Layout trail="Find path from 0 to 4 by km" href="/findPath?from=0&to=4&by=km">

            <form action="findPath" method="get">
                Test : Find a path 

                <label>form vertex id</label>
                <input type="number" id="from" name="from" required
                    min={props.minVertexId} max={props.maxVertexId}
                    defaultValue={props.minVertexId} />

                <label>to id</label>
                <input type="number" id="to" name="to" required
                    min={props.minVertexId} max={props.maxVertexId}
                    defaultValue={props.maxVertexId} />

                <label>by (km, co)</label>
                <input type="text" id="by" name="by" required 
                    defaultValue="km" size={4}/>

                <button type="submit" id="go">
                    Go
                </button>
                <br/>
                Maximum: {props.maxVertexId} and minimum :{props.minVertexId}
                are border values for vertex id.
            </form>

          </Layout>
}

index.getInitialProps = async (appContext: AppContext) => {
  return {
    minVertexId : 0,
    maxVertexId : 4
  }
}
