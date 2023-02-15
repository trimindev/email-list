# Email List 

live DEMO: https://trimindev.github.io/email-list/

<h3>User Story:</h3>

- user enter new email and click submit
  - check if list of all email already had this email -> notify user this email had been added
  - else update list and re-render

- user click remove button -> get rid of which email contain this buttom from list and re-render

<h3>What I did ?</h3>

- create array to store emails

- create fucntion render
  - delete child nodes
  - map all email 
    - add index attribute 
    - create element contain email then add it to DOM
    - create remove button and add event onClick
      - get index of email that need to delete form index attribute is set before
      - show notification 
      - get rid of this email
      - return re-render
      
- create function handleSubmit

    - show notification, return
  - else push this email, show notification
  - return re-render

- add event onSubmit
  - if input have value call handleSubmit
  - then set input.value emty 
  
- create function showNotification
  - add class show
  - set time out 3s remove it

![Screenshot (17)](https://user-images.githubusercontent.com/109648313/219173104-30a23da8-91b7-465b-b806-1190d9b3c8f8.png)

  


