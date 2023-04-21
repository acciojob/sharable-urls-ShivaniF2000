      const form = document.querySelector('form');
      const button = document.querySelector('#button');
      const url = document.querySelector('#url');


      button.addEventListener('click', function(event) {
        event.preventDefault(); // prevent form submission

        // get input values
        const name = document.querySelector('#name').value;
        const year = document.querySelector('#year').value;

        // construct query string
        const query = '?name=' + encodeURIComponent(name) + '&year=' + encodeURIComponent(year);

        // update URL in h3 element
        url.textContent = 'https://localhost:8080/' + query;
      });