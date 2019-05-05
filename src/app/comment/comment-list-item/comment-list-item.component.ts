import { Component, OnInit, Input,Output , EventEmitter} from "@angular/core";
import { CommentService } from "../comment.service";

@Component({
  selector: "app-comment-list-item",
  templateUrl: "./comment-list-item.component.html",
  styleUrls: ["./comment-list-item.component.css"]
})
export class CommentListItemComponent implements OnInit {
  @Input() comment: any;

  @Output()
  remove = new EventEmitter();

  constructor(private commentService: CommentService) {}

  onRemoveTodo(id: Number) {
    this.remove.emit(id);
  }

  ngOnInit() {}
}
