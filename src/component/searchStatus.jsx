import React from 'react'
import PropTypes from 'prop-types'

const SearchStatus = ({ numberUsers }) => {
  const lastNumber = Number(numberUsers.toString().slice(-1))

  let people = 'человек'
  let hangsOut = 'тусанет'
  if (
    (lastNumber > 1 && lastNumber < 5 && numberUsers < 10) ||
    (lastNumber > 1 && lastNumber < 5 && numberUsers > 20)
  ) {
    people = 'человека'
    hangsOut = 'тусанут'
  }

  const startStateFrase = `Сегодня с тобой ${hangsOut} ${numberUsers} ${people}`

  const badgeColor = numberUsers === 0 ? 'badge m-2 bg-danger' : 'badge m-2 bg-primary'

  return (
    <h2>
      <span className={ badgeColor }>
        { numberUsers === 0 ? `Никто с тобой не тусанет сегодня` : startStateFrase }
      </span>
    </h2>
  )
}
SearchStatus.propTypes = {
  numberUsers: PropTypes.number
}
export default SearchStatus
