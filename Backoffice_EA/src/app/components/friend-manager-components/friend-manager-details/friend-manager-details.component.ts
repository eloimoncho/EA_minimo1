import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FriendManager } from 'src/app/interfaces/friendManager';
import { FriendManagerService } from 'src/app/services/friendManager';

@Component({
  selector: 'app-friend-manager-details',
  templateUrl: './friend-manager-details.component.html',
  styleUrls: ['./friend-manager-details.component.css']
})
export class FriendManagerDetailsComponent {
  friendManagerData!: FriendManager;
  friendManagerId!: string;
  isModalOpen:boolean=false;
  
  constructor(private route: ActivatedRoute, private friendManagerService: FriendManagerService,private router:Router) {}

  ngOnInit(): void {
    this.loadPublicationData();
  }
  loadPublicationData(): void {
    const url = this.route.snapshot.url.join('/');
    const parts = url.split('/');
    this.friendManagerId = parts[parts.length - 1];
    console.log(this.friendManagerId);
    this.friendManagerService.getFriendManager(this.friendManagerId).subscribe(friendManagerData=>{
      this.friendManagerData=friendManagerData;
      console.log(friendManagerData);
    });
  }
}
