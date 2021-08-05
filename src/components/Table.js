import React from 'react'

import {API_POST_PRODUCTS} from "../api/config"

import './Table.css'


function Table({title = 'Без названия', goods = []}) {

  const sendData = () => {
    const formDate = new FormData()
    for (const good of goods) {
      formDate.append(`product[${good.gid}]`, Number(good.gquantity_reserved))
    }
    fetch(API_POST_PRODUCTS, {
      method: 'POST',
      body: formDate
    })
      .then(res => res.json())
      .then(data => alert(JSON.stringify(data, null, 2)))
      .catch(e => alert(e))
  }

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
              <td className="td">{Number(good.gquantity_reserved)}</td>
              <td className="td">
                {Number(good.gquantity_reserved) !== 0
                  && good.gprice * good.gquantity_reserved}
              </td>
            </tr>
          )
        }
      </tbody>
      <tfoot className="tfoot">
        <tr>
          <td colSpan="5" className="td">
            Общая сумма:
            {
              ' ' + goods.reduce((sum, good) => {
                      return sum + good.gprice * good.gquantity_reserved
                    }, 0)
            },
            общее кол-во:
            {
              ' ' + goods.reduce((count, good) => {
                      return count + Number(good.gquantity_reserved)
                    }, 0)
            }
            <span>
              <img
                onClick={sendData} src="cart.svg"
                alt="cart" className="cart"
              />
            </span>
          </td>
        </tr>
      </tfoot>
    </table>
  )
}

export default Table