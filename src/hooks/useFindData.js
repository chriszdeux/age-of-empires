export const useFindData = ( input = '', data ) => {
  // debugger
  if(input.includes('_') && data.length > 0 ) {
    // debugger
      const lowerInput = input.toLowerCase()  // debugger
      const temp =  data.filter( item => {
        return item.name.toLowerCase() === lowerInput.replace('_', ' ') 
      } )
      // debugger
      return {...temp[0]}
    } else if( !input.includes('_') && data.length > 0 ){
      const lowerInput = input.toLowerCase()  // debugger
      const temp =  data.filter( item => {
        return item.name.toLowerCase() === lowerInput
      } )
    }
    // debugger
    return {}
}