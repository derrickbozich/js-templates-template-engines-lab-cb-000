function createPost(){
  //create template functions
  let pageTemplate = _.template(document.getElementById("page-template").innerHTML);
  let postTemplate = _.template(document.getElementById("post-template").innerHTML);

  //get post values
  let title = document.getElementById('title').value;
  let body = document.getElementById('body').value;
  let author = document.getElementById('author').value;

  //add pageTemplate html to main (which only has a form initially)
  document.querySelector('main').innerHTML += pageTemplate();

  //get element to attach post HTML to
  let postElement = document.getElementById('post')

  //add values to be interpolated by postTemplate function and get a string of dynamic HTML for post
  let postHTML = postTemplate({'title': title, 'body': body, 'author': author});

  //add the dynamically generated postHTML to postElement
  postElement.innerHTML += postHTML;



  debugger




}

function postComment(){
  //create template function to create a comment skeleton to add values to later
  let commentTemplate = _.template(document.getElementById('comment-template').innerHTML);

  //get comment values
  let comment = document.getElementById('comment').value;
  let commenter = document.getElementById('commenter').value;

  //dynamically create a comment
  let commentHTML = commentTemplate({'comment': comment, 'commenter': commenter});

  //get element to add commentHTML to
  let commentsElement = document.getElementById('comments')

  //add commentHTML to commentsElement
  commentsElement.innerHTML += commentHTML;


}
