/******************************************
Treehouse Techdegree:
FSJS project 2 - List Filter and Pagination
******************************************/
   
// Study guide for this project - https://drive.google.com/file/d/1OD1diUsTMdpfMDv677TfL1xO2CEkykSz/view?usp=sharing


//TODO: Delete existing comments and clean up my comments.
//TODO: Go through and refactor code to make sure it is as concise as possible.
//TODO: Double check progressive enhancement. Make sure core functionality can be
//completed wihtout JavaScript turned on.
//TODO: Test on all major browsers.

/*** 
   Add your global variables that store the DOM elements you will 
   need to reference and/or manipulate. 
   
   But be mindful of which variables should be global and which 
   should be locally scoped to one of the two main functions you're 
   going to create. A good general rule of thumb is if the variable 
   will only be used inside of a function, then it can be locally 
   scoped to that function.
***/

//You need two global variables.
//Store the student list items elements in the studentlist variable.
//log out hte variable storing the list to ensure it equals the list of li items
//and not the container of the li elements. (not sure what this means)
//Create a variable to store the number of items to show on each "page" which is 10.

//I think it could work the way I had as well.
const ul = document.querySelector('.student-list');
const studentList = [...ul.children];
const recordsPerPage = 10;

//TODO: Remove before submitting.
console.log(studentList);

/*** 
   Create the `showPage` function to hide all of the items in the 
   list except for the ten you want to show.

   Pro Tips: 
     - Keep in mind that with a list of 54 students, the last page 
       will only display four.
     - Remember that the first student has an index of 0.
     - Remember that a function `parameter` goes in the parens when 
       you initially define the function, and it acts as a variable 
       or a placeholder to represent the actual function `argument` 
       that will be passed into the parens later when you call or 
       "invoke" the function 
***/

function showPage(list, page) {
   let startIndex = (page * recordsPerPage) - recordsPerPage;
   let endIndex = page * recordsPerPage;

   for (let i = 0; i < list.length; i++) {
      if (list[i] >= startIndex && list[i] < endIndex) {
         list[i].style.display = 'block';
         } else {
            list[i].style.display = 'none';
               }
   }
}

//TODO: Delete after.
console.log(showPage(studentList, 1));


/*** 
   Create the `appendPageLinks function` to generate, append, and add 
   functionality to the pagination buttons.
***/

//change back to a variable like they have the guide?
//had to use math.ceil to round up because 54/10 was 5.4 and I was getting 5 pages and I needed 6.
function addPaginationLinks (list) {
   let totalPages = Math.ceil(list.length / recordsPerPage);
   const newDiv = document.createElement('div');
   newDiv.className = 'pagination';
   const divPage = document.querySelector('.page');
   divPage.appendChild(newDiv);
   const ulPagLinks = document.createElement('ul');
   newDiv.appendChild(ulPagLinks);
   //showPage();
   //for every page, add li and a tags with the page number text
   for (let i = 1; i <= totalPages; i++) {
      const li = document.createElement('li');
      //li.innerHTML = list[i];
      ulPagLinks.appendChild(li);
      const a = document.createElement('a');
      li.appendChild(a);
      a.textContent = i;


   }
   //Add an event listener to each a tag. When they are clicked
   //call the showPage function to display the appropriate page
   
   //Loop over pagination links to remove active class from all links
   //Add the active class to the link that was just clicked. You can
   //identify that clicked link using event.target
}

      //I think I need to move the event listeners outside of this function.
      a.addEventListener('click', (event) => {
         showPage(list, i);
         //add if statements that match the text of the links to set the correct actions for each one.
      });


addPaginationLinks(studentList);

// Remember to delete the comments that came with this file, and replace them with your own code comments.