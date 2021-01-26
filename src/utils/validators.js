export const required =value=>{
    if (value) return undefined
    return 'Field is required'
}

export const max =(len)=>(value)=>{
    if (value.length<len) return undefined
    return `Max length is ${len} symbols`
}