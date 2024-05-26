import {ObjectId} from "mongoose";

export default interface IIngredients {
    id : ObjectId,
    name : string,
    category : string,
    image : string,
}
