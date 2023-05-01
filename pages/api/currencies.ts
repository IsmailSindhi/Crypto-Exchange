import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "GET") {
        return res.status(405).send({ message: 'Only Get requests are allowed'})
    }
    
    try{
        const response = await axios.get("https://api.easybit.com/currencyList", {headers : { "API-KEY": "test_G5Qe3HIcf0vxqesnfDeT7e2Ma"}})
        
        if(response.data.success === 1){
            console.log(response)
            return  res.status(200).json({data: response.data});
            
        }else{
            console.log(response)
            return  res.status(500).json({data: response});

        };
    }catch(err){
        console.log(err);
        return res.status(500);
    }
}