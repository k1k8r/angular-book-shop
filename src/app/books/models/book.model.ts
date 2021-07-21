import { IAuthor } from '@app/authors';
import { IGenre } from '@app/genres';

export class BookModel {

  public id!: number;
  public description!: string;
  public authorId!: number;
  public author!: IAuthor;
  public title!: string;
  public price!: number | string;
  public genres!: IGenre[];
  public previews!: any;
  public image!: string;
  public writingDate!: Date;
  public releaseDate!: Date;

  constructor(book: any) {
    this.id = book.id;
    this.description = book.description || 'No description';
    this.authorId = book.authorId;
    this.author = book.author || 'No author';
    this.title = book.title || 'No title';
    this.price = book.price || 'No price';
    this.genres = book.genres || 'No genres';
    this.previews = book.previews || 'No preview here';
    this.image = book.image || 'No images';
    this.writingDate = book.writingDate || 'Book is still writing';
    this.releaseDate = book.releaseDate || 'Book is not released';
  }

}
