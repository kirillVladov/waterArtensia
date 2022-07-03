import React, { useRef } from "react";
import './style.css';

const FullScreen = () => {
    return(
        <div className="full-screen-wrapper">
            <div className="full-screen-content">
                <div className="full-screen-text-block">
                    <h1 className="full-screen-text-headline">
                        test text
                    </h1>
                    <div className="full-screen-text-description">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, facilis fugit. Dolorem inventore suscipit reprehenderit id illo, mollitia, in, voluptatibus beatae tempore laborum blanditiis ex odio alias nemo porro libero?
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FullScreen