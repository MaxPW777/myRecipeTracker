import Link from "next/link";
import Image from "next/image";

interface CategoryItemProps {
    ImageSource : string
    RecipeTitle : string
    RecipeID : string
}

function CategoryItem({ImageSource, RecipeTitle, RecipeID} : CategoryItemProps) {
    return (<Link href={`categories/${RecipeID}}`} className={'w-[49%] md:w-52 md:px-auto h-fit rounded border border-accent flex justify-center items-end relative'}>
        <Image className={'relative rounded'} alt={RecipeTitle + " Image"} src={ImageSource} width={500} height={500}/>
        <p className={'absolute'}>{RecipeTitle}</p>
    </Link>)
}

export default CategoryItem
