export const URL =
  "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/bruna-nunciato";
export const header = { "Content-Type": "application/json" };
export const body = (id, validation) => {
  return { id: id, choice: validation };
};
