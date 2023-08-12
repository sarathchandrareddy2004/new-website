let myImage = document.querySelector("img");

myImage.onclick = () => {
  let mySrc = myImage.getAttribute("src");
  if (mySrc === "windows.png") {
    myImage.setAttribute("src", "vscode.png");
  } else {
    myImage.setAttribute("src", "windows.png");
  }
};
let meek=document.querySelector("button");
let mook=document.querySelector("h1");
function setname()
{
  const uname=prompt("enter your name");
  if (!uname)
  {
    setname();
  }
  else
  {
    localStorage.getItem("name",uname);
    mook.textContent=`Mozilla is cool, ${uname}`;
  }
}
if (!localStorage.getItem("name")) {
  setname();
} else {
  const storedName = localStorage.getItem("name");
  mook.textContent = `Mozilla is cool, ${storedName}`;
}
meek.onclick = () => {
  setname();
};




  