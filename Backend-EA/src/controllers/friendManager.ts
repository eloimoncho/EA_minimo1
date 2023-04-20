import { Request,Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { getFriendManager, postFriendManager, updateFriendManager, deleteFriendManager, getAllFriendManagers } from "../services/friendManager";



// (1) Get (obtain) friendManager ...
const getOneFriendManager=async({params}:Request,res:Response)=>{
    try{
        const {idFriendManager}=params;
        const response=await getFriendManager(idFriendManager); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_THAT_FRIENDMANAGER");
    }
};

// (2) Post (creation) of a friendManager ...
const postOneFriendManager=async ({body}:Request,res:Response)=>{
    try{
        const response=await postFriendManager(body);
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    }catch(e){
        handleHttp(res,"ERROR_POST_FRIENDMANAGER");
    }
};

// (3) Put (edition) of a friendManager ...
const updateOneFriendManager=async ({params,body}:Request,res:Response)=>{
    try{
        const {idFriendManager}=params;
        const response=await updateFriendManager(idFriendManager,body);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_UPDATE_PUBLICATION");
    }
};

// (4) Delete friendManager ...
const deleteOneFriendManager=async ({params}:Request,res:Response)=>{
    try{
        const {idFriendManager}=params;
        const response=await deleteFriendManager(idFriendManager);
        res.send(response);
    } catch(e){
        handleHttp(res,"ERROR_DELETE_PUBLICATION");
    }
};

// (5) Get all friendManagers
const getAllAvailableFriendManagers=async(req:Request,res:Response)=>{
    try{
        const response=await getAllFriendManagers(); 
        const data=response ? response:"NOT_FOUND";
        res.send(data);
    } catch(e){
        handleHttp(res,"ERROR_GET_ALL_PUBLICATIONS");
    }
};



export{postOneFriendManager, updateOneFriendManager, getOneFriendManager, deleteOneFriendManager, getAllAvailableFriendManagers};
