const keylogger = document.getElementById("keylogger");

document.addEventListener("keypress", function(event) {
    const charCode = event.charCode;

    if (charCode >= 97 && charCode <= 122) {

        const lettre = String.fromCharCode(charCode);

        if (document.activeElement === keylogger) {
             keylogger.value += lettre;
        } else {
             keylogger.value += lettre;
        }
    }
});