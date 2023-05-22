import { createBrowserRouter } from "react-router-dom";
import Blog from "../BLog/Blog";
import Error from "../Error/Error";
import Main from "../layouts/Main";
import QuestionPart from "../QuestionPart/QuestionPart";
import Statistics from "../Statistics/Statistics";
import Topics from "../Topics/Topics";

 export const router=createBrowserRouter([
    {path:"/",element:<Main></Main>,children:[
        {path:"/",element:<Topics></Topics>,
          loader:()=>fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {path:"topics",element:<Topics></Topics>,
          loader:()=>fetch("https://openapi.programming-hero.com/api/quiz")
        },
        {path:"topic/:topicId",element:<QuestionPart></QuestionPart>,
        loader:async({params})=>{
          return fetch(`https://openapi.programming-hero.com/api/quiz/${params.topicId}`)
        },
      },
       
        {path:"statistics",element:<Statistics></Statistics>,
      loader:async()=>{
        return fetch("https://openapi.programming-hero.com/api/quiz")
      }
      },
        {path:"blog",element:<Blog></Blog>},
        {path:"*",element:<Error></Error>}
    ]},
   
 ]) 