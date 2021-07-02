import { Data } from "../App";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import StarHalfOutlinedIcon from "@material-ui/icons/StarHalfOutlined";
import StarOutlinedIcon from "@material-ui/icons/StarOutlined";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import { useEffect } from "react";
import { useState } from "react";

interface Props {
    data: Data;
    activeCard: number;
    updateActiveCard: (card: number) => void;
    index: number;
}

const Card: React.FC<Props> = ({
    data,
    activeCard,
    updateActiveCard,
    index,
}) => {
    const [isActive, setIsActive] = useState<boolean>(false);

    useEffect(() => {
        if (activeCard === index) {
            setIsActive(true);
        } else {
            setIsActive(false);
        }
    }, [activeCard]);

    const icon = (title: string) => {
        if (title === "Basic") return <StarBorderOutlinedIcon />;
        if (title === "Standard") return <StarHalfOutlinedIcon />;
        if (title === "Pro") return <StarOutlinedIcon />;
    };

    const renderIcon = icon(data.title);

    return (
        <div className={isActive ? "card active" : "card"}>
            <div className="title">
                <span>{renderIcon}</span>
                <h2>{data.title}</h2>
            </div>
            <div className="features-intro">What You'll Get</div>
            <div className="features">
                {data.features.map((item, index) => (
                    <div className="feature" key={index}>
                        <span>
                            <CheckCircleIcon />
                        </span>
                        <p>{data.features[index]}</p>
                    </div>
                ))}
            </div>
            <div className="price">
                {typeof data.price === "number" ? (
                    <p>
                        ${data.price}
                        <span>/month</span>
                    </p>
                ) : (
                    <p>{data.price}</p>
                )}
            </div>
            <button
                className="choose"
                onClick={() => {
                    updateActiveCard(index);
                }}
            >
                Choose
            </button>
        </div>
    );
};

export default Card;
