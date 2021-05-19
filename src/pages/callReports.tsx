import React from 'react';

import TemplatePage from '../components/templatePage';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Select, Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Calendar from 'react-calendar';

import '../styles/pages/callReports.css';


interface props {
  ReactTable?: keyof JSX.IntrinsicElements;
}

// interface state {

// }

export default class callReports extends React.Component<props /*, state */> {
  tableColumns: { Header: string; accessor: string; style: { alignSelf: string; textAlign: string; }; minWidth: number; }[];


  constructor(props: props) {
    super(props);
    this.tableColumns = [
      {
        Header: 'Linha',
        accessor: 'lineNumber',
        style: { alignSelf: 'center', textAlign: 'center' },
        minWidth: 100
      },
    ];
  }

  render(): JSX.Element {

    return (
      <TemplatePage
        nameButton={'Criar Chamada'}
        acitiveButton={true}
        acitiveUser={true}
      >
        <div className='callReports'>
          <div className='callSelection'>
            <Select placeholder="Selecione..." borderColor="#00ADB5" size="lg" >
              <option value="">Chamada 1</option>
              <option value="" selected>Chamada 2</option>
              <option value="">Chamada 3</option>
            </Select>
            <Calendar className='calendar' />
          </div>
          <div className='actions'>
            <div className='buttonPosition'>
              <div className='exportButton'>
                <Button colorScheme="teal" size="lg">Exportar Chamada</Button>
              </div>
              <div className='tabs'>
                <Tabs variant="enclosed">
                  <TabList>
                    <Tab>Relatório</Tab>
                    <Tab>Membros</Tab>
                  </TabList>
                </Tabs>
              </div>
            </div>
          </div>
          <div className='table'>
            <div className='bard' >
              <Table variant="striped" colorScheme="teal" >
                <Thead>
                  <Tr>
                    <Th>Nome do aluno </Th>
                    <Th>E-mail</Th>
                    <Th>Palavra-Chave</Th>
                    <Th>Check</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>juca</Td>
                    <Td>juca@gmail.com</Td>
                    <Td>teste</Td>
                    <Td>V</Td>
                  </Tr>
                  <Tr>
                    <Td>juca</Td>
                    <Td>juca@gmail.com</Td>
                    <Td>teste</Td>
                    <Td>V</Td>
                  </Tr>
                  <Tr>
                    <Td>juca</Td>
                    <Td>juca@gmail.com</Td>
                    <Td>teste</Td>
                    <Td>V</Td>
                  </Tr>
                  <Tr>
                    <Td>juca</Td>
                    <Td>juca@gmail.com</Td>
                    <Td>teste</Td>
                    <Td>V</Td>
                  </Tr>
                </Tbody>
              </Table>
            </div>

          </div>
        </div>
      </TemplatePage>
    )
  }
}

