import NewsDetails from "@/app/components/NewsDetails";
import { getNewsDetailsById } from "@/lib/dataFetch";

const NewsDetailPage = async ({ params }) => {

    const { id } = await params;

    const newses = await getNewsDetailsById(id)

    return (
        <div className=" container mx-auto grid py-8 grid-cols-12">
            <div className=" col-span-10">
                {
                    newses.map(news => <NewsDetails key={news._id} news={news} />)
                }
            </div>
            <div className="col-span-12 md:col-span-3 lg:col-span-2 bg-white rounded-2xl shadow-sm p-4">
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

export default NewsDetailPage;