// select element 
const title = document.querySelector('#title');
const author = document.querySelector('#author');
const year = document.querySelector('#year');
const button = document.querySelector('.btn');
const show = document.querySelector('#book-list');
const removeBtn = document.querySelector('.rbtn');


// event listener 

button.addEventListener('click',booklist);
removeBtn.addEventListener('click',removeBook)

// function 

function booklist(e){
    if(show.hasChildNodes()){
        removeBtn.style.visibility = 'visible';
    }
    e.preventDefault();
    if(title.value == '' && author.value == '' && year.value == ''){
        alert('Enter Something ');
    }
    else{
        let row = document.createElement('tr');
        let titlerow = document.createElement('th');
        titlerow.innerHTML = title.value;
        row.appendChild(titlerow);
        let authorow = document.createElement('th');
        authorow.innerHTML = author.value;
        row.appendChild(authorow);
        let yearrow = document.createElement('th');
        yearrow.innerHTML = year.value;
        row.appendChild(yearrow);
        show.appendChild(row);
        title.value='';
        author.value ='';
        year.value = '';
    }

}

function removeBook(e){
    e.preventDefault();
    show.removeChild(show.childNodes[0])
}