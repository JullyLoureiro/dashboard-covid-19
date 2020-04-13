export const formataMilhar = (num) => {
    if(num !== undefined && num !== null) {
        var n = num.toString()
        var r = ''
        var x = 0
    
        for (var i = n.length; i > 0; i--) {
            r += n.substr(i - 1, 1) + (x === 2 && i !== 1 ? '.' : '')
            x = x === 2 ? 0 : x + 1
        }
    
        return r.split('').reverse().join('')
    }
    return n
}