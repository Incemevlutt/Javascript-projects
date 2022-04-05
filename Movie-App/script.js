const APIURL ="https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=04c35731a5ee918f014970082a0088b1&page=1";
const IMGPATH = "https://image.tmdb.org/t/p/w1280";
const SEARCHAPI="https://api.themoviedb.org/3/search/movie?api_key=04c35731a5ee918f014970082a0088b1&query=";



const main= document.querySelector("main");
const form= document.querySelector("form");
const search=document.querySelector("search");

//to get favorite movies
getMovies();


async function getMovies(){
    const resp= await fetch(APIURL);
    const respData=await resp.json();  

    console.log(respData);

    // respData.results.forEach(movie => {
    //     const img = document.createElement("img");
    //     img.src = IMGPATH + movie.poster_path;

    //     document.body.appendChild(img);
    // });

    respData.results.forEach(movie=>{
        const {poster_path,title,vote_average}=movie;

        const movieEl=document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML=`
        <img 
        src="${IMGPATH + movie.poster_path}"
        alt="${title}"                          
        />
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        `;

        main.appendChild(movieEl);
    });

    return respData;
}
function showMovies(movies){

    main.innerHTML="";
    
    movies.results.forEach(movie=>{
        const {poster_path,title,vote_average}=movie;

        const movieEl=document.createElement("div");
        movieEl.classList.add("movie");

        movieEl.innerHTML=`
        <img 
        src="${IMGPATH + movie.poster_path}"
        alt="${title}"                          
        />
        <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
        </div>
        `;

        main.appendChild(movieEl);
    });
}



function getClassByRate(vote){
    if(vote>=7){
        return "green";
    }else if(vote>=4){
        return "yellow";
    }else{
        return "red";
    }
}

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const searchTerm=search.value;
});