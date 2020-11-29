import { NextApiRequest, NextApiResponse } from "next";

export default (request : NextApiRequest, response : NextApiResponse) => {
  try {
    console.log(new Date(Date.now()),"/api/hello");
    // ...
    response.status(200).json( { 
      ok: true,
      error : undefined,
      result : { a : 'a',b : 'b', c : 'c'}
    });
  }
  catch(error) {
    console.error(new Date(Date.now()), "/api/hello", error);
    response.status(500).json( { ok : false, error } );
  }
}
