import { NextApiRequest, NextApiResponse } from "next";
import Graph from "../../domain/Graph";
import CanvasGraphFactory from "../../views/CanvasGraphFactory";

/**
 * Controller to get graph informations
 */
export default (request : NextApiRequest, response : NextApiResponse) => {
  try {
    console.log(new Date(Date.now()),"/api/graphInfos");

    const graph = new Graph();
    const infos  = CanvasGraphFactory.Build( graph );

    response.status(200).json( infos );
  }
  catch(error) {
    console.error(new Date(Date.now()), "/api/graphInfos", error);
    response.status(500).json( { ok : false, error } );
  }
}
