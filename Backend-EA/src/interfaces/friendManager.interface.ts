import { ObjectId } from "mongoose";


export interface FriendManager{
    idUser: ObjectId, //El usuario creador
    restrictPublications: ObjectId[], //Con qué usuarios NO quiere compartir sus publicaciones
    restrictActivities: ObjectId[], //Con qué usuarios NO quiere compartir sus actividades
    title:string, //Escribir porque quiere restringir sus actividades y/o publicaciones a los usuarios que tiene restringidos ejm: familia, no me caen bien, ...
    blockRestricted:boolean //Si quiere bloquear a los usuarios en qüestion o no
}