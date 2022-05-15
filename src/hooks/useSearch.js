
export const useSearch = ( input = '', data ) => {
  // debugger
  if(data.length > 0 && typeof(data) !== 'object'){
    // debugger
    return data
    
  } 
  else if ( Object.keys(data).length < 3 ) {
    // debugger
    return data
  } 
  else {
    
    const lowerInput = input.toLowerCase()  // debugger
    // debugger
    return data.filter( item => {
      return item.name.toLowerCase().includes( lowerInput )
    } )
  }    
    
    // debugger
  }
