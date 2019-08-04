import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneLink,
} from '@microsoft/sp-property-pane';

import * as strings from 'CustomWebPartWebPartStrings';
import CustomWebPart from './components/CustomWebPart';
import { ICustomWebPartProps } from './components/ICustomWebPartProps';

export interface ICustomWebPartWebPartProps {
  description: string;
  dropdown: string;
}

export default class CustomWebPartWebPart extends BaseClientSideWebPart<ICustomWebPartWebPartProps> {

  public render(): void {
    const element: React.ReactElement<ICustomWebPartProps > = React.createElement(
      CustomWebPart,
      {
        description: this.properties.description,
        dropdown: this.properties.dropdown
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: 'Cheklist de Lista'
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: 'Configurações Avançadas',
              isCollapsed: false,
              groupFields: []
            },
            {
              groupName: 'Permissões da Lista',
              isCollapsed: true,
              groupFields: []
            }            
          ]
        },
        {
          header: {
            description: 'Checklist de Campos'
          },
          displayGroupsAsAccordion: true,
          groups: [
            {
              groupName: 'Campos à Serem Avaliados',
              isCollapsed: false,
              groupFields: []
            },
            {
              groupName: 'Indexação',
              isCollapsed: true,
              groupFields: []
            },
            {
              groupName: 'Ordem dos Campos',
              isCollapsed: true,
              groupFields: []
            }
          ]
        },
        {
          header: {
            description: 'Referências'
          },
          groups: [
            {
              groupName: '',
              groupFields: [                
                PropertyPaneLink('URL', {
                  text: 'Acesse a referência para o checklist de listas e campos clicando aqui',
                  href: 'https://classsolutions.sharepoint.com/:x:/s/NovoProjetos/Class/Processos/EcbLiEXL1xpAt3znoYiwAwYBB9FBEHWHWBc9qmTYuISKig?e=QmsP2K',
                  target: '_blank'
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
