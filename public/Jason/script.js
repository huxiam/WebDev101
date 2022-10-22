function infoDisplay() {
    alert("Press a button to open up a document which you can start reading")
    setTimeout(function () {
      alert("To go back to the menu page, press \"back\"")
    }, 100)
  }
  
  function gotoLink(param) {
    location.href = param.value
  }
  
  document.getElementById("submit").onclick = function () {
    var name = document.getElementById("user").value
    document.getElementById("user").value = ""
    setTimeout(function () {
      alert("Hello, " + name + "!")
    }, 100)
  }