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
let vkl = true;
let nowscr = 0;
let porog = 0;
const url = "https://jsonplaceholder.typicode.com/posts";
// высота документа и высота экрана:
const height = document.body.offsetHeight / 3
const screenHeight = window.innerHeight
porog = height - screenHeight / 4 //порог = четверть экрана 

async function checkPosition() {
    console.log("i =" + i.toString());
    
    console.log(height.toString());
    console.log(screenHeight.toString());
    const scrolled = window.scrollY//возвращает число пикселей на которое пролискали документ
    console.log("scrolly= "+scrolled.toString());
    console.log("porog="+porog.toString());
    //Отслеживаем, где находится низ экрана относительно страницы:
    const position = scrolled + screenHeight
    console.log("pos="+position.toString());
    if (i == 100) {
        console.log("return");
        return;
    }else if (position >= porog)  {
        //Если мы пересекли полосу-порог, вызываем нужное действие.
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
// Какая страница следующая:
let nextPage = 2

// Если отправили запрос, но ещё не получили ответ,
// не нужно отправлять ещё один запрос:
let isLoading = false

// Если контент закончился, вообще больше не нужно
// отправлять никаких запросов:
let shouldLoad = true

async function fetchPosts() {
    // Если мы уже отправили запрос, или новый контент закончился,
    // то новый запрос отправлять не надо:
    if (isLoading || !shouldLoad) return

    // Предотвращаем новые запросы, пока не закончится этот:
    isLoading = true

    const { posts, next } = await server.posts(nextPage)
    posts.forEach(appendPost)

    // В следующий раз запрашиваем страницу с номером next:
    nextPage = next

    // Если мы увидели, что контент закончился,
    // отмечаем, что больше запрашивать ничего не надо:
    if (!next) shouldLoad = false

    // Когда запрос выполнен и обработан,
    // снимаем флаг isLoading:
    isLoading = false
}

function appendPost(postData) {
    // Если данных нет, ничего не делаем:
    if (!postData) return

    // Храним ссылку на элемент, внутрь которого
    // добавим новые элементы-свиты:
    const main = document.querySelector('main')

    // Используем функцию composePost,
    // которую напишем чуть позже —
    // она превращает данные в HTML-элемент:
    const postNode = composePost(postData)

    // Добавляем созданный элемент в main:
    main.append(postNode)
}
function composePost(postData) {
    // Если ничего не передано, ничего не возвращаем:
    if (!postData) return

    // Обращаемся к шаблону, который создали ранее:
    const template = document.getElementById('post_template')

    // ...и вытаскиваем его содержимое.
    // В нашем случае содержимым будет «скелет» свита, элемент article.
    // Указываем, что нам необходимо его склонировать, а не использовать сам элемент,
    // иначе он изменится сам, и мы не сможем сделать несколько свитов:
    const post = template.content.cloneNode(true)

    // Из postData получаем всю необходимую информацию:
    const { title, body, likes, reposts } = postData

    // Добавляем соответствующие тексты и числа в нужные места в «скелете»:
    post.querySelector('h1').innerText = title
    post.querySelector('p').innerText = body
    post.querySelector('button:first-child').innerText += likes
    post.querySelector('button:last-child').innerText += reposts

    // Возвращаем созданный элемент,
    // чтобы его можно было добавить на страницу:
    return post
}
*/






/*fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    .then(data => {
        console.log(data);
    document.getElementById('text').textContent = data.title;
    });*/



async function fetchData(i,Post) {
    try {

             await delay(2000);
                const response = await fetch(url);
                const data = await response.json();
                const ppost = FPost.cloneNode(true);

                ppost.querySelector('h1').innerText = data[i].title;
                ppost.querySelector('form').innerText = data[i].body;
        console.log(ppost);
        await delay(3000);

                
        
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
    }
     catch (e) {
         console.error(e);
     }
    finally {
        console.log('finally');
       // checkPosition();
    }
}
window.addEventListener('scroll', (event) => checkPosition());