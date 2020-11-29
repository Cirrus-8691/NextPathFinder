import { ByEcoPath, ByFastestPath } from "../domain/Graph";
import { Vertex } from "../domain/interfaces/Vertex";

/**
 * To build path as expected by ihm
 */
export default class CanvasGraphFactory {
    /**
     * Build the path "view"
     * @param graph
     */
    public static Build(graph : ReadonlyArray<Vertex>)
    {
      return  { 
            vertices : [
                "0, 0", // id : 0
                "1, 1", // id : 1
                "0, 2", // id : 2
                "0, 1", // id : 3
                "1, 0", // id : 4
            ],
            edges : [
            //  id, x, y   id, x, y,  km ,  co2
                `0, 0, 0,   4, 1, 0, 125.6, 18.7`,
                `4, 1, 0,   1, 1, 1,  5.3, 0.2`,
                `3, 0, 1,   1, 1, 1, 30.7, 4.0`,
                `0, 0, 0,   3, 0, 1, 80.2, 4.0`,
                `3, 0, 1,   2, 0, 2, 30.8, 4.0`
            ],
            metrics : [
                ByFastestPath,
                ByEcoPath
            ]
        };
    };
}