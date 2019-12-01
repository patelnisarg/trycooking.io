function call(apiMethod, func) {
    fetch(apiMethod).then(x => x.json().then(func));
  }
  
function post(apiMethod, data, func) {
    fetch(apiMethod, {
        method: "POST",
        headers: {
        "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    }).then(x => x.json().then(func));
}

export {call, post}