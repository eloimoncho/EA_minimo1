import { FriendManager } from "../interfaces/friendManager.interface"; 
import FriendManagerModel from "../models/friendManager";
import paginate from 'mongoose-paginate-v2';


// (1) Get (obtain) one FriendManager ...
const getFriendManager = async(idFriendManager: string) => {
    const responseItem = await FriendManagerModel.findOne({_id: idFriendManager })
    return responseItem;
};

// (2) Post (creation) of a friendManager ...
const postFriendManager = async(item: FriendManager) => {
    const responseItem = await FriendManagerModel.create(item);
    return responseItem;
};

// (3) Put (edition) of a friendManager ...
const updateFriendManager = async(idFriendManager:string, item: FriendManager) => {
    const responseItem = await FriendManagerModel.updateOne({_id: idFriendManager},item,{new: true});
    return responseItem;
};


// (4) Delete comment ...
const deleteFriendManager = async(idFriendManager: string) => {
    const responseItem = await FriendManagerModel.findOneAndRemove({_id: idFriendManager});
    return responseItem;
}

// (5) Get all comments
const getAllFriendManagers = async() => {
    const responseItem = await FriendManagerModel.find({ })
    return responseItem;
};


export {getFriendManager, postFriendManager, updateFriendManager, deleteFriendManager, getAllFriendManagers};
