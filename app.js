let submitBtn = document.querySelector('.btn');



class BookList{
    constructor(title,author,isbn){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
        console.log(this);
    }
}

let user = new BookList('boxTrolls','Doey', 00003001)
console.log(user);

submitBtn.addEventListener('click',function(){
    let titleInput = document.querySelector('#title').value;
    let authorInput = document.querySelector('#author').value;
    let isbnInput = document.querySelector('#isbn').value;
    
  let book = new BookList(titleInput,authorInput,isbnInput);
  let newlist = document.createElement('ul');
  newlist.innerHTML =` 
  <li>${book.title}</li>
  <li>${book.author}</li>
  <li>${book.isbn}</li>
  <button class="btn remove"> Remove </button>`;
  let bookSection = document.querySelector('.book-section');
  bookSection.append(newlist);
  console.log('working fine !');
  clear();


 
})

let removeBtn = document.querySelector('.book-section');
removeBtn.addEventListener('click', function(e){
    let remove = e.path[0];
    
    if(remove.innerText === 'REMOVE'){
        remove.parentElement.remove();
        console.log('Removed!');
    }
    
})

function clear(){
    document.querySelector('#title').value='';
    document.querySelector('#author').value='';
    document.querySelector('#isbn').value='';
}

