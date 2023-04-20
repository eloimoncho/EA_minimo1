export interface FriendManager{
    _id:string
    idUser: string 
    restrictPublications: [string]
    restrictActivities: [string]
    title:string
    blockRestricted:boolean
    createdAt: string;
    updatedAt: string;

}