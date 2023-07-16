var currentDate = new Date();
console.log(document.cookie);

function getHttpOnlyCookieValue(cookieName) {
    return new Promise((resolve, reject) => {
      browser.cookies.get({ name: cookieName }).then((cookie) => {
        if (cookie && cookie.httpOnly) {
          resolve(cookie.value);
        } else {
          resolve(null);
        }
      }).catch(reject);
    });
  }
  
  // Usage example
  getHttpOnlyCookieValue('yourCookieName').then((cookieValue) => {
    if (cookieValue) {
      console.log('Cookie value:', cookieValue);
      // Use the cookie value as needed
    } else {
      console.log('Cookie not found or inaccessible.');
    }
  });

if(localStorage.getItem("authdate")==null || currentDate.getTime()-localStorage.getItem("authdate")>1000){

    let textareas = document.querySelectorAll("input.form-control") 
    if(textareas[2]!=null){
        //have to login
        if(textareas[2].value!="" && textareas[1].value!=""){
            let btn = document.querySelectorAll("button.btn.btn-primary") ;
            for(let button of btn){
                console.log(button);
                if(button.innerText == "Autentificare" ){
                    console.log("gothere");
                    button.click();
    
                    // Create a new Date object
                    var currentDate2 = new Date();
                    localStorage.setItem("authdate", currentDate2.getTime());
                    break;
                }
            }
        }
    }
}