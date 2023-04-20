import { Activity } from "../interfaces/activity.interface";
import CommentModel from "../models/comment";
import paginate from 'mongoose-paginate-v2';
import PublicationModel from "../models/publication";
import ActivityModel from "../models/activity";




// (1) Get (obtain) one activity ...
const getActivity = async(idActivity: string) => {
    const responseItem = await ActivityModel.findOne({_id: idActivity })
    return responseItem;
};

// (2) Post (creation) of an activity ...
const postActivity = async(item: Activity) => {
    const responseItem = await ActivityModel.create(item);
    return responseItem;
};

// (3) Put (edition) of a activity ...
const updateActivity = async(idActivity:string, item: Activity) => {
    const responseItem = await ActivityModel.updateOne({_id: idActivity},item,{new: true});
    return responseItem;
};

// (4) Delete activity ...
const deleteActivity = async(idActivity: string) => {
    const responseItem = await ActivityModel.findOneAndRemove({_id: idActivity});
    return responseItem;
}

// (5) Get all activities ...
const getAllActivities = async() => {
    const responseItem = await ActivityModel.find({})
    return responseItem;
};

export{getActivity, postActivity, updateActivity, deleteActivity, getAllActivities}