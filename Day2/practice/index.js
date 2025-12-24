function CreateData(){
    fetch('https://students-d5301-default-rtdb.asia-southeast1.firebasedatabase.app/students.json',{
        method : 'POST',
        body : JSON.stringify({
            name:"John", 
            rollno:1
        })
    })
    .then(res=>res.json())
    .then(data=>console.log("Dara is added",data))
}


function GetData(){
    fetch('https://students-d5301-default-rtdb.asia-southeast1.firebasedatabase.app/students.json',{
        method : 'GET',
    })
    .then(res=>res.json())
    .then(data=>console.log("Data is fetched",data))
}


function UpdateData(){
    fetch('https://students-d5301-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OhFUphYLzQpigUP_8SU.json',{
        method : 'PUT',
        body : JSON.stringify({    
            name:"Ali",
            rollno:2
        })
    })
    .then(res=>res.json())
    .then(data=>console.log("Data is updated",data))
}


function DeleteData(){
    fetch('https://students-d5301-default-rtdb.asia-southeast1.firebasedatabase.app/students/-OhFUphYLzQpigUP_8SU.json',{
        method : 'DELETE',
    })
    .then(res=>res.json())
    .then(data=>console.log("Data is deleted",data))
}