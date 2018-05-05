
    //   var queryURL = "https://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=cats";

    //   //send a request to phiphy api
    //   $.ajax({
    //     url: queryURL,
    //     method: "GET"
    //   })

    //  what to do with the response
    //     .then(function(response) {



    var apikey= "e78a62fa625b407aa4c47a2fe998e4cc"
    var endDate;
    var startDate;
    var string;
    var queryURL= "https://api.nytimes.com/svc/search/v2/articlesearch.json"
    var resultArray;
    

    $("#searchBtn").on("click", function(event){
        event.preventDefault();
        console.log("something")
        endDate = $("#endYear").val();
        string = $("#searchTerm").val();
        startDate = $("#startYear").val();
 
        var resultArray;
    
        $.ajax({
            url: queryURL + "?q="+string +"?end_date=" + endDate + "?begin_date=" +startDate + "&apikey=" + apikey,
            method: "GET"
        }).then (function(a){
    
            resultArray= a.response.docs;
            for(i=0; i<5; i++){

                var resultDiv= $("#articleResults") 

                var title = a.response.docs[i].headline.main
                var author = a.response.docs[i].headline.main
                var pubDate= a.response.docs[i].pub_date
                var webUrl= a.response.docs[i].web_url

                resultDiv.append("<h1>"+ title +"</h1>")
                resultDiv.append("<p>"+ author +"</p>")
                resultDiv.append("<p>"+ pubDate +"</p>")
                resultDiv.append("<a href='"+ webUrl+"'>"+ webUrl + "</a>" )
                console.log(a.response.docs[i].headline.main);
                console.log(a.response.docs[i].byline.original);
                console.log(a.response.docs[i].pub_date);
                console.log(a.response.docs[i].web_url);
            }
            console.log(resultArray);
            
        });


    })