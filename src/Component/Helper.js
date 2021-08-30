import React from 'react';

export const objToQueryString = (obj) => {
    const keyValuePairs = [];
    for (const key in obj) {
      keyValuePairs.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
    return keyValuePairs.join('&');
  }

export const ajaxGet = (url,paramMap,callback) => {
    let queryString = '';
    if(paramMap != null)
    {
        queryString = '?'+objToQueryString(paramMap);
    }
    url = url+queryString;
    console.log(url);
    const response = fetch(url, {
        method: 'GET',
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'authorization' : window.sessionStorage.getItem("apiKey")
        }
    }).then(function (response) {
        
        callback(response);

    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong new .', error);
    });



    console.log(response);
}

export const ajaxPost =(url,paramMap,body,callback)=>
{
    let queryString = '';
    if(paramMap != null)
    {
        queryString = '?'+objToQueryString(paramMap);
    }
    url = url+queryString;
    console.log(url);
    const response = fetch(url, {
        method: 'POST',
        body : body,
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
            'authorization' : window.sessionStorage.getItem("apiKey")
        }
    }).then(function (response) {
        
        callback(response);

    }).then(function (data) {
        console.log(data);
    }).catch(function (error) {
        console.warn('Something went wrong new .', error);
    });
    console.log(response);
}