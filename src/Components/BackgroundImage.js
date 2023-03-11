import React from 'react'

function BackgroundImage(props) {
    return (
        <>
            <div
                   style={{
                    backgroundImage: `url(${props.imageUrl})`,
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    height: '60vh',
                    opacity: '0.4'
                  }}
            />
        </>
    )
}

export default BackgroundImage