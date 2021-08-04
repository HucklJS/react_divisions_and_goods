import React from 'react'

import './Table.css'


function Table({title = 'Без названия', goods = []}) {

  return (
    <table className="table">
      <thead>
      <tr>
        <th colSpan="5" className="th">{title}</th>
      </tr>
      <tr>
        <th className="th">id</th>
        <th className="th">Название товара</th>
        <th className="th">Цена</th>
        <th className="th">Количество</th>
        <th className="th">Сумма</th>
      </tr>
      </thead>
      <tbody>
        {
          goods.map(good =>
            <tr key={good.gid}>
              <td className="td">{good.gid}</td>
              <td className="td">{good.gname}</td>
              <td className="td">{good.gprice}</td>
              <td className="td">{good.gquantity_reserved}</td>
              <td className="td">
                {Number(good.gquantity_reserved) != 0 && good.gprice * good.gquantity_reserved}
              </td>
            </tr>
          )
        }
      </tbody>
    </table>
  )
}

export default Table