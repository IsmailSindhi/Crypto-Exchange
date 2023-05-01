import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(req: NextApiRequest, res: NextApiResponse){
    if (req.method !== "POST") {
        return res.status(405).send({ message: 'Only Post requests are allowed'})
    }
    
    try{
        const { send, recive,sendNetwork,reciveNetwork } = req.body;
        console.log(req.body)
        const response = await axios.get("https://api.easybit.com/pairInfo", {params: {
            send: send,
            receive: recive,
            // amount: sendAmount,
            // sendNetwork: sendNetwork,
            // receiveNetwork: reciveNetwork,
          },headers : { "API-KEY": "test_G5Qe3HIcf0vxqesnfDeT7e2Ma"}});
          console.log(response.status);
          console.log("api");
          if (response.status === 200) {

            if(response.data.success === 1){
                return res.status(200).json({data: response.data});
                
            }else{
                console.log(response.data.success)
            }
         }
            // res.end();
        }catch(err: any){
        console.log(err.response.data.errorMessage);
        return res.status(500).json({data: err.response.data});    
    }
}