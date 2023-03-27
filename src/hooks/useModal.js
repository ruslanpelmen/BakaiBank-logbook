import { useState } from "react"

const useModal = (initial = false) => {
    const [modalActive, setModalActive] = useState(initial)
    const toggler = (activeStatus = !modalActive) => setModalActive(activeStatus)

    return [modalActive, toggler]
}

export { useModal }