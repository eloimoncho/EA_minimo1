import {  Schema, Types, model, Model } from "mongoose";
import { FriendManager } from "../interfaces/friendManager.interface"; 


const FreindSchema = new Schema<FriendManager>(
    {
        idUser:{
            type: Schema.Types.ObjectId,
            ref:'users',
            required:true,
        },
        restrictPublications:{
            type: [Schema.Types.ObjectId],
            ref:'users',
            required:true,
        },
        restrictActivities:{
            type: [Schema.Types.ObjectId],
            ref:'users',
            required:true,
        },
        title:{
            type: String,
            required:true,
        },
        blockRestricted:{
            type: Boolean,
            required:false,
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

//Once the Schema is created, it must be implemented
//1st argument ('users') is the name of the collection
//2nd argument (UserSchema) is what it feds it
const FriendManagerModel = model('friendManager', FreindSchema);

export default FriendManagerModel;