import React from 'react'
import './index.css'

const HistoryItem = props => {
  const {historyItem, deleteItem} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = historyItem

  const handleDelete = () => {
    deleteItem(id)
  }

  return (
    <li>
      <div className="list-item">
        <p className="list-item-p">{timeAccessed}</p>
        <img src={logoUrl} alt="domain logo" />
        <p className="list-item-p">{title}</p>
        <p className="list-item-p">{domainUrl}</p>
      </div>
      <div>
        <button
          type="button"
          className="button"
          onClick={handleDelete}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/delete-img.png"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default HistoryItem
