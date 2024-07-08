///bar///
const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})

// function sendEmail(){
//     Email.send({
// Host : "smtp.gmail.com",
// Username : "alvin00@gmail.com",
// Password : "he11we11",
// To : 'boyjam005@gmail.com',
// From : document.getElementById("email").value,
// Subject : "New Contact Form Enquiry",
// Body : "Name: " + document.getElementById("name").value
// +"<br>Email: " +document.getElementById("email").value
// // +"<br>Phone no: " +document.getElementById("phone").value
// +"<br>Message: " +document.getElementById("message").value

// }).then(
// message => alert("Message Sent Succesfully")
// );
// }

//  function validation(){
//      if(document.formfill.name.value==""){
//          document.getElementById("result").innerHTML="Enter Your name ";
//          return false;
//      }
//      else if(document.formfill.Yourname.value.length<6){
//          document.getElementById("result").innerHTML="Atleast six letters"
//      }
//      else if(document.formfill.Email.value==""){
//          document.getElementById("result").innerHTML="Enter your email"
//      }
//     }
    