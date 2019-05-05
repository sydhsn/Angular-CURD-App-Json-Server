import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Comment } from "./comment.model";

const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" })
};

@Injectable({
  providedIn: "root"
})
export class CommentService {
  commentsUrl = "http://localhost:3000/commentsList/";

  
  comment: Comment[];
  id: any;

  

  constructor(private http: HttpClient) {}

  

  getComments() {
    return this.http.get<Comment[]>(this.commentsUrl);
  }

  addComment(commentsList){
    return this.http.post(
       this.commentsUrl,      
        {
          name: commentsList.name,
          text: commentsList.text,
          date: commentsList.date,
          time: commentsList.time,
          thum: commentsList.thum,
          replys: commentsList.replys
        
      },
      httpOptions
    );

  }

  removeItem(id: number) {
    return this.http.delete<Comment[]>(this.commentsUrl+id);
  }

  
}
