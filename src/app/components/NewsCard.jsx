import { Card, Avatar } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";

const NewsCard = ({ news }) => {

    return (
        <div className=" border-b pb-4 border-gray-200">
            <Card className="max-w-4xl mx-auto p-4 space-y-4  ">

                {/* Author */}
                <div className="flex items-center gap-3">
                    <Image className=" rounded-full" src={news.author.img} width={30} height={30} alt="author">

                    </Image>
                    <div>
                        <p className="font-semibold text-sm">{news.author.name}</p>
                        <p className="text-xs text-gray-400">
                            {news.author.published_date}
                        </p>
                    </div>
                </div>

                {/* Image */}
                <Image
                    src={news.image_url}
                    width={800} height={300}

                    alt="newsImage"
                    className="rounded-xl w-xl mx-auto h-64 object-cover"
                />

                {/* Content */}
                <div>
                    <h2 className="text-lg font-bold">{news.title}</h2>
                    <p className="text-sm text-gray-600 line-clamp-2">
                        {news.details}
                    </p>
                    <Link
                        href={`/news/${news._id}`}
                        className=" hover:underline font-semibold"
                    >
                        See more....
                    </Link>
                </div>

                {/* Footer */}
                <div className="flex justify-between text-sm text-gray-500">
                    <span>⭐ {news.rating.number}</span>
                    <span>👁️ {news.total_view}</span>
                </div>

            </Card>
        </div>
    );
};

export default NewsCard