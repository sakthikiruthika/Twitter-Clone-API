const {default:axios}=require("axios");
require('dotenv').config();
const url="https://api.twitter.com/1.1/search/tweets.json";


    class Twitter{
        get(query,count,maxId){
            return axios.get(url,{
                params:{
                    q:query,
                    count:count,
                    tweet_mode:"extended",
                    max_Id:maxId
                },
            

                // headers:{
                //     "Authorization":`Bearer AAAAAAAAAAAAAAAAAAAAABIYRAEAAAAAqvYS%2F9IW5JgfXwVkYigaOavuC10%3DdiquRcFRpFHtbx8jKHiWU85yIqaB5kvsWpoz6fQWbBarQ8XRt5`
                // }
                headers:{
                    "Authorization":`Bearer ${process.env.BEARER_TOKEN}`

                }
            

            })
        }
    }


    module.exports=Twitter;