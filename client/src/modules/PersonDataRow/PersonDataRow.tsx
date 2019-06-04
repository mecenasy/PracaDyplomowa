import React, { FC } from 'react';
import { DataRow, TitleRow, TitleData } from './parts';

interface PersonDataRowProps {
  title: string;
  data: string;
}

const PersonDataRow: FC<PersonDataRowProps> = ({
  data,
  title,
}) => (
    <DataRow>
      <TitleRow>{title}</TitleRow>
      <TitleData>{data}</TitleData>
    </DataRow>
  );

export default PersonDataRow;
