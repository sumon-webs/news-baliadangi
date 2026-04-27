"use client";

import { Card, Avatar, Button } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

const NewsDetails = ({ news }) => {
    const {
        title,
        details,
        image_url,
        thumbnail_url,
        total_view,
        rating,
        category_id,
        author: { name, img, published_date },
    } = news;

    return (
        <div className=" container mx-auto">
            <Card className=" mx-auto p-4 space-y-4 rounded-2xl shadow-md">

                {/* Author */}
                <div className="flex items-center gap-3">
                    <Image src={img} width={30} height={30} alt="author" className=" rounded-full" />
                    <div>
                        <p className="font-semibold text-sm">{name}</p>
                        <p className="text-xs text-gray-400">{published_date}</p>
                    </div>
                </div>

                {/* Image */}
                <Image
                    src={thumbnail_url}
                    width={800} height={300}

                    alt="newsImage"
                    className="rounded-xl w-md mx-auto h-96 object-cover"
                />

                {/* Content */}
                <div>
                    <h2 className="text-lg font-bold mb-2">{title}</h2>
                    <p className="text-sm text-gray-600">
                        {details}
                    </p>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center text-sm text-gray-500">
                    <span>⭐ {rating.number} ({rating.badge})</span>
                    <span>👁️ {total_view}</span>
                </div>
                <Button className="hover:-translate-x-0.5">
                    <FaArrowLeft/>
                    <Link href={`/news/category/${category_id}`}>Go back</Link>
                </Button>
            </Card>
        </div>
    );
};

export default NewsDetails;