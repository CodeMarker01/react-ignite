import React from "react";
//Styling and Animation
import styled from "styled-components";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { loadDetail } from "../actions/detailAction";
import { Link } from "react-router-dom";
import { smallImage } from "../util";

const Game = ({ name, releasedDate, image, rating, id }) => {
  const stringPathId = id.toString();
  const dispatch = useDispatch();
  const loadDetailHandler = () => {
    document.body.style.overflow = "hidden";
    dispatch(loadDetail(id));
  };

  return (
    <StyledGame layoutId={stringPathId} onClick={loadDetailHandler}>
      <Link to={`/game/${id}`}>
        <motion.h3 layoutId={`title ${stringPathId}`}>{name}</motion.h3>
        <p>{releasedDate}</p>
        <div className="game__rating">
          {Array(Math.round(rating))
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
        <motion.img
          layoutId={`image ${stringPathId}`}
          src={smallImage(image, 420)}
          alt=""
        />
      </Link>
      {/* {console.log(rating)} */}
    </StyledGame>
  );
};

const StyledGame = styled(motion.div)`
  min-height: 30vh;
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  border-radius: 1rem;

  cursor: pointer;

  h3 {
    padding: 1rem;
    height: 4rem;
  }
  p {
    padding: 0.7rem;
    margin: 0.7rem 0;
  }
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }

  .game__rating {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 1rem 0;
    height: 2rem;
  }
`;

export default Game;
