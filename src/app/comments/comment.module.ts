import { NgModule } from '@angular/core';
import { CommentComponent, CommentsComponent } from './components/index';
import { CommentService } from './service/comment.service';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
    declarations: [
        CommentsComponent,
        CommentComponent
    ],
    providers: [
        CommentService
    ],
    imports: [
        BrowserModule
    ],
    exports: [
        CommentsComponent,
        CommentComponent
    ]
})
export class CommentsModule {

}
