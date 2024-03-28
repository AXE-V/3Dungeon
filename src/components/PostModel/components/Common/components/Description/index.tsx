import { useCallback, useMemo } from 'react';
import {SimpleMdeReact} from 'react-simplemde-editor'
import { Styles } from './style';
export const ModelDescription = () => {
  const delay = 1000
  const autoSaveValue = localStorage.getItem('mde_my_text') ?? 'initial text'

  const onChange = useCallback((val: string) => {
    localStorage.setItem('mde_my_text', val)
  }, [])

  const options = useMemo(() => {
    return {
      autosave: {
        enabled: true,
        uniqueId: 'my_text',
        delay
      }
    }
  }, [delay])
  
  return ( 
    <>
      <SimpleMdeReact 
        className={Styles.mde()} 
        options={options} 
        value={autoSaveValue} 
        onChange={onChange}/>
    </>
   );
}