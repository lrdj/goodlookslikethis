function launchWindow(title, text, height=500, width=700) {
    let left = ( screen.width - width ) / 2;
    let top = ( screen.height - height ) / 2;
    let popupWin = window.open("", title, "width="+width+",height="+height+",left="+left+",top="+top+",location=no,menubar=no,status=no,titlebar=no,toolbar=no");
    popupWin.document.write(text);
}
