const url = "https://jsonplaceholder.typicode.com/posts";

async function fetchData() {
    const response =  fetch(url);
    const data =  response.json();
    
        console.log(data);
    
}
/*
var options =
{
    root: document.querySelector("html"),
    rootMargin: 0px, 0px, 75px, 0px,
    threshold: 1.0;

};

var callback = function (entries, observer) {

};

var observer = new IntersectionObserver(callback, options);


var target = document.querySelector("#post");
observer.observe(target);

function addPost() {
    const newEl = document.createElement("div");
    const newContent = document.createTextNode("Hi there and greetings!");
    newEl.appendChild(newContent);
    const curdiv = document.getElementById("#post");
    document.body.insertBefore(newEl, curdiv);
}
















const delay = ms => {
    return new Promise(r => setTimeout(() => r(), ms))
}

//delay(2000).then(() => console.log('2sec'));

const Post = document.getElementById('post');
let FPost = Post;
const main = document.querySelector('main');
let post = document.getElementById("text");
let postitle = document.getElementById("titl");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");


dislike.addEventListener('click', () => {
    console.log("dislike");
})


let i = 0;

let porog = 0;
const url = "https://jsonplaceholder.typicode.com/posts";
// ������ ��������� � ������ ������:
const height = document.body.offsetHeight / 3
const screenHeight = window.innerHeight
porog = height - screenHeight / 2 //����� = �������� ������ 

async function checkPosition() {
    console.log("i =" + i.toString());
    
    console.log(height.toString());
    console.log(screenHeight.toString());
    const scrolled = window.scrollY//���������� ����� �������� �� ������� ���������� ��������
    console.log("scrolly= "+scrolled.toString());
    console.log("porog="+porog.toString());
    //�����������, ��� ��������� ��� ������ ������������ ��������:
    const position = scrolled + screenHeight
    console.log("pos="+position.toString());
    if (i == 100) {
        console.log("return");
        return;
    }else if (position >= porog)  {
        //���� �� ��������� ������-�����, �������� ������ ��������.
        nowscr = scrolled;
        porog = position;
        i++;
        console.log("wow");
      //  await delay(2000);
        await fetchData(i);
         


    }
}
//fetchData();
//checkPosition();

/*window.addEventListener('scroll', function () {
    document.getElementById('main').innerHTML = pageYOffset + 'px';
    console.log("fu");
});*/
/*
// ����� �������� ���������:
let nextPage = 2

// ���� ��������� ������, �� ��� �� �������� �����,
// �� ����� ���������� ��� ���� ������:
let isLoading = false

// ���� ������� ����������, ������ ������ �� �����
// ���������� ������� ��������:
let shouldLoad = true

async function fetchPosts() {
    // ���� �� ��� ��������� ������, ��� ����� ������� ����������,
    // �� ����� ������ ���������� �� ����:
    if (isLoading || !shouldLoad) return

    // ������������� ����� �������, ���� �� ���������� ����:
    isLoading = true

    const { posts, next } = await server.posts(nextPage)
    posts.forEach(appendPost)

    // � ��������� ��� ����������� �������� � ������� next:
    nextPage = next

    // ���� �� �������, ��� ������� ����������,
    // ��������, ��� ������ ����������� ������ �� ����:
    if (!next) shouldLoad = false

    // ����� ������ �������� � ���������,
    // ������� ���� isLoading:
    isLoading = false
}

function appendPost(postData) {
    // ���� ������ ���, ������ �� ������:
    if (!postData) return

    // ������ ������ �� �������, ������ ��������
    // ������� ����� ��������-�����:
    const main = document.querySelector('main')

    // ���������� ������� composePost,
    // ������� ������� ���� ����� �
    // ��� ���������� ������ � HTML-�������:
    const postNode = composePost(postData)

    // ��������� ��������� ������� � main:
    main.append(postNode)
}
function composePost(postData) {
    // ���� ������ �� ��������, ������ �� ����������:
    if (!postData) return

    // ���������� � �������, ������� ������� �����:
    const template = document.getElementById('post_template')

    // ...� ����������� ��� ����������.
    // � ����� ������ ���������� ����� ������� �����, ������� article.
    // ���������, ��� ��� ���������� ��� ������������, � �� ������������ ��� �������,
    // ����� �� ��������� ���, � �� �� ������ ������� ��������� ������:
    const post = template.content.cloneNode(true)

    // �� postData �������� ��� ����������� ����������:
    const { title, body, likes, reposts } = postData

    // ��������� ��������������� ������ � ����� � ������ ����� � ��������:
    post.querySelector('h1').innerText = title
    post.querySelector('p').innerText = body
    post.querySelector('button:first-child').innerText += likes
    post.querySelector('button:last-child').innerText += reposts

    // ���������� ��������� �������,
    // ����� ��� ����� ���� �������� �� ��������:
    return post
}
*/






/*


async function fetchData(i,Post) {
    try {

            // await delay(2000);
                const response = await fetch(url);
                const data = await response.json();
                const ppost = FPost.cloneNode(true);

                ppost.querySelector('h1').innerText = data[i].title;
                ppost.querySelector('form').innerText = data[i].body;
        console.log(ppost);
       // await delay(3000);

                
        
        FPost.after(ppost);
        FPost = ppost;
        // Post.append(ppost); 

                console.log("fetchdata");
                console.log(i.toString());
  
       // })

       // let newpost=document.createElement("")
       /* for (let i = 0; i < 10; i++) {
            ppost.querySelector('h1').innerText = data[i].title;
            ppost.querySelector('form').innerText = data[i].body;
            console.log(ppost);
            Post.append(ppost);
        }*/
       /* post.textContent = data[0].body;
        postitle.textContent = data[0].title;*/
       // ppost.querySelector('h1').innerText = 'hi';
       // ppost.querySelector('form').innerText = 'fuck';
        //Post.after(ppost);
        //post.querySelector('button:first-child').innerText += likes
        //post.querySelector('button:last-child').innerText += reposts
        //return data;
        //console.log(data);
        //return ppost;
   /* }
     catch (e) {
         console.error(e);
     }
    finally {
        console.log('finally');
       // checkPosition();
    }*/
//window.addEventListener('scroll', (event) => checkPosition());