function createPost(){
  //create template functions
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);

  //get post values
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  let author = document.getElementById('author').value;

  debugger

  //add page html to main
  document.querySelector('main')[0].innerHTML += pageTemplate();

  //get element to attach post HTML to
  let postElement = document.getElementById('post')



  //add values to be interpolated by postTemplate function and get a string of dynamic HTML
  let postHTML = postTemplate({'title': title, 'body': body, 'author': author});

  




}

function postComment(){

}
