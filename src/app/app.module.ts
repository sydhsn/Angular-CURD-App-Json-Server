import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule,ReactiveFormsModule  } from '@angular/forms'; 
import { AppMaterialModule } from "./app-material/app-material.module";
import { CommentModule } from "./comment/comment.module";
import { LoginComponent } from './login/login.component';

import { DatePipe } from '@angular/common';
@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [
    BrowserAnimationsModule,
    AppMaterialModule,
    AppRoutingModule,
    CommentModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  exports: [AppMaterialModule],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule {}
