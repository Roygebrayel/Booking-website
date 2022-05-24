




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