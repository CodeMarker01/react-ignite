import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
//action
import { loadGames } from "../actions/gamesAction";
//styles and animation
import styled from "styled-components";
import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion";
import Game from "../components/Game";
import GameDetail from "../components/GameDetail";
import { useLocation } from "react-router";

const Home = () => {
  const location = useLocation();
  const pathId = location.pathname.split("/")[2];
  console.log(pathId);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadGames());
  }, [dispatch]);

  //get data back from store
  const { popular, newGames, upcomming, searched } = useSelector(
    (state) => state.games
  );

  return (
    <GameList>
      <AnimateSharedLayout>
        <AnimatePresence>
          {pathId && <GameDetail pathId={pathId} />}
        </AnimatePresence>
        {searched.length ? (
          <div className="search">
            <h2>Search Games</h2>
            <Games>
              {searched?.map((game) => (
                <Game
                  name={game.name}
                  releasedDate={game.released}
                  image={game.background_image}
                  rating={game.rating}
                  id={game.id}
                  key={game.id}
                />
              ))}
            </Games>
          </div>
        ) : (
          ""
        )}

        <h2>Popular Games</h2>
        <Games>
          {popular?.map((game) => (
            <Game
              name={game.name}
              releasedDate={game.released}
              image={game.background_image}
              rating={game.rating}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>

        <h2>New Games</h2>
        <Games>
          {newGames?.map((game) => (
            <Game
              name={game.name}
              releasedDate={game.released}
              image={game.background_image}
              rating={game.rating}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>

        <h2>Upcoming Games</h2>
        <Games>
          {upcomming?.map((game) => (
            <Game
              name={game.name}
              releasedDate={game.released}
              image={game.background_image}
              rating={game.rating}
              id={game.id}
              key={game.id}
            />
          ))}
        </Games>
      </AnimateSharedLayout>
    </GameList>
  );
};

const GameList = styled(motion.div)`
  padding: 0 5rem;
  h2 {
    padding: 5rem 0;
  }
`;

const Games = styled.div`
  min-height: 80vh;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-column-gap: 3rem;
  grid-row-gap: 5rem;
`;

export default Home;
