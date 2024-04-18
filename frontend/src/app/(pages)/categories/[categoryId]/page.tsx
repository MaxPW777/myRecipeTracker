"use client"
import {useRouter} from 'next/navigation'

function CategoryPage() {
    const router = useRouter()
    return (
        <main>
            <p>{router.query.categoryId}</p>
        </main>
    )
}

export default CategoryPage
