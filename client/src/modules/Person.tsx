import React from 'react';
import { Content, BoxWithShadow } from './parts';
import { MapStateToProps, connect } from 'react-redux';
import { ApplicationState } from '../store/constants';
import { getPersonSelector } from '../store/Person/selectors';
import PersonDataRow from './PersonDataRow/PersonDataRow';
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
  personId: string;
}

interface PersonAction {
  getPerson: () => void;
}

type PersonProps = PersonOwnProps & PersonAction & PersonStateProps;

class Person extends React.Component<PersonProps> {
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

export default connect(mapStateToProps)(Person);
