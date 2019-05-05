import { Component, OnInit ,Output,EventEmitter} from "@angular/core"
import { CommentService } from "../comment.service";
import { Comment } from "../comment.model";

@Component({
  selector: "app-comment-list",
  templateUrl: "./comment-list.component.html",
  styleUrls: ["./comment-list.component.css"]
})
export class CommentListComponent implements OnInit {
  isinputBlank = true;
  comment: Comment[];
  user:any =[{username:"admin",password:"admin"}];
  UserText:string='';  
  date:Number;
  time:'';
  
  
  constructor(private commentService: CommentService) {

    
  }

  
  
  getComment() {
    this.commentService.getComments().subscribe(res => (this.comment = res));
  }
  
  commentsList = {
    name: '',
    text: '',
    date: '',
    time: '',
    thum: "assets/images/1.jpeg",
    replys: []
  }
  

  onAdd(UserText) {
    if(UserText.value !="" ){
      this.isinputBlank = true;
      this.UserText = UserText.value;
      let today = new Date();        
      let dd = String(today.getDate()).padStart(2, '0');
      let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
      let yyyy = today.getFullYear();
      let ampm = today.getHours() >= 12 ? 'PM' : 'AM';
      let hours = today.getHours() % 12;
      hours = today.getHours() ? today.getHours() : 12; // the hour '0' should be '12'
      let minutes = today.getMinutes() < 10 ? '0'+today.getMinutes() : today.getMinutes();
      let strTime = hours + ':' + minutes + ' ' + ampm;
      this.commentsList = {
        name: this.user[0].username,
        text: this.UserText,
        date: dd +"/"+mm+"/"+yyyy,
        time: strTime,
        thum: "assets/images/1.jpeg",
        replys: []
      }  
      this.addDataMethood(this.commentsList);
      UserText.value='';  
    }
    else
    {      
         this.isinputBlank = false;
    }
      
    
  }

  addDataMethood(commentsList){
    this.commentService.addComment(commentsList).subscribe(()=> {
      this.getComment();
     });
  }
  onRemoveTodo(id) {
    this.commentService.removeItem(id).subscribe(()=> {
      this.getComment();
  });
    
  }


  
  ngOnInit() {
    this.getComment();
  }
}
