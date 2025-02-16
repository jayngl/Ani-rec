const animeContainer = document.getElementById("anime-container");

const fetchTopAnime = async () => {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/top/anime`);
    const topAnimeData = await response.json();
    displayTopAnime(topAnimeData);

    if (!response?.ok) {
      throw new Error("data not found 404");
    }
  } catch (error) {
    console.log(error);
  }
};

fetchTopAnime();

const displayTopAnime = (topAnimeData) => {
  const { data } = topAnimeData;

  console.log(data[3]);
  // jpg/ image_url
  data.forEach((Anime, index) => {
    const animeCard = document.createElement("div");
    const animeTitle = document.createElement("h1");
    const animeRank = document.createElement("h2");
    const animeImg = document.createElement("img");

    animeCard.classList.add("anime-card");
    animeTitle.innerHTML = `Title: ${data[index].titles[0].title}`;
    animeImg.src = `${data[index].images.jpg.image_url}`;
    animeRank.innerHTML = `Rank: ${data[index].rank}`;
    animeCard.append(animeImg, animeTitle, animeRank);
    animeContainer.append(animeCard);
  });
};
