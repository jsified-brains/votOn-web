import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../../ModelsTypesAndEnums/Models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('/api/users');
    }
}
