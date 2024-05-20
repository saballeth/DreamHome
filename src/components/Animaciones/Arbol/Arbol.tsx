import React from 'react';
import './Arbol.css';

interface CustomCSSProperties extends React.CSSProperties {
    '--x'?: number;
    '--i'?: number;
}

const Tree = () => {
    return (
        <div className="container__arbol">
            <div className="arbol">
                <div className="branch" style={{ '--x': 0 } as CustomCSSProperties}>
                    <span style={{ '--i': 0 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 1 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 2 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 3 } as CustomCSSProperties}></span>
                </div>
                <div className="branch" style={{ '--x': 1 } as CustomCSSProperties}>
                    <span style={{ '--i': 0 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 1 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 2 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 3 } as CustomCSSProperties}></span>
                </div>
                <div className="branch" style={{ '--x': 2 } as CustomCSSProperties}>
                    <span style={{ '--i': 0 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 1 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 2 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 3 } as CustomCSSProperties}></span>
                </div>
                <div className="branch" style={{ '--x': 3 } as CustomCSSProperties}>
                    <span style={{ '--i': 0 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 1 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 2 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 3 } as CustomCSSProperties}></span>
                </div>
                <div className="stem">
                    <span style={{ '--i': 0 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 1 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 2 } as CustomCSSProperties}></span>
                    <span style={{ '--i': 3 } as CustomCSSProperties}></span>
                </div>
                <span className="shadow"></span>
            </div>
        </div>
    );
};

export default Tree;
