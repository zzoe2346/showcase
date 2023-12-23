'use client';
import React from 'react'
import Lottie from 'react-lottie-player'
// Alternatively:
// import Lottie from 'react-lottie-player/dist/LottiePlayerLight'

import lottieJson from '../../public/scrollDown.json'

export default function ScrollDown() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Lottie
                loop
                animationData={lottieJson}
                play
                style={{ width: 80, height: 80 }}
            />
        </div>

    )
}