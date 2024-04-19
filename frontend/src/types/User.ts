export default interface User {
    id: string;
    username?: string;
    email?: string;
    favoriteRecipes?: string[];
    password?: string;
    myRecipes?: string[];
}
