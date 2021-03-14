/**
 * const currentYear = new Date().getFullYear();
const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0');
const currentDay = String(new Date().getDate()).padStart(2, '0');
const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;
 */

// Base URL
const base_url = "https://api.rawg.io/api/";
const API_KEY = "38a3c84a053d4249b031154fe2a7f19d";

// Getting the date
const currentMonth = String(new Date().getMonth() + 1).padStart(2, "0");

const currentDay = String(new Date().getDate()).padStart(2, "0");

const currentYear = new Date().getFullYear();

const currentDate = `${currentYear}-${currentMonth}-${currentDay}`;
const lastYear = `${currentYear - 1}-${currentMonth}-${currentDay}`;
const nextYear = `${currentYear + 1}-${currentMonth}-${currentDay}`;

// Popular Games
const popular_games = `games?dates=${lastYear},${currentDate}&ordering=-rating&page_size=10`;
const upcoming_games = `games?dates=${currentDate},${nextYear}&ordering=-added&page_size=10`;
const newGames = `games?dates=${lastYear},${currentDate}&ordering=-released&page_size=10`;

export const popularGamesURL = () => `${base_url}${popular_games}`;
export const upcomingGamesURL = () => `${base_url}${upcoming_games}`;
export const newGamesURL = () => `${base_url}${newGames}`;

// Game details
export const gameDetailURL = (game_id) => `${base_url}games/${game_id}`;
//Game ScreenShots
export const gameScreenshotURL = (game_id) =>
  `${base_url}games/${game_id}/screenshots`;

// Search gamges
export const searchGameURL = (game_name) =>
  `${base_url}games?search=${game_name}&page_size=9`;
