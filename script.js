var Click_Cont = (id) => {
    if (document.getElementById(id).style.color != "white") {
        document.getElementById(id).style.backgroundColor = "blue";
        document.getElementById(id).style.color = "white";
        document.getElementById(id).style.borderColor = "white";
        document.getElementById(id).style.transition = ".7s ease-in-out";
    } else {
        document.getElementById(id).style.backgroundColor = "white";
        document.getElementById(id).style.color = "black";
        document.getElementById(id).style.transition = ".7s ease-in-out";
        setTimeout(() => {
            document.getElementById(id).style = "none";
        }, 1002);
    }
};