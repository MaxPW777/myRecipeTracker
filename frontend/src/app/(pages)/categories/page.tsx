import AllUsers from "@/src/app/components/AllUsers";
import PostUsers from "@/src/app/components/PostUser";

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
