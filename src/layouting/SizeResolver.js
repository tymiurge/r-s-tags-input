import React from 'react'
import PropTypes from 'prop-types'

/**
 * When component wrapped by the SizeRsolver didMount - SizeResolver exposes 
 * the wrapped component bounding client rect with onSizeResolving property
 * 
 * Theoretically it's possible to do it with HOC, but i got some troubles in 
 * rendering complex hierarchy with HOC. 
 * Just for the sake of memory, HOC code is:
 * import React from 'react'
 * import PropTypes from 'prop-types'
 *
 * const withSizeResolver = Component => {
 *   return class extends React.Component {
 *
 *       static propTypes = {
 *          onSizeResolving: PropTypes.func.isRequired
 *       }
 *
 *       componentDidMount() {
 *           this.setState(
 *               {...this.state, heightResolved: true},
 *               () => {
 *                   const bound = this.container.getBoundingClientRect()
 *                   this.props.onSizeResolving(bound)
 *               }
 *           )
 *       }
 *
 *       render() {
 *           return (
 *               <div ref={container => this.container = container}>
 *                   <Component {...this.props} />
 *               </div>
 *           )
 *       }
 *   }
 * }
 *
 * export default withSizeResolver
 * 
 * 
 */
class SizeResolver extends React.Component {

    static propTypes = {
        onSizeResolving: PropTypes.func.isRequired
    }

    componentDidMount() {
        this.setState(
            {...this.state, heightResolved: true},
            () => {
                const bound = this.container.getBoundingClientRect()
                this.props.onSizeResolving(bound)
            }
        )
    }

    render() {
        return (
            <div ref={container => this.container = container}>
                { this.props.children }
            </div>
        )
    }
}

export default SizeResolver
