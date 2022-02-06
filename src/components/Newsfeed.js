import { useEffect, useState } from "react";
import axios from "axios";

const Newsfeed = () => {
    const [articles, setArticles] = useState(null);

    useEffect(() => {
        const options = {
            method: "GET",
            url: "https://crypto-news15.p.rapidapi.com/news/amb",
            headers: {
                "x-rapidapi-host": "crypto-news15.p.rapidapi.com",
                "x-rapidapi-key":
                    "7c7dac56bbmsha38e82705eb9295p1552a6jsn8b548d23d848",
            },
        };

        axios
            .request(options)
            .then((response) => {
                console.log(response.data);
                setArticles(response.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    console.log(articles);

    const first7Articles = articles?.slice(0, 7);

    return (
        <div className="news-feed">
            <h2>Newsfeed</h2>
            {first7Articles?.map((article, _index) => (
                <div key={_index}>
                    <p>
                        <a href={article.url} target="_blank">
                            {article.url}
                        </a>
                    </p>
                </div>
            ))}
        </div>
    );
};

export default Newsfeed;
