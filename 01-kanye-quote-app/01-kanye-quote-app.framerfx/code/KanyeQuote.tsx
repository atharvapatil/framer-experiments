import * as React from "react"
import { Kanye } from "./canvas"

export function KanyeQuote() {
    const [quote, setQuote] = React.useState("")

    React.useEffect(() => {
        fetch("https://api.kanye.rest/").then(result => {
            result.json().then(json => {
                setQuote(json.quote)
            })
        })
    }, [])

    return <Kanye text={`${quote}`} author="- Kanye West" />
}
