import React from 'react';
import ReactDOM from 'react-dom'
// import PropTypes from 'prop-types';

export function ConfirmComponent(props) {
    let { message, toConfirm, toCancel } = props;
    return (
        <div className="confirm-bg" >
            <div className="model-wrapper">
                <div className="model-wrapper">
                    <p className="text-left">
                        {message}
                    </p>
                </div>
                <div className="model-footer">
                    <button onClick={toConfirm} className="btn-confirm">确定</button>
                    <button onClick={toCancel} className="btn-cancel">取消</button>
                </div></div>
        </div>
    )
}

export function confirm(message) {

    return new Promise((resolve, reject) => {
        var div = document.createElement("div");
        document.body.appendChild(div);
        ReactDOM.render(
            <ConfirmComponent
                message={message}
                toConfirm={() => {
                    removeComponent(div);
                    resolve(true)
                }}
                toCancel={() => {
                    removeComponent(div);
                    resolve(false)
                }}
            />,
            div
        )

    })
}

function removeComponent(node) {
    ReactDOM.unmountComponentAtNode(node)
}