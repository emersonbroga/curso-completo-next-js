const BASE_GAME_IMAGE_URL = "https://raw.githubusercontent.com/emersonbroga/nintendo-64-games/main/images/";
export const getGameImage = (image: string) => {
  return `${BASE_GAME_IMAGE_URL}${image}`;
};
