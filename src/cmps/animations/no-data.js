import { useEffect, useRef } from "react"
import { lottieService } from "../../services/animation.service"
import noData from '../../assets/lottie/noData.json'
import './animations.scss'

export const NoData = () => {
    const loader = useRef(null)

    useEffect(() => {
        const instance = lottieService.loadLottie(loader, noData)
        return () => instance.destroy()
    })

    return (
        <div className="homepage-container">
            <div className="no-data-animation" ref={loader}></div>
        </div>
    )
}
