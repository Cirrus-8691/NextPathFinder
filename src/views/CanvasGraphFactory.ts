import { GEdge, GVertex } from "../components/Graph";
import Graph, { ByEcoPath, ByFastestPath } from "../domain/Graph";
import { Vertex } from "../domain/interfaces/Vertex";

export interface Infos {
    minVertexId : number;
    maxVertexId : number;
    vertices : GVertex[];
    edges : GEdge[];
  }
/**
 * To build path as expected by ihm
 */
export default class CanvasGraphFactory {
    /**
     * Build the path "view"
     * @param graph
     */
    public static Build(graph : Graph)
    {
        const infos : Infos = {
            minVertexId : graph.Info.minVertexId,
            maxVertexId : graph.Info.maxVertexId,
            vertices : [
                {x: 0, y: 0},  // id : 0
                {x: 1, y: 1},  // id : 1
                {x: 0, y: 2}, // id : 2
                {x: 0, y: 1}, // id : 3
                {x: 1, y: 0}, // id : 4
            ],
            edges : [
                //                                                       km ,  co2
                { id1: 0, v1: {x: 0, y:0 }, id2:4, v2: {x:1, y:0 }, m1: 125.6, m2: 18.7},
                { id1: 4, v1: {x: 1, y:0 }, id2:1, v2: {x:1, y:1 }, m1: 125.6, m2: 18.7},
                { id1: 3, v1: {x: 0, y:1 }, id2:1, v2: {x:1, y:1 }, m1: 125.6, m2: 18.7},
                { id1: 0, v1: {x: 0, y:0 }, id2:3, v2: {x:0, y:1 }, m1: 125.6, m2: 18.7},
                { id1: 3, v1: {x: 0, y:1 }, id2:2, v2: {x:0, y:2 }, m1: 125.6, m2: 18.7},

            ]
        };
        return infos;
    };
}