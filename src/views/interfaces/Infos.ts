import { GEdge, GVertex } from "../../components/Graph";

/**
 * Graph informations
 */
export default interface Infos {
    minVertexId : number;
    maxVertexId : number;
    vertices : GVertex[];
    edges : GEdge[];
}