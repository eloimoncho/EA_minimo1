import { HttpClient,HttpHeaders, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FriendManager } from '../interfaces/friendManager'; 

@Injectable({
  providedIn: 'root'
})
export class FriendManagerService {

  friendManager!: FriendManager ;
  message!: String;
  private apiURL = 'http://localhost:5432/friendManager/';
  constructor(private http: HttpClient) { }

  // (1) Post (creation) of a friendManager ...
  addFriendManager(friendManager: FriendManager): Observable<FriendManager>{
    return this.http.post<FriendManager>(this.apiURL + 'createFriendManager',friendManager);
  }
  
  // (2) Put (edition) of a friendManager ...
  editFriendManager(friendManager:FriendManager, idFriendManager: string): Observable<FriendManager>{
    return this.http.put<FriendManager>(this.apiURL + 'updateidFriendManager/' + idFriendManager, friendManager);
  }
  
  // (3) Delete a friendManager ...
  deleteFriendManager(idFriendManager: string):  Observable<FriendManager>{
    return this.http.delete<FriendManager>(this.apiURL + 'deleteFriendManager/' + idFriendManager);
  } 
  
  // (4) Get all friendManagers ...
  getAllFriendManagers():  Observable<FriendManager[]>{
    return this.http.get<FriendManager[]>(this.apiURL + 'getAllFriendManagers');
  } 
  
  // (5) Get (obtain) one friendManager ...
  getFriendManager(idFriendManager: string): Observable<FriendManager> {
    return this.http.get<FriendManager>(this.apiURL + 'getidFriendManager/'+ idFriendManager);
  }

};