using my.bookshop as my from '../db/data-model';

service CatalogService {
   entity Books @(restrict : [
            {
                grant : [ 'READ' ],
                to : [ 'BooksViewer' ]
            },
            {
                grant : [ '*' ],
                to : [ 'BooksManager' ]
            }
        ]) as projection on my.Books;
}