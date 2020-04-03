import { Component, Input } from '@angular/core';
import { CommentModel } from 'src/app/comments/types/CommentModel';

@Component ({
    selector: 'app-comment',
    templateUrl: './comment.component.html',
    styleUrls: ['./comment.component.scss']
})
export class CommentComponent {
    @Input()
    comment: CommentModel;

    isCollapsed = false;
}
