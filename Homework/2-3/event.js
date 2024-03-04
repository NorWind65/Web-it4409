function tabclick(evt, CLASS, ID) {
    var i, tab;
    tab = document.getElementsByClassName(CLASS);

    for (i = 0; i < tab.length; i++) {
      tab[i].style.display = "none";
    }

    document.getElementById(ID).style.display = "block";
  }