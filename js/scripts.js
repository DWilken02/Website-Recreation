window.onload = (event) => {
  document.querySelector("h1").remove();
  let body=document.querySelector("body");
  const h1Element = document.createElement("h1");
  h1Element.append("Webpage Recreation Practice");
  const pElement = document.createElement("p");
  pElement.append("The HTML of this webpage was created with JavaScript.");
  const imgElement = document.createElement("img");
  imgElement.src="https://cdn.download.ams.birds.cornell.edu/api/v1/asset/202984001/900";
  imgElement.alt="This is an image of a Multicolored Tanager bird from birdsoftheworld.org";
  imgElement.style="width:50%";
  const h1Element2 = document.createElement("h1");
  h1Element2.append("Facts about the Multicolored Tanager");
  const ulElement = document.createElement("ul");
  const liElement1 = document.createElement("li");
  const liElement2 = document.createElement("li");
  liElement1.append("It is endemic to the mountains of Colombia.");
  liElement2.append("It usually searches for insects on the underside of leaves of outer limbs while clinging to leaves with its feet.");
  ulElement.append(liElement1, liElement2);
  const h2Element = document.createElement("h2");
  h2Element.append("Source");
  const aElement = document.createElement("a");
  aElement.href="https://en.wikipedia.org/wiki/Multicoloured_tanager";
  aElement.append("Wikipedia");
  body.append(h1Element, pElement, imgElement, h1Element2, ulElement, h2Element, aElement);
}