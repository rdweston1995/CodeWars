/**
 * Write a function to extract the domain name from a passed string URL
 */

 console.log(extractDomain("http://github.com/carbonfive/raygun"));
 console.log(extractDomain("http://www.zombie-bites.com"));  //Working
 console.log(extractDomain("https://www.cnet.com"));

 function extractDomain(url) {
    // if(url.substring(0, 11) === "http://www.") {return url.substring(11, url.indexOf(".com"))}
    // else if(url.substring(0, 12) === "https://www.") {return url.substring(12, url.indexOf(".com"))}
    // else if(url.substring(0, 7) === "http://") {return url.substring(7, url.indexOf(".com"))}
    // else {return url}

    // console.log(url);
    // url = url.substring(url.indexOf(".") + 1);
    // console.log(url);
    // url = url.substring(0, url.indexOf("."));
    if(url.indexOf("www.") === -1 && url.indexOf("//") !== -1) {
       url = url.substring(url.indexOf("//") + 2, url.indexOf("."));
    } else if(url.indexOf("www.") === -1 && url.indexOf("//") === -1){
       url = url.substring(0, url.indexOf("."));  
    } else {
        url = url.substring(url.indexOf(".") + 1);
        url = url.substring(0, url.indexOf("."));
    }
    return url;
 }