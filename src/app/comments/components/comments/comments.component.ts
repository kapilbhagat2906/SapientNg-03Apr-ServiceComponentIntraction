import { Component, OnInit } from '@angular/core';
import { CommentService } from '../../service/comment.service';
import { CommentModel } from '../../types/CommentModel';

@Component ({
    selector: 'app-comments',
    templateUrl: './comments.component.html',
    styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
    comments: any;
    isLoading: boolean = true;
    title: string = "Comments Section";
    constructor (
        private commentsService: CommentService
    ) { }

    async ngOnInit () {
        this.comments = await this.commentsService.getComments();
        this.isLoading = false;
    }
}
