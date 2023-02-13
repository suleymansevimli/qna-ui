import './typography.css';

export default function Typography() {

    return (
        <div className="typography-container">
            <div className="heading">
                <span className="h-900"> H900 Heading</span>
                <span className="h-800"> H800 Heading</span>
                <span className="h-700"> H700 Heading</span>
                <span className="h-600"> H600 Heading</span>
                <span className="h-500"> H500 Heading</span>
                <span className="h-400"> H400 Heading</span>
                <span className="h-300"> H300 Heading</span>
                <span className="h-200"> H200 Heading</span>
                <span className="h-100"> H100 Heading</span>
            </div>

            <div className="code-ui-text">
                <span className="ui-text">UI Text</span>
                <span className="small">Small</span>
                <span className="code">Code</span>
                <span className="pointer">Pointer</span>
            </div>
            
            <div className="paragraph">
                <span className="default-text">Default</span>
                <span className="link">Link</span>
                <span className="blockquote">Blockquote</span>
            </div>
        </div>
    )
}