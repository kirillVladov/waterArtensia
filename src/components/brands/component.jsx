import React, { useRef, useState } from "react";
import './style.css';
import cache from '../../cache/cache.json'
import Item from './parts/item';

const Brands = () => {
    const [data, setData] = useState({
        header:{
            text: cache.brands.headline,
            description: cache.brands.subHeadline
        },
        items: cache.brands.items,
        showMore: cache.brands.showMore
    })
    const [controllers, setControllers] = useState({
        item: useRef(null)
    })
//TODO useState
    return(
        <div className="brands-wrapper">
            <div className="brands-container">
                <div className="brands-header">
                    <h2 className="brands-header-text">
                        {data.header.text}
                    </h2>
                    <div className="brands-header-description">
                        {data.header.description}
                    </div>
                </div>
                <div className="brands-items">
                    {
                        data.items.map(item => (
                            <div className="brands-item-wrapper">
                                <div className="brands-item">
                                    <div className="brands-item-picture">
                                        <img src={item.picture} />
                                    </div>
                                    <div className="brands-item-content">
                                        <div className="brands-item-name">
                                            {item.name}
                                        </div>
                                        <div className="brands-item-description">
                                            {item.description}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default Brands