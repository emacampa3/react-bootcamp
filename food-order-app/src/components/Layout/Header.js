import {Fragment} from 'react'

import HeaderCartButton from './HeaderCartButton'
import headerImage from '../../assets/photo.jpg'
import classes from './Header.module.css'

const Header = props => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes['main-image']}>
        <img src={headerImage} alt='Food'/>
      </div>
    </Fragment>
  )
}

export default Header
