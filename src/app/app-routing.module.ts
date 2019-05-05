import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CommentComponent } from "./comment/comment/comment.component";
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: "", redirectTo: "/login", pathMatch: "full" },
  { path: "login", component: LoginComponent },
  { path: "home", component: CommentComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
