import {NextResponse} from 'next/server';
import connect from '../../../db/db';
import Post from '../../../models/Post';

 export const GET=async(request)=>{
  
         try{
            await connect();
            const posts=await Post.find()
             return new NextResponse(posts, {status: 200})  

         }catch(err){
           return new NextResponse("database error", {status: 500})  
         }
    
        }
