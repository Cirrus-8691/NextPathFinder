import { NextApiRequest, NextApiResponse } from "next";
import Graph from "../../domain/Graph";
import { FindPathParameters } from "../../domain/interfaces/FindPathParameters";
import PathFactory from "../../views/PathFactory";

/**
 * Controller to find a path
 */
export default (request : NextApiRequest, response : NextApiResponse) => {
  try {
    console.log(new Date(Date.now()),"/api/find");

    const reqParams = request.query;
    const params : FindPathParameters = {
      from : +reqParams.from, // cast "from" string to number
      to : +reqParams.to,   // cast "to"   string to number
      by : reqParams.by as string
    }
    console.log(new Date(Date.now()),`/api/find - graphPage from vertex id:${params.from} to vertex id:${params.to} by ${params.by}`);

    const graph = new Graph();
    const path  = PathFactory.Build( params, graph.find(params) );

    response.status(200).json( path );
  }
  catch(error) {
    console.error(new Date(Date.now()), "/api/find", error);
    response.status(500).json( { ok : false, error } );
  }
}
