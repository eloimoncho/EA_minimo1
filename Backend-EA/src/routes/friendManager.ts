import { Request, Response, Router } from "express";
import { postOneFriendManager, updateOneFriendManager, getOneFriendManager, deleteOneFriendManager, getAllAvailableFriendManagers } from "../controllers/friendManager";
import { logMiddleware } from "../middleware/log";

const router = Router(); 

// (1) Get (obtain) a particular activity ...
router.get("/getFriendManager/:idFriendManager", getOneFriendManager);

// (2) Post (creation) of an activity ...
router.post("/createFriendManager",postOneFriendManager);

// (3) Put (edition) of an activity ...
router.put("/updateFriendManager/:iFriendManager",updateOneFriendManager);

// (4) Delete an activity ...
router.delete("/deleteFriendManager/:idFriendManager", deleteOneFriendManager);

// (5) Get all activities ...
router.get("/getAllFriendManagers", getAllAvailableFriendManagers);


export {router};