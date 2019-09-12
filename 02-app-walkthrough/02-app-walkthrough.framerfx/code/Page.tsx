import * as React from "react"
import { Override, Data } from "framer"

const data = Data({
    currentPage: 0,
})

const variants = {
    enabled: { width: 13, height: 13, opacity: 0.7, background: "#000000" },
    disabled: { width: 12, height: 12, opacity: 0.2, background: "#000000" },
}

export function Page(): Override {
    return {
        onChangePage(currentPage) {
            data.currentPage = currentPage
        },
    }
}

export function forward(): Override {
    return {
        onChangePage(currentPage) {
            currentPage = data.currentPage
        },
        onTap() {
            if (data.currentPage >= 0 && data.currentPage < 2) {
                data.currentPage = data.currentPage + 1
            }
        },
    }
}

export function circle1(): Override {
    return {
        variants: variants,
        animate: data.currentPage === 0 ? "enabled" : "disabled",
    }
}

export function circle2(): Override {
    return {
        variants: variants,
        animate: data.currentPage === 1 ? "enabled" : "disabled",
    }
}

export function circle3(): Override {
    return {
        variants: variants,
        animate: data.currentPage === 2 ? "enabled" : "disabled",
    }
}

export function backward(): Override {
    return {
        onTap() {
            if (data.currentPage > 0 && data.currentPage < 3) {
                data.currentPage = data.currentPage - 1
            }
        },
    }
}
