import * as React from 'react';
import styles from './CustomWebPart.module.scss';
import { ICustomWebPartProps } from './ICustomWebPartProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class CustomWebPart extends React.Component<ICustomWebPartProps, {}> {
  public render(): React.ReactElement<ICustomWebPartProps> {
    return (
      <div className={ styles.customWebPart }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Bem vindo ao componente de Checklist de Listas e Campos da Class Solutions!</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
