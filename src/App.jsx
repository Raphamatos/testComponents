/* eslint-disable react/jsx-key */
import Header from "./Components/Header";
import Section from "./Components/Section";
import ListItem from "./Components/ListItem";
import "./App.css";
import Footer from "./Components/Footer";

const gamesListData = [
  {
    href: "https://www.twitch.tv/directory/category/grand-theft-auto-v",
    imageSrc: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-144x192.jpg",
    altSrc: "Imagem do jogo GTA V",
  },

  {
    href: "https://www.twitch.tv/directory/category/grand-theft-auto-san-andreas",
    imageSrc: "https://static-cdn.jtvnw.net/ttv-boxart/6521_IGDB-144x192.jpg",
    altSrc: "Imagem do jogo GTA SA",
  },

  {
    href: "https://www.twitch.tv/directory/game/Minecraft",
    imageSrc: "https://static-cdn.jtvnw.net/ttv-boxart/27471_IGDB-188x250.jpg",
    altSrc: "Imagem do jogo Minecreft",
  },

  {
    href: "https://www.twitch.tv/directory/category/need-for-speed-most-wanted",
    imageSrc: "https://static-cdn.jtvnw.net/ttv-boxart/495711_IGDB-144x192.jpg",
    altSrc: "Imagem do jogo NFS",
  },
];
const streamersListData = [
  {
    href: "",
    imageSrc:
      "https://avatars.githubusercontent.com/u/116037290?v=4",
    altSrc: "Imagem garoto de máscara",
  },

  {
    href: "",
    imageSrc:
      "https://avatars.githubusercontent.com/u/116037290?v=4",
    altSrc: "Imagem garoto de máscara",
  },

  {
    href: "",
    imageSrc:
      "https://avatars.githubusercontent.com/u/116037290?v=4",
    altSrc: "Imagem garoto de máscara",
  },
];
const socialListData = [
  
      {
        href:"",
        imageSrc:"/src/assets/instagram.svg",
        altSrc:"Logo do instagram",
      } ,
      {
        href:"",
        imageSrc:"/src/assets/youtube.svg",
        altSrc:"Logo do youtube",
      },
      {
        href:"",
        imageSrc:"/src/assets/twitter.svg",
        altSrc:"Logo do twitter",
      },
                      
                             
 
]
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Section title="Meus jogos" subtitle="Os games que eu mais curto jogar"
        className="games-list">
          {gamesListData.map(function (item) {
            return (
              <ListItem
                href={item.href}
                imageSrc={item.imageSrc}
                altSrc={item.altSrc}
              />
            );
          })}
        </Section>

        <Section title="Meus streamers" subtitle="Os streamers que eu curto" className="channel-list">
          {streamersListData.map(function (item) {
            return (
              <ListItem
                href={item.href}
                imageSrc={item.imageSrc}
                altSrc={item.altSrc}
              />
            );
          })}
        </Section>
        <Section title="Minhas redes" subtitle="Conecte-se comigo" className="social-list">
          {
            socialListData.map(function (item){
              return (
                <ListItem
                href={item.href}
                imageSrc={item.imageSrc}
                altSrc={item.altSrc}
              />
              )
            })
          }

        </Section>

      </main>
      <Footer/>
    </div>
  );
}

export default App;
