export default interface Recipe{
    id : string
    title : string
    Author : string
    Ingredients : string[]
    PrepInstructions : string[]
    createdAt : Date
    tag? : string[]
    image? : string
}
