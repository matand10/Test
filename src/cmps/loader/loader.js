import { useEffect, useRef } from "react"
import { lottieService } from "../../services/animation.service"
import loading from '../../assets/lottie/loading/loader.json'

export const Loader = () => {
    const loader = useRef(null)

    useEffect(() => {
        const instance = lottieService.loadLottie(loader, loading)
        return () => instance.destroy()
    })

    return (
        <div className="homepage-container">
            <div className="loader-container" ref={loader}></div>
        </div>
    )
}
