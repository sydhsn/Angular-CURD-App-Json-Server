import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CommentComponent } from "./comment/comment.component";
import { CommentListComponent } from "./comment-list/comment-list.component";
import { CommentListItemComponent } from "./comment-list-item/comment-list-item.component";
import { AppMaterialModule } from "../app-material/app-material.module";
@NgModule({
  declarations: [
    CommentComponent,
    CommentListComponent,
    CommentListItemComponent
  ],
  imports: [CommonModule, AppMaterialModule]
})
export class CommentModule {}
