


$(document).ready(function () {
    var text = $('.type-detail .p-basic-info-block .availability-amount').text();
    var match = text.match(/\((\d+).*ks\)/);

    if (match) {
        var number = parseInt(match[1]);
        if (number < 10) {
            $('body').addClass('outof');
        }
    }
});

$(document).ready(function () {
    $('.product .p .availability-amount').each(function(index, item){
        //console.log('dasd', );
        var text = $(item).text().trim();
        var match = text.match(/\((\d+).*ks\)/);

        if (match) {
            var number = parseInt(match[1]);
            if (number < 10) {
                //$('body').addClass('outof');
                $(this).closest('.product').addClass('out');
            }
        }
    });
});

$( document ).on( "ajaxComplete", function() {
   $('.product .p .availability-amount').each(function(index, item){
        //console.log('dasd', );
        var text = $(item).text().trim();
        var match = text.match(/\((\d+).*ks\)/);

        if (match) {
            var number = parseInt(match[1]);
            if (number < 10) {
                //$('body').addClass('outof');
                $(this).closest('.product').addClass('out');
            }
        }
    });
} );

$('.product').each(function(){
  var desc = $(this).find('.p-desc');
  $(this).find('.p-desc').remove();
  $(this).find('.name').after(desc);
});

$(document).ready(function( event, request, settings ) {
  $('.p-thumbnail img').attr('src', function(i, src) {
    return src.replace( 'related', 'big' );
}); 
})

$(document).ready(function( event, request, settings ) {
  $('.p-thumbnail img').attr('data-src', function(i, src) {
    return src.replace( 'related', 'big' );
}); 
})

if ($('#topNavigationDropdown:contains("CZK")').length > 0) {
  $( ".dropdown-menu li:first-child" ).addClass( "activecurency" );
}
if ($('#topNavigationDropdown:contains("EUR")').length > 0) {
   $( ".dropdown-menu li:last-child" ).addClass( "activecurency" );
}
$( ".menu-item-1363 .menu-level-2" ).load( "/nakupovat/  #cat-1363 ul.active.expanded > li" );
$( ".in-terapeuti #formt" ).load( "/kontakty/ #formContact" );


$(document).ready(function(){
    $("div.products form.pr-action").each(function(){
        if($(this).find('input[type="hidden"][name="amount"]').length > 0){
            $(this).find('input[type="hidden"][name="amount"]').remove();
        }
        if($(this).find('input[name="amount"]').length === 0){
            $(this).prepend("<input type='number' name='amount' value='1' class='pcsindex'>");
        }
    });
    $("div.product-top div.add-to-cart").each(function(){
        if($(this).find('input[name="amount"]').length === 0){
            $(this).prepend("<input type='number' name='amount' value='1' class='pcsindex'>");
        }
        if($(this).find('input[type="hidden"][name="amount"]').length > 0){
            $(this).find('input[type="hidden"][name="amount"]').remove();
        }
    });
});


shoptet.cookie.create('debugTimestamp', 1, {days: 1});
$( "#products-1" ).addClass( "swiper-wrapper" );
$( "#products-1 .product" ).addClass( "swiper-slide" );
$('<div class="swiper-button-prev swiper-button-black"></div><div class="swiper-button-next swiper-button-black"></div>').appendTo( '#homepageProducts1');
$( "#products-2" ).addClass( "swiper-wrapper" );
$( "#products-2 .product" ).addClass( "swiper-slide" );
$('<div class="swiper-button-prev swiper-button-black"></div><div class="swiper-button-next swiper-button-black"></div>').appendTo( '#homepageProducts2');
$('<div id="newfoo"></div>').insertBefore('.footer-bottom');
$("#newfoo").load("/footer/ #footerin");
$('.id-1 .body-banners').insertAfter('.id-1 .wide-carousel');


$('<div class="catban"><div class="title"></div><p></p></div>').insertAfter('.type-category #header');

$('.type-detail .breadcrumbs').insertBefore('.type-detail h1');



$('.category-title').appendTo('.catban .title');
$('.category-perex').appendTo('.catban p');
$('.type-detail .p-final-price-wrapper').insertAfter('.type-detail h1'); 
$('<a href="#description" data-force-scroll="1" class="smooth scrollme anchor">Celý popis produktu <img src="/user/documents/pic/arbot.svg"> </a>').insertAfter('.type-detail .p-short-description');
$('.type-detail #productsRelated').insertAfter('.p-detail-inner'); 
$('<h2 class="botline">Související produkty</h2>').insertBefore('#productsRelated'); 
$('.type-detail #productsAlternative').insertBefore('#askload'); 
$('<h2 class="botline">Podobné produkty</h2>').insertBefore('#productsAlternative'); 
$('.homepage-texts-wrapper').insertAfter('.id-1 .body-banners');
$('<div class="footerheader"></div>').insertBefore( '.footer-bottom');
jQuery(document).ready(function(){
$('#homepageProducts1').prependTo('.id-1 .index-content-wrapper');
$('#homepageProducts2').prependTo('.id-1 .index-content-wrapper');
$('<div class="prohold"><h2>Bestsellery</h2></div></div>').insertBefore( '#homepageProducts1');
$('<div class="prohold pro2"><h2>Novinky</h2></div></div>').insertBefore( '#homepageProducts2');
$( "#homepageProducts2" ).removeClass( "fade" );
$( "#homepageProducts1" ).removeClass( "fade" )
$('<div id="sh"></div>').insertAfter( '.id-1 #homepageProducts2');
$('.footer-banners').prependTo( '#sh');
});


$('<a href="https://www.remedio.cz" class="remedio">Nakódovalo <img src="/user/documents/pic/remedio.svg?2"></a>').prependTo('#signature');


document.addEventListener('shoptet.modal.resize', function () {
    $('.products-related .product').each(function(){
        var desc = $(this).find('.prices');
        $(this).find('.prices').remove();
        $(this).find('.btn').after(desc);
    });

$('.prices span').each(function(){
    if($(this).hasClass('price-standard')) {
        $(this).closest('.product').addClass('sales');
    } 
});

$('.product').each(function(){
  var desc = $(this).find('.price-standard');
  $(this).find('.price-standard').remove();
  $(this).find('.price-final').before(desc);
});


});

$( document ).ajaxComplete(function() {

 $("div.products form.pr-action").each(function(){
        if($(this).find('input[type="hidden"][name="amount"]').length > 0){
            $(this).find('input[type="hidden"][name="amount"]').remove();
        }
        if($(this).find('input[name="amount"]').length === 0){
            $(this).prepend("<input type='number' name='amount' value='1' class='pcsindex'>");
        }
    });
    $("div.product-top div.add-to-cart").each(function(){
        if($(this).find('input[name="amount"]').length === 0){
            $(this).prepend("<input type='number' name='amount' value='1' class='pcsindex'>");
        }
        if($(this).find('input[type="hidden"][name="amount"]').length > 0){
            $(this).find('input[type="hidden"][name="amount"]').remove();
        }
    });



$('.product').each(function(){
  var desc = $(this).find('.p-desc');
  $(this).find('.p-desc').remove();
  $(this).find('.name').after(desc);
});

//if($('#order6').length == 0 && $('#category-header fieldset').length > 0) {
  //  var doporucujeme = $('<input type="radio" value="priority" name="order" id="order6" data-url="https://509801.myshoptet.com/telo/?order=contentOrder"><label for="order6">Doporučujeme</label>');
   // doporucujeme.prependTo("#category-header fieldset");
    //if(false == $('#category-header fieldset input:checked').length > 0){
      //  $('#order6').attr('checked', true);
    // }
// }
$('.product').each(function(){
  var desc = $(this).find('.price-standard');
  $(this).find('.price-standard').remove();
  $(this).find('.price-final').before(desc);
});

$('.prices span').each(function(){
    if($(this).hasClass('price-standard')) {
        $(this).closest('.product').addClass('sales');
    } 
});



});


if ($('.detail-parameters tr:contains(zdravi)').length > 0) {
   $('<h2 class="newh underline">Související články</h2><div id="detailnews"></div>').insertAfter(".type-detail .tab-content");     

var urlEncyklopedie2 = "/zdravi/ #newsWrapper";
  var blockEncyklopedie2 = $("<div></div>");
  blockEncyklopedie2.load(urlEncyklopedie2, function () {
    $(".detail-parameters .row-header-label:contains(zdravi)").each(function (
      index,
      item
    ) {
      var tds2 = $(item).closest("tr").find("td");
      $.each(tds2, function (index, item) {
        var urlForSearchInBlock2 = $(this).text();

        var a = blockEncyklopedie2.find('a[href="' + urlForSearchInBlock2 + '"]');
        if (typeof a != "undefined") {
          var blockProVlozeni2 = a.closest(".news-item");
          blockProVlozeni2.appendTo("#detailnews");
        }
      });
    });
  });
  $(".detail-parameters tr:contains(zdravi)").addClass("hide");


}

   $('<h2 class="newh underline">Související soubory</h2>').insertBefore(".type-detail #relatedFiles");     
 $('<h2 class="newh underline">Hodnocení produktu</h2>').insertBefore(".type-detail #ratingTab");    




if ($('.detail-parameters tr:contains(recepty)').length > 0) {
   $('<h2 class="newh underline">Související recepty</h2><div id="detailrecept"></div>').insertAfter(".type-detail .tab-content");     

var urlEncyklopedie = "/recepty/ #newsWrapper";
  var blockEncyklopedie = $("<div></div>");
  blockEncyklopedie.load(urlEncyklopedie, function () {
    $(".detail-parameters .row-header-label:contains(recepty)").each(function (
      index,
      item
    ) {
      var tds = $(item).closest("tr").find("td");
      $.each(tds, function (index, item) {
        var urlForSearchInBlock = $(this).text();

        var a = blockEncyklopedie.find('a[href="' + urlForSearchInBlock + '"]');
        if (typeof a != "undefined") {
          var blockProVlozeni = a.closest(".news-item");
          blockProVlozeni.appendTo("#detailrecept");
        }
      });
    });
  });
  $(".detail-parameters tr:contains(recepty)").addClass("hide");


}






document.addEventListener("DOMContentLoaded", (DOMEvn) => {

 



  if (DOMEvn.target.getElementById("menumob") instanceof HTMLElement) {
    new Mmenu("#menumob", {
      extensions: ["pagedim-black"]
    });
  }
  const menuA = (context) => (context || document).querySelectorAll("#navigation > div > ul.menu-level-1 > li.menu-item-3322 > ul > li > a");
  const tabContent = DOMEvn.target.getElementById("tab-content");
  const catData = {};
  const getMenu = () => menuA().forEach((a, i, arr) => {
    const pathname = new URL(a.href).pathname;
    const tabCat = tabContent === null ? null : tabContent.querySelector('.tab-cat[data-pathname="' + pathname + '"]');
    const ul = catData[pathname];
    ul?.querySelectorAll("li.expandable").forEach((li) => {
      li.classList.remove("expandable", "expanded");
    });
    ul === null || a.after(ul);
    tabCat === null || ul === null || tabCat.append(ul.cloneNode(true));

ul?.querySelectorAll("ul").forEach(ulElm => {

        ulElm.classList.add("ul-hide");

    });

      }
  );

  menuA(DOMEvn.target).forEach((a, i, arr) => fetch(new Request(a.href)).then(async (menuResponse) => {
    if (!menuResponse.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const resp = await menuResponse.text();
    return resp;
  }
  ).then((menuBlob) => {
    const menuDoc = new DOMParser().parseFromString(menuBlob, "text/html");
    const ul = menuDoc.querySelector("#cat-3322 > ul > li.active.expandable.expanded > ul");
    const pathname = new URL(a.href).pathname;
    catData[pathname] = ul;
    if (arr.length === Object.values(catData).length) {
      DOMEvn.target.dispatchEvent(new CustomEvent("prim.menu.dataLoaded", {
        detail: catData
      }));
setTimeout(function(){

   function removeClass(el){
    el.removeClass();
    el.find('ul').removeClass();
    el.find('li').removeClass();
}
var mobNavBase = $('#navigation .menu-level-1').clone();
removeClass(mobNavBase);
var nav = $('<a class="mburg" href="#menu-pt"><button class="mburger mburger--collapse"><b></b><b></b><b></b></button></a>' +
    '<nav id="menu-pt"><ul id="menu-list-pt"></ul></nav>');
nav.prependTo('#header');
$('#menu-list-pt').html(mobNavBase.html());
new Mmenu("#menu-pt", {
    extensions: ["pagedim-black"]
});
}, 0);

    }
  }
  ));
  DOMEvn.target.addEventListener("prim.menu.dataLoaded", getMenu);
  DOMEvn.target.querySelectorAll("#categories > div > ul li.expanded").forEach(li=>{
    li.classList.remove("expanded");
  });
});


$(document).ready(function() {
  if (dataLayer[0].shoptet.currency === "EUR") {  
    function reloadKosikPyty(castka){
        var zdarmaDopravaLimit = castka; // Nastavení limitu pro dopravu zdarma
        function aktualizujZpravuODoprave() {
            // Přidání specifického parametru do požadavku, aby bylo možné jej identifikovat a ignorovat v ajaxComplete
            $.get('/kosik?updatePricer=true', function(data) {
                var cenaText = $(data).find('.price-primary').text();
                var aktualniCena = parseFloat(cenaText.replace(/[^0-9,]/g, '').replace(',', '.'));
                var zbyvaDoDopravyZdarma = zdarmaDopravaLimit - aktualniCena;

                var pricerHTML = '<div id="pricer"><div class="ptop"></div><div class="pbot"><div class="prange" style="width:0%;"></div></div></div>';

                if (zbyvaDoDopravyZdarma > 0) {
                    var pricerText = 'Objednejte ještě za <strong>' + Math.round(zbyvaDoDopravyZdarma) + ' EUR</strong> a budete mít dopravu <strong>ZDARMA</strong>.';
                    var procentoDokonceni = Math.round((aktualniCena / zdarmaDopravaLimit) * 100);
                } else {
                    var pricerText = 'Máte dopravu <strong>ZDARMA</strong>!';
                    var procentoDokonceni = 100;
                }

                $('#pricer').remove();
                $(pricerHTML).insertBefore('.discount-coupon');
                $('#pricer .ptop').html(pricerText);
                $('#pricer .prange').css('width', procentoDokonceni + '%');
            });
        }

        // Inicializace při prvním načtení
           
          aktualizujZpravuODoprave();
        
        

        // Zkontrolujte v ajaxComplete, zda požadavek není ten, který chceme ignorovat
        $(document).ajaxComplete(function(event, xhr, settings) {
            if (settings.url.indexOf("updatePricer=true") === -1) {
                aktualizujZpravuODoprave();
            }
        });
    }

  
    
    
    $.get('/klient/klient-slevy/', function(data) {
        // Kontrola, zda obsah načtený z AJAXového požadavku obsahuje specifický element
        if (
            $(data).find('#content table tr:nth-child(1) > td:nth-child(2):contains("VO")').length ||
            $(data).has('#content table tr:nth-child(1) > td:nth-child(2):contains("Velkoobchodní odběratel")').length
        ) {
            // Přidání třídy 'velkoobchod', pokud podmínka platí
            $('body').addClass("velkoobchod");
            $('<div class="pointme"></div>').insertAfter('.login-link');
        } else {
            // Přidání třídy 'normalni', pokud podmínka neplatí
            $('body').addClass("normalni");
        }
        
        // kosicek zbyva
        if ($('body').hasClass('velkoobchod')) {
            // Funkce pro aktualizaci zprávy o dopravě zdarma
            reloadKosikPyty(200);
        } else {
            reloadKosikPyty(200);
        }
        
        
    });

  }
});
// prvni ready 
$(document).ready(function() {
  if (dataLayer[0].shoptet.currency === "CZK") {  
    function reloadKosikPyty(castka){
        var zdarmaDopravaLimit = castka; // Nastavení limitu pro dopravu zdarma
        function aktualizujZpravuODoprave() {
            // Přidání specifického parametru do požadavku, aby bylo možné jej identifikovat a ignorovat v ajaxComplete
            $.get('/kosik?updatePricer=true', function(data) {
                var cenaText = $(data).find('.price-primary').text();
                var aktualniCena = parseFloat(cenaText.replace(/[^0-9,]/g, '').replace(',', '.'));
                var zbyvaDoDopravyZdarma = zdarmaDopravaLimit - aktualniCena;

                var pricerHTML = '<div id="pricer"><div class="ptop"></div><div class="pbot"><div class="prange" style="width:0%;"></div></div></div>';

                if (zbyvaDoDopravyZdarma > 0) {
                    var pricerText = 'Objednejte ještě za <strong>' + Math.round(zbyvaDoDopravyZdarma) + ' Kč</strong> a budete mít dopravu <strong>ZDARMA</strong>.';
                    var procentoDokonceni = Math.round((aktualniCena / zdarmaDopravaLimit) * 100);
                } else {
                    var pricerText = 'Máte dopravu <strong>ZDARMA</strong>!';
                    var procentoDokonceni = 100;
                }

                $('#pricer').remove();
                $(pricerHTML).insertBefore('.discount-coupon');
                $('#pricer .ptop').html(pricerText);
                $('#pricer .prange').css('width', procentoDokonceni + '%');
            });
        }

        // Inicializace při prvním načtení
           
          aktualizujZpravuODoprave();
        
        

        // Zkontrolujte v ajaxComplete, zda požadavek není ten, který chceme ignorovat
        $(document).ajaxComplete(function(event, xhr, settings) {
            if (settings.url.indexOf("updatePricer=true") === -1) {
                aktualizujZpravuODoprave();
            }
        });
    }

  
    
    
    $.get('/klient/klient-slevy/', function(data) {
        // Kontrola, zda obsah načtený z AJAXového požadavku obsahuje specifický element
        if (
            $(data).find('#content table tr:nth-child(1) > td:nth-child(2):contains("VO")').length ||
            $(data).has('#content table tr:nth-child(1) > td:nth-child(2):contains("Velkoobchodní odběratel")').length
        ) {
            // Přidání třídy 'velkoobchod', pokud podmínka platí
            $('body').addClass("velkoobchod");
            $('<div class="pointme"></div>').insertAfter('.login-link');
        } else {
            // Přidání třídy 'normalni', pokud podmínka neplatí
            $('body').addClass("normalni");
        }
        
        // kosicek zbyva
        if ($('body').hasClass('velkoobchod')) {
            // Funkce pro aktualizaci zprávy o dopravě zdarma
            reloadKosikPyty(3000);
        } else {
            reloadKosikPyty(1500);
        }
        
        
    });

  }
});

 $(document).ready(function() { 
if($('body').hasClass('in-registrace')) {
     setTimeout(function(){
        $('#company-shopping').trigger('click');
    }, 2500);  
}
});

const elements=document.querySelectorAll(".pagination-wrapper"),observer=new IntersectionObserver(handleIntersection);function handleIntersection(e,o){e.forEach(e=>{e.intersectionRatio>0&&($(".load-products").click(),o.unobserve(e.target))})}elements.forEach(e=>{observer.observe(e)}),$.ajaxSetup({beforeSend:function(){},complete:function(){elements.forEach(e=>{let o=document.querySelectorAll(".pagination-wrapper"),n=new IntersectionObserver(function e(o,n){o.forEach(e=>{e.intersectionRatio>0&&($(".load-products").click(),n.unobserve(e.target))})});o.forEach(e=>{n.observe(e)})})}});


const prim = new class {
  constructor() {}
  imgToBg(e,t,l){
    const n = e instanceof Element ? e : document.querySelector(e),
          a = t instanceof Element ? t : document.querySelector(t),
          { src: o, height: r, width: i } = n,
          c = l || "transparent no-repeat center center";
    a.style.aspectRatio = `auto ${i} / ${r}`;
    a.style.background = `url('${o}') ${c}`;
    a.style.backgroundSize = "cover";
    a.style.height = "auto";
    a.style.width = "100%";
    n.remove();
  }
  imgReplaceBulk(){
    document.querySelectorAll(".carousel-inner a img").forEach((e => this.imgToBg(e, e.closest(".item"))));
  }
  blockOrInline({
    ns: e = "boi",
    defView: t = "inline",  // Změněno z "block" na "inline"
    mainClass: l = "products",
    appendElm: n = "#filters",
    radiosCfg: a
  } = {}){
    const o = [], r = document.getElementById(l);
    let i;

    if (n = n && n instanceof Element ? n : document.querySelector(n.toString()), null !== r && null !== n) {
      i = document.querySelectorAll('input[type="radio"][name="'+e+'"]');
      a = a || [{value:"block",label:"Block"},{value:"inline",label:"Inline"}];
      t = localStorage.getItem(e) || t;

      const c = (e = t) => l + "-" + e,
            s = () => {
              if (0 === i.length && a.length > 1) {
                const t = document.createElement("div");
                t.setAttribute("id", e);
                t.insertAdjacentHTML("afterBegin", a.map((t => 
                  '<input type="radio" name="'+e+'" value="'+t.value+'" id="'+e+"-radio-"+t.value+'" />' +
                  '<label for="'+e+"-radio-"+t.value+'">'+t.label+"</label>"
                )).join("\n"));
                n.append(t);
                i = t.querySelectorAll('input[type="radio"][name="'+e+'"]');
              } else if (0 === i.length) {
                throw new Error("No radios inputs");
              }
              d(i, t);
            },
            u = t => {
              r.classList.remove(...o);
              r.classList.add(c(t.target.value));
              localStorage.setItem(e, t.target.value);
            },
            d = e => {
              let l = null;
              i.forEach((e => {
                o.push(c(e.value));
                e.cheked = false;
                e.addEventListener("change", u);
                if (e.value === t) {
                  l = e;
                }
              }));
              if (null !== l) {
                l.checked = true;
                l.dispatchEvent(new InputEvent("change", { default: true }));
              }
            };

      try {
        s();
      } catch (e) {}
    } else if (!n instanceof HTMLDivElement) {
      throw new Error("Element for Append() not exist");
    }
  }
  init(){
    this.imgReplaceBulk();
    this.blockOrInline({ appendElm: "#filters-wrapper" });
  }
};

document.addEventListener("DOMContentLoaded", () => prim.init());
document.addEventListener("ShoptetDOMPageContentLoaded", () => prim.init());









if ($('.type-detail #dotazy h4:contains("Dotazy")').length > 0) {
    $('.type-detail').addClass('faq');
    $('<div id="askload"></div>').insertAfter('.p-detail-tabs-wrapper'); 
$("#askload").load("/ask/ #ask");

    
}

$('.type-detail #instrukce').insertAfter('.type-detail #description'); 
$('.type-detail #slozeni').insertAfter('.type-detail #description'); 

setTimeout(function() {
   $(".type-detail #dotazy").appendTo(".type-detail .askcontainer");
}, 3000);

$('#products .product').each(function(){
  var desc = $(this).find('.prices');
  $(this).find('.prices').remove();
  $(this).find('.btn').after(desc);
});



$('.id-1 .product').each(function(){
  var desc = $(this).find('.prices');
  $(this).find('.prices').remove();
  $(this).find('.btn').after(desc);
});

$('.type-detail .product').each(function(){
  var desc = $(this).find('.prices');
  $(this).find('.prices').remove();
  $(this).find('.btn').after(desc);
});

$('#products-found .product').each(function(){
  var desc = $(this).find('.prices');
  $(this).find('.prices').remove();
  $(this).find('.btn').after(desc);
});



$( document ).ajaxComplete(function() {
  $('#products .product').each(function(){
  var desc = $(this).find('.prices');
  $(this).find('.prices').remove();
  $(this).find('.btn').after(desc);
});


  $('.id-1 .product').each(function(){
  var desc = $(this).find('.prices');
  $(this).find('.prices').remove();
  $(this).find('.btn').after(desc);
});


});

document.addEventListener("DOMContentLoaded", () => {


$('.category-title').appendTo('.catban .title');
$('.category-perex').appendTo('.catban p');

});


$(document).on('mouseleave', '.post-hover', function(){
    $(this).removeClass('post-hover');
    console.log('out');
});

$(document).on('mouseover', '.menu-level-2 .cat-trigger', function(){
    $(this).closest("li").addClass("post-hover");
    console.log('in');
});

Object.defineProperty(String.prototype, "capitalize", {
    value: function () {
        return this.charAt(0).toUpperCase() + this.slice(1);
    },
    enumerable: false
});

const blogThemes = ["dlouhověkost", "Imunita", "Střeva a trávení", "Detox", "vše"];

const filterBlogItems = (e) => {
    document.querySelectorAll(".in-zdravi .news-item").forEach((v) => {
        if (
            e.target.dataset.filter === "vše" ||
            v.textContent.search(
                ".*(tema: " + e.target.dataset.filter + ").*"
            ) > -1
        ) {
            v.classList.remove("hide");
        } else {
            v.classList.add("hide");
        }
    });
};

const createBlogFilter = () => {
    const btnGroup = document.createElement("div");
    btnGroup.classList.add("filterBtnGroup");
    blogThemes.forEach((v) => {
        const btn = document.createElement("button");
        btn.dataset["filter"] = v;
        btn.classList.add("btn", "btn-secondary", "btn-text", "btn-filter");
        btn.textContent = v.capitalize();
        btn.addEventListener("click", filterBlogItems);
        btnGroup.append(btn);
    });
    document.querySelector(".in-zdravi #content > div > h1")?.after(btnGroup);
};

document.addEventListener("DOMContentLoaded", createBlogFilter);


$(document).ready(function(){
   var availableTags = [];
    var availableUrl = [];

    $('.news-item a.title').each(function (){
        availableTags.push($(this).text().trim());
        availableUrl.push($(this).attr('href'));
    });

    $( "#blog-search" ).autocomplete({
        source: availableTags,
        select: function( event, ui ) {
            var value = ui.item.value;
            var index = availableTags.indexOf(value);
            var targetUrl = availableUrl[index];
            window.location.href = targetUrl;
        }
    });

$('.site-msg').prependTo('#header');

  if ($(".site-msg").hasClass('information')){
        $("body").addClass('msgbox');
    }


$('.type-detail .stars-wrapper').insertAfter('.type-detail .detail-parameters-wrapper');





$('.product').each(function(){
  var desc = $(this).find('.price-standard');
  $(this).find('.price-standard').remove();
  $(this).find('.price-final').before(desc);
});


 
$('.prices span').each(function(){
    if($(this).hasClass('price-standard')) {
        $(this).closest('.product').addClass('sales');
    } 
});

});

$(".custom-footer__categories").detach().appendTo('.box.box-bg-variant.box-sm.box-filters');




if ($('.detail-parameters td:contains("Raw")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/raw.svg"><h2>Raw</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Ajurvedskaá receptura")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/ajurvedska_receptura.svg"><h2>Ajurvedskaá receptura</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez fluoridu")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bez_fluoridu.svg"><h2>Bez fluoridu</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez gmo")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bez_fluoridu.svg"><h2>Bez GMO</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez laktózy")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bezl.svg"><h2>Bez laktózy</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez lepku")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bez_lepku.svg"><h2>Bez lepku</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez soji")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bez_soji.svg"><h2>Bez sóji</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bio")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bio.svg"><h2>Bio</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Čistě přírodní")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/ciste_prirodni.svg"><h2>Čistě přírodní</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Cosmos")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bez_fluoridu.svg"><h2>Cosmos vybrané ingredience</h2></div>').insertBefore(".p-short-description");

}

if ($('.detail-parameters td:contains("Extrakty")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/extrakty.svg"><h2>Extrakty</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Ruční výroba")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/rucni_vyroba.svg"><h2>Ruční výroba</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Vegan")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/vegan.svg?1"><h2>Vegan</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Doplněk stravy")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/doplnek.svg"><h2>Doplněk stravy</h2></div>').insertBefore(".p-short-description");

}

if ($('.detail-parameters td:contains("Bez cukru")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bezcukru.svg"><h2>Bez cukru</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez lektinů")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bezlektinu.svg"><h2>Bez lektinů</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez škrobu")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bezskrobu.svg"><h2>Bez škrobu</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Bez soli")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/bezsoli.svg"><h2>Bez soli</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Ruční výroba")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/rucni.svg"><h2>Ruční výroba</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Vegetarián")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/vege.svg"><h2>Vegetarián</h2></div>').insertBefore(".p-short-description");

}
if ($('.detail-parameters td:contains("Wild")').length > 0) {
          $('<div class="idc"><img alt="raw" src="/user/documents/pic/icons/wild.svg"><h2>Wild</h2></div>').insertBefore(".p-short-description");

}



if ($('.detail-parameters th:contains("Terapeut")').length > 0) {
$( ".link-icon.chat" ).insertBefore( ".p-add-to-cart-wrapper" );
$( ".type-detail" ).addClass( "terapeutprodukt" );
}



$(".type-detail .p-image .flag-discount").prependTo(".flags-default");


setTimeout(function(){

$('.type-detail .link-icon.chat').clone().appendTo('#ask .but');

}, 2500); 



if ($("body").hasClass("type-product")) {
    const videoBasePath = $(".detail-parameters th:contains('video')");
    const imageBasePath = $(".detail-parameters th:contains('nahled')");
    const videoUrl = videoBasePath.parent().find("td").text();
    const imageUrl = imageBasePath.parent().find("td").text();

    if (videoBasePath.length > 0 && imageBasePath.length > 0) {

        if($(".p-thumbnails-inner .p-thumbnail").length > 2) {
            $(".p-thumbnails-inner .p-thumbnail").eq(1).after('<a href="#" id="show-video" class="p-thumbnail"><img src="' + imageUrl + '" alt="" width="100" height="100"></a>');
        } else {
            $(".p-thumbnails-inner > div").append('<a href="#" id="show-video" class="p-thumbnail"><img src="' + imageUrl + '" alt="" width="100" height="100"></a>');
        }
        $(".p-image").append("<div id='video-wrapper' style='display: none;'><video style='max-width: 100%' muted='muted' autoplay='' loop='' playsinline='' src='" + videoUrl + "' type='video/mp4'></video></div>");
        $(document).on("click", ".p-thumbnails-inner a", function () {
            $("#video-wrapper").toggle($(this).attr("id") == "show-video");
            $("#wrap").toggle($(this).attr("id") != "show-video");
            $(".p-main-image").toggle($(this).attr("id") != "show-video");
        });
    }
    videoBasePath.parent().hide();
    imageBasePath.parent().hide();

    if(dataLayer[0].shoptet.product.codes.length > 1) {
        $.each(dataLayer[0].shoptet.product.codes, function(x, val) {
          if(val.quantity <= 0 || !val.quantity) {
                $.each(shoptet.variantsSplit.necessaryVariantData, function(i, variant) {
                    if(val.code == variant.code) {
                var parsed = i.split("-");
                $("[name='parameterValueId\[" + parsed[0] + "\]'][value='" + parsed[1] + "']").closest(".advanced-parameter").addClass("disabled");
              }
            });
          }
        });
    }


}



$('<a class="bonuss" href="/vernostni-program-ecce-vita-plus/">Sbírejte body do věrnostního programu</a>').prependTo('[data-testid="discountMotivation"] span');

document.addEventListener('ShoptetDOMCartContentLoaded', function () {
        $('<a class="bonuss" href="/vernostni-program-ecce-vita-plus/">Sbírejte body do věrnostního programu</a>').prependTo('[data-testid="discountMotivation"] span');
    });


 
$(document).ready(function(){
$('.outof .chat').clone().insertBefore('.availability-label');

$('<div class="ref"><div class="prohold"><h2>Hodnocení obchodu</h2></div><div id="references"></div><a class="but" href="/hodnoceni-obchodu/">Všechna hodnocení</a></div>').insertAfter( '.id-1 #content-wrapper');


 $( "#references" ).load( "/hodnoceni-obchodu/ #content" , null, function(){
$(".stars").each(function() {
    var starOnCount = $(this).find(".star-on").length;
    if (starOnCount >= 1 && starOnCount <= 3) {
      $(this).closest(".vote-wrap").addClass("hide");
    }
  });
   

 $('.vote-pic img').each(function(){
      $(this).attr('src', $(this).data('src'));
    });
  });
});



 


if ($('.type-detail .flags .flag-1-darek').text().includes('dárek')) {
  $('.flag-xy-discount').each(function() {
    var text = $(this).text();
    if (text.includes('1 + 1')) {
      $(this).text(text.replace('1 + 1', '1 + dárek'));
    } else if (text.includes('2 + 1')) {
      $(this).text(text.replace('2 + 1', '2 + dárek'));
    } else if (text.includes('3 + 1')) { // Přidání podmínky pro '3 + 1'
      $(this).text(text.replace('3 + 1', '3 + dárek'));
    }
  });
}
$('.p').each(function() {
  // Kontrola, zda element .p obsahuje element s třídou .flag-1-darek
  if ($(this).find('.flag-1-darek').length > 0) {
    // Aktualizace textu pouze pro .flag-xy-discount uvnitř tohoto .p elementu
    $(this).find('.flag-xy-discount').text(function(index, currentText) {
      if (currentText.includes('1 + 1')) {
        return currentText.replace('1 + 1', '1 + dárek');
      } else if (currentText.includes('2 + 1')) {
        return currentText.replace('2 + 1', '2 + dárek');
      }
      return currentText; // Vrátí původní text, pokud nejsou splněny žádné podmínky
    });
  }
});



document.addEventListener('ShoptetDOMPageMoreProductsLoaded', function() {
 

$('.p').each(function() {
  // Kontrola, zda element .p obsahuje element s třídou .flag-1-darek
  if ($(this).find('.flag-1-darek').length > 0) {
    // Aktualizace textu pouze pro .flag-xy-discount uvnitř tohoto .p elementu
    $(this).find('.flag-xy-discount').text(function(index, currentText) {
      if (currentText.includes('1 + 1')) {
        return currentText.replace('1 + 1', '1 + dárek');
      } else if (currentText.includes('2 + 1')) {
        return currentText.replace('2 + 1', '2 + dárek');
      }
      return currentText; // Vrátí původní text, pokud nejsou splněny žádné podmínky
    });
  }
});



  });



$(document).ready(function() {
    $('.category__secondDescription ul li a').each(function() {
        var $link = $(this);
        var url = $link.attr('href');
        $.get(url, function(data) {
            var $data = $('<div>').append(data);
            var imgURL = $data.find('meta[property="og:image"]').attr('content');
            
            // Získání obsahu meta tagu 'title'
            var title = $data.find('title').text();
            
            // Získání obsahu meta tagu 'description' místo 'og:description'
            var description = $data.find('meta[name="description"]').attr('content');
            
            var $img = $('<img>').attr('src', imgURL);
            
            // Vytvoření a vložení elementu 'title' hned za obrázek
            var $title = $('<h2>').text(title);
            
            var $desc = $('<p>').text(description);
            var $storyDiv = $('<div>').addClass('storycategory').append($img).append($title).append($desc);
            $link.empty().append($storyDiv);
        });
    });
});


$('<div id="target"></div>').insertAfter('.id-1 #header');

/*
$(document).ready(function(){

    var newSlider = $('<div class="swiper">' +
                        '<div class="swiper-wrapper"></div>' +
                        '<div class="swiper-pagination"></div>' +
                        '<div class="swiper-button-prev"></div>' +
                        '<div class="swiper-button-next"></div>' +
                        '<div class="swiper-scrollbar"></div>' +
                    '</div>');

    $('#carousel .item').each(function(i, slide){
        var slideObj = $(slide).addClass('swiper-slide');
        newSlider.find('.swiper-wrapper').append(slideObj);
    });


    newSlider.appendTo('#target');





    $('.wide-carousel').remove();


var menu = [];
document.querySelectorAll('.swiper-slide .extended-banner-title').forEach(function(h1, index) {
  menu.push(h1.textContent.trim()); // Assuming you want to trim the white space
});

    const swiper = new Swiper('.swiper', {
centeredSlides: false,
        loop: true,
        spaceBetween: 0,
              slidesPerView: 4,
parallax: true,
      lazy: true,

breakpoints: {
               0: {
            slidesPerView: 1, 
        },
        
        780: {
            slidesPerView: 2, 
        },
                1024: {
            slidesPerView: 3,
        }
    },



        pagination: {
            el: '.swiper-pagination',
clickable: true,
    renderBullet: function(index, className) {
      return '<span class="' + className + '">' + (menu[index]) + '</span>';
    },
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        scrollbar: {
            el: '.swiper-scrollbar',
        },
      
    
        
    });
});
*/

$(document).ready(function() {
    $('.item img').each(function() {
        var altText = $(this).attr('alt');
        var tagItem = $('<div class="tagitem"></div>').text(altText);
        $(this).closest('.item').prepend(tagItem);
    });
});


$(document).ready(function() {
  $('.item a.productstory').each(function() {
    var link = $(this);
    var productUrl = link.attr('href');
    $.ajax({
      url: productUrl,
      type: 'GET',
      success: function(response) {
        // Vytvoření prázdného divu pro shromažďování informací o produktu
        var productInfo = $('<div class="product-info"></div>');

        // Výběr obrázku produktu a jeho vložení do productInfo
        var productImage = $(response).find('.p-image img').clone();
        productInfo.append(productImage);

        // Výběr názvu produktu a jeho vložení do productInfo
        var productName = $(response).find('.p-data-wrapper h1').clone();
        productInfo.append(productName);

        // Výběr dostupnosti produktu a jeho vložení do productInfo
        var productAvailability = $(response).find('.p-data-wrapper .availability-label').clone();
        productInfo.append(productAvailability);

        // Výběr sekce "přidat do košíku" a její vložení do productInfo
        var addToCart = $(response).find('.p-data-wrapper .p-to-cart-block').clone();
        productInfo.append(addToCart);

        // Vložení shromážděných informací o produktu do původního odkazu
        link.html(productInfo);
        link.wrapInner('<div class="storyin"></div>'); // Obalení nového obsahu do divu pro lepší stylování
      },
      error: function(error) {
        console.log('Chyba při načítání produktu z ' + productUrl + ': ', error);
      }
    });
  });
});


$(document).ready(function(){
    // Najdeme všechny <h1>, které obsahují 'Mgr. Martina Parisová'
    $("h1:contains('Mgr. Martina Parisová')").hide();
});

$(document).ready(function() {
  $('.item').each(function() {
    var item = $(this);
    var bannerLink = item.find('.extended-banner-link');
    var bannerTitle = item.find('.extended-banner-text');
    
    if (bannerLink.length && bannerTitle.length) {
      bannerLink.insertAfter(bannerTitle);
    }
  });
});


$(document).ready(function() {
    // Funkce pro odstranění třídy 'splitted'
    function removeSplittedClass() {
        $('li.splitted').removeClass('splitted');
    }

    // Zavolat funkci hned na začátku pro odstranění třídy při načtení stránky
    removeSplittedClass();

    // Nastavení MutationObserver
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            if (mutation.type === 'childList' || mutation.type === 'attributes') {
                removeSplittedClass();
            }
        });
    });

    // Cílový uzel a konfigurace pro pozorování
    const targetNode = document.getElementById('navigation');
    const config = { attributes: true, childList: true, subtree: true };

    // Zahájení pozorování
    if (targetNode) {
        observer.observe(targetNode, config);
    }
});

$(document).ready(function() {
    $('.client-center-box ul li a').each(function() {
        if ($(this).text().trim() === 'Moje osobní údaje') {
            $(this).text('Moje firemní údaje');
        }
    });
});




document.addEventListener('ShoptetDOMPageContentLoaded', function() {
 $("div.products form.pr-action").each(function(){
        if($(this).find('input[type="hidden"][name="amount"]').length > 0){
            $(this).find('input[type="hidden"][name="amount"]').remove();
        }
        if($(this).find('input[name="amount"]').length === 0){
            $(this).prepend("<input type='number' name='amount' value='1' class='pcsindex'>");
        }
    });
    $("div.product-top div.add-to-cart").each(function(){
        if($(this).find('input[name="amount"]').length === 0){
            $(this).prepend("<input type='number' name='amount' value='1' class='pcsindex'>");
        }
        if($(this).find('input[type="hidden"][name="amount"]').length > 0){
            $(this).find('input[type="hidden"][name="amount"]').remove();
        }
    });

$('#products .product').each(function(){
  var desc = $(this).find('.prices');
  $(this).find('.prices').remove();
  $(this).find('.btn').after(desc);
});

 
});
