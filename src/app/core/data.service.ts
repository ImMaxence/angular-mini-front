import { Injectable, signal } from '@angular/core';

export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
}

@Injectable({ providedIn: 'root' })
export class DataService {
  private readonly STORAGE_KEY = 'users';

  users = signal<User[]>(this.load());

  private load(): User[] {
    try {
      const raw = localStorage.getItem(this.STORAGE_KEY);
      if (raw) return JSON.parse(raw) as User[];
    } catch {}
    return [
      { id: 1, firstName: 'Ada', lastName: 'Lovelace', email: 'ada@dev.io' },
      { id: 2, firstName: 'Alan', lastName: 'Turing',  email: 'alan@dev.io' },
    ];
  }

  private persist() {
    try {
      localStorage.setItem(this.STORAGE_KEY, JSON.stringify(this.users()));
    } catch {}
  }

  add(user: Omit<User, 'id'>) {
    const list = this.users();
    const nextId = list.length ? Math.max(...list.map(u => u.id)) + 1 : 1;
    this.users.set([...list, { id: nextId, ...user }]);
    this.persist();
  }

  remove(id: number) {
    this.users.set(this.users().filter(u => u.id !== id));
    this.persist();
  }

  update(user: User) {
    this.users.set(this.users().map(u => u.id === user.id ? user : u));
    this.persist();
  }

  clear() {
    this.users.set([]);
    this.persist();
  }
}
