import React from 'react';

const HomeBanner = () => {
    return (
        <>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item w-full h-96">
                    <img src="https://i.ibb.co/sw3t7Rc/Background-1.png" className="w-full" />
                </div>
                <div id="item2" className="carousel-item w-full h-96">
                    <img src="https://i.ibb.co/BLCxpbf/Background-2.png" className="w-full" />
                </div>
                <div id="item3" className="carousel-item w-full h-96">
                    <img src="https://i.ibb.co/KGGcyhL/Background.png" className="w-full" />
                </div>

            </div>
            <div className="flex justify-center w-full py-2 gap-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>

            </div>

        </>
    );
};

export default HomeBanner;