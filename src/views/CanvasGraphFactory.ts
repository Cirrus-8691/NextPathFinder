import Graph from "../domain/Graph";
import Infos from "./interfaces/Infos";

/**
 * To build graph as expected by ihm
 */
export default class CanvasGraphFactory {
    /**
     * Build the graph "view"
     * @param graph
     */
    public static Build(graph : Graph) : Infos
    {
        const infos : Infos = {
            minVertexId : graph.Info.minVertexId,
            maxVertexId : graph.Info.maxVertexId,
            vertices : [
                {x: 0, y: 0}, // id : 0
                {x: 1, y: 1}, // id : 1
                {x: 0, y: 2}, // id : 2
                {x: 0, y: 1}, // id : 3
                {x: 1, y: 0}, // id : 4
            ],
            edges : [
                //                                                       km ,  co2
                { id1: 0, v1: {x: 0, y:0 }, id2:4, v2: {x:1, y:0 }, m1: 125.6, m2: 18.7},
                { id1: 4, v1: {x: 1, y:0 }, id2:1, v2: {x:1, y:1 }, m1:   5.3, m2:  0.2},
                { id1: 3, v1: {x: 0, y:1 }, id2:1, v2: {x:1, y:1 }, m1:  30.7, m2:  4.0},
                { id1: 0, v1: {x: 0, y:0 }, id2:3, v2: {x:0, y:1 }, m1:  80.2, m2:  4.0},
                { id1: 3, v1: {x: 0, y:1 }, id2:2, v2: {x:0, y:2 }, m1:  30.8, m2:  4.0},

            ]
        };
        return infos;
    };
}