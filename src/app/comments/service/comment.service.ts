import { Injectable } from '@angular/core';
import commentsData from '../mock/comments.mock.json';
import { CommentModel } from '../types/CommentModel';

@Injectable()
export class CommentService {
    getComments (): Promise<Array<CommentModel>> {
        return new Promise<Array<CommentModel>> ((resolve, reject) => {
            setTimeout (resolve, 1000, commentsData);
        });
    }
}
