import { BtnReset } from "./components/BtnReset";
import styles from "../../components/FilterPanel/style";
import { Select } from "./components/Select/Select";
import { FC } from "react";
import { SVGComponent } from "../../../../interfaces/SVGComponent";

const FilterPanel: FC<SVGComponent> = ({style}) => {
  const size = '2vw'

  type SelectData = {[label: string]: string[]}

  function getSelectDataFields(): SelectData[] {
    return [
      {'category': ['all category', 'animals', 'architecture', 'abstract', 'vechicles', 'characters', 'snaks', 'nature', 'sport', 'military']},
      {'format': ['.obj', '.fbx', '.3ds', '.ma', '.c4d', '.blend', '.stl']},
      {'poly count': ['any', 'up to 10k', '10k to 50k', '50k 50 100k', '100k to 250k']},
      {'license': ['cc by', 'cc by-sa', 'cc by nd', 'cc by-nc', 'cco', 'standart', 'editorial']},
      {'rating': ['5 stars', '4 stars', '3 stars', '2 stars', '1 stars']},
      {'date': ['all time', 'this mounth', 'this week', 'this day', '1 stars']},
      {'view': ['models', 'users']},
      {'sort by': ['most recent', 'most liked', 'most viewed', 'most recent']},
    ]
  }

  const getSelectComponent = (obj: []) => {
    for (const [key, val] of Object.entries(obj)) {
      return <Select style={{height: size}} label={key} items={val as string[]}/>
    }
  }

  return ( 
      <div 
        className={styles.container()} 
        style={{...style, transition: '.2s ease-out'}}>

       <div className={styles.group()}>
        {getSelectDataFields().map((obj: any) => getSelectComponent(obj))}
       </div>

        <div className={styles.group()}>
          <BtnReset style={{height: size}}/>
        </div>   
      </div>
   );
}
 
export default FilterPanel;