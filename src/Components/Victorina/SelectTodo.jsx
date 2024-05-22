const SelectTodo = ({answer, type1, type2, type3, type4, fnChek, id}) => {

    
  return <article className='selected-vic' id='f'>
    <div>
        <h2>{answer}</h2>
        <span id='1' onClick={fnChek}>{type1}</span>
        <span id='2' onClick={fnChek}>{type2}</span>
        <span id='3' onClick={fnChek}>{type3}</span>
        <span id='4' onClick={fnChek}>{type4}</span>

    </div>
  </article>
}

export default SelectTodo