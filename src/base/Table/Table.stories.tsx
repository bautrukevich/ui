/* Vendor */
import * as React from 'react';
import {storiesOf} from '@storybook/react'

/* Component */
import {Table} from './Table'

/* Types */

/* Utils */
const headers = ['Номер', 'ФИО', 'Телефон', 'Статус', 'СМС', 'Добавлена', 'Обновлена'];

const rows = [
  ['VV272317439BY', 'Barney Greenway', '+375297777777', 'Неизвестен', '···', '19 мая 2019, 16:42', '19 мая 2019, 16:42'],
  ['VV272317439BY', 'Jeff Walker', '+375297777777', 'Принята', '···', '19 мая 2019, 16:42', '19 мая 2019, 16:42'],
  ['VV272317439BY', 'Dean Jones', '+375297777777', 'В пути', '···', '19 мая 2019, 16:42', '19 мая 2019, 16:42'],
  ['VV272317439BY', 'Jon Chang', '+375297777777', 'На почте', '···', '19 мая 2019, 16:42', '19 мая 2019, 16:42'],
  ['VV272317439BY', 'Jon Chang', '+375297777777', 'Доставлена', '···', '19 мая 2019, 16:42', '19 мая 2019, 16:42'],
  ['VV272317439BY', 'Jon Chang', '+375297777777', 'Возврат', '···', '19 мая 2019, 16:42', '19 мая 2019, 16:42'],
];

/* Styles */

/* Stories */
storiesOf('Table', module)
  .add('default', () => (
    <Table
      rows={rows}
      headers={headers}
      rowHeaders={headers}
      caption="Список посылок" />
  ))
  .add('sortable', () => (
    <Table
      rows={rows}
      headers={headers}
      rowHeaders={headers}
      caption="Список посылок" sortable />
  ))
