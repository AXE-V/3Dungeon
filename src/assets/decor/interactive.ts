// import { CSS } from "@stitches/react"
// import { SyntheticEvent } from "react"

// interface DataTags {
//   tag: string,
//   style: CSS
// } 

// interface StyleController {
//   command: 'add' | 'remove',
//   currentTgNodes?: any,
//   dataTags?: DataTags[]
//   style?: CSS,
// }

// interface Defaults {
//   tags: string[],
//   style: CSS
// }

// const defaults: Defaults = {
//   tags: ['focusFill', 'focusStroke'],
//   style: {
//     fill: '#111',
//     stroke: '#4d4d4d',
//     transition: '.2s ease-out'
//   } 
// }

// // устанавливает стили для родительского и дочерних элементов, если они имеют соответствующие дата-теги
// // иначе будуь задействованы стили по умолчанию
// export function styleController<E extends SyntheticEvent<EventTarget> | null, SC extends StyleController>(e: E, obj: SC) {
//   try {
    
//     // if (obj.command) {
//       (obj.currentTgNodes ?? (e?.currentTarget as HTMLElement).childNodes)?.forEach((elem: any) => {

//           (obj.dataTags ?? defaults.tags).forEach((dTag, i) => {
//             if (elem.dataset[`${(dTag as DataTags).tag ?? dTag}`]) {
//               setStyle(elem, (obj.dataTags?.[i] ?? dTag), obj.command)
//             }
//           })

//           elem?.childNodes.length > 0 ? (
//             elem.childNodes.forEach((elem2: any) => {      
//               (obj.dataTags ?? defaults.tags).forEach((dTag, i) => (
//                 elem2?.dataset[(dTag as DataTags).tag ?? dTag] ? 
//                 setStyle(elem2, (obj.dataTags?.[i] ?? dTag), obj.command) : 
//                 void 0
//               ))    
//             })
//           ) : void 0
  
//       })
//     // }

//   } catch (error) {}
// }


// // устанавливает переданные стили, если таковых нет, то используются стили по умолчанию
// const setDefaultStyle = (elem: any, dataTag: DataTags | string) => {

//   Object.assign(elem.style, {...(dataTag as DataTags).style ?? defaults.style})

//   const ds = elem.dataset
//   if (ds?.focusFill && ds?.focusStroke) {
//     Object.assign(elem.style, {...(dataTag as DataTags).style ?? defaults.style})
//   }
//   else if (ds?.focusStroke && !ds?.focusFill) {
//     Object.assign(elem.style, {...(dataTag as DataTags).style ?? defaults.style, fill: 'none'})
//   }
//   else if (!ds?.focusStroke && ds?.focusFill) {
//     Object.assign(elem.style, {...(dataTag as DataTags).style ?? defaults.style, stroke: 'none'})
//   }
// }


// // устанавливает стили для переданного элемента в зависимости от команды 
// const setStyle = (elem: any, dataTag: DataTags | string, command: 'add' | 'remove') => {
//   switch (command) {
//     case 'add':
//       elem.style.cssText = `transition: ${(dataTag as DataTags).style?.transition ?? defaults.style.transition}`
//       setDefaultStyle(elem, dataTag)
//       break;
//     case 'remove':    
//       elem.style.cssText = `transition: ${(dataTag as DataTags).style?.transition ?? defaults.style.transition}`
//       break;
//     default:
//       console.error('styles was not set');         
//   }
// }

















import { CSS } from "@stitches/react"
import { SyntheticEvent } from "react"

interface DataTags {
  tag: string,
  style: CSS
} 

type Command = 'add' | 'remove'

interface StyleController {
  command: Command,
  currentTgNodes?: any,
  dataTags?: DataTags[]
  style?: CSS,
}

interface Defaults {
  tags: string[],
  style: CSS
}

const defaults: Defaults = {
  tags: ['focusFill', 'focusStroke'],
  style: {
    fill: '#111',
    stroke: '#4d4d4d',
    transition: '.2s ease-out'
  } 
}

interface SetStyleInter {
  command: Command,
  element: any, 
  tag: DataTags | string, 
  style?: CSS
}

// устанавливает стили для родительского и дочерних элементов, если они имеют соответствующие дата-теги
// иначе будуь задействованы стили по умолчанию
export function styleController<E extends SyntheticEvent<EventTarget> | null, SC extends StyleController>(e: E, obj: SC) {
  try {
      (obj.currentTgNodes ?? (e?.currentTarget as HTMLElement).childNodes)?.forEach((elem: any) => {

          (obj.dataTags ?? defaults.tags).forEach((dTag, i) => {
            if (elem.dataset[`${(dTag as DataTags).tag ?? dTag}`]) {
              const data: SetStyleInter = {
                element: elem, 
                tag: (obj.dataTags?.[i] ?? dTag), 
                command: obj.command,
                style: obj.style ?? undefined
              }
              setStyle(data)
            }
          })

          elem?.childNodes.length > 0 ? (
            elem.childNodes.forEach((elem2: any) => {      
              (obj.dataTags ?? defaults.tags).forEach((dTag, i) => {
                if (elem2?.dataset[(dTag as DataTags).tag ?? dTag]) {
                  const data: SetStyleInter = {
                    element: elem2, 
                    tag: (obj.dataTags?.[i] ?? dTag), 
                    command: obj.command,
                    style: obj.style ?? undefined
                  }
                  setStyle(data)
                }
              })    
            })
          ) : void 0
  
      })
  } catch (error) {}
}


// устанавливает переданные стили, если таковых нет, то используются стили по умолчанию
const setDefaultStyle = (data: SetStyleInter) => {
  const {element, tag, style} = data
  Object.assign(element.style, {...(tag as DataTags).style ?? style ?? defaults.style})

  const ds = element.dataset
  if (ds?.focusFill && ds?.focusStroke) {
    Object.assign(element.style, {...(tag as DataTags).style ?? style ?? defaults.style})
  }
  else if (ds?.focusStroke && !ds?.focusFill) {
    Object.assign(element.style, {...(tag as DataTags).style ?? style ?? defaults.style, fill: 'none'})
  }
  else if (!ds?.focusStroke && ds?.focusFill) {
    Object.assign(element.style, {...(tag as DataTags).style ?? style ?? defaults.style, stroke: 'none'})
  }
}


// устанавливает стили для переданного элемента в зависимости от команды 
const setStyle = (data: SetStyleInter) => {
  const {element, command, tag} = data
  switch (command) {
    case 'add':
      element.style.cssText = `transition: ${(tag as DataTags).style?.transition ?? defaults.style.transition}`
      setDefaultStyle(data)
      break;
    case 'remove':    
      element.style.cssText = `transition: ${(tag as DataTags).style?.transition ?? defaults.style.transition}`
      break;
    default:
      console.error('styles was not set');         
  }
}





