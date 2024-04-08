const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#emailLogin');
    const password = document.querySelector('#passwordLogin');
  
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'POST',
        body: JSON.stringify({
            email: email.value,
            password: password.value
          }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        document.location.replace('/');
        location.reload()
      } else {
        alert(response.statusText);
      }
    }
  };

  document
  .querySelector('#loginForm')
  .addEventListener('submit', loginFormHandler);