const GamePace = ({ name, selectedItem, onChange }) => {
  const isChecked = name === selectedItem

  return (
    <>
      <div className='gamePace'>
        <label htmlFor={name}>
          <input
            type='radio'
            id={name}
            name={name}
            value={name}
            checked={isChecked}
            onChange={onChange}
          />
          {name}
          <span className='customDot'></span>
        </label>
      </div>
    </>
  )
}

export default GamePace
