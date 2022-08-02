import { useState } from 'react'

function Main () {
  // State for the challenge #3
  const [open, setOpen] = useState(false)

  const initialForm = {
    review: '',
    email: '',
    username: '',
    consistency: 0,
    colour: 0,
    logo: 0,
    bestFeatures: [],
    worstFeatures: [],
    timeSpent: []
  }

  return (
    <main className='main'>
      <section className={`main__list ${open ? 'open' : ''}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
      </section>
      <section className='main__form'>
        <form
          className='form'
          onSubmit={event => {
            event.preventDefault()

            // let bestFeatures = []
            // let checkboxes = document.querySelectorAll(
            //   'input[name="features"]:checked'
            // )
            // for (let checkbox of checkboxes) {
            //   bestFeatures.push(checkbox.value)
            // }

            const bestFeatures = [
              ...document.querySelectorAll('input[name="features"]:checked')
            ].map(input => input.value)


            console.log(Number(event.target.consistency.value))
          }}
        >
          <h2>Tell us what you think about your rubber duck!</h2>

          <h3>What would you say are the best features of your rubber duck?</h3>
          <ul className='checkbox-list'>
            <li>
              <label>
                <input type='checkbox' name='features' value='color' />
                <span>It's yellow!</span>
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='features' value='sound' />
                <span>It squeaks!</span>
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='features' value='logo' />
                <span>It has a logo!</span>
              </label>
            </li>
            <li>
              <label>
                <input type='checkbox' name='features' value='size' />
                <span>It's big!</span>
              </label>
            </li>
          </ul>

          <h3>
            What would you say are the worst features of your rubber duck?
          </h3>

          <h3>How do you rate your rubber duck consistency?</h3>
          <ul className='form__group radio'>
            <li>
              <input
                id='consistency-1'
                type='radio'
                name='consistency'
                value='1'
              />
              <label htmlFor='consistency-1'>1</label>
            </li>
            <li>
              <input
                id='consistency-2'
                type='radio'
                name='consistency'
                value='2'
              />
              <label htmlFor='consistency-2'>2</label>
            </li>
            <li>
              <input
                id='consistency-3'
                type='radio'
                name='consistency'
                value='3'
              />
              <label htmlFor='consistency-3'>3</label>
            </li>
            <li>
              <input
                id='consistency-4'
                type='radio'
                name='consistency'
                value='4'
              />
              <label htmlFor='consistency-4'>4</label>
            </li>
          </ul>

          <h3>How do you rate your rubber duck colour?</h3>

          <h3>How do you rate your rubber duck logo?</h3>

          <h3>How do you like to spend time with your rubber duck?</h3>

          <button className='form__submit'>Submit survey!</button>
        </form>
      </section>
    </main>
  )
}

export default Main
