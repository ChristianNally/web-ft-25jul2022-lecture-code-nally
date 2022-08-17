// custom front-end JS for our AJAX server
$(document).ready(() => {

  function insertListOfPosts(posts){

    let stringToInsert = '';

    posts.forEach((post) => {
      stringToInsert += `<div><a href="${post.id}">${post.title}</a></div>`;
      // stringToInsert += '<div>' + post.id + '::' + post.title + '</div>';
    });

    // $('#content').html(stringToInsert);
    // $('#content').append(stringToInsert);
  
    const $newElements = $(stringToInsert);
    $('#content').append($newElements);

  }

  $('form').on('submit', (event) => {
    event.preventDefault();

    $.ajax({
      // url: '/1597/info.0.json',
      url: 'http://jsonplaceholder.typicode.com/posts',
      method: 'GET'
    })
    .then((result) => {
      console.log('then', result);

      insertListOfPosts(result); // this function will actually insert the DOM elements

      // const easterEgg = 42;
      // const nav = `
      // <div id="navigation">
      //   <ul>
      //     <li><a href="/home/${easterEgg}">Home</a></li>
      //     <li><a href="/Posts">Posts</a></li>
      //     <li><a href="/Contact">Contact Us</a></li>
      //   </ul>
      // </div>
      // `;
      // $('body').prepend(nav);


      // programmatically build up a complex DOM heirarchy for insertion into the DOM
      const $navDiv = $('<div></div>');
      const $navUL = $('<ul></ul>');
      const $homeLink = $('<a href="/home">Home</a>');
      $navUL.append($homeLink);
      $navDiv.append($navUL);
      $('body').prepend($navDiv);
      alert('mf!');

    })
    .catch((error) => {
      console.log('catch', error);
    });




  });

});
