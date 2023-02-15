let input = document.querySelector("input");
let form = document.querySelector("form");
let emailListElement = document.querySelector("ul");
let notificationElement = document.querySelector(".notification");

//list of all email
const emailList = [];

// submit email event
form.addEventListener("submit", (e) => {
  e.preventDefault();

  //submit
  if (input.value) {
    handleSubmit(input.value);
  }
  input.value = "";
});

// handle submit event
function handleSubmit(newEmail) {
  //check email
  const isHadBeenAdded = emailList.includes(newEmail);
  if (isHadBeenAdded) {
    notificationElement.innerHTML = `
      <p>Oops! ${newEmail} address has been added to our list already</p>
    `;
    showNotification();
    return;
  }

  //push to emailList
  try {
    emailList.push(newEmail);

    notificationElement.innerHTML = `
     <p>Yayy! You have subscribed to our newsletter successfully.</p>
    `;
    showNotification();
  } catch (error) {
    console.log(err);
    return;
  }

  //rerender
  render(emailList);
}

// render list of email
function render(emailList) {
  //delete all childnode
  emailListElement.innerHTML = "";

  emailList?.map((email, index) => {
    let li = document.createElement("li");

    // add key
    li.setAttribute("index", index);

    li.innerHTML = `
      <span>${email}</span>
      <button class="remove-button">remove</button>
    `;
    emailListElement.appendChild(li); // attach email to DOM

    let removeButton = li.querySelector(".remove-button");

    // onClick remove button
    removeButton.addEventListener("click", (e) => {
      e.preventDefault();

      const deleteIndex = removeButton.parentElement.getAttribute("index");
      if (deleteIndex > -1) {
        notificationElement.innerHTML = `
          <p>${emailList[deleteIndex]} has been removed</p>
        `;
        showNotification();
        emailList.splice(deleteIndex, 1);

        return render(emailList);
      }
    });
  });
}

function showNotification() {
  notificationElement.classList.add("show");
  setTimeout(() => {
    notificationElement.classList.remove("show");
  }, 3000);
}
