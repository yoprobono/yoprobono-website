import React from 'react'
import { Link } from 'gatsby'

class Container extends React.Component {
  componentDidMount() {
    import('react-linkedin-sdk').then(Component => {
      this.Component = Component
      this.forceUpdate()
    })
  }

  render() {
    const { children } = this.props
    if (this.Component) {
      return (
        <div
          style={{
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'center',
            flexDirection: 'column',
            maxWidth: 750,
            padding: `.5rem 1rem`,
          }}
        >
          <header
            style={{
              marginTop: '1rem',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Link
              to="/"
              style={{ textShadow: `none`, backgroundImage: `none` }}
            >
              <h2
                style={{ borderBottom: 0, display: `inline`, color: '#A74646' }}
              >
                Yo Pro Bono. ¿Y tú?
              </h2>
            </Link>
            {/*<ul style={{ listStyle: `none`, float: `right` }}>*/}
            {/*<li style={{ display: `inline-block`, marginRight: `1rem` }}>*/}
            {/**/}
            {/**/}
            {/*</li>*/}
            {/*/!* <ListLink to="/">Home</ListLink>*/}
            {/*<ListLink to="/about/">About</ListLink>*/}
            {/*<ListLink to="/contact/">Contact</ListLink> *!/*/}
            {/*</ul>*/}
          </header>
          {children}
        </div>
      )
    } else {
      return null
    }
  }
}

export default Container
