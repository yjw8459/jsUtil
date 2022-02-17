function Book(title, price) {
  this.title = title;
  this.price = price;
  this.printTitle = () => console.log(this.title);
}

function BookPrototype(prototype) { //함수 안에서 this는 함수 
  this.prototype = prototype;
  this.clone = () => {
    let book = new Book();
    book.title = prototype.title;
    book.price = prototype.price;
    
    return book;
  };
}

let sampleBook = new Book('JavaScript', 15);
let prototype = new BookPrototype(sampleBook);
console.log(prototype);
let book = prototype.clone();
console.log(book);
book.printTitle();