import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { DataService, User } from '../../core/data.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
  private data = inject(DataService);
  // computed pour mieux trier ensuite ?
  users = computed<User[]>(() => this.data.users());

  remove(id: number) {
    if (confirm('Supprimer cet utilisateur ?')) {
      this.data.remove(id);
    }
  }
}