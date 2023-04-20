import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FriendManager } from 'src/app/interfaces/friendManager';
import { FriendManagerService } from 'src/app/services/friendManager';

@Component({
  selector: 'app-friend-manager',
  templateUrl: './friend-manager.component.html',
  styleUrls: ['./friend-manager.component.css']
})
export class FriendManagerComponent implements OnInit{
  
  friendManager: FriendManager[] = [];
  filteredFriendManager: any[] = [];
  //idPublicationComment: string = 'id';
  //numPage: string='3'; //PONER ALGUN TIPO DE PÁGINAS PARA QUE AL CAMBIAR DE LA PAGINA 1 A LA 2 SE OBTENGAN LOS COMENTARIOS
  searchTerm: string = '';

  constructor(private friendManagerService: FriendManagerService, private router: Router) {}
  
  
  ngOnInit(): void {
    this.friendManagerService.getAllFriendManagers().subscribe(data=> {
      this.friendManager = data;
      console.log(this.friendManager[0].title);
    }, error => {
      console.log(error);
    })
  }

  showDetails(friendManager: any): void {
    this.router.navigate(['/friend-manager-details', friendManager._id]);
  }

  showEdit(friendManager: any): void {
    this.router.navigate(['/friend-manager-edit', friendManager._id]);
  }

  search() {
    if (this.searchTerm.trim() !== '') {
      this.filteredFriendManager = this.friendManager.filter((friendManager) =>
      friendManager.createdAt.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
    } else {
      this.filteredFriendManager = this.friendManager;
      console.log(this.filteredFriendManager);
    }
  }
}
