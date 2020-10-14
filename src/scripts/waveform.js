
export let synthParams = {type: 'triangle'}
export const waveformListener = document.addEventListener("DOMContentLoaded", () => {
    window.synthParams = synthParams
    document.addEventListener("click", e => {
        if (['sine','triangle','square','saw'].includes(e.target.classList[0])){
        const old = document.getElementsByClassName('selected')[0]
        if (old) old.classList.remove('selected')
        e.target.classList.add('selected')}
        synthParams.type = e.target.classList[0]
        
    })
})

