import { useEffect, useRef } from "react"
import { lottieService } from "../../services/animation.service"
import loading from '../../assets/lottie/loader.json'
import './animations.scss'

export const Loader = () => {
    const loader = useRef(null)

    useEffect(() => {
        const instance = lottieService.loadLottie(loader, loading)
        return () => instance.destroy()
    })

    return (
        <div className="homepage-container">
            <div className="loader-animation" ref={loader}></div>
        </div>
    )
}
