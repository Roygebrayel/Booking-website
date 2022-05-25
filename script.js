

function WriteToFile(passForm) {
 
    let fso = CreateObject("Scripting.FileSystemObject"); 
    let s = fso.CreateTextFile("email.txt", True);

    var email2 = document.getElementById('email');
    

    s.writeline("client email:" + email2);
    

    s.Close();
};

function sub(){
    let con = alert ("the email has been send");
    return con;
};
function myFunction()
{
	
alert( " your email has been send");
}
setInterval(() => {
    d = new Date(); //object of date()
    hr = d.getHours();
    min = d.getMinutes();
    sec = d.getSeconds();
    hr_rotation = 30 * hr + min / 2; //converting current time
    min_rotation = 6 * min;
    sec_rotation = 6 * sec;
  
    hour.style.transform = `rotate(${hr_rotation}deg)`;
    minute.style.transform = `rotate(${min_rotation}deg)`;
    second.style.transform = `rotate(${sec_rotation}deg)`;
}, 1000);