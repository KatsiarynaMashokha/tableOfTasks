export default function getAllTasks() {
  let promise = new Promise((resolve, reject) => {
    let request = new XMLHttpRequest();
    let url = "https://jsonplaceholder.typicode.com/todos";
    request.onload = function() {
      if (this.status === 200) {
        resolve(request.response);
      } else {
        reject(Error(request.statusText));
      }
    };
    request.open("GET", url, true);
    request.send();
  });
  return promise.then(
    response => JSON.parse(response),
    error => {
      console.log(error);
    }
  );
}
