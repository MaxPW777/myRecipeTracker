import AllUsers from "@/src/app/(pages)/categories/components/AllUsers";
import PostUsers from "@/src/app/(pages)/categories/components/PostUsers";

function CategoryPage() {
    return (
        <main className={'flex justify-center items-center'}>
            <p>Category Page</p>
            <AllUsers/>
            <PostUsers/>
        </main>
    )
}

export default CategoryPage
