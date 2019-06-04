import React from 'react';
import {  Content } from './parts';
import { MapStateToProps, MapDispatchToProps, connect } from 'react-redux';
import { ApplicationState } from '../store/constants';
import { getPersonRequest } from '../store/Person/actions';
import { getPersonSelector } from '../store/Person/selectors';
import PersonDataRow from './PersonDataRow/PersonDataRow';
import BoxWithShadow from './BoxWithShadow/BoxWithShadow';
import Photo from './Photo/Photo';

export interface PersonStateProps {
  album: string;
  direction: string;
  department: string;
  specialty: string;
  year: string;
  semester: string;
  group: string;
  photo: string;
}

interface PersonOwnProps {
  personId?: string;
}

interface PersonAction {
  getPerson: () => void;
}

type PersonProps = PersonOwnProps & PersonAction & PersonStateProps;

class Person extends React.Component<PersonProps> {
  public componentDidMount() {
    this.props.getPerson();
  }

  public render() {
    return (
        <BoxWithShadow>
          <Photo src={this.props.photo} />
          <Content>
            <PersonDataRow title={'Album:'} data={this.props.album} />
            <PersonDataRow title={'Kierunek:'} data={this.props.direction} />
            <PersonDataRow title={'Wydział:'} data={this.props.department} />
            <PersonDataRow title={'Specjalność:'} data={this.props.specialty} />
            <PersonDataRow title={'Rok:'} data={this.props.year} />
            <PersonDataRow title={'Semestr:'} data={this.props.semester} />
            <PersonDataRow title={'Grupa:'} data={this.props.group} />
          </Content>
        </BoxWithShadow>
    );
  }
}

const mapStateToProps: MapStateToProps<PersonStateProps, {}, ApplicationState> =
  (state) => (getPersonSelector(state));

const mapDispatchToProps: MapDispatchToProps<PersonAction, PersonOwnProps> = (dispatch, { personId }) => ({
  getPerson: () => {
    dispatch(getPersonRequest('5cf3ccfdf1a9ad4b104e08d2'));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Person);
