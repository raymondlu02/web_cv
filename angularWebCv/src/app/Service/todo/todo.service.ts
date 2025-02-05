import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable, take} from "rxjs";


export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

@Injectable({
  providedIn : "root"
})
export class todoService {
  constructor( private http: HttpClient) {}

  pokemonDitto(): Observable<Post[]> {
    const link : string = "https://jsonplaceholder.typicode.com/posts";
    return this.http.get<Post[]>(link);
  }

}
