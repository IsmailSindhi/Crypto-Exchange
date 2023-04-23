import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "GET") {
        return res.status(405).send({ message: 'Only Get requests are allowed'})
    }
    
    try{
        const response = await axios.get("https://api.easybit.com/currencyList", {headers : { "API-KEY": "test_G5Qe3HIcf0vxqesnfDeT7e2Ma"}})

        return res.status(200).json({data: response.data})
    }catch(err){
        console.log(err);
        return res.status(500);
    }
}