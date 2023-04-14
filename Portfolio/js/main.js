const sectionElems = document.querySelectorAll('.section')
const controlBtnElem=document.querySelector('.controls')
const sectionBtnElems = document.querySelectorAll('.control')

controlBtnElem.addEventListener('click', pageTransition)

function pageTransition(e){
    const value = e.target.dataset.id
    //console.log(e.target.dataset);
    if (value) {
        sectionBtnElems.forEach((btn) => {
            btn.classList.remove('active-btn')
            e.target.classList.add('active-btn')
        })

        sectionElems.forEach((section) => {
            section.classList.remove('active')
        })
        const element = document.getElementById(value)
        element.classList.add('active')

    }
}


const sendMail = () => {
    const emailElem=document.getElementById('email')
    const nameElem=document.getElementById('name')
    const messageElem=document.getElementById('message')
    const subjectElem=document.getElementById('subject')
    Email.send({
      Host: "smtp.elasticemail.com",
      Username: "bobwilde10@yahoo.com",
      Password: "D25E955E4916BF77B5387998ADB58B2A7E51",
      To: "bobwilde10@gmail.com",
      From: emailElem.value,
      Subject: "New form enquiry",
        Body: 'this is the body'
/*       Name: ${nameElem.value}<br>
      Subject: ${subjectElem.value}<br>
      Message: ${messageElem.value}<br>
 */
        ,
    }).then((message) => alert(message));
}