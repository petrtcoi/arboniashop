import {useEffect} from 'react'

const useUcalc = () => {
    useEffect(() => {
        const script = document.createElement('script')
        script.innerHTML = `var widgetOptions388202 = { bg_color: "transparent" }; (function() { var a = document.createElement("script"), h = "head"; a.async = true; a.src = (document.location.protocol == "https:" ? "https:" : "http:") + "//ucalc.pro/api/widget.js?id=388202&t="+Math.floor(new Date()/18e5); document.getElementsByTagName(h)[0].appendChild(a) })();`
        script.async = true
        document.body.appendChild(script)
        return () => {
            document.body.removeChild(script)
        }
    }, [])
}


export default useUcalc