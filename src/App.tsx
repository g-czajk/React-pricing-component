import { useState } from "react";
import Card from "./components/Card";

export interface Data {
    title: string;
    features: string[];
    price: number | string;
}

function App() {
    const [activeCard, setActiveCard] = useState<number>(1);

    const updateActiveCard = (card: number) => {
        setActiveCard(card);
    };

    const data: Data[] = [
        {
            title: "Basic",
            features: [
                "Edit up to 10 hours of podcast audio files.",
                "Set your own CoreLoop Page",
            ],
            price: "Free Forever",
        },
        {
            title: "Standard",
            features: [
                "Edit up to 1,000 hours of podcast audio files.",
                "Set your own landing page",
                "24/7 support",
                "Advanced analytics",
            ],
            price: 480,
        },
        {
            title: "Pro",
            features: [
                "Edit up to 4,000 hours of podcast audio files.",
                "Set your own landing page",
                "24/7 support",
                "Advanced analytics",
                "Set sponsor deals",
            ],
            price: 600,
        },
    ];

    return (
        <div className="wrapper">
            <div className="App">
                <div className="cards-container">
                    {data.map((item, index) => (
                        <Card
                            key={data[index].title}
                            data={data[index]}
                            activeCard={activeCard}
                            updateActiveCard={updateActiveCard}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}

export default App;
