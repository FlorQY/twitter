
/*function hacer_click()
	{
		alert("Me haz dado un click");
}
*/
function escribe() {
  escribir = document.getElementById("caja");
  tweet = "<h1>" + document.rellenar.textoATwittear.value + "</h1>"
  escribir.innerHTML = tweet
  }
  window.onload = function() {
document.rellenar.tweet.onclick = escribe
}
