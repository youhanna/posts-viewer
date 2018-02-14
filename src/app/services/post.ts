import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { Post } from "../posts/models/post";

@Injectable()
export class PostService {
    private API_PATH = 'https://jsonplaceholder.typicode.com';

    constructor(private http: HttpClient){}

    loadPosts(): Observable<Post[]> {
        return this.http.get<Post[]>(`${this.API_PATH}/posts`);
    }
}