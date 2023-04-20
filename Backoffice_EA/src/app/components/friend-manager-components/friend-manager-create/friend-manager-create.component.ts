import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FriendManagerService } from 'src/app/services/friendManager';

@Component({
  selector: 'app-friend-manager-create',
  templateUrl: './friend-manager-create.component.html',
  styleUrls: ['./friend-manager-create.component.css']
})
export class FriendManagerCreateComponent {
  
  friendManagerForm: FormGroup | any;
  isModalOpen:boolean=false;
  constructor(private formBuilder: FormBuilder, private friendManagerService: FriendManagerService, private router: Router) { 
    
    this.friendManagerForm = this.formBuilder.group({
      "idCreator": ['', Validators.required],
      "restrictPublications": ['', Validators.required],
      "restrictActivities": ['', Validators.required],
      "title": ['', Validators.required],
      "blockRestricted": ['', Validators.required],
      })
  }

  get f() {
    return this.friendManagerForm.controls;
  }

  onSubmit(): void {
    if (this.friendManagerForm.invalid) {
      return;
    }
    this.openModal();
  }

  confirmChanges(): void {
    const friendManagerData = this.friendManagerForm.value;
    console.log(friendManagerData);
    this.friendManagerService.addFriendManager(friendManagerData).subscribe(
      (response) => {
        console.log('Localización guardada correctamente:', response);
        // Aquí podrías redirigir a la página de éxito, por ejemplo
      },
      (error) => {
        console.error('Error al guardar location:', error);
        // Aquí podrías mostrar un mensaje de error al usuario
      }
    );
    this.closeModal();
  }
  

  onAcceptChanges(): void {
    this.confirmChanges();
  }
  onCancelChanges(): void {
    this.isModalOpen = false;
  }
  openModal(): void {
    this.isModalOpen = true;
  }
  closeModal(): void {
    this.isModalOpen = false;
  }
}
