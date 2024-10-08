
   //initially we need to load DOM fully.did this only using the first line of code!
  
     document.addEventListener("DOMContentLoaded",function(){   
        //we shall form elements by their id's
            const form = document.querySelector('form');
            const emailInput=document.getElementById('email')
            const passwordInput=document.getElementById('password');
            const usernameInput=document.getElementById('username');
            const messageDiv = document.querySelector('.message');

            form.addEventListener('submit',function(event){
                messageDiv.style.display='none';
                console.log('Form submitted');
                if(!emailInput.value || !passwordInput.value ||!usernameInput.value){
                   console.log('Missing fields req!')
                    event.preventDefault();
                    messageDiv.textContent='All fields are req!';
                    messageDiv.style.color='red';
                    messageDiv.style.display='block';
                    return;
                }
                const emailPattern =  /^[^\s@]+@[^\s@]+\.[^\s@]+$/;//regex code for latest type of email check or validation


                if(!emailPattern.test(emailInput.value)){
                    console.log('Invalid email');
                    event.preventDefault();
                    messageDiv.textContent = 'Please enter a valid email address.';
                    messageDiv.style.color = 'red';                                                   //this section checks whether all fields are necessarily filled!
                    messageDiv.style.display = 'block'; // it shows error message
                    return;
                }
                if(passwordInput.value.length< 6){
                   console.log('invalid password!')
                    event.preventDefault(); //it prevents form submission
                    messageDiv.textContent='Password must contain 6 charcters!';
                    messageDiv.style.color='red';
                    messageDiv.style.display='block';
                    return;
                }
                messageDiv.textContent='Logging in...';
                messageDiv.style.color='green';
                messageDiv.style.display='block';



            });
            emailInput.addEventListener('focus',function(){
                emailInput.style.borderColor='#28a745';

            });                                                                           
            emailInput.addEventListener('blur',function(){
                emailInput.style.borderColor='#ccc';
            });
            passwordInput.addEventListener('focus',function(){
                passwordInput.style.borderColor='#28a745';
            });                                                                          //this section makes box enhanced and blurred as per click!
            passwordInput.addEventListener('blur',function(){
                passwordInput.style.borderColor='#28a745';
            });
            usernameInput.addEventListener('focus',function(){
                usernameInput.style.borderColor='#28a745';

            });
            usernameInput.addEventListener('blur',function(){
                usernameInput.style.borderColor='#ccc';

            });

            


                

    });
