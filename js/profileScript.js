class Profile {

    setProfile(n, a) {
        this.name = n;
        this.age = a;

        this.saveProfile();
    }

    getProfile() {
        document.getElementById("FN").value = localStorage.getItem('name');
        document.getElementById("age").value = localStorage.getItem('age');
    }

    saveProfile() {
        let storeName = document.getElementById('FN').value;
        localStorage.setItem('name', storeName);
        let storeAge = document.getElementById('age').value;
        localStorage.setItem('age', storeAge);
        alert('Personaje actualizado');
    }

}

function validateForm(e) {
  e = window.event;
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
  
    var x = document.forms['Login']['fName'].value;
    if(x == null || x == "") {
        alert("Escribe un nombre para tu personaje");
        document.getElementById('FN').focus();
    }

    a = document.forms['Login']['ageField'].value;
    if(a == null || a == "") {
        alert("Escribe una edad para tu personaje");
        document.getElementById('age').focus();
    }

  return true;
}

function UpdateProfile() {
    myProfile = new Profile();
    if (validateForm()) {
        myProfile.setProfile();
    }  
}

function displayProfile() {
  m = new Profile();
  console.log(m) 
    m.getProfile();
}