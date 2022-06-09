const posts = [
    {title: 'Post one', body: 'This is post one'},
    {title: 'Post one', body: 'This is post one'},
]

function getPosts(){
    setTimeout(()=>{
        let output = '';
        posts.forEach((post, index)=>{
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

// function createPost(post, callback){
//     setTimeout(()=>{
//         posts.push(post);
//         callback();
//     }, 200);
// }

// getPost();  

// createPost({title:'Post Three', body: 'This is post three'}, getPosts);



function createPost(post){
    return new Prmose((resolve, rejec)=>{
        setTimeout(()=>{
            posts.push(post);
            const error = false;
            if(!error){
                resolve()
            } else {
                reject('Error: Something went wrong')
            }
        }, 200);
    })
}

// createPost({
//     title: 'Post Three', 
//     body: 'This is post'})
//     .then(getPosts)
//     .catch(err => console.log(err))

// async function init(){
//     await createPost({title:'Post Three', body: 'This is post three'}, getPosts);
//     getPosts();
// }

// init();

async function fetchAPI(){
    const res = await fetch('https://jsonplaceholder.typicode.com/todos/1')
    const data = await res.json();
    console.log(data)
}

fetchAPI()
// const promise1 = new Promise.resolve('Hello, World!');
// const promise2 = 10;
// const promise3 = new Promise((resolve, reject)=>setTimeout(resolve, 20000, 'Goodbye'))
// const promise4 = fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => res.json())
// Promise.all([promise1, promise2, promise3, promise4]).then(((values)=>console.log('values')))