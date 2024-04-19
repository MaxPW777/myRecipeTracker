export default interface User {
    id : string,
    username : string,
    email : string,
    password : string,
    favoriteRecipes : string[],
    myRecipes : string[]
}