import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserCardsComponent } from '../user-cards/user-cards.component';

@Component({
  selector: 'app-users-list',
  standalone: true,
  imports: [CommonModule, FormsModule,UserCardsComponent],
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent {
  email: string = ''; 

  allUsers = [
    {
      username: 'Noura El-Brashy',
      email: 'noura.elbrashy@gmail.com',
      phone: '0123456789',
      profilePic: './../../../assets/photo/pic2.jpg',
      isVeerified: true
    },
    {
      username: 'salma samy',
      email: 'salma.samy@gmail.com',
      phone: '0123456789',
      profilePic: './../../../assets/photo/pic3.jpg',
      isVeerified: false
    },
    {
      username: 'Ramy walid',
      email: 'ramy.walid@gmail.com',
      phone: '0123456789',
      profilePic: './../../../assets/photo/pic1.jpg',
      isVeerified: false
    },
    {
      username: 'lara omar',
      email: 'lara.omar@gmail.com',
      phone: '0123456789',
      profilePic: './../../../assets/photo/pic4.jpg',
      isVeerified: true
    }
  ];

  filteredUsers = this.allUsers;

  searchNow() {
    this.filteredUsers = this.allUsers.filter(user =>
      user.email.toLowerCase().includes(this.email.toLowerCase())
    );
  }

  resetNow() {
    this.email = '';
    this.filteredUsers = this.allUsers;
  }
}
