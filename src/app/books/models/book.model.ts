import { IAuthor } from '@app/authors';
import { IGenre } from '@app/genres';

export class BookModel {
  public id!: number;
  public description!: string;
  public authorId!: number;
  public author!: IAuthor;
  public title!: string;
  public price!: number;
  public genres!: IGenre[];
  public previews!: any;
  public image!: string;
  public writingDate!: Date;
  public releaseDate!: Date;

  constructor(book: any) {
    this.id = book.id || 0;
    this.description = book.description || 'No description';
    this.authorId = book.authorId || 0;
    this.author = book.author || {};
    this.title = book.title || 'No title';
    this.price = book.price || 0;
    this.genres = book.genres || [{}];
    this.previews = book.previews || 'No preview here';
    this.image = book.image || 'No images';
    this.writingDate = book.writingDate || 'Book is still writing';
    this.releaseDate = book.releaseDate || 'Book is not released';
  }

}
