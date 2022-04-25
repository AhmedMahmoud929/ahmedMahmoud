// =====================  PORTFLIO  =====================
let allBtn = document.getElementById("all");
let webBtn = document.getElementById("web");
let graphicBtn = document.getElementById("graphic");
let vectorBtn = document.getElementById("vector");
let allBtns = Array.from(document.querySelectorAll(".top a"));

let graphicSec = `  <div class="row">
<!-- 1 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/1.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 2 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/2.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 3 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/3.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 4 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/4.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 5 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/5.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 6 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/6.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 7 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/7.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 8 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/8.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 9 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/9.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 10 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/10.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 11 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/11.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 12 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/12.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 13 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/13.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 14 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/14.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 15 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/15.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 16 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/16.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 17 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/17.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 18 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/18.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 19 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/19.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 20 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/20.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>

</div>`;
let vectorSec = ` <div class="row">
<!-- 1 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/1.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 2 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/2.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 3 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/3.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 4 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/4.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 5 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/5.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 6 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/6.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 7 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/7.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 8 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/8.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 9 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/9.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 10 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/10.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 11 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/11.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 12 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/12.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 13 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/13.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 14 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/14.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 15 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/15.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 16 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/16.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 17 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/17.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 18 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/18.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 19 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/19.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 20 -->
<div class="box"   >
    <div class="shadow"></div>
    <img src="../img/vectorArt/20.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>

</div>`;
let webSec = `
<div class="row">
           
            
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/1.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/2.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/3.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/4.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/5.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/6.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/7.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/8.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/9.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>
<div class="box">
  <div class="shadow"></div>
  <img src="../img/webDesign/10.png" alt="the work image" class="image"/>
  <div class="category">Web design</div>
  <lord-icon
    src="https://cdn.lordicon.com/tyounuzx.json"
    trigger="loop"
    colors="primary:#ffffff,secondary:#ffffff"
    style="width: 125px; height: 125px"
    class="lordIcon"
  >
  </lord-icon>
 <a href="#"> <img src="../img/link.png" class="link" alt="link"></a>
</div>


</div>`;
let allSec = ` <div class="row">
<!-- 1 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/1.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/1.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/1.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 2 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/2.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/2.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/2.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 3 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/3.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/3.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/3.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 4 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/4.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/4.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/4.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 5 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/5.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/5.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/5.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 6 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/6.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/6.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/6.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 7 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/7.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/7.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/7.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 8 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/8.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/8.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/8.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 9 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/9.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/9.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/9.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<!-- 10 -->
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/graphicDesign/10.png" alt="the work image" class="image" />
    <div class="category">Graphic design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/webDesign/10.png" alt="the work image" class="image" />
    <div class="category">Web design</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
<div class="box"  >
    <div class="shadow"></div>
    <img src="../img/vectorArt/10.png" alt="the work image" class="image" />
    <div class="category">Vector Art</div>
    <lord-icon src="https://cdn.lordicon.com/tyounuzx.json" trigger="loop" colors="primary:#ffffff,secondary:#ffffff" style="width: 125px; height: 125px" class="lordIcon">
    </lord-icon>
    <a href="#">
        <img src="../img/link.png" class="link" alt="link" /></a>
</div>
</div>`;

// all function
allBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    document.getElementById("allWork").innerHTML = allSec;
});
// vector function
vectorBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    document.getElementById("allWork").innerHTML = vectorSec;
});
// graphic function
graphicBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    webBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    document.getElementById("allWork").innerHTML = graphicSec;
});
// web function
webBtn.addEventListener("click", (btn) => {
    //remove bg from all btns
    allBtn.classList.remove("active");
    graphicBtn.classList.remove("active");
    vectorBtn.classList.remove("active");
    // add a bg to selected btn
    btn.target.classList.add("active");
    document.getElementById("allWork").innerHTML = webSec;
});

// loading page
let bgLoading = document.getElementById("bgLoading")
let bgLoadingCont = document.querySelector("#bgLoading .loading-container")
window.onload = () => {
        setTimeout(function() {
            bgLoadingCont.style.opacity = "0";
            bgLoading.style.pointerEvents = "none";
            bgLoading.style.backdropFilter = "blur(0px)";
            setTimeout(function() {
                bgLoadingCont.style.display = "none";
                bgLoading.style.display = "none";
            }, 1000)
        }, 1000)
    }
    // arrow
window.onscroll = () => {
    if (this.scrollY >= 500) {
        document.querySelector("#arrowHome i").style.right = "10px";
    } else {
        document.querySelector("#arrowHome i").style.right = "-40px";
    }
}