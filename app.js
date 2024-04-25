document.addEventListener("change",maliyetHesapla);
function maliyetHesapla(){
let liste,secenek,projeFiyat,liste1 ,liste2;


liste=document.getElementById("projeSecenek");
secenek=liste[liste.selectedIndex].value;
projeFiyat=Number(secenek);
liste1=document.getElementById("gunSayisi");
liste2=document.getElementById("sayfaSayisi");
for(i=0;i<liste1.length;i++){
  
  if(liste1[0].selected && liste2[0].selected){
    document.getElementById("sonuc").innerHTML="ödenecek tutar="+projeFiyat
  }
  else if(liste1[i].selected >liste1[0].selected){
      projeFiyat=projeFiyat-(projeFiyat*liste1[liste1.selectedIndex].value*(1/100))
    }
}
console.log(projeFiyat);
for(i=0;i<liste2.length;i++){
     if( liste2[0].selected){
        document.getElementById("sonuc").innerHTML="ödenecek tutar="+projeFiyat
      }
    else if(liste2[i].selected > liste2[0].selected){
        projeFiyat=projeFiyat-(projeFiyat*liste1[liste1.selectedIndex].value*(1/100))+(projeFiyat*liste2[liste2.selectedIndex].value*(1/5))
    }
}
document.getElementById("sonuc").innerHTML="ödenecek tutar="+ projeFiyat
}maliyetHesapla();


const colorPicker = document.getElementById('colorPicker');
const icerik=document.getElementById('renk');
colorPicker.addEventListener('change', function() {
 const selectedColor = colorPicker.value;
   icerik.style.backgroundColor = selectedColor;
   console.log(selectedColor);
});


// const currentColor = getComputedStyle(icerik).backgroundColor;
// const rgbValues = currentColor.match(/\d+/g);
// const rgbaColor = `rgba(${rgbValues[0]}, ${rgbValues[1]}, ${rgbValues[2]}, 0.5)`;
// icerik.style.backgroundColor = rgbaColor;


