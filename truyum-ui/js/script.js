function validateForm(){
    var name = document.getElementById('title').value;
    var pattern = /^[0-9]+$/;
    var cost = document.getElementById('price').value;
    var date = document.getElementById('dateOfLaunch').value;
    var cat = document.getElementById('category-type').value;

    if(name==null || name==""){
        alert("Title is required.");
        return false;
    }
    else if(name.length<2 || name.length>65){
        alert("Title should have 2 to 65 characters");
        return false;
    }
    else if(cost==null || cost==""){
        alert('Price is required.');
        return false;
    }
    else if(!cost.match(pattern)){
        alert("Price has to be a number.");
        return false;
    }
    else if(date==null || date=="" ){
        alert("Date of Launch is required");
        return false;
    }
    else if(cat==0){
        alert("Select one category");
        return false;
    }
    else{
        return true;
    }
}