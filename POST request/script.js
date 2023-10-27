const createTodo = async (todo) => {
    let options = {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(todo)
    };
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options);
    let response = await p.json();
    return response;
}

const getTodo = async (id) => {
    let p = await fetch('https://jsonplaceholder.typicode.com/posts/' + id);
    let r = await p.json();
    return r;
}

const mainfun = async () => {
    let todo = {
        title: 'harry',
        body: 'Brother',
        userID: 1100
    };
    let toDoRes = await createTodo(todo);
    console.log(toDoRes);
    console.log(await getTodo(50)); // Added 'await' here
}

mainfun();
