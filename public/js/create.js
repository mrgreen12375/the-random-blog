const createFormHandler = async (event) => {
    event.preventDefault();
  
    const title = document.querySelector('#title');
    const content = document.querySelector('#content');
  
    if (title && content) {
      const response = await fetch('/api/blogs', {
        method: 'POST',
        body: JSON.stringify({
            title: title.value,
            content: content.value
          }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#blogForm')
  .addEventListener('submit', createFormHandler);