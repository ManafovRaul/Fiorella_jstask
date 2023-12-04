const cards = document.getElementById('item');

const data = [
    {
        title: "MAJESTY PALM",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-14-img.jpg",
        price: "$259",
        function: "Add to Cart",
    },
    {
        title: "FOXGLOVE FLOWER",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-13-img.jpg",
        price: "$259",
        function: "Add to Cart",

    },
    {
        title: "SWEET ALYSSUM",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/05/shop-10-img.jpg",
        price: "$259",
        function: "Add to Cart",

    },
    {
        title: "SPRING SNOWFLAKE",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-11-img.jpg",
        price: "$170",
        function: "Add to Cart",

    },
    {
        title: "SCARLET SAGE",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-12-img.jpg",
        price: "$259",
        function: "Add to Cart",

    },
    {
        title: "ROCK SOAPWORT",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-9-img.jpg",
        price: "$259",
        function: "Add to Cart",

    },
    {
        title: "SUMMER SAVORY",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-8-img.jpg",
        price: "$259",
        function: "Add to Cart",

    },
    {
        title: "WILD ROSES",
        imgUrl: "https://fiorello.qodeinteractive.com/wp-content/uploads/2018/04/shop-7-img.jpg",
        price: "$259",
        function: "Add to Cart",

    },

]


let inner = "";

data.forEach(function (item){

    inner += `

    <div class="col-sm-6 col-md-4 col-lg-3">
    
    <div class="cart">
    <div class ="img">
    <img src=${item.imgUrl} alt="plant"/>
    </div>
    <div class="name_and_price">
    <h6 class="to_title">${item.title}</h6>
    <span class="to_cart">${item.function}</span>
    <span class="to_dollar">${item.price}</span>
    </div>
    </div>
    </div>
    
    `
});

cards.innerHTML = inner;




var player;
var lastButton = '';
const youtube = 'youTubeIframe';
const titleInsert = '.js-title-insert';
const btnPlay = '.js-play';
const btnPause = '.js-pause';
const modalId = '#modalVideo';
const videoQuality = 'hd720';

function onYouTubePlayerAPIReady() {
  player = new YT.Player(youtube, {
    controls: 2,
    iv_load_policy: 3,
    rel: 0,
    events: {
      onReady: onPlayerReady
    }
  });
}

function onPlayerReady(event) {
  'use strict';
  $(btnPlay).on('click', function() {
    var videoId = $(this).attr('data-src');
    
    if (lastButton == videoId) {
      $(titleInsert).text($(this).attr('data-title'));
      player.playVideo(videoId, 0, videoQuality);
    } else {
      $(titleInsert).text($(this).attr('data-title'));
      player.loadVideoById(videoId, 0, videoQuality);
      lastButton = videoId;
    }
  });
  
  $(btnPause).on('click', function() {
    player.pauseVideo();
  });
  
  $(modalId).on('click', function() {
    player.pauseVideo();
  });
}