import React, { useState } from "react";
import './style.css';
// import cache from './parts/cache.json';
import cache from '../../cache/cache.json';
import { Collapse } from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight, faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Shares = () => {
    //TODO add connect with db
    const [data, setData] = useState([])

    // cache.shares.forEach(item => {
    //     setData((prev)=> {
    //         return[
    //             ...prev,
    //             {
    //                 name: item.name,
    //                 description: item.description
    //             }
    //         ]
    //     })
    // })

    return(
        <div className="shares-wrapper">
            <div className="shares-container">
                <div className="shares-headline-wrapper">
                    <h2 className="shares-headline">{cache.shares.headline}</h2>
                    <div className="shares-subHeadline">{cache.shares.subHeadline}</div>
                </div>
                <div className="shares-collapse-wrapper">
                    <Collapse.Group className="shares-collapse" shadow>
                    {
                        cache.shares.items.map(item => (
                            <Collapse
                            className="shares-collapse-item"
                            title={item.name}>
                                {item.description}
                            </Collapse>
                        ))
                    }
                    </Collapse.Group>
                </div>
                <div className="shares-show-more">
                        <a href="/shares">
                            <span>
                                {cache.shares.showMore}
                                <FontAwesomeIcon className="shares-show-more-arrow" icon={faArrowRight} />
                            </span>
                        </a>
                </div>
            </div>
        </div>
    )
}

export default Shares