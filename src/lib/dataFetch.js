export const getCategory = async () => {
    const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
    const data = await res.json();
    return data.data.news_category
}

export const getNewsByCategory = async (id) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
    const data = await res.json();
    return data.data
}

export const getNewsDetailsById = async(id) =>{
    const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
    const data = await res.json()
    return data.data
}

