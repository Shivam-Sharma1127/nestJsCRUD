import { Injectable, Param } from "@nestjs/common"

@Injectable()
export class BookService{
    addBook():string{
        return"this will add book"
    }
    deleteBook(): string{
        return "This will delete the book"
    }
      updateBook(): string{
          return "This will update the book"
      } 
      findAllBook(): string{
          return "This will find all the book"
      }   
      findBookById(@Param() params): string{
          console.log(params.bookId)
          return `This action will return a #${params.bookId} book`;
      }
}