export default class NewGameList {
  constructor() {
    this.games = [];
  }

  demonMethod(lista) {
    this.games = this.games.concat(lista);
    console.log("Ele está observando");
    console.log(this.games);
    this.angelMethod();
    console.log("Ele ainda está observando");
    console.log(this.games);

  }

  // exclude duplicate games
  angelMethod() {
    this.games = this.games.filter((game, index, self) =>
      index === self.findIndex((t) => (
        t.id === game.id
      ))
    )
  }

  addNewGame(newGame) {
    this.games.push(newGame);
  }

  removeGame(id) {
    const game = this.getNewGamePorId(id);
    console.log(game);
    this.games = this.games.filter(game => game.id !== id);
    console.log(this.games);
    return this.games;
  }

  getGames() {
    return this.games;
  }

  getNewGamePorId(id) {
    return this.games.find(game => game.id === id);
  }

  updateNewGame(flag, name, platforms, genres, released, background_image) {
    const NewGame = this.getNewGamePorId(flag);
    console.log("Antes");
    console.log(NewGame);
    console.log(platforms);
    if (NewGame) {
      NewGame.name = name;
      NewGame.platforms = platforms;
      NewGame.genres = genres;
      NewGame.released = released;
      NewGame.background_image = background_image;
    }

    console.log("Depois");
    console.log(NewGame);

  }


}
