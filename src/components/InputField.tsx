import React , {useRef, useEffect} from 'react'
import './styles.css'


interface Props {
  todo: string, 
  setTodo: React.Dispatch<React.SetStateAction<string>>
  handleAdd: (e: React.FormEvent)=> void
}
const InputField: React.FC<Props> = ({todo, setTodo, handleAdd}) => {
 useEffect(()=>{

 }, [])
const inputRef = useRef<HTMLInputElement>(null)

  return (
    
    <form className='input' onSubmit={(e)=>{handleAdd(e) 
    inputRef.current?.blur()
    }}>
  
        <input 
        ref={inputRef}
        value={todo}
        onChange={
          (e)=>setTodo(e.target.value)
        }
        className='input__box' 
        placeholder='Enter a task' type="text"
        />
        <button className='input_submit' type='submit'>go</button>
    </form>
 
  )
}

export default InputField