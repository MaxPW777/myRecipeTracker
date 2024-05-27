import Link from "next/link";
import Image from "next/image";

interface RecipeItemProps {
    ImageSource: string
    RecipeTitle: string
    RecipeID: string
}

function RecipeItem({ImageSource, RecipeTitle, RecipeID}: RecipeItemProps) {
    return (
        <Link href={`recipes/${RecipeID}`}
              className={'w-[49%] md:w-52 md:px-auto h-60 rounded border border-accent flex justify-center relative overflow-y-auto'}>
            <Image className={'relative rounded'} alt={RecipeTitle + " Image"}
                   src={ImageSource} width={500} height={500}/>
            <p className={'absolute bottom-0 bg-mainbg p-2 border border-accent rounded'}>{RecipeTitle}</p>
        </Link>)
}

export default RecipeItem
