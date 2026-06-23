const useOverlay = () => {
    const disableOverlay = () => {
        document.body.style.overflow = 'hidden'
    }
    
    const enableOverlay = () => {
        document.body.style.overflow = ''
    }
    
    return { disableOverlay, enableOverlay }
}

export {
    useOverlay,
}
