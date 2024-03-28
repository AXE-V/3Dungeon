import { Styles } from "./style";

export const ModelWindow = ({children}: any) => {

  return ( 
    <div data-container className={Styles.modelWindow()}>
      <div data-scrollbar-container>
        <div data-scrollbar></div>
      </div>
      <div data-content>
        {children}
      </div>
    </div>
   );
}