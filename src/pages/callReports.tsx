import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators, Dispatch } from 'redux';

import { Repository } from '../config/store/ducks/repositories/types';
import { ApplicationState } from '../config/store';

import * as RepositoriesActions from '../config//store/ducks/repositories/actions';

import TemplatePage from '../components/templatePage';
import { Table, Thead, Tbody, Tr, Th, Td, Button, Select, Tabs, TabList, Tab } from "@chakra-ui/react";
import Calendar from 'react-calendar';

import '../styles/pages/callReports.css';


interface StateProps {
  repositories: Repository[]
}

interface DispatchProps {
  loadRequest(): void
}
interface OwnProps {
  ReactTable?: keyof JSX.IntrinsicElements;
}

type Props = StateProps & DispatchProps & OwnProps

class callReports extends Component<Props /*, state */> {

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

const mapStateToProps = (state: ApplicationState) => ({
  repositories: state.repositories.data,
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators(RepositoriesActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(callReports);
