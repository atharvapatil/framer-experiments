import { Override, Data } from "framer"

const state = Data({
    page: 0,
    max: 2,
})

const variants = {
    enabled: { width: 13, height: 13, opacity: 0.7, background: "#000000" },
    disabled: { width: 12, height: 12, opacity: 0.2, background: "#000000" },
}

export function Page(props): Override {
    return {
        currentPage: state.page,
        onChangePage: index => {
            state.page = index
        },
    }
}

export function LeftButton(): Override {
    return {
        onClick: () => {
            if (state.page > 0) {
                state.page--
            }
        },
    }
}

export function RightButton(): Override {
    return {
        onClick: () => {
            if (state.page < state.max) {
                state.page++
            }
        },
    }
}

export function circle1(): Override {
    return {
        variants: variants,
        animate: state.page === 0 ? "enabled" : "disabled",
    }
}

export function circle2(): Override {
    return {
        variants: variants,
        animate: state.page === 1 ? "enabled" : "disabled",
    }
}

export function circle3(): Override {
    return {
        variants: variants,
        animate: state.page === 2 ? "enabled" : "disabled",
    }
}
