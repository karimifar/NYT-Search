
    //   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    //   //send a request to phiphy api
    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })

    //  what to do with the response
    //     .then(function(response) {



    var apikey= "e78a62fa625b407aa4c47a2fe998e4cc"
    var endDate = "1980";
    var startDate = "2010";
    var string = "Lincoln";
    var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    var resultArray;

    $.ajax({
        url: queryURL + "?q="+string +"?end_date=" + endDate + "?begin_date=" +startDate + "&apikey=" + apikey,
        method: "GET"
    }).then (function(a){

        resultArray= a.response.docs;
        for(i=0; i<5; i++){

            console.log(a.response.docs[i].headline.main);
            console.log(a.response.docs[i].byline.original);
            console.log(a.response.docs[i].pub_date);
            console.log(a.response.docs[i].web_url);
        }
        console.log(resultArray);
        
    });