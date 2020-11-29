
/**
* FindPath Parameters of url request
 */
export interface FindPathParameters {
    /** from vertex id */
    from : number; 
    /** to vertex id */
    to : number;
    /** by "métrique" : { "km", "co" } */
    by : string;
}
