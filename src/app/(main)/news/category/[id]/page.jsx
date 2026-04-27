import NewsCard from '@/app/components/NewsCard';
import { getCategory, getNewsByCategory } from '@/lib/dataFetch';
import { Button } from '@heroui/react';
import Link from 'next/link';

const NewsByCategoryPage = async ({ params }) => {
    const { id } = await params;
    const categories = await getCategory();
    const newses = await getNewsByCategory(id)

    return (
        <div className="container mx-auto px-4 py-6 grid grid-cols-12 gap-6">

            {/* Left Sidebar */}
            <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-white rounded-2xl p-4">
                <h1 className="text-xl font-bold mb-4 border-b pb-2">
                    📰 Categories
                </h1>
                <div className=" space-y-2">
                    {
                        categories.map(category => {
                            const active = id === category.category_id;
                            return (
                                <div
                                    key={category.category_id}>

                                    <Button
                                        variant={active ? "danger-soft" :"tertiary"}
                                        fullWidth
                                    >
                                        <Link
                                            href={`/news/category/${category.category_id}`}>
                                            {category.category_name}
                                        </Link>
                                    </Button>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            {/* Main Content */}
            <div className="col-span-12 md:col-span-6 lg:col-span-8 bg-white rounded-2xl shadow-sm p-6">
                <h1 className="text-2xl font-bold mb-4">
                    News by Category
                </h1>

                <div className=' space-y-8 '>
                    {
                        newses.map(news => <NewsCard key={news._id} news={news} />)
                    }
                </div>
            </div>

            {/* Right Sidebar */}
            <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-white rounded-2xl p-4">
                <h1 className="text-xl font-bold mb-4 border-b pb-2">
                    📢 Ads
                </h1>

                <div className="space-y-4">
                    <div className="h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        Ad Space
                    </div>
                    <div className="h-32 bg-gray-100 rounded-xl flex items-center justify-center text-gray-400">
                        Ad Space
                    </div>
                </div>
            </div>

        </div>
    );
};

export default NewsByCategoryPage;