/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/

/*I started to refactor but the functions to create/append were not 
making my code smaller just added more function code so I left my code 
the same.*/

//TODO: Fix the active button issue once I receive help.

//grabbing my intital elements, putting my collection into an array, and setting the records to show per page.
const ul = document.querySelector('.student-list');
const studentList = [...ul.children];
const recordsPerPage = 10;

//function to show or hide the correct index of students on each page.
function showPage(list, page) {
   let startIndex = (page * recordsPerPage) - recordsPerPage;
   let endIndex = page * recordsPerPage;

   for (let i = 0; i < list.length; i++) {
      if (i >= startIndex && i < endIndex) {
         list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
               }
   }
}

/*function to decide how many pages there should be depending on the list of students,
add the number of button links for each page, add an event listenere and call the show page
funtion for each event listener. 
*/

function addPaginationLinks (list) {
   let totalPages = Math.ceil(list.length / recordsPerPage);
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   const divPage = document.querySelector('.page');
   divPage.appendChild(newDiv);
   const ulPagLinks = document.createElement('ul');
   newDiv.appendChild(ulPagLinks);
   showPage(studentList, 1);
   //for every page, add li and a tags with the page number text
   for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      ulPagLinks.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.textContent = i;
      a.href = '#';
      let aList = document.querySelectorAll('a');
      //adding an event listener to each link
      for (let j = 1; j <= aList.length; j++) {
         a.addEventListener('click', (event) => {
            showPage(studentList, j);
            li.firstChild.className = '';
            event.target.className = 'active';
      });
      }
      li.firstChild.className = 'active';
   }
}

//calling my pagination function
addPaginationLinks(studentList);