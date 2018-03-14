
// National Park Service News
// "https://developer.nps.gov/api/v1/parks?parkCode=acad&api_key="
jQuery(function(){})
  let apiKeyNps = "B19lQOpZy8ULXH1xdG3K0zWgGhfexgZrQrzAe8H8"
  let urlNps = "https://developer.nps.gov/api/v1/newsreleases?api_key=" + apiKeyNps
  jQuery.get(urlNps, function(data) {
    console.log(data);
    jQuery(".parks").empty();
    for (let i=0; i<10; i++){
      let park = data.data[i];
      let html ='<div class="card">';
      html = html + '<img class="card-img-top" src="' + park.image.url + '">';
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title"><a href=' + park.url+'>' + park.title + '</h4>' + '</a>';
      html = html + '<p class="card-text">' + park.abstract + '</p>';
      html = html + '</div></div></div>';
      jQuery(".parks").append(html);
  }

  jQuery(".parks").fadeIn(2000);
  });


// NYT articles
jQuery(function(){
  let apiKeyNyt = "417baefb2d5c4c7ab346fd38015a8f4d";
  let urlNytNews = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKeyNyt
  jQuery.get(urlNytNews, function(data) {
    console.log(data);
    jQuery(".news").empty();
    for (let i=0; i<20; i++){
      let article = data.results[i];
      let html = '<div class="card">';
      // html = html + '<img class="card-img-top" src="' + article.multimedia[0].url + '">'; note - some articles didn't have images - seemed to break the loop
      html = html + '<div class="card-body">';
      html = html + '<h4 class="card-title"><a href=' + article.url+'>' + article.title + '</h4>' + '</a>';
      html = html + '<p class="card-text">' + article.abstract + '</p>';
      html = html + '</div></div></div>';
      jQuery(".news").append(html);
  }
  jQuery(".news").fadeIn(2000);
  });
  });


  // Buzzfeed articles
  jQuery(function(){
    let apiKeyNews = "f7c04ea248414450b06d09f7cfd66bf8";
    let urlNews = "https://newsapi.org/v2/top-headlines?sources=buzzfeed&apiKey=" + apiKeyNews
    jQuery.get(urlNews, function(data) {
      console.log(data);
      jQuery(".buzzfeed").empty();
      for (let i=0; i<10; i++){
        let report = data.articles[i];
        let html = '<div class="card">';
        html = html + '<img class="card-img-top" src="' + report.urlToImage + '">';
        html = html + '<div class="card-body">';
        html = html + '<h4 class="card-title"><a href=' + report.url+'>' + report.title + '</h4>' + '</a>';
        html = html + '<p class="card-text">' + report.description + '</p>';
        html = html + '</div></div></div>';
        jQuery(".buzzfeed").append(html);
  }
    jQuery(".buzzfeed").fadeIn(2000);
    });
  });




// CTA Alerts API format
// "http://www.transitchicago.com/api/1.0/routes.aspx" "?type=rail&outputType=JSONapi-key=XXXXX"
